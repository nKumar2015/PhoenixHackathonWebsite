/* eslint-disable no-unused-vars */
import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../HOC";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { contact } from "../constants";
import { address, email } from "../assets";

const Contact = () => {
  return (
    <div className="flex-col justify-start gap-[var(--gap-21xl)] text-center text-[length:var(--font-size-13xl)] text-[color:var(--c3)] px-0;">
      <div className="mb-[24px]">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Get in Touch</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={styles.sectionSubText}
        >
          Let us know how we can help
        </motion.p>
      </div>
      <div className="flex flex-col md:grid grid-rows-3 grid-cols-3 md:divide-x bg-tertiary rounded-[10px] pt-5 p-2">
        <div className="p-5 text-[length:var(--button-text-size)] text-[color:var(--c4)] self-stretch flex flex-col gap-y-2 text-left">
          <div className="relative pb-3 text-[length:var(--font-size-lg)] tracking-[0.02em] font-semibold">
            Reach Us
          </div>
          <div className="flex flex-col justify-start gap-[var(--gap-xs)]">
            <div className="flex flex-row items-center justify-start gap-[var(--gap-5xs)]">
              <img className="relative w-[20px] h-[20px]" alt="" src={email} />
              <div className="break-words max-w-[90%]">{contact.email}</div>
            </div>
            <div className="flex flex-row justify-start gap-[var(--gap-5xs)]">
              <img
                className="relative w-[20px] h-[20px]"
                alt=""
                src={address}
              />
              <div className="break-words max-w-[90%]">{contact.location}</div>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col p-5 gap-[var(--gap-base)] text-[color:var(--c4)] text-[length:var(--font-size-sm)] text-left">
          <div className="relative text-[length:var(--font-size-lg)] tracking-[0.02em] font-semibold">
            Got a question?
          </div>
          <form
            action="https://public.herotofu.com/v1/3100d380-7c36-11ee-892a-477781dfceee"
            method="post"
            acceptCharset="UTF-8"
          >
            <div className="flex flex-col justify-start gap-[var(--gap-xs)] text-[color:var(--c3)]">
              <input
                className="bg-white p-0.5 pl-1 rounded-[3px]"
                name="Name"
                placeholder="Your Full Name"
                id="name"
                type="text"
                required
              />
              <input
                className="bg-white p-0.5 pl-1 rounded-[3px]"
                name="Email"
                placeholder="Your Email"
                id="email"
                type="email"
                required
              />
              <textarea
                className="bg-white p-0.5 pl-1 rounded-[3px]"
                name="Message"
                placeholder="Your Message"
                id="message"
                type="text"
                required
              />
              <div className="bg-white py-1.5 px-6 w-fit text-black font-bold shadow-md shadow-primary rounded-[5px] hover:bg-primary hover:text-white">
                <input type="submit" value="Submit" />
                <div
                  className="indent-[-99999px] whitespace-nowrap overflow-hidden absolute"
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <iframe
          className="row-span-2 col-span-3 p-5 w-[100%] h-[100%]"
          title="Location"
          src={contact.mapid}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
