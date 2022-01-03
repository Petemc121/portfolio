import { useState } from "react";
import SlideInText from "./SlideInText";
import ContactItem from "./ContactItem";

export default function Contact() {
  const [email, setEmail] = useState({
    name: undefined,
    email: undefined,
    message: undefined,
  });

  const handleChange = (e: any) => {
    setEmail((prevState) => {
      return { ...prevState };
    });
  };
  return (
    <div id="contactContainer" className="contactContainer">
      <SlideInText textClass="contactTitle" text="Contact" />
      <form>
        <div className="contactForm">
          <SlideInText textClass="contactItemTitle" text="Name" />
          <ContactItem
            name="user_name"
            className="contactItem contactName"
            input={true}
          />
          <SlideInText textClass="contactItemTitle" text="Email" />
          <ContactItem
            name="user_email"
            className="contactItem contactEmail"
            input={true}
          />
          <SlideInText textClass="contactItemTitle" text="Message" />
          <ContactItem
            name="user_message"
            className="contactItem contactMessage"
            input={false}
          />
          <button
            style={{ opacity: "1" }}
            id="contactButton"
            className="primaryButton"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
