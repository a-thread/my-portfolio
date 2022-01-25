import { createContext } from "react";

export const themes = {
    color: "",
    contrast: "contrast",
};

export const ThemeContext = createContext({
    theme: themes.color,
    changeTheme: (theme: any) => { },
});