import React, { useState } from "react";
import OrderPopup from "../OrderPopup/OrderPopup"; // Import the OrderPopup component

const EcoTourism = () => {
  const [orderPopup, setOrderPopup] = useState(false); // State to manage popup visibility

  const handleBookNowClick = () => {
    setOrderPopup(true); // Show the OrderPopup when "Book Now" is clicked
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Eco-Tourism Tours</h1>
      <div className="text-6xl mb-4">🌿</div>
      <p className="text-xl mb-4">Sustainable travel to natural areas that conserve the environment.</p>
      <p className="text-2xl font-bold text-green-600 mb-4">From ₹22,000</p>
      <h2 className="text-2xl font-semibold mb-2">Package Includes:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Nature Reserves</li>
        <li>Organic Farming</li>
        <li>Conservation Activities</li>
        <li>Eco-Lodges</li>
      </ul>
      <p className="text-lg mb-4">Our eco-tourism packages combine the joy of travel with environmental responsibility. Stay in sustainable accommodations, participate in conservation projects, and explore pristine ecosystems. These tours not only offer unique experiences but also contribute to preserving our planet's natural beauty.</p>
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

export default EcoTourism;
