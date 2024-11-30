import { createContext, useContext, useState } from "react";
import { all_themes } from "./sample-themes";

export type TTheme = (typeof all_themes)[0];

// Create theme context
const ThemeContext = createContext({
  theme: all_themes[0],
  setTheme: (theme: TTheme) => {},
});

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 fixed bottom-0 left-0 right-0 bg-white p-4  ">
        {Object.keys(all_themes).map((_theme, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full cursor-pointer ${
              theme.id === index + 1 ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => setTheme(all_themes[index])}
          >
            <div
              className="w-full h-full rounded-full text-xl"
              style={{
                background: `linear-gradient(to right, ${all_themes[index].colors.primary.gradient.from}, ${all_themes[index].colors.primary.gradient.to})`,
              }}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
};

// Theme provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemed] = useState(all_themes[0]);
  const setTheme = (theme1: TTheme) => {
    console.log("theme1", theme1);
    setThemed(theme1);
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
