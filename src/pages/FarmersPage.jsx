
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FarmerCard from "@/components/FarmerCard";
import SearchBar from "@/components/SearchBar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockFarmers } from "@/data/mockData";

const specialties = [
  { id: "all", name: "All Specialties" },
  { id: "vegetables", name: "Vegetables" },
  { id: "fruits", name: "Fruits" },
  { id: "dairy", name: "Dairy" },
  { id: "organic", name: "Organic" },
  { id: "meat", name: "Meat" }
];

const FarmersPage = () => {
  const [farmers, setFarmers] = useState([]);
  const [filteredFarmers, setFilteredFarmers] = useState([]);
  const [activeSpecialty, setActiveSpecialty] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // In a real app, this would be an API call to get farmers
    // For now, we'll use mock data
    setFarmers(mockFarmers);
    setFilteredFarmers(mockFarmers);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [activeSpecialty, searchQuery, farmers]);

  const applyFilters = () => {
    let filtered = [...farmers];

    // Apply specialty filter
    if (activeSpecialty !== "all") {
      filtered = filtered.filter(farmer => 
        farmer.specialties.some(specialty => 
          specialty.toLowerCase() === activeSpecialty.toLowerCase()
        )
      );
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(farmer => 
        farmer.name.toLowerCase().includes(query) ||
        farmer.bio.toLowerCase().includes(query) ||
        farmer.location.toLowerCase().includes(query) ||
        farmer.specialties.some(specialty => 
          specialty.toLowerCase().includes(query)
        )
      );
    }

    setFilteredFarmers(filtered);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSpecialtyChange = (specialty) => {
    setActiveSpecialty(specialty);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Farmers</h1>
          <p className="text-gray-600">Meet the passionate people behind your fresh food</p>
        </div>

        <div className="mb-6">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
          <Tabs defaultValue={activeSpecialty} onValueChange={handleSpecialtyChange} className="w-full">
            <TabsList className="h-12 p-1 bg-muted/50 w-full flex justify-start overflow-x-auto">
              {specialties.map((specialty) => (
                <TabsTrigger
                  key={specialty.id}
                  value={specialty.id}
                  className="relative h-10 px-4 data-[state=active]:bg-white"
                >
                  {specialty.name}
                  {activeSpecialty === specialty.id && (
                    <motion.div
                      layoutId="activeSpecialty"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Results count */}
        <div className="mb-4">
          <p className="text-sm text-gray-500">
            Showing {filteredFarmers.length} farmers
          </p>
        </div>

        {/* Farmers grid */}
        {filteredFarmers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFarmers.map((farmer, index) => (
              <motion.div
                key={farmer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <FarmerCard farmer={farmer} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
            <h3 className="text-lg font-semibold mb-2">No farmers found</h3>
            <p className="text-gray-600">
              Try adjusting your filters or search criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmersPage;
