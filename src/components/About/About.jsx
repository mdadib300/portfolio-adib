import BlurText from '../Common/BlurText/BlurText';
import ScrollReveal from '../Common/ScrollReveal/ScrollReveal';
import SkillCard from '../Common/SkillCard/SkillCard';

const About = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <div id='about' className='bg-[#293241] text-[#e0fbfc]'>
            <BlurText
                text="ABOUT"
                delay={200}
                animateBy="letters"
                direction="bottom"
                onAnimationComplete={handleAnimationComplete}
                className="flex justify-center text-4xl font-semibold py-10"
            />
            <p className='text-center text-xl px-2 lg:px-30'>Here you’ll find more information about who I am, what I do, and the skills I’m building as a MERN Stack Web Developer — along with my interests in programming, technology, and creating impactful digital experiences.</p>
            <div className='block lg:flex px-5 lg:px-30 py-10 lg:py-20'>
                <div className='w-full lg:w-1/2 mr-0 lg:mr-15'>
                    <h2 className='text-2xl font-semibold'>Who am I?</h2>
                    <ScrollReveal
                        baseOpacity={0}
                        enableBlur={true}
                        baseRotation={2}
                        blurStrength={10}
                    >
                        I'm a MERN Stack Web Developer passionate about building clean, scalable, and user-focused websites. I enjoy turning ideas into functional digital products and experimenting with modern tools like React, Node.js, Express.js, and MongoDB. You can explore some of the projects I’ve worked on in the Projects section. I’m also constantly learning — from JavaScript fundamentals to advanced concepts in API integration, backend architecture, and system design. I often share what I learn with others, whether through conversations, community groups, or social platforms like LinkedIn, where I stay connected with people in the tech community. I’m actively growing as a developer and always open to new opportunities where I can contribute, improve, and make an impact. If you believe my skills align with something you’re building, feel free to contact me — I’d be happy to connect. By the way, see my projects below.
                    </ScrollReveal>
                </div>
                <div className='w-full lg:w-1/2'>
                    <h2 className='text-2xl font-semibold mb-6'>My Skills</h2>
                    <div>
                        <SkillCard skill={"HTML"}></SkillCard>
                        <SkillCard skill={"CSS"}></SkillCard>
                        <SkillCard skill={"Tailwind CSS"}></SkillCard>
                        <SkillCard skill={"JavaScript"}></SkillCard>
                        <SkillCard skill={"React"}></SkillCard>
                        <SkillCard skill={"Firebase"}></SkillCard>
                        <SkillCard skill={"MongoDB"}></SkillCard>
                        <SkillCard skill={"NodeJS"}></SkillCard>
                        <SkillCard skill={"ExpressJS"}></SkillCard>
                        <SkillCard skill={"Express"}></SkillCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;