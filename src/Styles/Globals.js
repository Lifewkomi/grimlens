import { createGlobalStyle } from "styled-components";
import "@fontsource-variable/cinzel";
import "@fontsource-variable/grandstander";

const GlobalStyles = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    ::-webkit-scrollbar {
    width: 12px;
    }

    ::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 6px;
    border: 2px solid #f1f1f1;
    }

    ::-webkit-scrollbar-track {
    background-color: #fff;
    }

    body {
    scrollbar-width: thin;
    scrollbar-color: #000 #f1f1f1;
    background-color: ${props => props.theme.Body};
    }
`;

export default GlobalStyles;
