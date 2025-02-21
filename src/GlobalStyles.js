import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body {
  background: linear-gradient(to bottom, #1b1b1b, #2c2c2c); /* Dark gradient */
  color: #e0e0e0; /* Light text for readability */
  font-family: 'Poppins', sans-serif;
}

a {
  color: #f8b400; /* Elegant golden for links */
  text-decoration: none;
}

a:hover {
  color: #ffd700; /* Brighter gold on hover */
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
