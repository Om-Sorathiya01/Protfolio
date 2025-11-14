const springPreset = {
  type: "spring",
  stiffness: 100,
  damping: 25,
  mass: 0.8,
};

export const textVariant = (delay = 0) => {
  return {
    hidden: {
      y: -24,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ...springPreset,
        delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  const isSpring = type === "spring";
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay,
        duration: isSpring ? undefined : duration,
        ease: isSpring ? undefined : [0.25, 0.1, 0.25, 1],
        ...(isSpring ? springPreset : {}),
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  const isSpring = type === "spring";
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration: isSpring ? undefined : duration,
        ease: isSpring ? undefined : "easeOut",
        ...(isSpring ? springPreset : {}),
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
