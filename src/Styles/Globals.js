import { createGlobalStyle } from "styled-components";
import '@fontsource-variable/cinzel';
import "@fontsource/sirin-stencil";
import NeueMontrealRegular from '../fonts/NeueMontreal-Regular.otf';
import NeueMontrealBold from '../fonts/NeueMontreal-Bold.otf';
import NeueMontrealItalic from '../fonts/NeueMontreal-Italic.otf';

const Globals = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    @font-face {
      font-family: 'Neue Montreal';
      src: url(${NeueMontrealRegular}) format('opentype');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Neue Montreal';
      src: url(${NeueMontrealBold}) format('opentype');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'Neue Montreal';
      src: url(${NeueMontrealItalic}) format('opentype');
      font-weight: normal;
      font-style: italic;
    }
    

    ::-webkit-scrollbar {
    width: 12px;
    }

    ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.TextColor};
    border-radius: 6px;
    border: 2px solid;
    }

    ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.Body};
    }

    body {
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.TextColor};
    background-color: ${(props) => props.theme.Body};
    }
`;

export default Globals;
