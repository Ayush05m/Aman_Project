import { motion } from "framer-motion";

// Variants for the CSS-styled sun
const sunVariants = {
  day: {
    opacity: 1,
    background: "radial-gradient(circle, #FFFFFF 20%, #FFD700 60%, #FFA500 100%)",
    boxShadow: "0 0 40px 10px #fff, 0 0 70px 20px #ffc72c, 0 0 120px 30px #f09819",
    scale: 1,
  },
  evening: {
    opacity: 1,
    background: "radial-gradient(circle, #FFEDA0 20%, #FF8C00 70%, #D2691E 100%)",
    boxShadow: "0 0 40px 10px #ffccbc, 0 0 70px 20px #ff9f80, 0 0 120px 30px #ef6c00",
    scale: 1.05,
  },
  night: {
    opacity: 0,
    scale: 1.05,
    transition: { duration: 3, ease: "easeInOut" }, // Sun fades out smoothly
  },
};

// Variants for the moon image, with a refined transition
const moonVariants = {
  day: { opacity: 0, transition: { duration: 2 } },
  evening: { opacity: 0, transition: { duration: 2 } },
  night: {
    opacity: 1,
    filter: "brightness(1.1) drop-shadow(0 0 25px #e0e0e0) drop-shadow(0 0 40px #bdbdbd)",
    transition: { duration: 4, ease: "easeInOut", delay: 1 }, // Moon fades in after sun starts fading
  },
};

// Variants for the atmospheric haze/reflection
const reflectionVariants = {
  day: { opacity: 0.2 },
  evening: { opacity: 0.1 },
  night: { opacity: 0.1 },
};

const CelestialBody = ({
  timeOfDay,
}: {
  timeOfDay: "day" | "evening" | "night";
}) => {
  return (
    <motion.div
      className="absolute top-16 right-16 w-32 h-32"
      transition={{ duration: 5, ease: "easeInOut" }}
    >
      {/* Sun Div (no image) */}
      <motion.div
        className="absolute inset-0 w-full h-full rounded-full"
        variants={sunVariants}
        animate={timeOfDay}
        transition={{ duration: 5, ease: "easeInOut" }}
      />

      {/* Moon Image */}
      <motion.img
        src="/moon.png"
        alt="Moon"
        className="absolute inset-0 w-full h-full object-cover rounded-full"
        variants={moonVariants}
        animate={timeOfDay}
      />

      {/* Slow rotation animation */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />

      {/* Atmospheric haze/reflection effect */}
      <motion.div
        className="absolute -inset-1/2 w-[200%] h-[200%]"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 40%, ${
            timeOfDay === "night"
              ? "rgba(200,200,255,0.1)"
              : "rgba(255,255,200,0.2)"
          } 45%, transparent 55%)`,
        }}
        variants={reflectionVariants}
        animate={timeOfDay}
        transition={{ duration: 5, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default CelestialBody;