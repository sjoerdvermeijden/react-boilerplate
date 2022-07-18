import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root {
        --red: crimson;
        --lightgray: #efeeee;
        --gray: #b1b1b1;
        --darkgray: #333333;
    }
  
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: Verdana, Geneva, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 14px;
    }

    body {

    }

    h3 {
        font-size: 18px;
    }

`;