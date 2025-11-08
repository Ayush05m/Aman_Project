import { motion } from "framer-motion";
import { Target, Map, BarChart, Sun, Leaf } from 'lucide-react';
import React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const objectives = [
    { icon: <Target />, title: "Optimal Tilt Angle Calculation", description: "To compute the ideal monthly, seasonal, and annual tilt angles for PV panels to maximize solar radiation capture." },
    { icon: <Map />, title: "Climatic Zone Analysis", description: "To analyze solar insolation data across the five major climatic zones of India as defined by the National Building Code." },
    { icon: <BarChart />, title: "Data-Driven Modeling", description: "To utilize the ASHRAE model for estimating solar irradiance on tilted surfaces based on horizontal radiation data." },
    { icon: <Sun />, title: "Energy Yield Maximization", description: "To provide actionable recommendations that directly lead to increased energy output from urban solar installations." },
    { icon: <Leaf />, title: "Promote Urban Sustainability", description: "To create a practical tool that empowers homeowners and engineers to design more efficient and cost-effective solar systems." },
];

const Objectives = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-background">
      <motion.h2 initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} className="text-4xl font-bold text-primary mb-12">
        Project Objectives
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-6 max-w-6xl"
      >
        {objectives.map(obj => (
            <motion.div key={obj.title} variants={itemVariants} className="p-6 bg-card rounded-lg shadow-lg border text-center flex flex-col items-center">
                {React.cloneElement(obj.icon, { className: "text-primary h-10 w-10 mb-4" })}
                <h4 className="font-bold text-lg text-card-foreground mb-2">{obj.title}</h4>
                <p className="text-sm text-muted-foreground">{obj.description}</p>
            </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Objectives;