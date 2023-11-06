import React from "react"
import { styles } from '../styles';
import { SectionWrapper } from '../HOC'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from "../utils/motion";
import { contact } from '../constants'
import { home, phone, email } from"../assets";
import "./ContactForm.css";

const Contact = () => {
  return(
    <div className="flex-col pt-[var(--padding-13xl)] pb-[var(--padding-13xl)] justify-start gap-[var(--gap-21xl)] text-center text-[length:var(--font-size-13xl)] text-[color:var(--c3)] px-0;">
      <div className="m-[24px]">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}
            >Get in Touch</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className={styles.sectionSubText}
          >
            Let us know how we can help
          </motion.p>
        </div>
      <div className="form-wrapper">
        <div className="form">
          <div className="reach-us">Reach Us</div>
          <div className="input-wrapper">
            <img className="relative w-[29px] h-[29px]" alt="" src={phone} />
            <div className="reach-us">{contact.phone}</div>
          </div>
          <div className="input-wrapper">
            <img className="relative w-[29px] h-[29px]" alt="" src={email} />
            <div className="form-block-label1">{contact.email}</div>
          </div>
          <div className="textarea-wrapper">
            <div className="icon-home">
              <img className="relative w-[29px] h-[29px]" alt="" src={home} />
            </div>
            <div className="form-block-label2">{contact.location}</div>
          </div>
        </div>
        <div className="form1">
          <div className="send-your-request">Send your request</div>
          <form action="https://public.herotofu.com/v1/3100d380-7c36-11ee-892a-477781dfceee" method="post" accept-charset="UTF-8">
            <div>
              <label for="name">Your Name</label>
              <input name="Name" id="name" type="text" required />
            </div>
            <div>
              <label for="email">Your Email</label>
              <input name="Email" id="email" type="email" required  />
            </div>
            <div>
              <label for="message">Your Message</label>
              <input name="Message" id="message" type="text" required  />
            </div>
            <div>
              <input type="submit" value="Download CTA" />
              <div className ="indent-[-99999px] whitespace-nowrap overflow-hidden absolute" aria-hidden="true">
                <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <iframe title="Location" src={contact.mapid} width="1150" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default SectionWrapper(Contact, "Contact")