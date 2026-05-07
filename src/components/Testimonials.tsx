import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Working with the team at Serenity Mind has been a life-changing experience. I finally feel understood and equipped with the tools I need.",
    author: "Sarah Johnson",
    role: "Individual Therapy Client"
  },
  {
    text: "The atmosphere is so calming and professional. It's truly a safe haven for anyone looking to improve their mental well-being.",
    author: "Michael Chen",
    role: "Anxiety Management Client"
  },
  {
    text: "I was hesitant about therapy, but the compassionate approach here made me feel at ease from day one. Highly recommended.",
    author: "Emma Williams",
    role: "Mindfulness Coaching Client"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h4 className="text-primary font-semibold mb-2">Testimonials</h4>
          <h2 className="text-4xl font-serif mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-secondary/20 p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 text-primary opacity-20" size={48} />
              <p className="text-text-light mb-8 italic relative z-10">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-bold text-text">{item.author}</h4>
                <p className="text-sm text-primary">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
