"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Calendar, Mail, Trees, Heart, Globe } from "lucide-react";

const Volunteer = () => {
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
            Join Our Volunteer Program
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Programs</h3>
              <p className="text-gray-600">
                Join local initiatives and help make a difference in your
                community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">
                Choose from various volunteering opportunities that fit your
                schedule.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Mail className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Get Started</h3>
              <p className="text-gray-600">
                Sign up today and become part of our growing community of
                volunteers.
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="text-center">
                <Trees className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Tree Planting</h4>
                <p className="text-gray-600">
                  Join our monthly tree planting events
                </p>
              </div>
              <div className="text-center">
                <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">
                  Community Support
                </h4>
                <p className="text-gray-600">
                  Help organize local green initiatives
                </p>
              </div>
              <div className="text-center">
                <Globe className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Global Impact</h4>
                <p className="text-gray-600">
                  Be part of worldwide environmental change
                </p>
              </div>
            </motion.div>
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-8 rounded-lg text-center"
            >
              <h2 className="text-2xl font-semibold mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-gray-600 mb-6">
                Join our team of dedicated volunteers and help us create a
                sustainable future for generations to come.
              </p>
              <Button size="lg">
                Apply Now
                <Users className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Volunteer;
