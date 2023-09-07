import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    list-style: none;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
}
:root {
    --primaryFont: "Lato", sans-serif;
    --secondaryFont: "PT Sans", sans-serif;
    --extraFont: "Edu SA Beginner", sans-serif;
    --color1: color #025159;
    --color2: #2699a6;
    --color3: #f2cd5c;
    --color4: #f2e3d5;
    --navBar: #f2b28d;
}

body {
    background-color: #000;
    }

h1 {
    font-family: var(--secondaryFont);
}
a {
    cursor: pointer;
    text-decoration: none;
    color: #000;
}
`;
