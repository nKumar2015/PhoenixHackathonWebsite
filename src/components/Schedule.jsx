/* eslint-disable no-unused-vars */
import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../HOC";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { planning } from "../constants";
import { Link } from "react-router-dom";


const Schedule = () => {
  return (
    <div className="text-center flex flex-col items-center text-[length:var(--font-size-13xl)] text-[color:var(--c3)]">
      <div className="mb-[24px]">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Workshops</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.sectionSubText}`}
        >
          <span>
            For full schedule and more information:
            <Link
              to={`${planning}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 font-extrabold inline-flex hover:underline hover:text-white"
            >
              <span className="pl-1">Info Packet</span>
            </Link>
          </span>
        </motion.p>
      </div>
      <table className="mt-8 table table-auto border-collapse border-slate-500 text-white text-3xl">
        <thead>
          <tr>
            <th className="p-1 bg-tertiary border border-slate-600">Time</th>
            <th className="p-1 bg-tertiary border border-slate-600">
              Beginner
            </th>
            <th className="p-1 bg-tertiary border border-slate-600">
              Intermediate
            </th>
            <th className="p-1 bg-tertiary border border-slate-600">
              Advanced
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-1 border border-slate-600">9:25 - 10:25 AM</td>
            <td className="p-1 border border-slate-600">
              Intro to Cybersecurity - Bandit Over the Wire (L515)
            </td>
            <td className="p-1 border border-slate-600">Figma UI Design (L518)</td>
            <td className="p-1 border border-slate-600">
              Competitive Programming (L519)
            </td>
          </tr>
          <tr>
            <td className="p-1 border border-slate-600">10:30 - 11:30 AM</td>
            <td className="p-1 border border-slate-600">
              Intro to Python (L515)
            </td>
            <td className="p-1 border border-slate-600">
              Intro to Linux + VMs (L518)
            </td>
            <td className="p-1 border border-slate-600">
              Introduction to APIs (L519)
            </td>
          </tr>
          <tr>
            <td className="p-1 border border-slate-600">1:25 - 2:25 PM</td>
            <td className="p-1 border border-slate-600">
              Intro To HTML (L515)
            </td>
            <td className="p-1 border border-slate-600">
              Intro to CAD (L518)
            </td>
            <td className="p-1 border border-slate-600">
              Machine Learning with Python (L519)
            </td>
          </tr>
          <tr>
            <td className="p-1 border border-slate-600">3:35 - 4:35 PM</td>
            <td className="p-1 border border-slate-600">
              Intro to Java (L515)
            </td>
            <td className="p-1 border border-slate-600">
              Intro to React JS (L518)
            </td>
            <td className="p-1 border border-slate-600">
              Natural Language Processing (ML) (L519)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SectionWrapper(Schedule, "schedule");
