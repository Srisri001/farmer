
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart(product);
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${product.id}`}>
        <Card className="overflow-hidden h-full flex flex-col">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            {product.isOrganic && (
              <Badge variant="success" className="absolute top-2 right-2">
                Organic
              </Badge>
            )}
          </div>
          
          <CardContent className="pt-4 flex-grow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <span className="font-bold text-primary">${product.price.toFixed(2)}</span>
            </div>
            
            <div className="flex items-center mb-2">
              <Badge variant="outline" className="mr-2 text-xs">
                {product.category}
              </Badge>
              <span className="text-sm text-gray-500">
                {product.unit}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 line-clamp-2 mb-2">{product.description}</p>
            
            <div className="flex items-center text-sm text-gray-500">
              <span>By </span>
              <Link 
                to={`/farmer/${product.farmerId}`}
                className="ml-1 text-primary hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                {product.farmerName}
              </Link>
            </div>
          </CardContent>
          
          <CardFooter className="border-t pt-4">
            <div className="w-full flex justify-between">
              <Button 
                variant="outline" 
                size="sm"
                className="flex-1 mr-2"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 mr-1" />
                Add to Cart
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="h-9 w-9"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
