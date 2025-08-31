"use client";

import { motion } from "framer-motion";
import { UserPlus, Users, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    id: 1,
    icon: UserPlus,
    title: "Sign Up Your Account",
    description:
      "Become a register user first, then log in to your account and enter your card or bank details that is required for you.",
  },
  {
    id: 2,
    icon: Users,
    title: "Select Your Recipient",
    description:
      "Enter your recipient's email address then add an amount with currency to send securely.",
  },
  {
    id: 3,
    icon: Send,
    title: "Send Money",
    description:
      "After sending money, the recipient will be notified via an email when money has been transferred to their account.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-4">
            The simple way to send money
          </h2>
          <p className="text-xl text-dark-blue/80 max-w-3xl mx-auto">
            Finasddee is the fastest way to send money to family, friends and
            businesses home and abroad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-3xl font-bold text-dark-blue">
                    {step.id}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-dark-blue mb-4">
                {step.title}
              </h3>

              <p className="text-dark-blue/80 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" asChild>
            <Link href="/signup">Sign up Now</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
