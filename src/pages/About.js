import React from "react";
import styled from "styled-components";

//style the page- 4rem padding to the bottom, 2rem on the sides, limit the width, center horizontally
const AboutSection = styled.div`
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

//style heading- font size, add bottom margin
const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

//style paragraph- bigger text, add margin
const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

//about page content
const About = () => {
  return (
    <AboutSection>
      <Heading>About Me</Heading>
      <Paragraph>
        I am currently a student at the University of Central Florida majoring in Digital Media. My expected graduation is Spring 2026. 
      </Paragraph>
      <Heading>Skills</Heading>
      <Paragraph>JavaScript, React, HTML, CSS, PHP, MySQL, Python, Adobe Photoshop, Adobe Premiere Pro, Adobe Lightroom, Canva, Meta Business Suite, Photography</Paragraph>
      <Heading>Interests</Heading>
      <Paragraph>Photography, Videography, Photo Editing, Video Editing, Social Media</Paragraph>
    </AboutSection>
  );
};

export default About;
