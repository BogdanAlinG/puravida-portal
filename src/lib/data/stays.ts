import { Waves, Mountain, Building2, MapPin, Tent, Sparkles } from "lucide-react";

export interface StayLocation {
  slug: string;
  name: string;
  title: string;
  description: string;
  fullDescription: string;
  price: string;
  icon: any;
  image: string;
  gallery: string[];
  details: string[];
  amenities: string[];
  locationInfo: string;
  transport?: string;
  reviews: { text: string; author: string }[];
}

export const stayLocations: StayLocation[] = [
  {
    slug: "vama-veche",
    name: "Vama Veche Sea Side Village",
    title: "Vama Veche: Tiny Houses on the Beach",
    description: "The ultimate tiny house experience right on the beach. A perfect blend of chill daytime vibes and vibrant party nights.",
    fullDescription: "Experience the magic of the Black Sea from the comfort of our artisanal tiny houses. Located right on the beach in Vama Veche, our village offers a unique blend of Bukovina craftsmanship and seaside freedom. Wake up to the sound of waves and spend your nights under the stars in Romania's most iconic coastal village.",
    price: "From €80/night",
    icon: Waves,
    image: "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-17.jpg",
    gallery: [
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-17.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-134.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-120.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-100.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-26.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-23.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-21.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-20-1.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-10.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-16.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-15.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-14.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-13.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-12.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-11.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-8.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-5.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-2.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-23-1.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-25.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-26-1.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-27.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-28.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-29.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-31.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-38.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-59.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-89.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-74.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-88.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-90.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-91.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-93.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-94.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-96.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-97.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-98.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-99.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-100.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-101.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-106.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-109.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-111.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-112.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-119.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-121.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-127.jpg",
      "https://puravidahuts.com/wp-content/uploads/2024/06/Pura-Vida-Huts-Vama-Veche-Desene-cu-lumina-135.jpg"
    ],
    details: ["Beachfront Access", "Tiny House Cluster", "Vibrant Atmosphere"],
    amenities: ["Air Conditioning", "Private Bathroom", "Kitchenette", "Beach Sunbeds", "Outdoor Terrace"],
    locationInfo: "Right on the beach, north side of Vama Veche village.",
    reviews: [
      { text: "Best experience in Vama! The tiny house was super cozy and the view is unbeatable.", author: "Elena P." }
    ]
  },
  {
    slug: "mamaia-nord",
    name: "Mamaia Nord Studios & Penthouses",
    title: "Premium Seaside Living in Mamaia Nord",
    description: "20 brand new studios, apartments, and 3 dream Penthouses just 400m from the beach.",
    fullDescription: "Our Mamaia Nord complex features 20 brand new studios and apartments, crowned by 3 spectacular Penthouses. Designed for those who seek modern luxury near the shore, every unit is fully equipped with premium appliances, air conditioning, and high-speed Wi-Fi. Just a short walk from the best beach clubs in the region.",
    price: "From 400 RON/night",
    icon: Building2,
    image: "https://puravidahuts.com/wp-content/uploads/2023/07/IMG-20230711-WA0102-scaled.jpg",
    gallery: [
      "https://puravidahuts.com/wp-content/uploads/2023/07/IMG-20230711-WA0102-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2023/07/IMG-20230711-WA0105-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2023/07/IMG-20230711-WA0108-scaled.jpg"
    ],
    details: ["Sea View Terrace", "Modern Design", "Full Kitchenette"],
    amenities: ["Smart TV", "Air Fryer", "Coffee Maker", "High-speed Wi-Fi", "Private Parking"],
    locationInfo: "Mamaia Nord, 400m from the beach, near the clubbing area.",
    reviews: [
      { text: "The penthouse was a dream. Spotless and very close to the beach.", author: "Andrei M." }
    ]
  },
  {
    slug: "bucovina-garden",
    name: "Bucovina Garden Retreat",
    title: "Artisanal Peace in the Heart of Bucovina",
    description: "Two tiny houses nestled in a traditional garden near UNESCO protected monasteries.",
    fullDescription: "Located in Câmpulung Moldovenesc, our Bucovina retreat is where Pura Vida Huts was born. These houses showcase our finest craftsmanship, surrounded by a peaceful traditional garden. Experience the quiet beauty of the mountains and the spiritual heritage of the UNESCO monasteries just minutes away.",
    price: "Contact for Rates",
    icon: Mountain,
    image: "https://puravidahuts.com/wp-content/uploads/2021/08/MG_9494-scaled.jpg",
    gallery: [
      "https://puravidahuts.com/wp-content/uploads/2021/08/MG_9494-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2021/08/MG_9467.jpg",
      "https://puravidahuts.com/wp-content/uploads/2021/08/MG_9470.jpg"
    ],
    details: ["Traditional Garden", "UNESCO Proximity", "Mountain Air"],
    amenities: ["Floor Heating", "Handmade Furniture", "Mountain Views", "Garden Access", "Local Products"],
    locationInfo: "Câmpulung Moldovenesc, Suceava County, Bucovina region.",
    reviews: [
      { text: "A sanctuary of peace. The attention to detail in the wood work is incredible.", author: "Sarah W." }
    ]
  },
  {
    slug: "tiny-houses-bucharest",
    name: "Tiny Houses Bucharest",
    title: "Urban Sanctuary: Tiny Living in the Capital",
    description: "București: tiny houses și case la curte. Nested in the vibrant heart of the city near Cismigiu Gardens.",
    fullDescription: "Nestled in the vibrant heart of Bucharest, our tiny houses offer a unique blend of comfort and charm, perfect for those seeking an intimate urban retreat. Just steps away from iconic landmarks like Cismigiu Gardens and Calea Victoriei, our cozy abodes provide an ideal base for exploring the city's rich history and culture. Each house is thoughtfully designed to maximize space and comfort, ensuring a memorable stay for every guest.",
    price: "From €65/night",
    icon: Tent,
    image: "https://puravidahuts.com/wp-content/uploads/2025/09/IMG_20250923_180523-scaled.jpg",
    gallery: [
      "https://puravidahuts.com/wp-content/uploads/2025/09/IMG_20250923_180523-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2025/09/IMG_20250923_181006-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2025/09/IMG_20250923_181012-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2025/06/627779072.jpg",
      "https://puravidahuts.com/wp-content/uploads/2025/06/602334729.jpg",
      "https://puravidahuts.com/wp-content/uploads/2025/06/602333965.jpg",
      "https://puravidahuts.com/wp-content/uploads/2025/06/602282312.jpg"
    ],
    details: ["Cismigiu Proximity", "Urban Courtyard", "Climate Controlled"],
    amenities: [
      "Free Wi-Fi", 
      "Private Parking", 
      "Air Conditioning", 
      "Independent Floor Heating", 
      "Private Bathroom", 
      "Kitchenette", 
      "Expansive Courtyard", 
      "Pet Friendly"
    ],
    locationInfo: "Central Bucharest, walking distance to Cismigiu Gardens, Romana Square, and Victoriei Square.",
    reviews: [
      { text: "Staying at Pura Vida Huts was like living in a fairy tale! The location is unbeatable.", author: "Anna M." },
      { text: "A perfect retreat in the city! The tiny houses are thoughtfully designed.", author: "James L." }
    ]
  },
  {
    slug: "little-bucharest-apartments",
    name: "Little Bucharest Romana Apartments",
    title: "Historic Elegance at Piața Romană",
    description: "Brand-new apartments in a beautifully restored historic building near the city's top attractions.",
    fullDescription: "The apartments at Caderea Bastiliei 7, near Piața Romană in downtown Bucharest, offer a perfect blend of historical charm and modern convenience. Located in a beautifully restored building, this brand-new Airbnb accommodation is ideal for travelers seeking a stylish, centrally located stay with easy access to Bucharest's top attractions and excellent public transport connections.",
    price: "From €60/night",
    icon: Building2,
    image: "https://puravidahuts.com/wp-content/uploads/2025/04/573A3866-scaled.jpg",
    gallery: [
      "https://puravidahuts.com/wp-content/uploads/2025/04/573A3866-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2025/04/573A3879-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2025/04/573A3896-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2025/04/573A3954-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2025/04/573A4014-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2025/04/573A4050-scaled.jpg",
      "https://puravidahuts.com/wp-content/uploads/2025/04/573A4067-scaled.jpg"
    ],
    details: ["Historic Building", "Downtown Core", "Premium Finish"],
    amenities: [
      "Non-stop Self Check-in", 
      "Full Kitchen", 
      "Sound-proof Units", 
      "Smart TV with Netflix", 
      "Large Bathroom with Shower", 
      "Balcony with City Views", 
      "Laundry Service on Request"
    ],
    locationInfo: "Strada Căderea Bastiliei 7, near Piața Romană, Bucharest.",
    transport: "Steps away from Piața Romană metro station (M2 line) and multiple bus/tram routes.",
    reviews: [
      { text: "This is a stunning accommodation in Bucharest! Location is great, at Piața Romană.", author: "Juanita Moran" },
      { text: "Everything is brand new, super clean. Absolute best position possible.", author: "Rehaan Whitfield" }
    ]
  }
];
