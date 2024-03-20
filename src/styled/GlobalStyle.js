import { createGlobalStyle } from "styled-components";

import robotoThinWoff2 from "../assets/fonts/Roboto-Thin.woff2";
import robotoThinWoff from "../assets/fonts/Roboto-Thin.woff";
import robotoThinTtf from "../assets/fonts/Roboto-Thin.ttf";

import robotoRegularWoff2 from "../assets/fonts/Roboto-Regular.woff2";
import robotoRegularWoff from "../assets/fonts/Roboto-Regular.woff";
import robotoRegularTtf from "../assets/fonts/Roboto-Regular.ttf";

import robotoBoldWoff2 from "../assets/fonts/Roboto-Bold.woff2";
import robotoBoldWoff from "../assets/fonts/Roboto-Bold.woff";
import robotoBoldTtf from "../assets/fonts/Roboto-Bold.ttf";

const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
  }
  body {
    background: #dce4ef;
    min-height: 100%;
    margin: 0;
    padding: 0;
    font-family: Roboto, Sans-Serif;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${robotoThinWoff2}) format('woff2'),
        url(${robotoThinWoff}) format('woff'),
        url(${robotoThinTtf}) format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Roboto';
    src: url(${robotoRegularWoff2}) format('woff2'),
        url(${robotoRegularWoff}) format('woff'),
        url(${robotoRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Roboto';
    src: url(${robotoBoldWoff2}) format('woff2'),
        url(${robotoBoldWoff}) format('woff'),
        url(${robotoBoldTtf}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

`;

export default GlobalStyle;
