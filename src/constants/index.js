import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    mysql,
    git,
    carrent,
    jobit,
    weather,
    threejs,
    comicbook,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  

  
  const projects = [
    {
      name: "Weather Dashboard",
      description:
        "A basic app that allows you to see the weather for a specific searched or saved city using the OpenWeather API",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/sco5am/Server-Side-API-Weather-Dashboard",
      live_site: 'https://sco5am.github.io/Server-Side-API-Weather-Dashboard/'
    },
    {
      name: "The Comic-Book",
      description:
        "The Comic-Book allows users to share their favorite comic book characters, take daily quizes, and intigrates the Marvel API as well as the OMDB API.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: comicbook,
      source_code_link: "https://github.com/sco5am/team5-project1",
      live_site: 'https://sco5am.github.io/team5-project1/'
    },
  ];
  
  export { services, technologies,  projects };