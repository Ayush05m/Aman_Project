import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator as CalculatorIcon, Sun, Thermometer, Snowflake } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// Average day of the year for each month
const monthData = [
  { name: "January", n: 17 }, { name: "February", n: 47 }, { name: "March", n: 75 },
  { name: "April", n: 105 }, { name: "May", n: 135 }, { name: "June", n: 162 },
  { name: "July", n: 198 }, { name: "August", n: 228 }, { name: "September", n: 258 },
  { name: "October", n: 288 }, { name: "November", n: 318 }, { name: "December", n: 344 },
];

const calculateDeclination = (n: number) => {
  return 23.45 * Math.sin((Math.PI / 180) * (360 / 365) * (284 + n));
};

const CalculatorPage = () => {
  const [latitude, setLatitude] = useState(28.7); // Default to Delhi
  const [selectedMonth, setSelectedMonth] = useState("July");
  const [results, setResults] = useState<Record<string, string | number> | null>(null);

  const handleCalculate = () => {
    const month = monthData.find(m => m.name === selectedMonth);
    if (!month) return;

    const declination = calculateDeclination(month.n);
    const optimalTilt = latitude - declination;

    setResults({
      "Selected Latitude (L)": latitude.toFixed(2),
      "Solar Declination (δ)": declination.toFixed(2),
      "Optimal Monthly Tilt (β)": optimalTilt.toFixed(2),
      "Yearly Fixed Tilt (≈ L)": latitude.toFixed(2),
      "Optimal Summer Tilt (L - 15°)": (latitude - 15).toFixed(2),
      "Optimal Winter Tilt (L + 15°)": (latitude + 15).toFixed(2),
    });
  };

  const resultCards = useMemo(() => {
    if (!results) return null;
    return [
      { icon: <Sun className="text-accent" />, title: "Optimal for " + selectedMonth, value: `${results["Optimal Monthly Tilt (β)"]}°` },
      { icon: <Thermometer className="text-red-500" />, title: "Optimal Summer Tilt", value: `${results["Optimal Summer Tilt (L - 15°)"]}°` },
      { icon: <Snowflake className="text-blue-500" />, title: "Optimal Winter Tilt", value: `${results["Optimal Winter Tilt (L + 15°)"]}°` },
    ];
  }, [results, selectedMonth]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="w-full h-full flex items-center justify-center p-4 md:p-8 bg-background"
    >
      <Card className="w-full max-w-5xl bg-card/80 backdrop-blur-sm border-primary/20 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary">
            Solar Panel Tilt Angle Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants} className="space-y-6 p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="latitude">Site Latitude (degrees)</Label>
                <span className="font-bold text-primary text-lg">{latitude.toFixed(1)}°</span>
              </div>
              <Slider id="latitude" min={-90} max={90} step={0.1} value={[latitude]} onValueChange={(val) => setLatitude(val[0])} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="month">Month</Label>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger id="month">
                  <SelectValue placeholder="Select a month" />
                </SelectTrigger>
                <SelectContent>
                  {monthData.map(m => <SelectItem key={m.name} value={m.name}>{m.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleCalculate} className="w-full text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
              <CalculatorIcon className="mr-2 h-5 w-5" /> Calculate Optimal Angle
            </Button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className={`p-6 bg-muted/50 rounded-lg h-full transition-all duration-300`}>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Recommendations</h3>
              {results ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {resultCards?.map(card => (
                      <div key={card.title} className="p-4 bg-card rounded-lg text-center shadow">
                        {card.icon}
                        <p className="text-sm text-muted-foreground mt-2">{card.title}</p>
                        <p className="text-2xl font-bold text-primary">{card.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-card rounded-lg shadow">
                    <h4 className="font-semibold">Year-Round Performance</h4>
                    <p className="text-sm text-muted-foreground">For a fixed, non-adjustable setup, a tilt angle of approximately <strong className="text-primary">{results["Yearly Fixed Tilt (≈ L)"]}°</strong> is generally recommended for balanced, year-round energy production at this latitude.</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <p>Enter site latitude and select a month to begin.</p>
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