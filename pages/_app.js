import React, {useState} from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';
import ThemeContext from '../src/contexts/Theme'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const defaultTheme = db.theme;


const lightTheme = {
  "colors": {
    "primary": "#F2A9A2",
    "secondary": "#4EA675",
    "mainBg": "#F0E9D1",
    "contrastText": "#3E3640",
    "wrong": "#FF5722",
    "success": "#4CAF50"
  },
  "borderRadius": "4px"
}

export default function App({ Component, pageProps }) {
  const [theme, updateTheme] = useState(defaultTheme)

  const handleTheme = () => {
    updateTheme (theme =>{
      if (theme.colors.primary === '#47BFBF') {
        return lightTheme;
      }
      return defaultTheme;
    })
  }

  return (
    <ThemeContext.Provider value={{
      switchTheme: handleTheme,
    }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
