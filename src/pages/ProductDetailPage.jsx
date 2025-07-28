
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  ShoppingCart, 
  Heart, 
  Truck, 
  Leaf, 
  Award, 
  Star, 
  ChevronLeft,
  Plus,
  Minus
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";
import { mockProducts, mockFarmers } from "@/data/mockData";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [farmer, setFarmer] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [loading, setLoading] = useState(true);
  
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, this would be an API call to get the product details
    // For now, we'll use mock data
    const fetchProduct = () => {
      setLoading(true);
      
      // Find the product in our mock data
      const foundProduct = mockProducts.find(p => p.id === id);
      
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Find the farmer
        const foundFarmer = mockFarmers.find(f => f.id === foundProduct.farmerId);
        setFarmer(foundFarmer);
        
        // Find related products (same category)
        const related = mockProducts
          .filter(p => p.category === foundProduct.category && p.id !== id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
      
      setLoading(false);
    };
    
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      
      toast({
        title: "Added to cart",
        description: `${quantity} x ${product.name} has been added to your cart.`,
        duration: 3000,
      });
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/marketplace">
              <Button>Back to Marketplace</Button>
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
          <Link to="/marketplace" className="flex items-center text-sm text-gray-600 hover:text-primary">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Marketplace
          </Link>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {product.isOrganic && (
                <Badge variant="success" className="absolute top-4 right-4">
                  <Leaf className="h-3 w-3 mr-1" />
                  Organic
                </Badge>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                
                <div className="flex items-center mt-2">
                  <Badge variant="outline" className="mr-2">
                    {product.category}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    {product.unit}
                  </span>
                </div>
                
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm">
                      Free delivery on orders over $50
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Leaf className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm">
                      Harvested {product.harvestedDate || "recently"} - Fresh from the farm
                    </span>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                {/* Farmer Info */}
                {farmer && (
                  <div className="flex items-center mb-6">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={farmer.avatar} alt={farmer.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {farmer.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium">From </span>
                        <Link 
                          to={`/farmer/${farmer.id}`}
                          className="text-sm font-medium text-primary hover:underline ml-1"
                        >
                          {farmer.name}
                        </Link>
                        {farmer.verified && (
                          <Badge variant="success" className="ml-2 h-5">
                            <Award className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${i < farmer.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-xs text-gray-500">
                          ({farmer.reviewCount} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Quantity Selector */}
                <div className="flex items-center mb-6">
                  <span className="text-sm font-medium mr-4">Quantity:</span>
                  <div className="flex items-center border rounded-md">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="h-10 w-10 rounded-r-none"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <div className="w-12 text-center">
                      <span className="text-sm font-medium">{quantity}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={incrementQuantity}
                      className="h-10 w-10 rounded-l-none"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="lg" 
                    className="flex-1"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1"
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    Save for Later
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Tabs */}
          <div className="border-t">
            <Tabs defaultValue="description" value={activeTab} onValueChange={setActiveTab}>
              <div className="px-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
              </div>
              
              <div className="p-6">
                <TabsContent value="description" className="mt-0">
                  <div className="prose max-w-none">
                    <p className="text-gray-700">{product.description}</p>
                    <p className="text-gray-700 mt-4">
                      This product is grown with care by {farmer?.name} at their farm in {farmer?.location}. 
                      {product.isOrganic && " It is certified organic and grown without the use of synthetic pesticides or fertilizers."}
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="details" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">Product Details</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span className="text-gray-500">Category</span>
                          <span>{product.category}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-500">Unit</span>
                          <span>{product.unit}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-500">Organic</span>
                          <span>{product.isOrganic ? "Yes" : "No"}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-500">Harvested</span>
                          <span>{product.harvestedDate || "Recently"}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Storage Information</h3>
                      <p className="text-sm text-gray-700">
                        For optimal freshness, store in a cool, dry place. Refrigerate after opening.
                        Consume within {product.shelfLife || "a few days"} of delivery for best quality.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="mt-0">
                  <div className="text-center py-8">
                    <h3 className="font-semibold mb-2">No Reviews Yet</h3>
                    <p className="text-gray-600 mb-4">Be the first to review this product</p>
                    <Button>Write a Review</Button>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link to={`/product/${relatedProduct.id}`} className="block h-full">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
                      <div className="aspect-square relative">
                        <img 
                          src={relatedProduct.image} 
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover"
                        />
                        {relatedProduct.isOrganic && (
                          <Badge variant="success" className="absolute top-2 right-2 text-xs">
                            Organic
                          </Badge>
                        )}
                      </div>
                      
                      <div className="p-4 flex-grow">
                        <h3 className="font-semibold">{relatedProduct.name}</h3>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-gray-500">{relatedProduct.unit}</span>
                          <span className="font-bold text-primary">${relatedProduct.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
