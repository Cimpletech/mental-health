import React from 'react';
import { Leaf, Mail, Phone, MessageCircle, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bg py-20 border-t border-secondary">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-primary" size={28} />
              <span className="text-xl font-bold font-serif text-primary">Serenity Mind</span>
            </div>
            <p className="text-text-light text-sm mb-6">
              Dedicated to providing professional and compassionate mental health support for individuals and couples.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Mail size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Phone size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><MessageCircle size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Globe size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="grid gap-3 text-sm text-text-light">
              <li><a href="#home" className="hover:text-primary transition-all">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-all">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-all">Services</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-all">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="grid gap-3 text-sm text-text-light">
              <li><a href="#" className="hover:text-primary transition-all">Individual Therapy</a></li>
              <li><a href="#" className="hover:text-primary transition-all">Couples Counseling</a></li>
              <li><a href="#" className="hover:text-primary transition-all">Anxiety Management</a></li>
              <li><a href="#" className="hover:text-primary transition-all">Mindfulness</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-text-light mb-4">Subscribe to get mental health tips and clinic updates.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="p-3 rounded-lg bg-secondary/50 border-none outline-none text-sm w-full" />
              <button className="bg-primary text-white px-4 rounded-lg hover:bg-primary-light transition-all">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-light">
          <p>© 2026 Serenity Mind Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-all">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
