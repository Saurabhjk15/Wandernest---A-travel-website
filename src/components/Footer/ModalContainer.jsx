import React, { lazy, Suspense } from "react";

const ContactModal = lazy(() => import("./ContactModal"));
const FAQModal = lazy(() => import("./FAQModal"));
const TermsModal = lazy(() => import("./TermsModal"));
const PrivacyModal = lazy(() => import("./PrivacyModal"));

const ModalContainer = ({ showContact, showFAQ, showTerms, showPrivacy, onClose }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {showContact && <ContactModal onClose={() => onClose('contact')} />}
      {showFAQ && <FAQModal onClose={() => onClose('faq')} />}
      {showTerms && <TermsModal onClose={() => onClose('terms')} />}
      {showPrivacy && <PrivacyModal onClose={() => onClose('privacy')} />}
    </Suspense>
  );
};

export default ModalContainer;
