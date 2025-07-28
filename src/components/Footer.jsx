
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Smart Market</h3>
            <p className="text-sm text-gray-600">
              Connecting farmers directly with consumers for fresher produce and fairer prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-gray-600 hover:text-primary text-sm">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/farmers" className="text-gray-600 hover:text-primary text-sm">
                  Farmers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/marketplace?category=vegetables" className="text-gray-600 hover:text-primary text-sm">
                  Vegetables
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=fruits" className="text-gray-600 hover:text-primary text-sm">
                  Fruits
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=dairy" className="text-gray-600 hover:text-primary text-sm">
                  Dairy Products
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=grains" className="text-gray-600 hover:text-primary text-sm">
                  Grains & Cereals
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=organic" className="text-gray-600 hover:text-primary text-sm">
                  Organic Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">123 Farm Road, Agritown, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">info@smartmarket.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Smart Market. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
