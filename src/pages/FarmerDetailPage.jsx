
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  Award, 
  ChevronLeft,
  Calendar,
  Truck
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { mockFarmers, mockProducts } from "@/data/mockData";

const FarmerDetailPage = () => {
  const { id } = useParams();
  const [farmer, setFarmer] = useState(null);
  const [farmerProducts, setFarmerProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("about");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call to get the farmer details
    // For now, we'll use mock data
    const fetchFarmer = () => {
      setLoading(true);
      
      // Find the farmer in our mock data
      const foundFarmer = mockFarmers.find(f => f.id === id);
      
      if (foundFarmer) {
        setFarmer(foundFarmer);
        
        // Find products from this farmer
        const products = mockProducts.filter(p => p.farmerId === id);
        setFarmerProducts(products);
      }
      
      setLoading(false);
    };
    
    fetchFarmer();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!farmer) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
            <h2 className="text-2xl font-bold mb-4">Farmer Not Found</h2>
            <p className="text-gray-600 mb-6">The farmer you're looking for doesn't exist or has been removed.</p>
            <Link to="/farmers">
              <Button>Back to Farmers</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/farmers" className="flex items-center text-sm text-gray-600 hover:text-primary">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Farmers
          </Link>
        </div>

        {/* Farmer Profile Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="h-48 bg-gradient-to-r from-green-50 to-green-100 relative">
            <img 
              src={farmer.farmImage} 
              alt={`${farmer.name}'s farm`}
              className="w-full h-full object-cover"
            />
            {farmer.verified && (
              <Badge variant="success" className="absolute top-4 right-4">
                <Award className="h-3 w-3 mr-1" />
                Verified Farmer
              </Badge>
            )}
          </div>
          
          <div className="p-6 relative">
            <div className="absolute -top-16 left-6 border-4 border-white rounded-full">
              <Avatar className="h-24 w-24">
                <AvatarImage src={farmer.avatar} alt={farmer.name} />
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {farmer.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
            
            <div className="pt-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{farmer.name}</h1>
                  
                  <div className="flex items-center mt-2">
                    <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-gray-600">{farmer.location}</span>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
                  <Button>
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button variant="outline">
                    Follow
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {farmer.specialties.map((specialty, index) => (
                  <Badge key={index} variant="outline">
                    {specialty}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center mt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < farmer.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {farmer.rating.toFixed(1)} ({farmer.reviewCount} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Farmer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Address</p>
                      <p className="text-sm text-gray-600">{farmer.address || farmer.location}</p>
                    </div>
                  </div><div className="flex items-start">
                    <Phone className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-gray-600">{farmer.phone || "+1 (555) 123-4567"}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-gray-600">{farmer.email || `${farmer.name.toLowerCase().replace(/\s/g, '')}@example.com`}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Farm Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Established</p>
                      <p className="text-sm text-gray-600">{farmer.established || "2010"}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Truck className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Delivery Options</p>
                      <p className="text-sm text-gray-600">{farmer.deliveryOptions || "Local delivery, Farm pickup"}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="font-semibold text-lg mb-4">Certifications</h3>
                
                <div className="space-y-2">
                  {(farmer.certifications || ["Organic Certified", "Sustainable Farming"]).map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <Award className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab}>
                  <div className="px-6 pt-6">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="about">About</TabsTrigger>
                      <TabsTrigger value="products">Products</TabsTrigger>
                      <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <div className="p-6">
                    <TabsContent value="about" className="mt-0 space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-3">About {farmer.name}</h3>
                        <p className="text-gray-700">{farmer.bio}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Our Farming Practices</h3>
                        <p className="text-gray-700">
                          {farmer.farmingPractices || 
                            `At our farm, we believe in sustainable and ethical farming practices. 
                            We use natural methods to grow our produce, minimizing the use of chemicals 
                            and focusing on soil health and biodiversity. Our animals are raised in humane 
                            conditions with access to open pastures and natural feed.`}
                        </p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Farm History</h3>
                        <p className="text-gray-700">
                          {farmer.history || 
                            `Our farm has been in the family for generations, starting as a small 
                            homestead and growing into the thriving farm it is today. We've maintained 
                            our commitment to quality and sustainability throughout our history, adapting 
                            to modern practices while honoring traditional farming wisdom.`}
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="products" className="mt-0">
                      {farmerProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {farmerProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <h3 className="font-semibold mb-2">No Products Available</h3>
                          <p className="text-gray-600">This farmer doesn't have any products listed at the moment.</p>
                        </div>
                      )}
                    </TabsContent>
                    
                    <TabsContent value="reviews" className="mt-0">
                      <div className="text-center py-8">
                        <h3 className="font-semibold mb-2">No Reviews Yet</h3>
                        <p className="text-gray-600 mb-4">Be the first to review this farmer</p>
                        <Button>Write a Review</Button>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDetailPage;
