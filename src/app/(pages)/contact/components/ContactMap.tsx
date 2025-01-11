import React from "react";

const ContactMap = () => {
  return (
    <section className="w-full border">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.8227713073056!2d-123.10352372302401!3d49.27975537096084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717074c73691%3A0x7c878440873160ee!2s139%20Keefer%20St%2C%20Vancouver%2C%20BC%20V6A%201X3%2C%20Canada!5e0!3m2!1sen!2sba!4v1736628617158!5m2!1sen!2sba"
        width="600"
        height="450"
        style={{ border: "0", width: "100%", height: "650px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default ContactMap;
