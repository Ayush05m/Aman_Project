import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Introduction = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="w-full h-full flex flex-col items-center justify-center p-8 bg-background"
    >
      <motion.h2 variants={itemVariants} className="text-4xl font-bold text-primary mb-8">
        Introduction
      </motion.h2>
      
      <motion.div variants={itemVariants} className="max-w-4xl text-center text-lg text-foreground/80 space-y-4">
        <p>As India's urban centers expand, so does the demand for sustainable energy. Solar photovoltaic (PV) systems present a viable solution, but their efficiency is highly dependent on installation parameters, particularly the tilt angle of the panels.</p>
        <p>This project addresses the critical need for optimizing solar energy generation in urban residential settings. We aim to determine the ideal monthly, seasonal, and yearly fixed-tilt angles for PV panels across India's diverse climatic zones to maximize energy capture and ensure a higher return on investment for sustainable urban development.</p>
      </motion.div>
    </motion.div>
  );
};

export default Introduction;