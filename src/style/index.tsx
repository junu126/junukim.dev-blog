import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme,
} from "styled-components";
import './style.css';

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  @import url(https://cdn.rawgit.com/kattergil/NotoSerifKR-Web/76eb9ebf/stylesheet/NotoSerif-Web.css);

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Noto Serif KR', sans-serif;
  }

  body,
  a,
  div,
  span,
  small,
  p,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #343a40;
    margin: 0;
    padding: 0;
  }

  a {
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #ffa94d;
    }
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;