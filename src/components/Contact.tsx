import { useState, useRef } from "react";
import SlideInText from "./SlideInText";
import ContactItem from "./ContactItem";
import emailjs from "emailjs-com";

export default function Contact() {
  const [email, setEmail] = useState<any>({
    user_name: null,
    user_email: null,
    user_message: null,
  });

  const [emailSent, setEmailSent] = useState(false);
  const [fieldsMissing, setFieldsMissing] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setEmail((values: any) => ({ ...values, [name]: value }));
  };

  function emailFieldsFilled(): boolean {
    for (var prop in email) {
      if (email[prop] === null) {
        console.log("failed email: " + email);
        return false;
      }
    }
    console.log("success email: " + email);

    return true;
  }

  function validEmail(email: any) {
    if (
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) !== null
    ) {
      return true;
    } else {
      return false;
    }
  }

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (emailFieldsFilled() === true) {
      if (validEmail(email.user_email) === true) {
        emailjs
          .send(
            "service_4mfbv8h",
            "template_zf7nx6g",
            email,
            "user_gCkSE4nIUTQJuXpI0GRzW"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );

        setEmailSent(true);

        setEmail({
          user_name: null,
          user_email: null,
          user_message: null,
        });

        setTimeout(() => {
          setEmailSent(false);
        }, 2000);
      } else {
        setEmailInvalid(true);

        setEmail({
          user_name: email.user_name,
          user_email: null,
          user_message: email.user_message,
        });

        setTimeout(() => {
          setEmailInvalid(false);
        }, 2000);
      }
    } else {
      setFieldsMissing(true);

      setTimeout(() => {
        setFieldsMissing(false);
      }, 2000);
    }
  };

  console.log(email);
  return (
    <div id="contactContainer" className="contactContainer">
      <SlideInText textClass="contactTitle" text="Contact" />
      <form onSubmit={sendEmail}>
        <div className="contactForm">
          <SlideInText textClass="contactItemTitle" text="Name" />
          <ContactItem
            name="user_name"
            className="contactItem contactName"
            type="text"
            input={true}
            handleChange={handleChange}
            value={email.user_name}
          />
          <SlideInText textClass="contactItemTitle" text="Email" />
          <ContactItem
            name="user_email"
            className="contactItem contactEmail"
            type="email"
            input={true}
            handleChange={handleChange}
            value={email.user_email}
          />
          <SlideInText textClass="contactItemTitle" text="Message" />
          <ContactItem
            name="user_message"
            className="contactItem contactMessage"
            type="text"
            input={false}
            handleChange={handleChange}
            value={email.user_message}
          />
          <button
            style={{ opacity: "1" }}
            id="contactButton"
            type="submit"
            className="primaryButton"
          >
            {emailSent ? "Email sent!" : "Send"}
          </button>
          <div
            style={{ opacity: emailSent ? "1" : "0" }}
            className="emailSentResponse"
          >
            {"Thanks for contacting me! I'll get back to you as soon as I can."}
          </div>
          <div
            style={{ opacity: fieldsMissing ? "1" : "0" }}
            className="emailSentResponse"
          >
            {"Please fill all required fields before sending."}
          </div>
          <div
            style={{ opacity: emailInvalid ? "1" : "0" }}
            className="emailSentResponse"
          >
            {"Please enter a valid email."}
          </div>
        </div>
      </form>
    </div>
  );
}
