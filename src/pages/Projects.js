import React from "react";
import styled from "styled-components";

//style the page- add padding, limit width, center
const ProjectSection = styled.div`
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

//style the project card that holds each project- color the background, text color black, padding, add a margin, add a border
const ProjectCard = styled.div`
  background:rgb(75, 155, 142);
  color: black;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 8px;
`;

//style the images- use the width, limit the height, object fit, add a border
const ProjectImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

//content for the projects page
const Projects = () => {
  return (
    <ProjectSection>
      <h1>Projects</h1>

      <ProjectCard>
        <h3>Social Platforms Class Project</h3>
        <ProjectImage src="/project1.png" alt="Project One" />
        <p>The purpose of this assignment was to create a fake business and then make an Instagram account for it. You wanted to use different forms of posting to connect with users. I posted stories, photos, and reels. I designed everything from the logo, the menu, all the graphics, and the bio.</p>
        <a href="https://www.instagram.com/laurens.pizza.truck/?hl=en" target="_blank" rel="noopener noreferrer">View Instagram Page</a>
      </ProjectCard>

      <ProjectCard>
        <h3>User Centered Design Class Project</h3>
        <ProjectImage src="/project2.png" alt="Project Two" />
        <p>The goal of the project was to create an improved or new platform that was completely made around the user. You were in a group for the semester and you went through the entire design process for the project. With the group you came up with the idea, prototypes, and testing.</p>
        <a href="https://drive.google.com/file/d/1FKIjaD4uERseQ8goqYMVfK2aT_HO3jV0/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Final Report PDF</a>
      </ProjectCard>

      <ProjectCard>
        <h3>Server Side Class Project</h3>
        <ProjectImage src="/project3.png" alt="Project Three" />
        <p>This project was to a form that used cookies, form processing, and empty field validation. This form makes sure each field is filled in and gives warnings if something isn't filled in. Once you submit the form it takes you do a confirmation page where you can either move on or go back and edit the page. This was made using PHP, HTML, and CSS.</p>
        <a href="https://students.gaim.ucf.edu/~la888446/dig3134c/assignment02/assignment02-part1/form_all.php" target="_blank" rel="noopener noreferrer">View Form</a>
      </ProjectCard>
    </ProjectSection>
  );
};

export default Projects;
