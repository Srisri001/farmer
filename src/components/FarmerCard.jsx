
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Award } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const FarmerCard = ({ farmer }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/farmer/${farmer.id}`}>
        <Card className="overflow-hidden h-full flex flex-col">
          <div className="relative h-40 overflow-hidden bg-gradient-to-r from-green-50 to-green-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={farmer.farmImage} 
                alt={`${farmer.name}'s farm`}
                className="w-full h-full object-cover"
              />
            </div>
            {farmer.verified && (
              <Badge variant="success" className="absolute top-2 right-2">
                <Award className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            )}
          </div>
          
          <CardContent className="pt-4 flex-grow relative">
            <div className="absolute -top-8 left-4 border-4 border-white rounded-full">
              <Avatar className="h-16 w-16">
                <AvatarImage src={farmer.avatar} alt={farmer.name} />
                <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                  {farmer.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold text-lg">{farmer.name}</h3>
              
              <div className="flex items-center mt-1 text-sm text-gray-500">
                <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                <span>{farmer.location}</span>
              </div>
              
              <div className="flex items-center mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < farmer.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">
                  ({farmer.reviewCount} reviews)
                </span>
              </div>
              
              <div className="mt-3 flex flex-wrap gap-1">
                {farmer.specialties.map((specialty, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
              
              <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                {farmer.bio}
              </p>
            </div>
          </CardContent>
          
          <CardFooter className="border-t pt-4">
            <Button className="w-full">View Profile</Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default FarmerCard;
