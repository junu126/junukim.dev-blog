import React from "react";
import styled from "styled-components";

const Footer: React.SFC = () => {
  return (
    <Wrapper>
      <a href="https://github.com/junu126" target="_blank">
        Github
      </a>{" "}
      •{" "}
      <a href="https://velog.io/@_junukim" target="_blank">
        velog
      </a>
      <a href="/feed.xml" target="_blank">
        RSS
      </a>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  margin-top: 4.375rem;
  padding-top: 1.75rem;

  & > a:last-of-type {
    float: right;
  }
`;
