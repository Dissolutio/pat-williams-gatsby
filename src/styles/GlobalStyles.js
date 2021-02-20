import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #111,
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --primary: #07c;
    --secondary: #05a;
    --accent: #07c;
    --muted: #737373;
    --bgAccent: rgba(0,0,0,0.1);
    --bgOpaque: rgba(255,255,255,0.9);
  }
  html {
    font-size: 10px;
  }
  body {
    font-size: 2rem;
  }

`

export default GlobalStyles
