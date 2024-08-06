"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Social from "@/components/Social";
import { useState } from "react";
import Modal from "@/components/Modal.jsx"; // Updated import

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+91) 9518147028',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Bhiwani, Haryana, India',
  },
];

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [textArea, setTextArea] = useState('');
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(phoneNumber);
    console.log(textArea);

    const res = await fetch("api/contacts", {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phoneNumber,
        textArea,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
    setIsModalOpen(true); // Open the modal

    if (success) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setTextArea('');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none sm:mb-20 xl:mb-0">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="sm:text-3xl md:text-4xl text-accent">Let&apos;s Work Together</h3>
              <p className="text-white/60">Hey! I am looking forward to start a project with you! Feel free to reach out.</p>
              <div className="grid grid-cols-1 cmd:grid-cols-2 gap-6">
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  id="firstName"
                  value={firstName}
                  type="text"
                  className="bg-primary px-3 h-[48px] focus:border-accent"
                  placeholder="FirstName **"
                />
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  id="lastName"
                  type="text"
                  className="bg-primary px-3 h-[48px]"
                  placeholder="LastName"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  autoComplete="email"
                  type="email"
                  className="bg-primary px-3 h-[48px]"
                  placeholder="E-mail Address **"
                />
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  id="phoneNumber"
                  type="text"
                  className="bg-primary px-3 h-[48px] focus:border-accent"
                  placeholder="PhoneNumber"
                />
              </div>
              <textarea
                onChange={(e) => setTextArea(e.target.value)}
                value={textArea}
                id="textarea"
                className="h-[200px] bg-primary px-3 py-4"
                placeholder="Type Your Message Here **"
              />
              <button
                type="submit"
                className="md:w-40 sm:w-32 sm:text-sm md:text-lg bg-accent rounded-full py-3"
              >
                Send Message
              </button>
              <div>Starred(**) fields are necessary to fill</div>
            </form>
          </div>
          <div className="flex flex-col order-1 xl:order-none">
            <div className="flex-1 flex items-center xl:justify-end mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="md:text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Social containerStyles="flex gap-6 xl:relative xl:bottom-36" iconStyles="xl:w-16 xl:h-16 sm:w-12 sm:h-12 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 xl:text-[30px] sm:text-[22px]" />
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {error && error.map((e, index) => (
          <div key={index} className={`${success ? "text-green-600" : "text-red-600"} px-5 py-3`}>
            {e}
          </div>
        ))}
      </Modal>
    </motion.section>
  );
};

export default Contact;
