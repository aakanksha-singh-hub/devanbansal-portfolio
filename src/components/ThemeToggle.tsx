import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden hover:bg-teal/10 dark:hover:bg-teal/20 transition-all duration-300 btn-hover"
    >
      <Sun
        className={`h-5 w-5 text-teal transition-all duration-300 ${
          theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 text-teal/80 transition-all duration-300 ${
          theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
