import Image from "next/image";
import { TiSocialFacebook,  } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="back-contactform">
      <div className='contactform'>
        <div className="contact">
          <h2 className='flex justify-center mt-7'>Let's Get in Touch</h2>
          <p className='flex justify-center pl-2 pr-2'>Feel free to contact us with any questions or comments you may have. We will get back to you as soon as possible.</p>
          <Image className="imgcontact mb-5 mt-5" src="/assets/model-pour-contact-form.png" width={765} height={480} alt="" quality={100} />
          <div className="social-links">
            <span className="txtsocial">
              Connect with us on social media:
            </span>
            <ul className="socialmedia flex gap-3 mt-4">
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <TiSocialFacebook className="text-[30px]"/>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <RiTwitterXLine  className="text-[30px]"/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram  className="text-[30px]"/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-[30px]"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="submitform">
          <form className="form">
          <h2 className='flex justify-center text-white mb-7'>Contact Us !</h2>
            <div className="form-group">
              <h4 className='text-white' htmlFor="name">Name:</h4>
              <input className="input-box h-[30px]" type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <h4 className='text-white' htmlFor="email">Email:</h4>
              <input className="input-box h-[30px]" type="email" id="email" name="email" placeholder="Your email" required />
            </div>
            <div className="form-group">
              <h4  className='text-white' htmlFor="message">Message:</h4>
              <textarea className="input-box h-[60px]" id="message" name="message" placeholder="Your message" required></textarea>
            </div>
            <button className='btn w-full xl:max-w-[150px] h-[40px] btn-accent rounded-full'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact