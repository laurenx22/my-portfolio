import React from "react";
import styled from "styled-components";

//style the home container - holds the entire home page
const HomeContainer = styled.div`
  background-image: url('/background.JPG');
  background-size: cover;
  background-position: center;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

//style my title font- larger font size, margin added, white text color
const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
    color: white;
`;

//style my subtitle font- smaller font size, keep text from going wide, white text color
const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  color: white;
`;

//home page content
const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to My Portfolio</Title>
      <Subtitle>I'm Lauren, a current student at the University of Central Florida majoring in Digital Media. I graduate in Spring 2026 and plan to work in sports doing social media.</Subtitle>
    </HomeContainer>
  );
};

export default Home;

  