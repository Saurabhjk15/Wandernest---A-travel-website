import React, { useState } from "react";
import OrderPopup from "../OrderPopup/OrderPopup"; // Import the OrderPopup component

const Adventure = () => {
  const [orderPopup, setOrderPopup] = useState(false); // State to manage popup visibility

  const handleBookNowClick = () => {
    setOrderPopup(true); // Show the OrderPopup when "Book Now" is clicked
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Adventure Tours</h1>
      <div className="text-6xl mb-4">🏔️</div>
      <p className="text-xl mb-4">Embark on thrilling journeys that push your limits and create unforgettable memories.</p>
      <p className="text-2xl font-bold text-green-600 mb-4">From ₹20,000</p>
      <h2 className="text-2xl font-semibold mb-2">Package Includes:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Trekking</li>
        <li>Camping</li>
        <li>River Rafting</li>
        <li>Rock Climbing</li>
      </ul>
      <p className="text-lg mb-4">Our adventure packages offer heart-pumping experiences in some of the most breathtaking locations. Whether you're scaling mountains, navigating rapids, or exploring uncharted territories, our expert guides ensure your safety while maximizing the thrill.</p>
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

export default Adventure;
