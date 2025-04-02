import React from "react";

const PlaceModal = ({ place, onClose, handleOrderPopup }) => {
  const handleBookNow = () => {
    onClose();
    handleOrderPopup();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">{place.title}</h2>
        <img src={place.img} alt={place.title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <p className="text-gray-600 mb-2">{place.location}</p>
        <p className="text-lg font-semibold mb-2">Category: {place.category}</p>
        <p className="mb-4 text-sm">{place.detailedDescription}</p>
        <h3 className="text-xl font-semibold mb-2">Package Includes:</h3>
        <ul className="list-disc list-inside mb-4 text-sm">
          {place.packageIncludes && place.packageIncludes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="text-2xl font-bold text-primary mb-4">₹{place.price}</p>
        <div className="flex justify-between">
          <button 
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 text-sm"
            onClick={handleBookNow}
          >
            Book Now
          </button>
          <button 
            className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 text-sm"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceModal;
