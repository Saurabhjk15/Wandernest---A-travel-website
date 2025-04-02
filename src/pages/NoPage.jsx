import React from "react";

const NoPage = () => {
  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <h1 className="text-4xl font-bold mb-8">404 - Page Not Found</h1>
      <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="text-primary mt-4 inline-block">Go back to Home</a>
    </div>
  );
};

export default NoPage;
