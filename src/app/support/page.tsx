"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Users, Mail, MessageSquare } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            Support GO Green United
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-8 rounded-lg"
            >
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Make a Donation</h3>
              <p className="text-gray-600 mb-6">
                Your generous donation helps us continue our mission of creating
                a sustainable future through community action.
              </p>
              <Button size="lg">
                Donate Now
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
              <h3 className="text-2xl font-semibold mb-4">Volunteer With Us</h3>
              <p className="text-gray-600 mb-6">
                Join our community of dedicated volunteers and make a direct
                impact on environmental conservation.
              </p>
              <Button variant="secondary" size="lg">
                Join Our Team
                <Users className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-semibold mb-8 text-center">
                Contact Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Email Us</h4>
                    <p className="text-gray-600">contact@gogreenunited.org</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MessageSquare className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Live Chat</h4>
                    <p className="text-gray-600">Available Mon-Fri, 9am-5pm</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Support;
