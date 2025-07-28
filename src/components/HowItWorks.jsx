
import React from "react";
import { motion } from "framer-motion";
import { Search, ShoppingCart, Truck } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-8 w-8" />,
    title: "Browse Products",
    description: "Explore a wide variety of fresh produce directly from local farmers."
  },
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: "Place Your Order",
    description: "Select your items, customize your order, and proceed to checkout."
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Get Fresh Delivery",
    description: "Receive farm-fresh products delivered straight to your doorstep."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Smart Market connects you directly with local farmers in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-green-50 rounded-lg p-8 h-full border border-green-100 relative z-10">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
