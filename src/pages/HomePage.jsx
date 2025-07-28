
import React, { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturedFarmers from "@/components/FeaturedFarmers";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { mockProducts, mockFarmers } from "@/data/mockData";

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [featuredFarmers, setFeaturedFarmers] = useState([]);

  useEffect(() => {
    // In a real app, this would be an API call to get featured products and farmers
    // For now, we'll use mock data
    setFeaturedProducts(mockProducts.slice(0, 4));
    setFeaturedFarmers(mockFarmers.slice(0, 3));
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <FeaturedProducts products={featuredProducts} />
      
      <HowItWorks />
      
      <FeaturedFarmers farmers={featuredFarmers} />
      
      <Testimonials />
      
      {/* Call to Action Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to experience farm-fresh goodness?</h2>
            <p className="text-primary-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join Smart Market today and start enjoying direct access to the freshest local produce while supporting farmers in your community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/marketplace">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Start Shopping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                  Create Account
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
