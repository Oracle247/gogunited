"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Heart, Users } from "lucide-react";

const Support = () => {
  return (
    <section id="support" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Support Our Mission
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 p-8 rounded-lg"
          >
            <Heart className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Donate Now</h3>
            <p className="text-gray-600 mb-6">
              Your donation helps us continue our environmental initiatives and
              create lasting change in communities.
            </p>
            <Button size="lg">
              Make a Donation
              <Heart className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/5 p-8 rounded-lg"
          >
            <Users className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Become a Volunteer</h3>
            <p className="text-gray-600 mb-6">
              Join our community of dedicated volunteers and help make a
              difference in environmental conservation.
            </p>
            <Button variant="secondary" size="lg">
              Join Us
              <Users className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Support;
