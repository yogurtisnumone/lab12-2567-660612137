import { ThemeContext } from "@contexts/ThemeContext";
import { useContext } from "react";
import { LangContext } from "@contexts/LangContext";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <p className="text-center" style={{ color: theme.fgColor }}>
        Display activated theme message here (EN or TH)
        {/* tip: Get information from "theme" variable to determine 
    which theme is currently selected */}
        if(  theme.name === "dark"){
          
        }
      </p>
    </div>
  );
};
