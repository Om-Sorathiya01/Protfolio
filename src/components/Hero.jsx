import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);

  useEffect(() => {
    // Try to load the profile photo, fallback to null if it doesn't exist
    const loadPhoto = async () => {
      try {
        const photo = await import("../assets/profile-photo.jpg");
        setProfilePhoto(photo.default);
      } catch (error) {
        // Photo doesn't exist, will show placeholder
        setProfilePhoto(null);
      }
    };
    loadPhoto();
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Profile Photo - Top Right Corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 100, y: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        className='absolute top-20 right-8 sm:right-12 md:right-16 lg:right-24 z-30'
      >
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className='relative'
        >
          <div className='absolute inset-0 bg-[#915EFF] rounded-full blur-2xl opacity-30 animate-pulse' />
          <div className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#915EFF]/50 shadow-2xl shadow-[#915EFF]/30 bg-gradient-to-br from-[#915EFF]/20 to-[#915EFF]/5'>
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt='Om Sorathiya'
                className='w-full h-full object-cover'
              />
            ) : (
              <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-[#915EFF]/10 to-[#915EFF]/5'>
                <div className='text-center'>
                  <div className='text-4xl mb-1'>👤</div>
                  <p className='text-white/50 text-[8px]'>Add photo</p>
                </div>
              </div>
            )}
          </div>
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className='absolute -inset-3 border-2 border-[#915EFF]/40 rounded-full'
          />
        </motion.div>
      </motion.div>

      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Om Sorathiya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a 2nd-year B.Tech CSE student who develops modern apps
            <br className='sm:block hidden' />
            and explores the world of AI &amp; ML.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
