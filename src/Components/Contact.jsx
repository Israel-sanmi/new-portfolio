import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0g9vhum",
        "template_9lbfk2p",
        form.current,
        "kWP97UmZIvz_mZHoF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="mt-10  h-screen flex justify-center items-center">
      <div className="">
        <h1 className="font-semibold text-2xl">Contact Me!</h1>
        <p className="text-sm text-teal-500 font-bold">
          Email: adetomokunisrael2001@gmail.com
        </p>
        <p className="text-sm text-teal-500 font-bold">
          Phone number: +2347045008685
        </p>
        <div>
          <form ref={form} onSubmit={sendEmail} className="text-black">
            <div className="grid gap-2 md:grid-cols-2 grid-cols-1 my-5">
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                className="border md:text-sm text-xs border-teal-500 rounded-sm p-2"
              />
              <input
                type="email"
                name="user_email"
                placeholder="E-mail"
                className="border md:text-sm text-xs border-teal-500 rounded-sm p-2"
              />

              <textarea
                name="message"
                placeholder="Your Message..."
                className="border md:w-96 w-auto md:text-sm text-xs border-teal-500 rounded-sm p-2"
              />
              <br />
            </div>
            <input
              type="submit"
              value={done ? "Done!" : "Send"}
              disabled={done}
              className=" bg-gradient-to-r w-full from-teal-300 to-teal-600 text-white md:text-sm text-xs uppercase font-bold py-2 px-6 cursor-pointer"
            />{" "}
            <br />
            <span className="text-xs text-red-500 uppercase font-bold">
              {done && "Thanks for contacting me!"}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
