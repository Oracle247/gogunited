"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How can I get involved with GO Green United?",
    answer:
      "You can get involved by volunteering for our programs, making a donation, or participating in our community events. Visit our volunteer page to learn more about current opportunities.",
  },
  {
    question: "What programs do you currently offer?",
    answer:
      "We offer various environmental programs including community gardens, education outreach, and green technology initiatives. Each program is designed to create sustainable impact in our communities.",
  },
  {
    question: "How are donations used?",
    answer:
      "Your donations directly support our environmental initiatives, community programs, and operational costs. We ensure transparent use of funds with regular updates to our supporters.",
  },
  {
    question: "Do you offer educational programs for schools?",
    answer:
      "Yes, we provide environmental education programs tailored for schools. These include workshops, hands-on activities, and resources for teachers to integrate environmental awareness into their curriculum.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
