import { useState } from "react";
import Navbar from "./Navbar";
import { ArrowRightIcon } from "../assets/Icons";
import emailjsService from "../services/emailjs";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [message, setMessage] = useState("");

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      to_name: "Anoop Lamba",
      from_name: inputName,
      reply_to: inputEmail,
      message,
    };

    emailjsService
      .sendMail(formData)
      .then((response) => {
        console.log(response);
        toast.success("Message sent 👍");
        setInputName("");
        setInputEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error sending message 🤔");
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-[#1B262C]">
        <div className="min-h-screen flex flex-col items-center justify-start px-4 pb-4">
          {/* Navbar */}
          <Navbar />

          <span className="max-w-[778px] w-full pt-[75px] text-center text-white text-3xl sm:text-[40px] font-medium leading-[100%]">
            <span className="bg-[linear-gradient(91deg,#CAECFF_39.76%,#78CFFF_86.12%)] bg-clip-text text-transparent font-bold">
              Thanks
            </span>
            &nbsp;for taking the time to reach out. How can I help you today?
          </span>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="mt-[30px] max-w-[678px] w-full sm:p-5 flex flex-col items-end justify-center gap-3 sm:gap-4 
           rounded-xl font-poppins text-lg text-white"
          >
            <input
              placeholder="Name"
              required
              name="country"
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              className="w-full h-[40px] sm:h-[50px] px-3 sm:px-4 border-2 border-solid border-gray-700 rounded-xl outline-none bg-[#24343D] transition-all duration-200 ease-in-out focus:border-2 focus:border-solid focus:border-[#5C93B1]
              focus:shadow-[0px_0px_0px_5px_rgba(74,157,236,20%)]"
            />
            <input
              placeholder="Email"
              required
              name="country"
              type="email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              className="w-full h-[40px] sm:h-[50px] px-3 sm:px-4 border-2 border-solid border-gray-700 rounded-xl outline-none bg-[#24343D] transition-all duration-200 ease-in-out focus:border-2 focus:border-solid focus:border-[#5C93B1]
              focus:shadow-[0px_0px_0px_5px_rgba(74,157,236,20%)]"
            />
            <textarea
              placeholder="Message"
              required
              name="country"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" resize-none w-full px-3 sm:px-4 py-2 border-2 border-solid border-gray-700 rounded-xl outline-none bg-[#24343D] transition-all duration-200 ease-in-out focus:border-2 focus:border-solid focus:border-[#5C93B1]
              focus:shadow-[0px_0px_0px_5px_rgba(74,157,236,20%)]"
            />
            <button
              type="submit"
              className="max-w-[130px] p-[6px_10px] sm:p-[8px_12px] rounded-lg sm:rounded-xl bg-[linear-gradient(108deg,#3A5E72_4.95%,_#5C93B1_132.43%)] transition-all duration-300 ease-in-out flex items-center justify-center gap-1 sm:gap-2 text-white"
            >
              <span className="font-poppins text-lg font-medium">Submit</span>
              <ArrowRightIcon />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
