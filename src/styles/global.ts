import { createGlobalStyle } from "styled-components";
import Arnold from "../styles/fonts/Arnold.woff";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
    #root {
        margin:0 auto;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    @font-face {
        font-family: 'Arnold';
        src: local('Arnold'), local('Arnold'),
        url(${Arnold}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
 `;
