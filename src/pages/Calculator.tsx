import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator as CalculatorIcon } from "lucide-react";

const toRadians = (deg: number) => deg * (Math.PI / 180);

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const CalculatorPage = () => {
  const [latitude, setLatitude] = useState(21.25);
  const [dayOfYear, setDayOfYear] = useState(172);
  const [tiltAngle, setTiltAngle] = useState(21);
  const [results, setResults] = useState<Record<string, string> | null>(null);

  const handleCalculate = () => {
    const n = dayOfYear;
    const L = toRadians(latitude);
    const beta = toRadians(tiltAngle);
    const declinationAngleRad = toRadians(23.45 * Math.sin(toRadians((360 / 365) * (284 + n))));
    const hourAngleRad = 0; // Solar noon for simplicity
    const angleOfIncidenceRad = Math.acos(
      Math.sin(declinationAngleRad) * Math.sin(L - beta) +
      Math.cos(declinationAngleRad) * Math.cos(L - beta) * Math.cos(hourAngleRad)
    );
    
    setResults({
      "Declination Angle (δ)": `${(declinationAngleRad * 180 / Math.PI).toFixed(2)}°`,
      "Angle of Incidence at Noon (θ)": `${(angleOfIncidenceRad * 180 / Math.PI).toFixed(2)}°`,
      "Optimal Tilt (Year-round)": `${latitude.toFixed(2)}°`,
      "Optimal Tilt (Winter)": `${(latitude + 15).toFixed(2)}°`,
      "Optimal Tilt (Summer)": `${(latitude - 15).toFixed(2)}°`,
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="w-full h-full flex items-center justify-center p-4 md:p-8 bg-background"
    >
      <Card className="w-full max-w-4xl bg-card/80 backdrop-blur-sm border-primary/20 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Solar Angle Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="latitude">Latitude (degrees)</Label>
              <Input id="latitude" type="number" value={latitude} onChange={(e) => setLatitude(parseFloat(e.target.value) || 0)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dayOfYear">Day of the Year (1-365)</Label>
              <Input id="dayOfYear" type="number" value={dayOfYear} onChange={(e) => setDayOfYear(parseInt(e.target.value) || 0)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tiltAngle">Panel Tilt Angle (degrees)</Label>
              <Input id="tiltAngle" type="number" value={tiltAngle} onChange={(e) => setTiltAngle(parseFloat(e.target.value) || 0)} />
            </div>
            <Button onClick={handleCalculate} className="w-full text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
              <CalculatorIcon className="mr-2 h-5 w-5" /> Calculate
            </Button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className={`p-6 bg-muted/50 rounded-lg h-full transition-all duration-300 ${results ? 'opacity-100' : 'opacity-50'}`}>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Results</h3>
              {results ? (
                <ul className="space-y-3">
                  {Object.entries(results).map(([key, value]) => (
                    <li key={key} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{key}:</span>
                      <span className="font-bold text-primary">{value}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <p>Enter values and click calculate.</p>
                </div>
              )}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CalculatorPage;