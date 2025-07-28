
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Users, TrendingUp, ShieldCheck } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-yellow-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              About Smart Market
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Connecting farmers and consumers for a more sustainable food system
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Smart Market, we're on a mission to revolutionize the way food moves from farm to table. 
                We believe in creating a more equitable, sustainable, and transparent food system that benefits 
                both farmers and consumers.
              </p>
              <p className="text-gray-600 mb-6">
                By eliminating unnecessary middlemen, we ensure farmers receive fair compensation for their hard work 
                while providing consumers with access to the freshest, highest-quality produce at reasonable prices.
              </p>
              <Link to="/marketplace">
                <Button>
                  Explore Our Marketplace
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img  alt="Farmers at work in a field" src="https://images.unsplash.com/photo-1511846859610-ea7712ac1c3d" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-full w-24 h-24 flex items-center justify-center text-center p-2 shadow-lg transform rotate-12">
                <p className="font-bold text-sm text-white">Supporting local farmers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Smart Market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="h-8 w-8 text-primary" />,
                title: "Sustainability",
                description: "We promote environmentally responsible farming practices that protect our planet for future generations."
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Community",
                description: "We build meaningful connections between farmers and consumers, fostering a sense of community around food."
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-primary" />,
                title: "Empowerment",
                description: "We empower farmers with fair prices and consumers with knowledge about their food sources."
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                title: "Transparency",
                description: "We believe in complete transparency about how food is grown, processed, and distributed."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img  alt="Farmers market with fresh produce" src="https://images.unsplash.com/photo-1538952749095-49b788a5078a" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Smart Market began with a simple observation: the traditional food supply chain wasn't working well for either farmers or consumers. Farmers were receiving pennies on the dollar for their produce, while consumers were paying premium prices for food that had traveled thousands of miles and lost much of its nutritional value.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2020, we set out to create a platform that would connect local farmers directly with consumers in their communities. What started as a small pilot project with just a handful of farms has grown into a thriving marketplace supporting hundreds of farmers and serving thousands of customers.
              </p>
              <p className="text-gray-600">
                Today, we continue to expand our network while staying true to our founding mission of creating a more equitable and sustainable food system for all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Smart Market
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                bio: "Former farmer with a passion for sustainable agriculture and technology.",
                image: null
              },
              {
                name: "Michael Chen",
                role: "CTO",
                bio: "Tech innovator focused on creating seamless experiences for farmers and consumers.",
                image: null
              },
              {
                name: "Aisha Patel",
                role: "Head of Farmer Relations",
                bio: "Agricultural expert dedicated to supporting farmers in sustainable practices.",
                image: null
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="aspect-square bg-gray-100">
                  <img  alt={`${member.name}, ${member.role}`} src="https://images.unsplash.com/photo-1544212408-c711b7c19b92" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Join the Smart Market Community</h2>
            <p className="text-primary-foreground text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a farmer looking to reach more customers or a consumer seeking fresh, local produce, we'd love to welcome you to our community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Create an Account
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                  Browse Marketplace
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
