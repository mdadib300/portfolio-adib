import ShortBtn from "../ShortBtn/ShortBtn";


const ProjectCard = ({photoUrl, projectTitle, projectDetails, liveSiteLink, codeLink}) => {
    return (
        <div className="hero px-2 lg:px-0 mb-5">
            <div className="hero-content flex-col lg:flex-row">

                <div className="hover-3d w-full lg:w-1/2">
                    <figure className="rounded-lg" >
                        <img src={photoUrl} alt="Project"
                        />
                    </figure>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className="w-full lg:w-1/2 ml-0 lg:ml-10">
                    <h1 className="text-3xl font-semibold">{projectTitle}</h1>
                    <p className="py-5">{projectDetails}</p>
                    <div className="flex">
                        <a href={liveSiteLink} target="_blank"><ShortBtn shortBtnText={'Live Site'}></ShortBtn></a>
                        <a href={codeLink} target="_blank"><ShortBtn shortBtnText={'Code Link'}></ShortBtn></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;