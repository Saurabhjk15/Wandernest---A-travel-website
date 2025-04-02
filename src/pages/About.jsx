import React, { useState } from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import TourPackages from "../components/TourPackages/TourPackages";
import Adventure from "../components/TourPackages/Adventure";
import Beach from "../components/TourPackages/Beach";
import Cultural from "../components/TourPackages/Cultural";
import Wildlife from "../components/TourPackages/Wildlife";
import ReligiousPlaces from "../components/TourPackages/ReligiousPlaces";
import EcoTourism from "../components/TourPackages/EcoTourism";

const categories = [
  { 
    name: "Adventure", 
    icon: "🏔️", 
    description: "Thrilling experiences for the daring",
    component: Adventure
  },
  { 
    name: "Beach", 
    icon: "🏖️", 
    description: "Relax on beautiful sandy shores",
    component: Beach
  },
  { 
    name: "Cultural", 
    icon: "🏛️", 
    description: "Explore rich heritage and traditions",
    component: Cultural
  },
  { 
    name: "Wildlife", 
    icon: "🐘", 
    description: "Encounter amazing animals in their habitats",
    component: Wildlife
  },
  { 
    name: "Religious Places", 
    icon: "🛕", 
    description: "Visit sacred sites of various faiths",
    component: ReligiousPlaces
  },
  { 
    name: "Eco-Tourism", 
    icon: "🌿", 
    description: "Sustainable travel to natural areas",
    component: EcoTourism
  },
];

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            "Welcome to WanderNest, your gateway to extraordinary travel experiences. 
            Our website is designed to inspire and assist adventurers, explorers, and curious souls in discovering the world's most captivating destinations.
            At Wanderlust, we believe that travel is more than just visiting new places – it's about creating unforgettable memories, immersing yourself in diverse cultures, and broadening your horizons. 
            Our team of passionate travel experts curates a selection of handpicked destinations, from hidden gems to iconic landmarks, ensuring that every journey with us is unique and enriching. Whether you're dreaming of a serene beach getaway, an exhilarating mountain expedition, or a cultural odyssey through historic cities, Wanderlust is here to turn your travel aspirations into reality. With our user-friendly interface, comprehensive travel guides, and personalized booking options, we make planning your next adventure effortless and exciting. Join us in exploring the beauty and wonder of our world, one destination at a time. Let Wanderlust be your compass in the journey of a lifetime."
          </p>
          <br />
          <p>
            We continuously update our offerings, seek out new and exciting destinations, and refine our travel tips to ensure you have the most current and valuable information at your fingertips.
          </p>
        </div>
      </div>

      {/* Tour Packages Section */}
      <TourPackages categories={categories} onCategorySelect={setSelectedCategory} />

      {/* Category Details Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-90vh overflow-y-auto">
            <selectedCategory.component />
            <button 
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
              onClick={() => setSelectedCategory(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <BlogsComp />
    </>
  );
};

export default About;
