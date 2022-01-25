import { useState } from "react";

export const themes = {
  color: "",
  contrast: "contrast",
};

export const useShareableState = () => {
  const [theme, setTheme] = useState("color");
  return {
    theme,
    setTheme,
  };
};
