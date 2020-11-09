import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import Style from "../style";

const Layout: React.SFC = ({ children }) => (
  <Wrapper>
    <Style />
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Wrapper>
);

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 24px;
`;

const Content = styled.div`
  margin-top: 40px;
`;