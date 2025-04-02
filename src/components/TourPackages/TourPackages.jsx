import React from "react";

const TourPackages = ({ categories, onCategorySelect }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Tour Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => onCategorySelect(category)}
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-2">{category.description}</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
