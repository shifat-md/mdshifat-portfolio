// ==========================================
// PROJECTS DATA
// You can add your personal projects here when you are ready!
// For each project, simply add an object like:
// {
//   id: 1,
//   title: "Project Name",
//   category: "React", // or any category
//   description: "Brief summary of the project",
//   image: "https://your-image-url.com", // or an imported image
//   technologies: ["React.js", "CSS"],
//   github: "https://github.com/your-username/repo",
//   liveDemo: "https://your-demo-url.com",
//   featured: true
// }
// ==========================================

import ecomImage from '../assets/ecom.jpg';
import evenza from '../assets/evenza.jpg';

export const projectCategories = ["All", "React", "JavaScript", "Full Stack / API", "UI/UX"];

export const projects = [
  {
    id: 1,
    title: "Ecommerce Website",
    category: "React",
    description: "A fully responsive e-commerce website built with React and Node.js",
    technologies: ["React.js", "CSS"],
    image: ecomImage,
    github: "https://github.com/shifat-md",
    liveDemo: "https://ecom-five-tan.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Evenza Website",
    category: "React",
    description: "A fully responsive e-commerce website built with React and Node.js",
    technologies: ["React.js", "CSS"],
    image: evenza,
    github: "https://github.com/shifat-md",
    liveDemo: "https://evenza-web.vercel.app/",
    featured: true
  }
];