import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Coffee, Sun, Wind, CloudRain, Star } from 'lucide-react';

const services = [
  {
    title: 'Individual Therapy',
    description: 'Personalized sessions focusing on your unique challenges and personal growth.',
    icon: Brain,
    color: '#e8f3e8'
  },
  {
    title: 'Anxiety Management',
    description: 'Practical tools and therapeutic techniques to navigate and reduce anxiety.',
    icon: Wind,
    color: '#f0f7ff'
  },
  {
    title: 'Depression Support',
    description: 'Empathetic guidance to help you find light and meaning in difficult times.',
    icon: CloudRain,
    color: '#fef2f2'
  },
  {
    title: 'Mindfulness Coaching',
    description: 'Learn to stay present and cultivate peace through guided mindfulness.',
    icon: Sun,
    color: '#fffbeb'
  },
  {
    title: 'Stress Relief',
    description: 'Techniques to manage daily stress and improve your overall quality of life.',
    icon: Coffee,
    color: '#f5f3ff'
  },
  {
    title: 'Couples Counseling',
    description: 'Enhance communication and strengthen your relationship in a safe space.',
    icon: Star,
    color: '#ecfdf5'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-primary font-semibold mb-2">Our Expertise</h4>
          <h2 className="text-4xl font-serif mb-4">Specialized Support for Your Needs</h2>
          <p className="text-text-light">
            We offer a wide range of therapeutic services designed to address various mental health concerns and promote overall wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ translateY: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/10"
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: service.color }}
              >
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-serif mb-3">{service.title}</h3>
              <p className="text-text-light text-sm leading-relaxed">
                {service.description}
              </p>
              <a href="#contact" className="inline-block mt-6 text-primary font-semibold text-sm hover:underline">
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
