import React, { useState } from "react";
import OrderPopup from "../OrderPopup/OrderPopup"; // Import the OrderPopup component

const Cultural = () => {
  const [orderPopup, setOrderPopup] = useState(false); // State to manage popup visibility

  const handleBookNowClick = () => {
    setOrderPopup(true); // Show the OrderPopup when "Book Now" is clicked
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Cultural Tours</h1>
      <div className="text-6xl mb-4">🏛️</div>
      <p className="text-xl mb-4">Explore rich heritage and traditions of diverse cultures around the world.</p>
      <p className="text-2xl font-bold text-green-600 mb-4">From ₹18,000</p>
      <h2 className="text-2xl font-semibold mb-2">Package Includes:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Historical Sites</li>
        <li>Local Cuisine</li>
        <li>Traditional Performances</li>
        <li>Artisan Workshops</li>
      </ul>
      <p className="text-lg mb-4">Our cultural tours offer a deep dive into the heart of local traditions. Visit UNESCO World Heritage sites, participate in traditional ceremonies, and learn age-old crafts from skilled artisans. Each journey is a step back in time and a leap into diverse cultural landscapes.</p>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleBookNowClick} // Connect the button to the popup
      >
        Book Now
      </button>

      {/* Render the OrderPopup component */}
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default Cultural;
