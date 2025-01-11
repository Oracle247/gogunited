"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Environmental Activist",
    content:
      "GO Green United has transformed how our community approaches sustainability. Their programs are innovative and impactful.",
    image: "/placeholder.svg",
  },
  {
    name: "Michael Chen",
    role: "Community Leader",
    content:
      "The dedication and passion of GO Green United's team is inspiring. They've helped us create lasting change.",
    image: "/placeholder.svg",
  },
  {
    name: "Emma Williams",
    role: "Volunteer",
    content:
      "Being part of GO Green United has been an incredible journey. Together, we're making a real difference.",
    image: "/placeholder.svg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          What People Say About Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="text-center">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
