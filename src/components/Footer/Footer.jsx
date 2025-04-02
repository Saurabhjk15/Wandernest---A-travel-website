import React, { useState, lazy, Suspense } from "react";
import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const ModalContainer = lazy(() => import("./ModalContainer"));

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showFAQModal, setShowFAQModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleCloseModal = (modalType) => {
    switch(modalType) {
      case 'contact':
        setShowContactModal(false);
        break;
      case 'faq':
        setShowFAQModal(false);
        break;
      case 'terms':
        setShowTermsModal(false);
        break;
      case 'privacy':
        setShowPrivacyModal(false);
        break;
    }
  };

  return (
    <>
      <div className="dark:bg-gray-950 py-10 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>
        <div className="container">
          <div className="grid md:grid-cols-4 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={FooterLogo} alt="" className="max-h-[60px]" />
              </h1>
              <p className="text-sm">
              Wandernest is a comprehensive travel website designed to be your ultimate gateway to adventure. Our platform serves as a one-stop destination for travelers, offering inspiration, information, and assistance in planning the perfect getaway
                
              </p>
              <br />
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Jaipur, Rajasthan</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+91 8769787455</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Important Links</h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li key={link.title} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                    <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Useful Links</h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                  <button onClick={() => setShowFAQModal(true)}>
                    <span>&#11162;</span>
                    <span>FAQ</span>
                  </button>
                </li>
                <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                  <button onClick={() => setShowTermsModal(true)}>
                    <span>&#11162;</span>
                    <span>Terms of Service</span>
                  </button>
                </li>
                <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                  <button onClick={() => setShowPrivacyModal(true)}>
                    <span>&#11162;</span>
                    <span>Privacy Policy</span>
                  </button>
                </li>
                <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                  <button onClick={() => setShowContactModal(true)}>
                    <span>&#11162;</span>
                    <span>Contact Us</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Newsletter</h1>
              <p className="text-gray-700 dark:text-gray-200 mb-4">Subscribe to our newsletter for travel tips and exclusive offers.</p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button 
                  type="submit" 
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
            @Copyright 2024 All rights reserved || Made By Wanderlust Team.
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ModalContainer 
          showContact={showContactModal}
          showFAQ={showFAQModal}
          showTerms={showTermsModal}
          showPrivacy={showPrivacyModal}
          onClose={handleCloseModal}
        />
      </Suspense>
    </>
  );
};

export default Footer;
