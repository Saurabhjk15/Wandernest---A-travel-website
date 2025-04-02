import React, { useState } from "react";
import OrderPopup from "../OrderPopup/OrderPopup"; // Import the OrderPopup component

const Wildlife = () => {
  const [orderPopup, setOrderPopup] = useState(false); // State to manage popup visibility

  const handleBookNowClick = () => {
    setOrderPopup(true); // Show the OrderPopup when "Book Now" is clicked
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Wildlife Tours</h1>
      <div className="text-6xl mb-4">🐘</div>
      <p className="text-xl mb-4">Encounter amazing animals in their natural habitats.</p>
      <p className="text-2xl font-bold text-green-600 mb-4">From ₹25,000</p>
      <h2 className="text-2xl font-semibold mb-2">Package Includes:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Safari Drives</li>
        <li>Bird Watching</li>
        <li>Nature Walks</li>
        <li>Wildlife Photography</li>
      </ul>
      <p className="text-lg mb-4">Our wildlife packages bring you face-to-face with the planet's most incredible animals. Led by experienced naturalists, you'll track elephants, spot elusive big cats, and discover a myriad of bird species. Each tour supports conservation efforts, ensuring these magnificent creatures thrive for generations to come.</p>
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

export default Wildlife;
