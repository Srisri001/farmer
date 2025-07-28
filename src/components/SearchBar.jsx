
import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="relative">
        <AnimatePresence>
          <motion.div
            className={`flex items-center w-full rounded-lg border ${
              isFocused ? "border-primary ring-2 ring-primary/20" : "border-input"
            } bg-background transition-all duration-200`}
            animate={{ scale: isFocused ? 1.01 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex-grow flex items-center">
              <Search className="h-5 w-5 text-muted-foreground ml-3" />
              <Input
                type="text"
                placeholder="Search for products, farmers, or categories..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="flex-grow border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <AnimatePresence>
              {query && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="mr-1"
                >
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={clearSearch}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            <Button
              type="submit"
              className="rounded-l-none h-10"
            >
              Search
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </form>
  );
};

export default SearchBar;
