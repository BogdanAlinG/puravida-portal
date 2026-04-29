export interface HutModel {
  slug: string;
  name: string;
  accent: string;
  description: string;
  fullDescription: string;
  priceFrom: string;
  specs: {
    area: string;
    weight: string;
    length: string;
    width: string;
    height: string;
    insulation: string;
    heating: string;
  };
  features: string[];
  images: string[];
}

export const huts: HutModel[] = [
  {
    slug: "phoenix-xxl",
    name: "Phoenix XXL",
    accent: "The Flagship Luxury",
    description: "The ultimate expression of luxury and space in a mobile format.",
    fullDescription: "Introducing the largest Pura Vida Huts model so far, the Phoenix XXL tiny house. Minimalistic, modern, accessible and easy to be customized. It comes fully furnished and equipped turn key, boiler of at least 25 liters, memory foam mattress, with ample storage space under the bed, kitchen and underfloor heating with thermostat and WIFI control.",
    priceFrom: "€58,000",
    specs: {
      area: "24m² + Lofts",
      weight: "3.5t",
      length: "7.5m - 7.8m",
      width: "2.55m",
      height: "4.0m",
      insulation: "10cm Rock Wool + Isolair",
      heating: "WiFi Underfloor Heating + Electric Fireplace",
    },
    features: [
      "Dual Sleeping Lofts",
      "Full Gourmet Kitchen",
      "Memory Foam Mattress",
      "WiFi Controlled Heating",
      "Legal Guarantee of 2 Years",
      "Double Glazing Stained Glass"
    ],
    images: [
      "https://puravidahuts.com/wp-content/uploads/2022/10/20220826_1734181-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2022/10/20220826_140551-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2022/10/20220826_154941-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2022/10/20220826_155044-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2022/10/20220827_150847-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2022/10/20220827_150910-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2022/10/20220830_165828-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2022/10/20220830_171326-scaled.jpg"
    ]
  },
  {
    slug: "mirror-house",
    name: "Mirror House",
    accent: "Invisible Luxury",
    description: "A spectacular presence that hides itself in nature.",
    fullDescription: "What a spectacular presence. It hides itself in nature providing a once in a lifetime experience for your Airbnb business or your holiday getaway. Available in very limited quantities.",
    priceFrom: "Contact Us",
    specs: {
      area: "25.6m²",
      weight: "4.2t (Modular)",
      length: "8.0m",
      width: "3.2m",
      height: "3.5m",
      insulation: "High Performance Thermal Shell",
      heating: "Advanced Climate Control",
    },
    features: [
      "Full Mirror Exterior",
      "Panoramic Views",
      "Premium Interior Panels",
      "Privacy Glass Technology",
      "Limited Edition Series",
      "Eco-Invisible Design"
    ],
    images: [
      "https://puravidahuts.com/wp-content/uploads/2023/07/Pura-Vida-Tiny-House-Village-Rasnov_Desene-cu-lumina-44-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2023/07/Pura-Vida-Tiny-House-Village-Rasnov_Desene-cu-lumina-42-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2023/07/Pura-Vida-Tiny-House-Village-Rasnov_Desene-cu-lumina-60-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2023/07/Pura-Vida-Tiny-House-Village-Rasnov_Desene-cu-lumina-115-scaled.jpg"
    ]
  },
  {
    slug: "daylight",
    name: "Daylight",
    accent: "Panoramic Living",
    description: "Designed with oversized glass to merge your living room with nature.",
    fullDescription: "The Daylight model is centered around the concept of 'Inside-Out' living. With massive glass surfaces, it floods the interior with natural light and provides unparalleled views of your surroundings. Ideal for scenic mountain plots or coastal retreats where the landscape is the main attraction.",
    priceFrom: "€49,000",
    specs: {
      area: "18m²",
      weight: "2.8t",
      length: "6.6m",
      width: "2.55m",
      height: "3.9m",
      insulation: "Premium Rockwool",
      heating: "Smart Radiant Heat",
    },
    features: [
      "Panoramic Glass Facade",
      "Bucovina Wood Craftsmanship",
      "Off-Grid Ready Systems",
      "Treated Romanian Spruce",
      "Double Glazed Wood Frames",
      "2 Year Structure Warranty"
    ],
    images: [
      "https://puravidahuts.com/wp-content/uploads/2021/08/Daylight14.jpeg",
      "https://puravidahuts.com/wp-content/uploads/2021/08/MG_9494.jpg",
      "https://puravidahuts.com/wp-content/uploads/2021/08/Daylight13.jpeg",
      "https://puravidahuts.com/wp-content/uploads/2021/08/Daylight5.jpeg",
      "https://puravidahuts.com/wp-content/uploads/2021/08/Daylight10.jpeg",
      "https://puravidahuts.com/wp-content/uploads/2021/08/Daylight6.jpeg",
      "https://puravidahuts.com/wp-content/uploads/2021/08/Daylight3.jpeg"
    ]
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    accent: "Minimalist Modern",
    description: "The standard for modern mobile living with heart and soul.",
    fullDescription: "Minimalistic, modern, accessible, and easy to be customized. Available in three distinct finishes: American PVC siding for maximum value (€23,000), Metallic finishing for a modern look (€25,000), or the popular Loft version with extra sleeping capacity (€28,000). Built with 15 cm rock wool insulation and treated wood paneling for year-round comfort.",
    priceFrom: "€23,000",
    specs: {
      area: "18m²",
      weight: "3.5t",
      length: "6.6m",
      width: "2.55m",
      height: "4.0m",
      insulation: "15cm Rock Wool",
      heating: "Electrical Underfloor Heating",
    },
    features: [
      "Custom Interior Colors",
      "Anti-condensation Foil",
      "Treated Wood Paneling",
      "Modern Minimalist Design",
      "Legal Guarantee of 2 Years",
      "Turn-key Ready"
    ],
    images: [
      "https://puravidahuts.com/wp-content/uploads/2022/05/Phoenix-tiny-house-Pura-Vida-6.jpeg",
      "https://puravidahuts.com/wp-content/uploads/2022/05/Phoenix-tiny-house-Pura-Vida-4.jpeg",
      "https://puravidahuts.com/wp-content/uploads/2022/06/MG_9267.jpg",
      "https://puravidahuts.com/wp-content/uploads/2022/05/Phoenix-tiny-house-Pura-Vida-11.jpeg",
      "https://puravidahuts.com/wp-content/uploads/2022/05/Phoenix-tiny-house-Pura-Vida-7.jpeg",
      "https://puravidahuts.com/wp-content/uploads/2022/05/Phoenix-tiny-house-Pura-Vida-3.jpeg"
    ]
  },
  {
    slug: "a-frame",
    name: "Tiny A-Frame",
    accent: "Glamping Excellence",
    description: "Best experiences come in small packages. Perfect for tourism.",
    fullDescription: "Best experiences come in small packages. Perfect for tourism, camping, glamping, or even in your backyard. It will pay itself in under 2 years, guaranteed. Available in Basic (€8,900) and Premium modules with bathroom included (€15,900).",
    priceFrom: "€8,900",
    specs: {
      area: "12m²",
      weight: "1.2t",
      length: "4.0m",
      width: "2.55m",
      height: "3.2m",
      insulation: "Rockwool Layer",
      heating: "Electric Wall Heater",
    },
    features: [
      "Iconic A-Frame Design",
      "Fast ROI Guarantee",
      "Plug & Play Tourism Unit",
      "Optional Bathroom Module",
      "Panoramic Peak Window",
      "Eco-Glamping Ready"
    ],
    images: [
      "https://puravidahuts.com/wp-content/uploads/2023/08/aframe4.jpg",
      "https://puravidahuts.com/wp-content/uploads/2023/07/IMG_20230714_142728-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2023/07/Tiny-House-Festival-840-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2023/07/Tiny-House-Festival-863-scaled.jpg"
    ]
  },
  {
    slug: "joy",
    name: "Joy",
    accent: "Compact Efficiency",
    description: "Artisanal masterwork, unique and colorful. Our most soul-filled compact model.",
    fullDescription: "Proof that great things come in small packages. The Joy is an artisanal masterwork, unique and colorful, optimized for high-end mobility. It features a clever multi-functional living area and even includes a built-in bathtub! Perfect for the solo nomad or as a premium, high-ROI Airbnb unit.",
    priceFrom: "€36,000",
    specs: {
      area: "12m²",
      weight: "1.8t",
      length: "4.5m",
      width: "2.55m",
      height: "3.5m",
      insulation: "High Density Rockwool",
      heating: "Compact Electric Heating",
    },
    features: [
      "B Category License Towable",
      "Integrated Bathtub",
      "Artisanal Romanian Spruce",
      "Ready-to-Plug Systems",
      "Eco-Friendly Materials",
      "Fast Delivery (4 Months)"
    ],
    images: [
      "https://puravidahuts.com/wp-content/uploads/2022/06/573A9478.jpg",
      "https://puravidahuts.com/wp-content/uploads/2022/06/573A9469.jpg",
      "https://puravidahuts.com/wp-content/uploads/2022/06/MG_6160.jpg",
      "https://puravidahuts.com/wp-content/uploads/2021/12/Joy27.jpg",
      "https://puravidahuts.com/wp-content/uploads/2021/12/Joy34.jpg",
      "https://puravidahuts.com/wp-content/uploads/2022/12/pura-vida-4050-of-4811.jpg"
    ]
  },
  {
    slug: "hope",
    name: "Hope",
    accent: "The Complete Home",
    description: "Our second model, designed as a proper house with everything you need.",
    fullDescription: "Following our first success, this is our second tiny house. As many requested, this is a proper house with everything you need inside. Built to withstand the harsh Romanian climate (+40° in Summer and -25° in Winter).",
    priceFrom: "€35,000",
    specs: {
      area: "16m²",
      weight: "2.5t",
      length: "5.4m",
      width: "2.55m",
      height: "3.8m",
      insulation: "Premium Insolation Package",
      heating: "Electric Fireplace + Floor Heat",
    },
    features: [
      "Proper House Layout",
      "Harsh Climate Resistant",
      "Full Bathroom & Kitchen",
      "Handmade Wooden Details",
      "Romanian Larch Wood",
      "Legal Guarantee of 2 Years"
    ],
    images: [
      "https://puravidahuts.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-23-at-23.11.04.jpeg",
      "https://puravidahuts.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-23-at-23.11.00-2.jpeg",
      "https://puravidahuts.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-24-at-18.07.29.jpeg",
      "https://puravidahuts.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-24-at-18.07.31-2.jpeg",
      "https://puravidahuts.com/wp-content/uploads/2021/09/always_summer-556-of-2619.jpg",
      "https://puravidahuts.com/wp-content/uploads/2021/09/always_summer-540-of-2619.jpg"
    ]
  },
  {
    slug: "rainbow",
    name: "Rainbow",
    accent: "The Iconic First",
    description: "Our very first model. We think it's amazing, and we're not the only ones.",
    fullDescription: "The model that started it all. We've been everywhere in Romania with this tiny house and all we did was turn heads. It represents our core philosophy of bringing heart and soul to mobile living.",
    priceFrom: "€28,000",
    specs: {
      area: "14m²",
      weight: "2.2t",
      length: "4.8m",
      width: "2.55m",
      height: "3.7m",
      insulation: "Full Rockwool Layer",
      heating: "Electric Radiators",
    },
    features: [
      "Iconic Original Design",
      "Curved Roof Silhouette",
      "High Mobility Weight",
      "Artisan Woodworking",
      "Double Glazed Stained Glass",
      "Spruce & Larch Exterior"
    ],
    images: [
      "https://puravidahuts.com/wp-content/uploads/2021/07/IMG_20210522_123421-01.jpeg",
      "https://puravidahuts.com/wp-content/uploads/2021/07/IMG_20210522_201412-01.jpeg",
      "https://puravidahuts.com/wp-content/uploads/2021/07/IMG_20210523_112538_262877513263532.jpg",
      "https://puravidahuts.com/wp-content/uploads/2021/08/MG_9467.jpg",
      "https://puravidahuts.com/wp-content/uploads/2021/09/always_summer-2212-of-2619.jpg",
      "https://puravidahuts.com/wp-content/uploads/2021/09/always_summer-2202-of-2619.jpg"
    ]
  },
  {
    slug: "comfort-house",
    name: "Comfort House",
    accent: "Family Living",
    description: "Super practical and very comfortable. Suited for a family.",
    fullDescription: "Suited for a family or two couples, with a small kitchen. Built for maximum comfort and practical use of space in a modular format. Available in limited quantities.",
    priceFrom: "Contact Us",
    specs: {
      area: "25.6m²",
      weight: "Modular",
      length: "8.0m",
      width: "3.2m",
      height: "3.8m",
      insulation: "Triple Thermal Layer",
      heating: "Full Underfloor WiFi",
    },
    features: [
      "Multi-Couple Layout",
      "Family Optimized",
      "Gourmet Ready Kitchen",
      "High Ceiling Design",
      "Artisanal Finishes",
      "Modular Expansion Ready"
    ],
    images: [
      "https://puravidahuts.com/wp-content/uploads/2023/07/Tiny-House-Festival-1742-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2023/07/Tiny-House-Festival-37-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2023/07/Tiny-House-Festival-22-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2023/07/Tiny-House-Festival-1570-scaled.jpg"
    ]
  }
];
