"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, Users, Heart, ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Community Gardens",
    description:
      "Creating sustainable food sources through community-managed gardens.",
    icon: Globe,
  },
  {
    title: "Education Outreach",
    description:
      "Environmental education programs for schools and communities.",
    icon: Users,
  },
  {
    title: "Green Technology",
    description: "Promoting and implementing sustainable technology solutions.",
    icon: Heart,
  },
];

const Programs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <program.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <Button
                variant="link"
                className="text-primary hover:text-primary-dark"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
