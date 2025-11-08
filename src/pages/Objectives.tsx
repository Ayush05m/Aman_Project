import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Sun, Globe, DollarSign } from 'lucide-react';
import React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const objectives = [
    { icon: <CheckCircle />, title: "Determine Optimal Tilt Angles" },
    { icon: <TrendingUp />, title: "Optimize Installation Area" },
    { icon: <Sun />, title: "Apply ASHRAE Model" },
    { icon: <Globe />, title: "Reduce Carbon Footprint" },
    { icon: <DollarSign />, title: "Maximize Cost Savings" },
];

const Objectives = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-background">
      <motion.h2 initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-12">
        Project Objectives
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-8 max-w-5xl"
      >
        {objectives.map(obj => (
            <motion.div key={obj.title} variants={itemVariants} className="flex items-center gap-4 p-6 bg-card/80 backdrop-blur-sm rounded-lg shadow-lg border border-primary/20">
                {React.cloneElement(obj.icon, { className: "text-primary" })}
                <h4 className="font-semibold text-foreground">{obj.title}</h4>
            </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Objectives;