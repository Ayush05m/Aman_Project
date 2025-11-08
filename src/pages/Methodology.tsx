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
    { title: "Data Collection", description: "Gathered monthly average daily solar radiation data on a horizontal surface for cities representing each of India's five climatic zones." },
    { title: "ASHRAE Model Implementation", description: "Employed the isotropic sky model from ASHRAE to calculate the total solar radiation on a tilted surface, considering beam, diffuse, and reflected components." },
    { title: "Declination Angle Calculation", description: "Calculated the solar declination angle (δ) for the average day of each month using standard astronomical formulas." },
    { title: "Optimization Algorithm", description: "Developed a computational script to iterate through tilt angles from 0° to 90° for each month, identifying the angle that maximizes the calculated total solar radiation." },
    { title: "Analysis and Recommendation", description: "Analyzed the results to determine the optimal tilt for each month, and aggregated this data to propose optimal seasonal and yearly fixed-tilt angles." },
];

const Methodology = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-background">
      <motion.h2 initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} className="text-4xl font-bold text-primary mb-12">
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
                <div className="flex-shrink-0 bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
                    {index + 1}
                </div>
                <div>
                    <h4 className="font-semibold text-lg text-foreground">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                </div>
            </motion.li>
        ))}
      </motion.div>
    </div>
  );
};

export default Methodology;