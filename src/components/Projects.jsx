import BlurText from "./Common/BlurText/BlurText";
import ProjectCard from "./Common/ProjectCard/ProjectCard";
// Images
import p1 from '../assets/projects/p1.png';
import p2 from '../assets/projects/p2.png';
import p3 from '../assets/projects/p3.png';

const Projects = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <div id="projects" className="bg-[#fdfcdc] text-[#293241] pb-10">
            <BlurText
                text="PROJECTS"
                delay={200}
                animateBy="letters"
                direction="bottom"
                onAnimationComplete={handleAnimationComplete}
                className="flex justify-center text-4xl font-semibold py-10"
            />

            <div>
                <ProjectCard photoUrl={p1} projectTitle="PokéVerse" projectDetails="PokéVerse BD is a fully functional anime-themed online store built using the MERN stack, designed to deliver a smooth, responsive, and engaging e-commerce experience. The platform allows users to browse anime merchandise, view product details, manage their cart, and securely complete orders — all wrapped in a modern UI optimized for performance and usability. The client-side is developed using React and Tailwind CSS, while the backend is powered by Node.js, Express.js, and MongoDB, ensuring fast API responses and reliable data management. The site is deployed and accessible live at pokeversebd.shop." liveSiteLink="https://pokeversebd.shop/" codeLink="https://github.com/mdadib300/poke-verse-client"></ProjectCard>

                <ProjectCard photoUrl={p2} projectTitle="XPoint" projectDetails="XPoint BD is a modern, fully responsive e-commerce platform built using the MERN stack, designed to provide a smooth, fast, and visually appealing online shopping experience. The website allows users to explore products, view detailed information, filter by category, and manage their shopping cart with ease — all within a clean and user-friendly interface optimized for performance and accessibility. The frontend is developed using React and Tailwind CSS for a sleek, contemporary UI, while the backend is built with Node.js, Express.js, and MongoDB to ensure efficient data handling and reliable API performance. The live site is deployed at xpointbd.com, showcasing a complete end-to-end MERN e-commerce application." liveSiteLink="https://xpointbd.com/" codeLink="https://github.com/mdadib300/xpoint-client"></ProjectCard>

                <ProjectCard photoUrl={p3} projectTitle="Ripon's Profile" projectDetails="This is a modern, fully responsive personal portfolio website built with React and Tailwind CSS, designed to highlight professional skills, projects, and achievements with a clean and polished UI. The site provides a smooth browsing experience with well-structured sections such as About, Skills, Projects, and Contact, making it easy for visitors to explore the person's work and expertise. The project focuses on minimalistic design, fast performance, and clear presentation. Deployed on Netlify, the portfolio showcases a developer-friendly workflow, reusable components, and optimized responsiveness across all devices. The full source code is available on GitHub." liveSiteLink="https://md-ripon.netlify.app/" codeLink="https://github.com/mdadib300/portfolio-md-ripon"></ProjectCard>
            </div>
        </div>
    );
};

export default Projects;