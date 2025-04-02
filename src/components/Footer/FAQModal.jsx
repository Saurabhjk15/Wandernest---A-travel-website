import React from "react";

const FAQModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Q: How do I book a trip?</h3>
            <p>A: You can book a trip by selecting your desired destination and dates on our website, then following the booking process.</p>
          </div>
          <div>
            <h3 className="font-semibold">Q: What is your cancellation policy?</h3>
            <p>A: Our cancellation policy varies depending on the type of booking. Generally, cancellations made 48 hours before the trip are eligible for a full refund.</p>
          </div>
          {/* Add more FAQ items as needed */}
        </div>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FAQModal;
