
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Truck, Users } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Fresh From Farm <br />
              <span className="text-primary">Direct To You</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-lg"
            >
              Connect directly with local farmers for the freshest produce, fair prices, and sustainable food systems.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link to="/marketplace">
                <Button size="lg" className="rounded-full">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/farmers">
                <Button variant="outline" size="lg" className="rounded-full">
                  Meet Our Farmers
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">100% Fresh</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Fast Delivery</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Support Farmers</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img  alt="Fresh farm produce" className="w-full h-auto rounded-2xl" src="https://images.unsplash.com/photo-1538952749095-49b788a5078a" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-start">
                  <img  alt="Farmer avatar" className="w-12 h-12 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1670607951160-d7780f0f0478" />
                  <div className="ml-3">
                    <p className="text-sm font-medium">Sarah's Organic Farm</p>
                    <p className="text-xs text-gray-500">Providing fresh organic produce for over 15 years</p>
                    <div className="mt-1 flex">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Organic</span>
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full ml-1">Local</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 rounded-full w-24 h-24 flex items-center justify-center text-center p-2 shadow-lg transform rotate-12">
              <p className="font-bold text-sm">Direct from farmers!</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-green-200 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-yellow-200 rounded-full opacity-50 blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
