import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 1,
    tripType: "Leisure",
    specialRequests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Order submitted:", formData);
    setOrderPopup(false);
  };

  if (!orderPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg h-[80vh] overflow-y-auto"> {/* Set height and added overflow */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Book Your Trip</h2>
            <button
              onClick={() => setOrderPopup(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              <IoCloseOutline className="text-2xl" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div className="relative">
              <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div className="relative">
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Destination"
                className="w-full py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium">Number of Travelers</label>
              <input
                type="number"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                min="1"
                className="w-full py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium">Trip Type</label>
              <select
                name="tripType"
                value={formData.tripType}
                onChange={handleChange}
                className="w-full py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="Leisure">Leisure</option>
                <option value="Adventure">Adventure</option>
                <option value="Business">Business</option>
                <option value="Family">Family</option>
              </select>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium">Special Requests</label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Any special requests?"
                className="w-full py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                rows="2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPopup;
