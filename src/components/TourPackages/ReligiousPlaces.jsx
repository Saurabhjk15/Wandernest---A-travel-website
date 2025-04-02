import React, { useState } from "react";
import OrderPopup from "../OrderPopup/OrderPopup"; // Import the OrderPopup component

const ReligiousPlaces = () => {
  const [orderPopup, setOrderPopup] = useState(false); // State to manage popup visibility

  const handleBookNowClick = () => {
    setOrderPopup(true); // Show the OrderPopup when "Book Now" is clicked
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Religious Places Tours</h1>
      <div className="text-6xl mb-4">🛕</div>
      <p className="text-xl mb-4">Visit sacred sites of various faiths and embark on spiritual journeys.</p>
      <p className="text-2xl font-bold text-green-600 mb-4">From ₹12,000</p>
      <h2 className="text-2xl font-semibold mb-2">Package Includes:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Temple Visits</li>
        <li>Spiritual Retreats</li>
        <li>Pilgrimage Trails</li>
        <li>Religious Festivals</li>
      </ul>
      <p className="text-lg mb-4">Our religious tours offer spiritual seekers the opportunity to visit revered sites across various faiths. From ancient temples to modern pilgrimage centers, these journeys provide insight into different belief systems and the chance for personal reflection and growth.</p>
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

export default ReligiousPlaces;
