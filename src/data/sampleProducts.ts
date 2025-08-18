export interface Product {
  id: string;
  title: string;
  image: string;
  price?: string;
  originalPrice?: string;
  rating?: number;
  reviews?: number;
  deal?: string;
  affiliate_url: string;
  category: string;
  isFeatured?: boolean;
}

export const sampleProducts: Product[] = [
  // EXISTING FEATURED PRODUCTS
  {
    id: "1",
    title: "Apple AirPods Pro (2nd Generation) with Wireless Charging Case",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop&crop=center",
    price: "$179.99",
    originalPrice: "$249.99",
    rating: 4.8,
    reviews: 157842,
    deal: "SAVE BIG: $70 OFF",
    affiliate_url: "https://www.amazon.com/dp/B0BDHWDR12?tag=signupcodes-20",
    category: "tech-gadgets",
    isFeatured: true
  },
  {
    id: "2",
    title: "Samsung Galaxy Watch 6 Classic 47mm Bluetooth Smartwatch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    price: "$279.99",
    originalPrice: "$429.99",
    rating: 4.6,
    reviews: 23891,
    deal: "HUGE SAVE: 35% OFF",
    affiliate_url: "https://www.amazon.com/dp/B0C9KYV91Q?tag=signupcodes-20",
    category: "tech-gadgets",
    isFeatured: true
  },
  {
    id: "3",
    title: "Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&crop=center",
    price: "$328.00",
    originalPrice: "$399.99",
    rating: 4.7,
    reviews: 45672,
    deal: "BEST PRICE: $72 OFF",
    affiliate_url: "https://www.amazon.com/dp/B09XJ5B38Q?tag=signupcodes-20",
    category: "tech-gadgets",
    isFeatured: true
  },

  // NEW ELECTRONICS PRODUCTS
  {
    id: "4",
    title: "POWRUI Surge Protector with 12 Outlets and 4 USB Ports",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
    price: "$29.99",
    originalPrice: "$49.99",
    rating: 4.5,
    reviews: 87234,
    deal: "POWER DEAL: 40% OFF",
    affiliate_url: "https://www.amazon.com/dp/B0814DFQXW?tag=signupcodes-20",
    category: "tech-gadgets"
  },
  {
    id: "5",
    title: "Hanycony Surge Protector Tower 14 Outlets Power Strip",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
    price: "$34.99",
    originalPrice: "$59.99",
    rating: 4.6,
    reviews: 45678,
    deal: "TOWER POWER: 42% OFF",
    affiliate_url: "https://www.amazon.com/dp/B08R3HJDQK?tag=signupcodes-20",
    category: "tech-gadgets"
  },
  {
    id: "6",
    title: "Wireless Earbuds Bluetooth 5.3 Headphones with Charging Case",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&crop=center",
    price: "$19.99",
    originalPrice: "$39.99",
    rating: 4.3,
    reviews: 234567,
    deal: "AUDIO DEAL: 50% OFF",
    affiliate_url: "https://www.amazon.com/dp/B0C7QJF8F4?tag=signupcodes-20",
    category: "tech-gadgets",
    isFeatured: true
  },
  {
    id: "7",
    title: "Fire TV Stick 4K Max Streaming Device with Wi-Fi 6",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop&crop=center",
    price: "$34.99",
    originalPrice: "$54.99",
    rating: 4.6,
    reviews: 345678,
    deal: "STREAM DEAL: 36% OFF",
    affiliate_url: "https://www.amazon.com/dp/B08MQZXN1X?tag=signupcodes-20",
    category: "tech-gadgets"
  },
  {
    id: "8",
    title: "Apple AirTag 4 Pack - Bluetooth Item Finder",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=400&fit=crop&crop=center",
    price: "$79.99",
    originalPrice: "$99.00",
    rating: 4.7,
    reviews: 123456,
    deal: "FIND DEAL: $19 OFF",
    affiliate_url: "https://www.amazon.com/dp/B0935ZF4M1?tag=signupcodes-20",
    category: "tech-gadgets"
  },
  {
    id: "9",
    title: "TCL 55-Inch 4K Smart TV Google TV LED",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop&crop=center",
    price: "$299.99",
    originalPrice: "$449.99",
    rating: 4.4,
    reviews: 67890,
    deal: "BIG SCREEN: 33% OFF",
    affiliate_url: "https://www.amazon.com/dp/B0B7GVQN1Z?tag=signupcodes-20",
    category: "tech-gadgets",
    isFeatured: true
  },
  {
    id: "10",
    title: "USB Wall Charger 20W Fast Charging Block 4-Pack",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop&crop=center",
    price: "$15.99",
    originalPrice: "$29.99",
    rating: 4.5,
    reviews: 98765,
    deal: "CHARGE UP: 47% OFF",
    affiliate_url: "https://www.amazon.com/dp/B09X7JK3QR?tag=signupcodes-20",
    category: "tech-gadgets"
  },
  {
    id: "11",
    title: "Fitbit Inspire 3 Health & Fitness Tracker",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop&crop=center",
    price: "$79.95",
    originalPrice: "$99.95",
    rating: 4.2,
    reviews: 54321,
    deal: "FITNESS: $20 OFF",
    affiliate_url: "https://www.amazon.com/dp/B0B4M8YH8J?tag=signupcodes-20",
    category: "health-fitness"
  },

  // BEAUTY & PERSONAL CARE
  {
    id: "12",
    title: "Mighty Patch Original Acne Pimple Patches",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center",
    price: "$12.99",
    originalPrice: "$18.99",
    rating: 4.6,
    reviews: 189234,
    deal: "CLEAR SKIN: 32% OFF",
    affiliate_url: "https://www.amazon.com/dp/B074PVTPZ8?tag=signupcodes-20",
    category: "beauty-personal-care",
    isFeatured: true
  },
  {
    id: "13",
    title: "Rosemary Hair Growth Oil with Essential Oils",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    price: "$14.99",
    originalPrice: "$24.99",
    rating: 4.3,
    reviews: 76543,
    deal: "HAIR CARE: 40% OFF",
    affiliate_url: "https://www.amazon.com/dp/B0BG8K7M3P?tag=signupcodes-20",
    category: "beauty-personal-care"
  },
  {
    id: "14",
    title: "Magnetic False Eyelashes with Magnetic Eyeliner",
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618b?w=400&h=400&fit=crop&crop=center",
    price: "$19.99",
    originalPrice: "$35.99",
    rating: 4.1,
    reviews: 43210,
    deal: "LASH DEAL: 44% OFF",
    affiliate_url: "https://www.amazon.com/dp/B08KJVN2F1?tag=signupcodes-20",
    category: "beauty-personal-care"
  },
  {
    id: "15",
    title: "CeraVe Moisturizing Cream for Normal to Dry Skin",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center",
    price: "$16.08",
    originalPrice: "$23.99",
    rating: 4.7,
    reviews: 234567,
    deal: "SKINCARE: 33% OFF",
    affiliate_url: "https://www.amazon.com/dp/B00TTD9BRC?tag=signupcodes-20",
    category: "beauty-personal-care"
  },
  {
    id: "16",
    title: "Laneige Lip Sleeping Mask Berry 20g",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center",
    price: "$17.00",
    originalPrice: "$24.00",
    rating: 4.8,
    reviews: 87654,
    deal: "LIP CARE: 29% OFF",
    affiliate_url: "https://www.amazon.com/dp/B074H9G8MZ?tag=signupcodes-20",
    category: "beauty-personal-care"
  },

  // HOME & KITCHEN
  {
    id: "17",
    title: "Stanley Quencher H2.0 Flowstate Tumbler 40oz",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=400&fit=crop&crop=center",
    price: "$44.95",
    originalPrice: "$49.95",
    rating: 4.5,
    reviews: 156789,
    deal: "HYDRATE: $5 OFF",
    affiliate_url: "https://www.amazon.com/dp/B0C5QDHPXQ?tag=signupcodes-20",
    category: "home-kitchen",
    isFeatured: true
  },
  {
    id: "18",
    title: "Owala FreeSip Insulated Stainless Steel Water Bottle",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=400&fit=crop&crop=center",
    price: "$27.97",
    originalPrice: "$37.95",
    rating: 4.6,
    reviews: 98765,
    deal: "SIP DEAL: 26% OFF",
    affiliate_url: "https://www.amazon.com/dp/B09DLGZV5Z?tag=signupcodes-20",
    category: "home-kitchen"
  },
  {
    id: "19",
    title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker 6 Quart",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
    price: "$69.95",
    originalPrice: "$99.95",
    rating: 4.7,
    reviews: 567890,
    deal: "KITCHEN SAVE: 30% OFF",
    affiliate_url: "https://www.amazon.com/dp/B07GBZ4Q68?tag=signupcodes-20",
    category: "home-kitchen"
  },
  {
    id: "20",
    title: "Digital Kitchen Scale Food Weight Scale",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
    price: "$12.99",
    originalPrice: "$19.99",
    rating: 4.4,
    reviews: 67890,
    deal: "WEIGH IN: 35% OFF",
    affiliate_url: "https://www.amazon.com/dp/B01JTDG084?tag=signupcodes-20",
    category: "home-kitchen"
  },
  // NEW APPLIANCES & MORE CATEGORIES
  {
    id: "21",
    title: "Ninja Foodi Personal Blender for Shakes Smoothies",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center",
    price: "$39.99",
    originalPrice: "$79.99",
    rating: 4.4,
    reviews: 45612,
    deal: "BLEND DEAL: 50% OFF",
    affiliate_url: "https://www.amazon.com/dp/B091J4NJHF?tag=signupcodes-20",
    category: "home-kitchen"
  },
  {
    id: "22",
    title: "Meat Thermometer Digital Instant Read",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
    price: "$12.99",
    originalPrice: "$24.99",
    rating: 4.5,
    reviews: 34567,
    deal: "COOK PERFECT: 48% OFF",
    affiliate_url: "https://www.amazon.com/dp/B073WZQQ3F?tag=signupcodes-20",
    category: "home-kitchen"
  },
  {
    id: "23",
    title: "Countertop Ice Maker Machine - Makes Ice in 6 Minutes",
    image: "https://images.unsplash.com/photo-1569175635942-9a4c4c6ccb29?w=400&h=400&fit=crop&crop=center",
    price: "$89.99",
    originalPrice: "$149.99",
    rating: 4.3,
    reviews: 23456,
    deal: "ICE COLD: 40% OFF",
    affiliate_url: "https://www.amazon.com/dp/B0BVVBFQZQ?tag=signupcodes-20",
    category: "appliances"
  },
  {
    id: "24",
    title: "Portable Washing Machine 17.8lbs Twin Tub",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
    price: "$179.99",
    originalPrice: "$269.99",
    rating: 4.2,
    reviews: 12345,
    deal: "WASH ANYWHERE: 33% OFF",
    affiliate_url: "https://www.amazon.com/dp/B08B3ST1VV?tag=signupcodes-20",
    category: "appliances"
  },
  {
    id: "25",
    title: "Mini Fridge 3.2 Cu Ft Compact Refrigerator",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    price: "$129.99",
    originalPrice: "$199.99",
    rating: 4.4,
    reviews: 45678,
    deal: "COOL DEAL: 35% OFF",
    affiliate_url: "https://www.amazon.com/dp/B08J7STVN1?tag=signupcodes-20",
    category: "appliances"
  },
  {
    id: "26",
    title: "TERRO T300B Liquid Ant Killer 12 Bait Stations",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center",
    price: "$11.98",
    originalPrice: "$18.99",
    rating: 4.6,
    reviews: 189234,
    deal: "BUG BUSTER: 37% OFF",
    affiliate_url: "https://www.amazon.com/dp/B000HJBKMQ?tag=signupcodes-20",
    category: "garden-outdoor"
  },
  {
    id: "27",
    title: "WaterWipes Sensitive Baby Wipes 12 Packs",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center",
    price: "$47.99",
    originalPrice: "$59.99",
    rating: 4.7,
    reviews: 123456,
    deal: "BABY CARE: 20% OFF",
    affiliate_url: "https://www.amazon.com/dp/B01MFAHOQF?tag=signupcodes-20",
    category: "baby-care"
  },
  {
    id: "28",
    title: "Dr. Elsey's Ultra Premium Clumping Cat Litter",
    image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=400&fit=crop&crop=center",
    price: "$14.99",
    originalPrice: "$22.99",
    rating: 4.6,
    reviews: 98765,
    deal: "PET ESSENTIAL: 35% OFF",
    affiliate_url: "https://www.amazon.com/dp/B0009X29WK?tag=signupcodes-20",
    category: "pet-supplies"
  },
  {
    id: "29",
    title: "Ailun iPhone 15 Screen Protector 3 Pack",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&crop=center",
    price: "$7.99",
    originalPrice: "$15.99",
    rating: 4.4,
    reviews: 234567,
    deal: "PROTECT PHONE: 50% OFF",
    affiliate_url: "https://www.amazon.com/dp/B0C5XWJQFX?tag=signupcodes-20",
    category: "phone-accessories"
  },
  {
    id: "30",
    title: "Gaming Headset PS5 Xbox PC with 7.1 Surround Sound",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop&crop=center",
    price: "$29.99",
    originalPrice: "$59.99",
    rating: 4.3,
    reviews: 87654,
    deal: "GAME ON: 50% OFF",
    affiliate_url: "https://www.amazon.com/dp/B08C7BKQHH?tag=signupcodes-20",
    category: "gaming"
  },
  {
    id: "31",
    title: "Under Cabinet LED Lighting Kit 3 Panels",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop&crop=center",
    price: "$24.99",
    originalPrice: "$39.99",
    rating: 4.5,
    reviews: 43210,
    deal: "BRIGHT IDEA: 38% OFF",
    affiliate_url: "https://www.amazon.com/dp/B08XNXB7ZG?tag=signupcodes-20",
    category: "home-improvement"
  },
  {
    id: "32",
    title: "TEKFUN Writing Tablet 8.5 Inch LCD Doodle Board",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=400&fit=crop&crop=center",
    price: "$12.99",
    originalPrice: "$19.99",
    rating: 4.4,
    reviews: 56789,
    deal: "KIDS CREATE: 35% OFF",
    affiliate_url: "https://www.amazon.com/dp/B0721VJT8Q?tag=signupcodes-20",
    category: "toys-games"
  },
  {
    id: "33",
    title: "WEMATE Large Pencil Case with Compartments",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=400&fit=crop&crop=center",
    price: "$8.99",
    originalPrice: "$16.99",
    rating: 4.3,
    reviews: 12345,
    deal: "ORGANIZE: 47% OFF",
    affiliate_url: "https://www.amazon.com/dp/B088VQF4TQ?tag=signupcodes-20",
    category: "office-supplies"
  },
  {
    id: "34",
    title: "Reusable Ice Packs for Injuries 2 Pack",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center",
    price: "$14.99",
    originalPrice: "$24.99",
    rating: 4.6,
    reviews: 78901,
    deal: "PAIN RELIEF: 40% OFF",
    affiliate_url: "https://www.amazon.com/dp/B07Q2WNFR8?tag=signupcodes-20",
    category: "health-wellness"
  },
  {
    id: "35",
    title: "Sunveza 65W USB-C Charger Fast Charging",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop&crop=center",
    price: "$19.99",
    originalPrice: "$34.99",
    rating: 4.5,
    reviews: 45678,
    deal: "FAST CHARGE: 43% OFF",
    affiliate_url: "https://www.amazon.com/dp/B09K3GXZPX?tag=signupcodes-20",
    category: "tech-gadgets"
  }
];

export const featuredProducts = sampleProducts.filter(product => product.isFeatured);
export const latestDeals = sampleProducts.slice(0, 5);