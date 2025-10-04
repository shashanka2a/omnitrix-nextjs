'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function NetworkBackground() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const animate = useCallback(() => {
    if (shouldReduceMotion) return;
    
    setNodes(prevNodes =>
      prevNodes.map(node => {
        let newX = node.x + node.vx;
        let newY = node.y + node.vy;
        let newVx = node.vx;
        let newVy = node.vy;

        if (newX <= 0 || newX >= 100) newVx = -newVx;
        if (newY <= 0 || newY >= 100) newVy = -newVy;

        newX = Math.max(0, Math.min(100, newX));
        newY = Math.max(0, Math.min(100, newY));

        return { ...node, x: newX, y: newY, vx: newVx, vy: newVy };
      })
    );
  }, [shouldReduceMotion]);

  useEffect(() => {
    // Reduce node count on mobile for better performance
    const nodeCount = isMobile ? 12 : 20;
    const speed = isMobile ? 0.015 : 0.02;
    
    const initialNodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
    }));
    setNodes(initialNodes);

    if (shouldReduceMotion) return;

    // Use requestAnimationFrame for better performance on mobile
    let animationId: number;
    let lastTime = 0;
    
    const animateFrame = (currentTime: number) => {
      if (currentTime - lastTime >= (isMobile ? 32 : 16)) { // 30fps on mobile, 60fps on desktop
        animate();
        lastTime = currentTime;
      }
      animationId = requestAnimationFrame(animateFrame);
    };
    
    animationId = requestAnimationFrame(animateFrame);
    return () => cancelAnimationFrame(animationId);
  }, [animate, shouldReduceMotion, isMobile]);

  const getConnectedNodes = useCallback((node: Node, allNodes: Node[]) => {
    const maxDistance = isMobile ? 20 : 25; // Shorter connections on mobile
    return allNodes.filter(otherNode => {
      if (otherNode.id === node.id) return false;
      const distance = Math.sqrt(
        Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
      );
      return distance < maxDistance;
    });
  }, [isMobile]);

  // Don't render if user prefers reduced motion
  if (shouldReduceMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="w-full h-full">
          {/* Static nodes only */}
          {nodes.map(node => (
            <circle
              key={node.id}
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="2"
              fill="#00E7FF"
              opacity="0.4"
            />
          ))}
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden opacity-25 md:opacity-30">
      <svg className="w-full h-full">
        {/* Render connections */}
        {nodes.map(node => {
          const connections = getConnectedNodes(node, nodes);
          return connections.map(connectedNode => (
            <motion.line
              key={`${node.id}-${connectedNode.id}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${connectedNode.x}%`}
              y2={`${connectedNode.y}%`}
              stroke="#00E7FF"
              strokeWidth={isMobile ? "0.8" : "1"}
              initial={{ opacity: 0 }}
              animate={{ opacity: isMobile ? 0.4 : 0.6 }}
              transition={{ duration: 0.5 }}
            />
          ));
        })}
        
        {/* Render nodes */}
        {nodes.map(node => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={isMobile ? "1.5" : "2"}
            fill="#00E7FF"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: node.id * 0.05 }}
          >
            {!isMobile && (
              <>
                <animate
                  attributeName="r"
                  values="2;4;2"
                  dur="3s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </>
            )}
          </motion.circle>
        ))}
      </svg>
    </div>
  );
}