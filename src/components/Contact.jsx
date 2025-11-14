import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl space-y-8'
      >
        <div>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
        </div>

        <div className='flex flex-col gap-6 text-white'>
          <div>
            <p className='text-secondary text-sm uppercase tracking-wider mb-2'>
              Name
            </p>
            <p className='text-lg font-semibold text-white'>Om Sorathiya</p>
          </div>

          <div>
            <p className='text-secondary text-sm uppercase tracking-wider mb-2'>
              Email
            </p>
            <a
              href='mailto:sorathiyaom1@gmail.com'
              className='text-lg font-semibold text-white hover:text-[#915EFF] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:translate-x-1 inline-block'
            >
              sorathiyaom1@gmail.com
            </a>
          </div>

          <div>
            <p className='text-secondary text-sm uppercase tracking-wider mb-2'>
              Phone
            </p>
            <a
              href='tel:+919978999676'
              className='text-lg font-semibold text-white hover:text-[#915EFF] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:translate-x-1 inline-block'
            >
              +91 99789 99676
            </a>
          </div>

          <div>
            <p className='text-secondary text-sm uppercase tracking-wider mb-2'>
              LinkedIn
            </p>
            <a
              href='https://www.linkedin.com/in/om-sorathiya-94b148318?utm_source=share_via&utm_content=profile&utm_medium=member_android'
              target='_blank'
              rel='noreferrer'
              className='text-lg font-semibold text-white hover:text-[#915EFF] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:translate-x-1 inline-block'
            >
              linkedin.com/in/om-sorathiya-94b148318
            </a>
          </div>

          <div>
            <p className='text-secondary text-sm uppercase tracking-wider mb-2'>
              GitHub
            </p>
            <a
              href='https://github.com/Om-Sorathiya01'
              target='_blank'
              rel='noreferrer'
              className='text-lg font-semibold text-white hover:text-[#915EFF] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:translate-x-1 inline-block'
            >
              github.com/Om-Sorathiya01
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
