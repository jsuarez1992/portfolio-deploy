// components/Footer.jsx

import React, { useState } from 'react'; // Import useState
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';
import { socials } from '../constants';

const Footer = () => {
  const [email, setEmail] = useState(''); // State for the email
  const [message, setMessage] = useState(''); // State for the message
  const [firstName, setFirstName] = useState(''); // State for the first name, if needed

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message, firstName }), // Send state variables
    });

    const data = await response.json();
    if (response.ok) {
      // Handle success
      console.log('Email sent successfully:', data);
    } else {
      // Handle error
      console.error('Error sending email:', data);
    }
  };
  return (
    <motion.footer
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.paddings} py-8`}
  >
    <form onSubmit={handleSubmit}>
    <div className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-12`}>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-1 flex flex-col gradient-05 gap-6 p-8 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <h4 className="font-bold sm:text-[48px] text-[32px] text-white">
          Get in touch
        </h4>
        <input
          type="email"
          placeholder="Your email"
          className="py-2 px-4 rounded-[32px] bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setEmail(e.target.value)}
          value={email}          
          required
        />
        <textarea
          placeholder="Your message"
          className="py-2 px-4 rounded-[32px] bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          rows="4"
          required
        />
            <button type="submit" className="flex items-center justify-center h-fit py-3 px-8 bg-[#34BEE6] rounded-[32px] gap-[12px]">
              <img
                src="/email.png"
                alt="Send button"
                className="w-[24px] h-[24px] object-contain"
              />
              <span className="font-normal text-[18px] text-white">
                Send
              </span>
            </button>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-1 flex justify-center items-center"
      >
        <img
          src="/contactme.png"
          alt="Contact"
          className="w-full lg:h-[610px] h-auto object-cover rounded-[40px]"
        />
      </motion.div>
    </div>
    </form>
    {/* Footer Section */}
    <div className="flex flex-col mt-12">
      <div className="mb-[50px] h-[2px] bg-white opacity-10" />

      <div className="flex items-center justify-between flex-wrap gap-4">
        <h4 className="font-extrabold text-[24px] text-white">
          JESSICA SUAREZ
        </h4>
        <p className="font-normal text-[14px] text-white opacity-50">
          Images from Vecteezy and Freepik.
        </p>

        <div className="flex gap-4">
          {socials.map((social) => (
            <a key={social.name} href={social.linkUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  </motion.footer>    
  );
          };

export default Footer;
