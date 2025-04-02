import React from "react";

const TermsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
        <div className="space-y-4">
          <p>Welcome to Wanderlust. By using our website, you agree to comply with and be bound by the following terms and conditions of use.</p>
          <h3 className="font-semibold">1. Use of the Website</h3>
          <p>The content of this website is for your general information and use only. It is subject to change without notice.</p>
          <h3 className="font-semibold">2. Booking and Payments</h3>
          <p>All bookings are subject to availability and confirmation. Payments are to be made as per the instructions provided during the booking process.</p>
          {/* Add more terms as needed */}
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

export default TermsModal;
