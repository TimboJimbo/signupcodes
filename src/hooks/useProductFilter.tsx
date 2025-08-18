import { useState, useMemo } from "react";
import { Product } from "@/data/sampleProducts";

interface FilterState {
  search: string;
  category: string;
  priceRange: string;
  quickFilter: string;
}

export const useProductFilter = (products: Product[]) => {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "",
    priceRange: "",
    quickFilter: ""
  });

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.deal?.toLowerCase().includes(searchTerm)
      );
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Price range filter
    if (filters.priceRange) {
      filtered = filtered.filter(product => {
        if (!product.price) return false;
        const price = parseFloat(product.price.replace('$', ''));
        
        switch (filters.priceRange) {
          case 'under-25':
            return price < 25;
          case '25-50':
            return price >= 25 && price <= 50;
          case '50-100':
            return price > 50 && price <= 100;
          case 'over-100':
            return price > 100;
          default:
            return true;
        }
      });
    }

    // Quick filters
    if (filters.quickFilter) {
      switch (filters.quickFilter) {
        case 'featured':
          filtered = filtered.filter(product => product.isFeatured);
          break;
        case 'under-25':
          filtered = filtered.filter(product => {
            if (!product.price) return false;
            const price = parseFloat(product.price.replace('$', ''));
            return price < 25;
          });
          break;
        case 'trending':
          // Sort by reviews (trending = most reviewed)
          filtered = filtered.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
          break;
        case 'new':
          // Last 5 products added (simple implementation)
          filtered = filtered.slice(-10);
          break;
      }
    }

    return filtered;
  }, [products, filters]);

  const updateSearch = (search: string) => {
    setFilters(prev => ({ ...prev, search }));
  };

  const updateCategory = (category: string) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const updatePriceRange = (priceRange: string) => {
    setFilters(prev => ({ ...prev, priceRange }));
  };

  const updateQuickFilter = (quickFilter: string) => {
    setFilters(prev => ({ ...prev, quickFilter }));
  };

  const clearFilters = () => {
    setFilters({ search: "", category: "", priceRange: "", quickFilter: "" });
  };

  return {
    filteredProducts,
    filters,
    updateSearch,
    updateCategory,
    updatePriceRange,
    updateQuickFilter,
    clearFilters
  };
};