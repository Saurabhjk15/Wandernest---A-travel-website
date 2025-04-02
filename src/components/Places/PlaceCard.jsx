import React from "react";

const PlaceCard = ({ img, title, location, description, price, type, onClick }) => {
  return (
    <div 
      className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 duration-300 cursor-pointer"
      onClick={onClick}
    >
      <img src={img} alt={title} className="w-full h-[220px] object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 mb-2">{location}</p>
        <p className="text-sm mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-primary font-bold">₹{price}</p>
          <p className="bg-primary/20 px-2 py-1 rounded-full text-primary text-sm">
            {type}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
