import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    background-color: #f5f5f5;
    color: #333;
    margin: 0;
    padding-top: 80px; /* Space for fixed navbar */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  @media (max-width: 768px) {
    nav {
      flex-direction: column;
      text-align: center;
    }

    nav a {
      display: block;
      padding: 10px;
    }

    img {
      max-width: 90%;
    }
  }
`;

export default GlobalStyles;
