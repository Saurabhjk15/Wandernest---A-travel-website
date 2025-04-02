import React from "react";

const PrivacyModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        <div className="space-y-4">
          <p>At Wanderlust, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.</p>
          <h3 className="font-semibold">1. Information We Collect</h3>
          <p>We collect information you provide directly to us, such as when you create an account, make a booking, or contact us for support.</p>
          <h3 className="font-semibold">2. How We Use Your Information</h3>
          <p>We use the information we collect to provide, maintain, and improve our services, to process your bookings, and to communicate with you.</p>
          {/* Add more privacy policy details as needed */}
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

export default PrivacyModal;
