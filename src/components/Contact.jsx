import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [closeError, setCloseError] = useState(false);
  const [closeSuccess, setCloseSuccess] = useState(false);
  const formRef = useRef(null);

  const handleForm = async (e) => {
    e.preventDefault();

    const serviceId = "service_vzqkjpl";
    const templeId = "template_g2z8bon";
    const key = "TzGJNJajlGAVwRsVj";

    try {
      await emailjs.sendForm(serviceId, templeId, formRef.current, {
        publicKey: key,
      });
      console.log("message sent successfully");
      setSuccess("Email sent successfully, I will reply shortly");
      formRef.current.reset();
    } catch (err) {
      console.log("Error please try again", err);
      setError("Please try again");
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center" id="contact">
      <div className="place-self-end" id="contact">
        <form
          action=""
          className="bg-[#020236] md:bg-[#010133] backdrop-blur-lg flex flex-col justify-center p-4 gap-2 h-80 w-56  md:w-72 text-white/70 border border-white/40 rounded-sm md:border-none hover:shadow-[1px_5px_15px_1px_rgba(255,255,255,0.23)]
 transition-all duration-300 hover:text-white"
          onSubmit={handleForm}
          ref={formRef}
        >
          <h1 className="text-center">Get In Touch!</h1>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            required
            className="capitalize outline-none bg-white/40 rounded-sm indent-2 text-sm p-0.5"
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            required
            className="outline-none bg-white/40 rounded-sm indent-2 text-sm p-0.5"
          />
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            className="w-full h-28 outline-none resize-none bg-white/40 rounded-sm indent-2 text-sm"
            required
          ></textarea>
          <button className="bg-red-600 mt-1 active:scale-[0.7] active:border active:bg-red-800 transition-all duration-300 rounded-sm text-sm">
            Send
          </button>
        </form>
      </div>
      {/* Error Message  */}
      {error && !closeError && (
        <div className="fixed flex justify-center items-center inset-0 bg-black/70 backdrop-blur-xl">
          <div className="flex flex-col bg-white/20 h-36 w-52 justify-center items-center p-4 gap-4 rounded-sm border border-white">
            <h1>{error}</h1>
            <button
              className="bg-red-600 px-4 py-1 text-xs rounded-sm cursor-pointer active:scale-[0.7] hover:bg-red-800 transition-all duration-300 active:border"
              onClick={() => setCloseError(!closeError)}
            >
              Ok
            </button>
          </div>
        </div>
      )}
      {/* Success Message */}
      {success && !closeSuccess && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-xl">
          <div className="flex flex-col bg-white/20 h-36 justify-center items-center p-4 gap-4 rounded-sm border">
            <h1>{success}</h1>
            <button
              className="bg-red-600 px-4 py-1 text-xs rounded-sm cursor-pointer active:scale-[0.7] hover:bg-red-800 transition-all duration-300 active:border"
              onClick={() => setCloseSuccess(!closeSuccess)}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
