"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
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
            About GO Green United
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                GO Green United was founded with a simple yet powerful vision:
                to create a sustainable future through community action. Since
                our inception, we&#39; ve been dedicated to environmental
                conservation and community engagement.
              </p>
              <p className="text-gray-600">
                Our organization brings together passionate individuals,
                communities, and resources to make a lasting impact on our
                environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Sustainability:</span>
                  <span className="text-gray-600">
                    Promoting environmentally conscious practices in everything
                    we do.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Community:</span>
                  <span className="text-gray-600">
                    Building strong, engaged communities through collaborative
                    action.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Education:</span>
                  <span className="text-gray-600">
                    Empowering people with knowledge about environmental
                    conservation.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
