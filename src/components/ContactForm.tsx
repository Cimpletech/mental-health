import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contact" className="section bg-primary text-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-secondary font-semibold mb-2">Get In Touch</h4>
            <h2 className="text-4xl font-serif mb-6 text-white">We're Here to Listen and Help</h2>
            <p className="text-secondary/80 mb-10">
              Ready to take the first step? Fill out the form or reach out directly. Our team will get back to you within 24 hours.
            </p>

            <div className="grid gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-secondary/60 uppercase tracking-wider">Call Us</p>
                  <p className="text-lg font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-secondary/60 uppercase tracking-wider">Email Us</p>
                  <p className="text-lg font-medium">hello@serenitymind.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-secondary/60 uppercase tracking-wider">Visit Us</p>
                  <p className="text-lg font-medium">123 Healing Way, Calm City, CA</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl text-text shadow-2xl"
          >
            <form className="grid gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <label className="text-sm font-semibold">First Name</label>
                  <input type="text" placeholder="John" className="p-4 rounded-xl bg-secondary/30 border-none outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-semibold">Last Name</label>
                  <input type="text" placeholder="Doe" className="p-4 rounded-xl bg-secondary/30 border-none outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-semibold">Email Address</label>
                <input type="email" placeholder="john@example.com" className="p-4 rounded-xl bg-secondary/30 border-none outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-semibold">How Can We Help?</label>
                <textarea rows={4} placeholder="Tell us a little bit about your needs..." className="p-4 rounded-xl bg-secondary/30 border-none outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full flex items-center justify-center gap-2 py-4">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
