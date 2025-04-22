import React from "react";
import styled from "styled-components";

//style the page- add padding, limit width, center
const ContactSection = styled.div`
  padding: 4rem 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

//style the input fields- full width, add padding, add margin, add border
const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: solid black;
  border-radius: 2px;
`;

//style the text are- full width, add padding, limit height, add border
const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  height: 150px;
  border: solid black;
  border-radius: 2px;
`;

//style the submit button- background color, text color white, add padding, no border
const Button = styled.button`
  background-color:rgb(75, 155, 142);
  color: white;
  padding: 0.8rem 2rem;
  border: none;
`;

//style social media links- add margin, center, set color
const SocialLinks = styled.div`
  margin-top: 2rem;
  text-align: center;

  a {
    color:rgb(75, 155, 142);
    margin: 0 1rem;
  }
`;

//content for contact page
const Contact = () => {
  return (
    <ContactSection>
      <h2>Contact Me!</h2>
      <form>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea placeholder="Your Message" required />
        <Button type="submit">Send</Button>
      </form>

      <SocialLinks>
        <a href="https://www.linkedin.com/in/lauren-taylor-994733219/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </SocialLinks>
    </ContactSection>
  );
};

export default Contact;
