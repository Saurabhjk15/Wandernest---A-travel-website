import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaCalendarAlt, FaRupeeSign } from "react-icons/fa";
import { indiaStatesAndDistricts } from './indiaStatesAndDistricts'; // We'll create this file

const Hero = () => {
  const [destination, setDestination] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState(5000);
  const [showBudgetPopup, setShowBudgetPopup] = useState(false);
  const popupRef = useRef(null);
  const buttonRef = useRef(null);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const destinationRef = useRef(null);

  const budgetOptions = [
    { value: 10000, label: "Up to ₹10,000" },
    { value: 25000, label: "Up to ₹25000" },
    { value: 100000, label: "Up to ₹100000" },
    { value: 200000, label: "Up to ₹200000" },
    { value: 500000, label: "Over ₹500000" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target) &&
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowBudgetPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleBudgetPopup = () => {
    setShowBudgetPopup(!showBudgetPopup);
  };

  const toggleDestinationDropdown = () => {
    setShowDestinationDropdown(!showDestinationDropdown);
  };

  const handleDestinationChange = (e) => {
    const input = e.target.value;
    setDestination(input);
    
    if (input.length > 0) {
      const filtered = Object.entries(indiaStatesAndDistricts).flatMap(([state, districts]) => 
        [state, ...districts].filter(location => 
          location.toLowerCase().includes(input.toLowerCase())
        ).map(location => ({ state, location }))
      );
      setFilteredLocations(filtered);
      setShowDestinationDropdown(true);
    } else {
      setFilteredLocations([]);
      setShowDestinationDropdown(false);
    }
  };

  const selectDestination = (state, location) => {
    setDestination(state === location ? location : `${location}, ${state}`);
    setShowDestinationDropdown(false);
  };

  return (
    <div className="relative overflow-hidden h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-full w-full object-cover z-0"
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-end">
        <div className="text-right mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4"
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                color: '#E0E0E0',
              }}
              data-aos="fade-left" data-aos-delay="100">
            Discover Your Next Adventure
          </h1>
          <p className="mt-4 text-xl sm:text-2xl max-w-2xl ml-auto"
             style={{
               textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
               color: '#CCCCCC',
             }}
             data-aos="fade-left" data-aos-delay="200">
            Explore breathtaking destinations, create unforgettable memories, and embark on journeys that will last a lifetime.
          </p>
        </div>

        {/* Search Form */}
        <div className="w-full max-w-md mt-4" data-aos="fade-up" data-aos-delay="300">
          <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg overflow-hidden border border-gray-600 shadow-2xl">
            <div className="p-6 space-y-4">
              <div className="relative">
                <div className="flex items-center border-b border-gray-600 pb-2">
                  <FaSearch className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Where do you want to go?"
                    className="flex-1 border-none bg-transparent focus:ring-0 text-white placeholder-gray-400"
                    value={destination}
                    onChange={handleDestinationChange}
                    onFocus={() => setShowDestinationDropdown(true)}
                    ref={destinationRef}
                  />
                </div>
                {showDestinationDropdown && filteredLocations.length > 0 && (
                  <div 
                    className="absolute z-50 mt-1 w-full bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-lg rounded-md py-1 text-base ring-1 ring-gray-600 overflow-y-auto focus:outline-none sm:text-sm"
                    style={{ maxHeight: '200px' }}
                  >
                    {filteredLocations.map(({ state, location }, index) => (
                      <div
                        key={index}
                        className="cursor-pointer select-none relative py-2 pl-3 pr-9 text-white hover:bg-yellow-600"
                        onClick={() => selectDestination(state, location)}
                      >
                        {state === location ? location : `${location}, ${state}`}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center border-b border-gray-600 pb-2">
                <FaCalendarAlt className="text-gray-400 mr-3" />
                <input
                  type="date"
                  className="flex-1 border-none bg-transparent focus:ring-0 text-white"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="relative">
                <button
                  ref={buttonRef}
                  onClick={toggleBudgetPopup}
                  className="w-full text-left flex items-center justify-between px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-black bg-opacity-50 text-white hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  <span>{budget ? `Budget: ₹${budget}` : "Select Budget"}</span>
                  <FaRupeeSign className="text-gray-400" />
                </button>
                {showBudgetPopup && (
                  <div 
                    ref={popupRef}
                    className="absolute z-50 mt-1 w-full bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-lg rounded-md py-1 text-base ring-1 ring-gray-600 overflow-y-auto focus:outline-none sm:text-sm"
                    style={{ maxHeight: '150px', height: 'auto', overflowY: 'scroll' }} // Set maxHeight and enable scroll
                  >
                    {budgetOptions.map((option) => (
                      <div
                        key={option.value}
                        className="cursor-pointer select-none relative py-2 pl-3 pr-9 text-white hover:bg-yellow-600"
                        onClick={() => {
                          setBudget(option.value);
                          setShowBudgetPopup(false);
                        }}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-300"
              >
                Search Destinations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
