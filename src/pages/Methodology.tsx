import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const steps = [
    { title: "Literature Review", description: "Conduct a comprehensive review of existing studies on solar radiation, tilt angles, and installation area optimization." },
    { title: "Data Collection", description: "Gather climatic data, solar radiation levels, and geographical information for different zones in India." },
    { title: "Tilt Angle Calculation", description: "Use coding and the ASHRAE model to compute optimal tilt angles for solar panels based on solar radiation data." },
    { title: "Installation Area Calculation", description: "Develop and apply a code-based approach to determine the optimal installation area for maximizing solar energy generation." },
    { title: "Model Validation", description: "Validate the calculated tilt angles using simulations and compare them with existing models for accuracy." },
];

const Methodology = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <motion.h2 initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} className="text-4xl font-bold text-white mb-12" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        Methodology
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 max-w-3xl"
      >
        {steps.map((step, index) => (
            <motion.li key={index} variants={itemVariants} className="flex items-start gap-4 list-none">
                <div className="flex-shrink-0 bg-black/20 border border-white/20 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
                    {index + 1}
                </div>
                <div>
                    <h4 className="font-semibold text-lg text-white">{step.title}</h4>
                    <p className="text-white/80">{step.description}</p>
                </div>
            </motion.li>
        ))}
      </motion.div>
    </div>
  );
};

export default Methodology;