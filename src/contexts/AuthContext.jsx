
import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("smartMarketUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // For demo purposes, we'll use a mock login
      // In a real app, this would be an API call to authenticate
      
      if (email === "user@example.com" && password === "password") {
        const userData = {
          id: "user1",
          name: "John Doe",
          email: "user@example.com",
          role: "customer",
          avatar: null
        };
        
        setUser(userData);
        localStorage.setItem("smartMarketUser", JSON.stringify(userData));
        
        toast({
          title: "Login successful",
          description: "Welcome back to Smart Market!",
          variant: "default",
        });
        
        return { success: true };
      } else if (email === "farmer@example.com" && password === "password") {
        const userData = {
          id: "farmer1",
          name: "Sarah Johnson",
          email: "farmer@example.com",
          role: "farmer",
          avatar: null,
          farmName: "Green Valley Farm"
        };
        
        setUser(userData);
        localStorage.setItem("smartMarketUser", JSON.stringify(userData));
        
        toast({
          title: "Login successful",
          description: "Welcome back to Smart Market!",
          variant: "default",
        });
        
        return { success: true };
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
        
        return { success: false, error: "Invalid email or password" };
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: error.message || "An error occurred during login",
        variant: "destructive",
      });
      
      return { success: false, error: error.message };
    }
  };

  const register = async (userData) => {
    try {
      // For demo purposes, we'll use a mock registration
      // In a real app, this would be an API call to register the user
      
      const newUser = {
        id: `user${Date.now()}`,
        name: userData.name,
        email: userData.email,
        role: userData.role || "customer",
        avatar: null
      };
      
      setUser(newUser);
      localStorage.setItem("smartMarketUser", JSON.stringify(newUser));
      
      toast({
        title: "Registration successful",
        description: "Welcome to Smart Market!",
        variant: "default",
      });
      
      return { success: true };
    } catch (error) {
      toast({
        title: "Registration failed",
        description: error.message || "An error occurred during registration",
        variant: "destructive",
      });
      
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("smartMarketUser");
    
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
      variant: "default",
    });
  };

  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem("smartMarketUser", JSON.stringify(updatedUser));
    
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated",
      variant: "default",
    });
    
    return { success: true };
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: !!user,
    isFarmer: user?.role === "farmer",
    isCustomer: user?.role === "customer"
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
