import React from 'react'
import Image from "next/image";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="text-center p-10 py-10">
    <div className="mx-auto bg-gradient-to-b text-accent rounded-full w-80 h-80 relative overflow-hidden mt-5 md:h-96 md:w-96 mb-8">
      <Image src="/assets/Nael.png" layout="fill" objectFit="cover" />
    </div>
      <h2 className="text-5xl py-2 text-accent font-medium dark:text-accent md:text-6xl">
        Naël MABROUKI
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        CEO and developer.
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
      Dear Customers and Friends,<br/><br/>

      I wanted to take a moment to express my gratitude for your continued support of Bik-E. 
      Our passion for providing quality products and exceptional service remains at the heart of everything we do. 
      In this ever-changing world, we're always striving to innovate and improve your experience with us. 
      Your feedback is valuable, and we take it to heart in shaping the future of Bik-E. 
      Together, we've faced challenges and celebrated successes. Through these ups and downs, your loyalty has been a source of inspiration to us. 
      We remain committed to bringing you the most fashionable, durable and useful products, while maintaining the highest standards of customer service. 
      As CEO, I'm proud of our exceptional team who work tirelessly to meet your needs. 
      We will continue to look for ways to improve your online shopping experience with us. 
      Thank you again for your confidence. We look forward to continuing to grow with you and offering you exciting new discoveries on Bik-E.<br/><br/>

      Best regards!

      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <RiTwitterXLine  className="text-[30px]"/>
        <FaInstagram  className="text-[30px]"/>
        <FaLinkedinIn className="text-[30px]"/>
      </div>
    </div>

  )
}

export default AboutUs