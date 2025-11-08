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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-900 transition-colors duration-700" />
      
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
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
        >
          Solar Optimization for Urban Residences
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-4 text-xl md:text-2xl text-gray-500 dark:text-gray-400"
        >
          Building a Sustainable Future
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LandingPage;