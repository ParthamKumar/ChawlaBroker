import React,{useRef,useState} from 'react';
import './contacts.css'
import {MdOutlineMail} from 'react-icons/md'
// import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
// import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contacts = () => {
  const form = useRef();

  const [message,setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_b313ooi', 'template_d8whrkw', form.current, 'geUNoJwh8YLGd8_Nw')
      .then((result) => {
        console.log(result.text);
        setMessage({ type: 'success', text: 'Message sent successfully!' });
      })
      .catch((error) => {
        console.log(error.text);
        setMessage({ type: 'error', text: 'Error sending message. Please try again later.' });
      })
      .finally(() => {
        e.target.reset();
        setTimeout(() => {
          setMessage(null);
        }, 5000); // Clear the message after 5 seconds
      });
  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>chawlabroker1@gmail.com</h5>
            <a href="mailto:chawlabroker1@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          {/* <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Partham</h5>
            <a href="https://m.me/partham.chawla.313/" target='_blank' rel="noreferrer">Send a message</a>
          </article> */}

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+92 xxx-xxxx123</h5>
            <a href="https://api.whatsapp.com/send?phone=+923111710549" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* //////////////////////// */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email'placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

        {message && (
          <div className={`message ${message.type === 'success' ? 'success' : 'error'}`}>
            {message.text}
          </div>
        )}
      </div>
    </section>
  )
}

export default Contacts
