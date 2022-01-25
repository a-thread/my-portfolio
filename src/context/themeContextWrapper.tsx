import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './themeContext';

export default function ThemeContextWrapper(props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  const [theme, setTheme] = useState(themes.color);

  function changeTheme(theme: any) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.contrast:
        document.body.classList.add('contrast');
        break;
      case themes.color:
      default:
        document.body.classList.remove('contrast');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}