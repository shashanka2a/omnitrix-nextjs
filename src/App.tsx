'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { 
  Bot, 
  Link, 
  Radio, 
  Brain, 
  FileText, 
  AlertTriangle, 
  Clock, 
  Shield, 
  ArrowRight
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { NetworkBackground } from './components/NetworkBackground';
// import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0.1 : 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E0E12] to-[#1A1A22] text-white overflow-x-hidden">
      <div className="relative">
        <NetworkBackground />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              {...fadeInUp}
              className="space-y-6 md:space-y-8"
            >
              <motion.h1 
                className="text-[clamp(3rem,8vw,6rem)] lg:text-[clamp(4rem,10vw,8rem)] tracking-tight leading-none bg-gradient-to-r from-white via-[#00E7FF] to-[#0099CC] bg-clip-text text-transparent"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 1, delay: shouldReduceMotion ? 0 : 0.2 }}
              >
                OmniTrix
              </motion.h1>
              
              <motion.h2 
                className="text-[clamp(1.25rem,4vw,2.5rem)] lg:text-[clamp(2rem,5vw,3.5rem)] text-gray-200 max-w-4xl mx-auto leading-tight px-4"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 0.4 }}
              >
                The On-Chain Brain of the Real World
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 0.6 }}
              >
                Where IoT meets intelligence to make supply chains self-driving
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 md:mt-12 px-4"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 0.8 }}
              >
                <motion.div whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg" 
                    className="bg-[#00E7FF] text-black hover:bg-[#00D1E7] hover:shadow-lg hover:shadow-[#00E7FF]/25 px-8 py-4 text-lg min-w-[200px] h-12 transition-all duration-300 group"
                  >
                    Request Demo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-[#00E7FF] text-[#00E7FF] hover:bg-[#00E7FF] hover:text-black hover:shadow-lg hover:shadow-[#00E7FF]/25 px-8 py-4 text-lg min-w-[200px] h-12 transition-all duration-300"
                  >
                    Explore Platform
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.p 
                className="text-sm md:text-base text-gray-400 mt-6 md:mt-8 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: shouldReduceMotion ? 0 : 1 }}
              >
                Autonomy for Everything Connected
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-16 md:py-24 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-[clamp(2rem,6vw,3.5rem)] mb-4 md:mb-6">The Problem</h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
                Traditional supply chains are broken, with critical gaps that cost billions
              </p>
            </motion.div>
            
            <motion.div 
              className="grid gap-6 md:gap-8 md:grid-cols-3"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                {
                  icon: <Clock className="w-10 h-10 md:w-12 md:h-12 text-[#00E7FF]" />,
                  title: "Slow Traceability",
                  description: "Manual tracking processes take weeks to trace products, making real-time decisions impossible."
                },
                {
                  icon: <AlertTriangle className="w-10 h-10 md:w-12 md:h-12 text-[#00E7FF]" />,
                  title: "Manual Compliance",
                  description: "Human-driven compliance checks are error-prone and can't keep up with regulatory demands."
                },
                {
                  icon: <Shield className="w-10 h-10 md:w-12 md:h-12 text-[#00E7FF]" />,
                  title: "Unreliable Data",
                  description: "Fragmented data sources and lack of verification lead to costly quality failures."
                }
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ 
                    y: shouldReduceMotion ? 0 : -8,
                    transition: { duration: 0.3 }
                  }}
                  className="group text-center p-6 md:p-8 bg-white/5 hover:bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="mb-4 md:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">{problem.icon}</div>
                  <h3 className="text-lg md:text-xl mb-3 md:mb-4">{problem.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{problem.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="py-16 md:py-24 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-[clamp(2rem,6vw,3.5rem)] mb-4 md:mb-6">The Solution</h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
                AI agents validate IoT data streams and commit verified insights to blockchain
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              {/* Mobile: Vertical Stack */}
              <div className="flex flex-col md:hidden items-center gap-8 py-8">
                {[
                  { icon: Radio, title: "IoT Data Streams" },
                  { icon: Bot, title: "AI Validation" },
                  { icon: Link, title: "Blockchain Verification" }
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <motion.div 
                      className="w-20 h-20 bg-[#00E7FF]/20 rounded-full flex items-center justify-center mb-4 hover:bg-[#00E7FF]/30 transition-colors duration-300"
                      whileHover={{ scale: shouldReduceMotion ? 1 : 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <step.icon className="w-10 h-10 text-[#00E7FF]" />
                    </motion.div>
                    <h3 className="text-lg text-center">{step.title}</h3>
                    {index < 2 && (
                      <motion.div
                        animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        className="text-[#00E7FF] text-2xl mt-4"
                      >
                        ↓
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop: Horizontal Flow */}
              <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12 py-12">
                <motion.div 
                  className="flex flex-col items-center group cursor-pointer"
                  whileHover={{ y: shouldReduceMotion ? 0 : -4 }}
                >
                  <div className="w-24 h-24 bg-[#00E7FF]/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#00E7FF]/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#00E7FF]/25">
                    <Radio className="w-12 h-12 text-[#00E7FF] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl">IoT Data Streams</h3>
                </motion.div>
                
                <div className="flex items-center">
                  <motion.div
                    animate={shouldReduceMotion ? {} : { x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[#00E7FF] text-4xl"
                  >
                    →
                  </motion.div>
                </div>
                
                <motion.div 
                  className="flex flex-col items-center group cursor-pointer"
                  whileHover={{ y: shouldReduceMotion ? 0 : -4 }}
                >
                  <div className="w-24 h-24 bg-[#00E7FF]/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#00E7FF]/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#00E7FF]/25">
                    <Bot className="w-12 h-12 text-[#00E7FF] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl">AI Validation</h3>
                </motion.div>
                
                <div className="flex items-center">
                  <motion.div
                    animate={shouldReduceMotion ? {} : { x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="text-[#00E7FF] text-4xl"
                  >
                    →
                  </motion.div>
                </div>
                
                <motion.div 
                  className="flex flex-col items-center group cursor-pointer"
                  whileHover={{ y: shouldReduceMotion ? 0 : -4 }}
                >
                  <div className="w-24 h-24 bg-[#00E7FF]/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#00E7FF]/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#00E7FF]/25">
                    <Link className="w-12 h-12 text-[#00E7FF] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl">Blockchain Verification</h3>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="py-16 md:py-24 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-[clamp(2rem,6vw,3.5rem)] mb-4 md:mb-6">Core Features</h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
                Comprehensive tools for autonomous supply chain intelligence
              </p>
            </motion.div>
            
            <motion.div 
              className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                {
                  icon: <Bot className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Autonomous Agents",
                  description: "AI agents continuously monitor and validate supply chain data without human intervention."
                },
                {
                  icon: <Link className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "On-Chain Verification",
                  description: "Immutable blockchain records ensure data integrity and enable trust-free auditing."
                },
                {
                  icon: <Radio className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "IoT Data Streams",
                  description: "Real-time sensor integration from temperature, location, and quality monitoring devices."
                },
                {
                  icon: <Brain className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Predictive Quality Control",
                  description: "Machine learning models predict quality issues before they impact your supply chain."
                },
                {
                  icon: <FileText className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Auto Compliance Reports",
                  description: "Automated generation of regulatory compliance documentation and audit trails."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ 
                    y: shouldReduceMotion ? 0 : -6,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group h-full"
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#00E7FF]/30 transition-all duration-300 h-full group-hover:shadow-lg group-hover:shadow-[#00E7FF]/10">
                    <CardContent className="p-5 md:p-6 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-[#00E7FF] group-hover:scale-110 transition-transform duration-200">{feature.icon}</div>
                      </div>
                      <h3 className="text-lg md:text-xl mb-3 text-white font-bold">{feature.title}</h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>



        {/* Vision Quote */}
        <section className="py-16 md:py-24 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E7FF]/20 via-[#00E7FF]/10 to-transparent rounded-3xl blur-3xl" />
              <motion.div 
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-3xl p-8 md:p-12 transition-all duration-500 group"
                whileHover={{ 
                  y: shouldReduceMotion ? 0 : -4,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="text-4xl md:text-6xl text-[#00E7FF] mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300">&ldquo;</div>
                <blockquote className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-6 md:mb-8 px-4">
                  Every sensor, shipment, and smart contract — connected by OmniTrix.
                </blockquote>
                <div className="text-gray-300 text-sm md:text-base">
                  The future of autonomous supply chains
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-12 md:py-16 px-4 relative border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6 md:space-y-8"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl px-4">Ready to Transform Your Supply Chain?</h2>
              <p className="text-lg md:text-xl text-gray-300 px-4">
                Join the autonomous revolution with OmniTrix
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                <motion.div whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg" 
                    className="bg-[#00E7FF] text-black hover:bg-[#00D1E7] hover:shadow-lg hover:shadow-[#00E7FF]/25 px-8 py-4 text-lg min-w-[180px] h-12 transition-all duration-300"
                  >
                    Get Started Today
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg" 
                    variant="ghost" 
                    className="text-gray-300 hover:text-white hover:bg-white/10 px-8 py-4 text-lg min-w-[180px] h-12 transition-all duration-300"
                  >
                    Contact Sales
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            >
              {/* Company Info */}
              <div className="space-y-4">
                <h3 className="text-xl text-white font-bold bg-gradient-to-r from-white to-[#00E7FF] bg-clip-text text-transparent">
                  OmniTrix
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Autonomous on-chain intelligence platform connecting AI agents, IoT, and blockchain technology.
                </p>
                <p className="text-[#00E7FF] text-sm font-medium">
                  Autonomy for Everything Connected
                </p>
              </div>

              {/* Product */}
              <div className="space-y-4">
                <h4 className="text-white font-bold">Product</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    'Platform Overview',
                    'AI Agents',
                    'IoT Integration',
                    'Blockchain Verification',
                    'API Documentation',
                    'SDKs'
                  ].map((item, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-[#00E7FF] transition-colors duration-200 block py-1"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="space-y-4">
                <h4 className="text-white font-bold">Solutions</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    'Supply Chain',
                    'Manufacturing',
                    'Logistics',
                    'Quality Control',
                    'Compliance',
                    'Traceability'
                  ].map((item, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-[#00E7FF] transition-colors duration-200 block py-1"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h4 className="text-white font-bold">Company</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    'About Us',
                    'Careers',
                    'News',
                    'Contact',
                    'Support',
                    'Privacy Policy'
                  ].map((item, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-[#00E7FF] transition-colors duration-200 block py-1"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Footer Bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <p className="text-gray-400 text-sm">
                © 2024 OmniTrix. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-[#00E7FF] transition-colors duration-200 text-sm"
                >
                  Terms of Service
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-[#00E7FF] transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-[#00E7FF] transition-colors duration-200 text-sm"
                >
                  Cookie Policy
                </a>
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  );
}