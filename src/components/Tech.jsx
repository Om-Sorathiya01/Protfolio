import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <motion.div
          key={technology.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className='flex flex-col items-center gap-4'
        >
          <div className='w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40'>
            <BallCanvas icon={technology.icon} />
          </div>
          <span className='text-white font-semibold tracking-wide text-sm sm:text-base text-center transition-colors duration-300 hover:text-[#915EFF]'>
            {technology.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
