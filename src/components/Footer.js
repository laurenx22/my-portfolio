import React from "react";
import styled from "styled-components";

//style main footer- background colro, text color, add padding, center align text, change font size
const FooterContainer = styled.footer`
  background: #1a1a1a;
  color: #fff;
  padding: 2rem;
  text-align: center;
  font-size: 0.9rem;
  margin-top: auto;
`;

//style text- no margin, chamge text color
const FooterText = styled.p`
  margin: 0;
  color: #aaa;
`;

//main footer content
const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Lauren's Portfolio</FooterText>
    </FooterContainer>
  );
};

export default Footer;
