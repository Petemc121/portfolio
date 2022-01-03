import React from "react";
import SlideInText from "./SlideInText";
import ContactItem from "./ContactItem";

export default function Contact() {
  return (
    <div id="contactContainer" className="contactContainer">
      <SlideInText textClass="contactTitle" text="Contact" />
      <div className="contactForm">
        <SlideInText textClass="contactItemTitle" text="Name" />
        <ContactItem className="contactItem contactName" input={true} />
        <SlideInText textClass="contactItemTitle" text="Email" />
        <ContactItem className="contactItem contactEmail" input={true} />
        <SlideInText textClass="contactItemTitle" text="Message" />
        <ContactItem className="contactItem contactMessage" input={false} />
        <button
          style={{ opacity: "1" }}
          id="contactButton"
          className="primaryButton"
        >
          Send
        </button>
      </div>
    </div>
  );
}
