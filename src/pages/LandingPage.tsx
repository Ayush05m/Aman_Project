import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const LandingPage = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center text-center p-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-white to-yellow-100 dark:from-slate-900 dark:via-blue-900 dark:to-gray-900 transition-colors duration-700" />
      
      <div className="relative z-10">
        <motion.button
          onClick={toggleTheme}
          className="mb-8 p-4 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-sm shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            {theme === "light" ? (
              <Sun className="text-yellow-500" size={64} />
            ) : (
              <Moon className="text-slate-300" size={64} />
            )}
          </motion.div>
        </motion.button>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 dark:from-yellow-400 dark:to-orange-300 text-transparent bg-clip-text"
        >
          Solar Energy Optimization for Urban Utilization
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300"
        >
          Maximizing Photovoltaic Efficiency in Indian Climatic Zones
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LandingPage;