import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="place-self-start">
        <form
          action=""
          className="bg-white flex flex-col justify-center p-4 gap-2 h-56 w-56 md:h-72 md:w-72 text-black "
        >
          <h1 className="text-center">Get In Touch!</h1>
          <label htmlFor="">Name</label>
          <input type="text" name="name" />
          <label htmlFor="">Email</label>
          <input type="email" name="email" />
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            className="w-full h-28 text-black outline-none resize-none border-2 border-black"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
