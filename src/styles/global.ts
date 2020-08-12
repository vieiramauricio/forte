import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    list-style: none;
  }
  button {
    border: none;
  }
  img {
    display: block;
    height: auto;
    max-width: 100%;
  }
  html {
    font-size: 16px;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    text-rendering: optimizeLegibility;
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: "Raleway", Arial, Helvetica, sans-serif;
    line-height: 115%;
    color: #0F0F0F;
    font-weight: 400;
  }
  p {
    font-size: 1rem;
    line-height: 125%;
    color: #1F1F1F;
  }
`;
