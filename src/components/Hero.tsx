import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.png" 
          alt="Calming Clinic Environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-semibold tracking-widest uppercase mb-4"
          >
            Welcome to Serenity Mind Clinic
          </motion.h4>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-text mb-6 leading-tight"
          >
            Your Journey to <span className="text-primary italic">Mental Well-being</span> Starts Here
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-text-light mb-10 max-w-lg"
          >
            Experience compassionate, professional care tailored to your unique journey. We provide a safe space for healing, growth, and lasting transformation.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="btn btn-primary text-center">Start Your Healing</a>
            <a href="#services" className="btn btn-outline text-center">Our Services</a>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
};

export default Hero;
