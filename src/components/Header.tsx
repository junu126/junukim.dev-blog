import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Header: React.SFC = () => (
  <Wrapper>
    <Me>
      <Link to="/">🧩 junukim.dev</Link>
    </Me>
    <h2>
      <Account
        href="https://www.notion.so/junukimdev/JunWoo-Kim-4dd5aa8f71474512b4d4a7875d3fde9d"
        target="_blank"
      >
        이력서
      </Account>
      <small>{" 그리고 "}</small>
      <Account
        href="https://www.notion.so/junukimdev/JunWoo-Kim-e0b1eb5322cd49df97544ee442df4f86"
        target="_blank"
      >
        포트폴리오
      </Account>
    </h2>
  </Wrapper>
);

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;

  > h2 {
    margin-top: 0px;
    font-size: 15px;
    line-height: 27px;
  }
`;

const Me = styled.h2`
  > a {
    &:hover {
      color: inherit;
    }

    box-shadow: none;
    text-decoration: none;
    color: inherit;
  }
`;

const Account = styled.a`
  color: #ffc078;
`;
