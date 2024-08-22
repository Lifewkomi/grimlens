import { createGlobalStyle } from "styled-components";
import '@fontsource-variable/cinzel';
import "@fontsource/sirin-stencil";

const Globals = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    ::-webkit-scrollbar {
    width: 12px;
    }

    ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.TextColor};
    border-radius: 6px;
    border: 2px solid;
    }

    ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.Body};
    }

    body {
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.TextColor};
    background-color: ${props => props.theme.Body};
    }
`;

export default Globals;
