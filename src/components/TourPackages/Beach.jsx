import React, { useState } from "react";
import OrderPopup from "../OrderPopup/OrderPopup"; // Import the OrderPopup component

const Beach = () => {
  const [orderPopup, setOrderPopup] = useState(false); // State to manage popup visibility

  const handleBookNowClick = () => {
    setOrderPopup(true); // Show the OrderPopup when "Book Now" is clicked
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Beach Tours</h1>
      <div className="text-6xl mb-4">🏖️</div>
      <p className="text-xl mb-4">Unwind and rejuvenate on pristine beaches with crystal-clear waters.</p>
      <p className="text-2xl font-bold text-green-600 mb-4">From ₹15,000</p>
      <h2 className="text-2xl font-semibold mb-2">Package Includes:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Sunbathing</li>
        <li>Water Sports</li>
        <li>Beach Parties</li>
        <li>Coastal Cuisine</li>
      </ul>
      <p className="text-lg mb-4">Our beach packages offer the perfect blend of relaxation and adventure. Lounge on soft sands, dive into exciting water sports, and indulge in fresh seafood. From secluded coves to vibrant coastal towns, we have the perfect beach getaway for you.</p>
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

export default Beach;
