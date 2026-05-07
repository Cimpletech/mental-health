import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="/therapist.png" alt="Our Lead Therapist" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl shadow-lg max-w-[200px]">
              <p className="text-primary font-bold text-lg">15+ Years</p>
              <p className="text-sm text-text-light">of Professional Experience in Clinical Psychology</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-primary font-semibold mb-2">About Our Clinic</h4>
            <h2 className="text-4xl font-serif mb-6">A Sanctuary for Your Mind and Soul</h2>
            <p className="text-text-light mb-8">
              At Serenity Mind, we believe that mental health is as vital as physical health. Our clinic was founded on the principles of empathy, evidence-based practice, and a holistic approach to well-being.
            </p>
            
            <div className="grid gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Heart className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-1">Compassionate Care</h3>
                  <p className="text-sm text-text-light">Every individual is heard, valued, and treated with the utmost respect.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Shield className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-1">Safe Environment</h3>
                  <p className="text-sm text-text-light">A confidential and secure space where you can express yourself freely.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-1">Expert Team</h3>
                  <p className="text-sm text-text-light">Certified professionals dedicated to your mental health journey.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
