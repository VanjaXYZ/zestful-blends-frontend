import React from "react";

const ContactMap = () => {
  return (
    <section className="w-full relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.8183856356736!2d-123.10367461754602!3d49.27983846908549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867140924a6583%3A0xf3677703d9141529!2sZestful%20Blends%20Inc!5e0!3m2!1sen!2suk!4v1741747819513!5m2!1sen!2suk"
        width="600"
        height="450"
        style={{ border: "none", width: "100%", height: "650px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default ContactMap;
