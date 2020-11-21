import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-background: #312e38;
    --color-primary-light: #ffc146;
    --color-primary: #ff9000;
    --color-primary-dark: #cc7300;

    --color-text-primary: #FFFFFF;
    --color-text-secundary: #cccccc;
    --color-text-button: #312e38;
    --color-box-base: #3a3743;
    --color-box-line-footer: #27242c;

    --color-success: #22bb33
    --color-danger: #bb2124
    --color-info: #5bc0de
    --color-warning: #f0ad4e
}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color-background);
    color: var(--color-text-primary);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100%;
  }

  body, input, textarea, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
