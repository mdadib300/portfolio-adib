import BlurText from '../Common/BlurText/BlurText';
import ScrollReveal from '../Common/ScrollReveal/ScrollReveal';

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
            <div>
                <div>
                    <h2 className='text-2xl font-semibold'>Who am I?</h2>
                    <div>
                        <ScrollReveal
                            baseOpacity={0}
                            enableBlur={true}
                            baseRotation={2}
                            blurStrength={10}
                        >
                            I'm a MERN Stack Web Developer passionate about building clean, scalable, and user-focused web applications. I enjoy turning ideas into functional digital products and experimenting with modern tools like React, Node.js, Express.js, and MongoDB. You can explore some of the projects I’ve worked on in the Projects section. I’m also constantly learning — from JavaScript fundamentals to advanced concepts in API integration, backend architecture, and system design. I often share what I learn with others, whether through conversations, community groups, or social platforms like LinkedIn, where I stay connected with people in the tech community. I’m actively growing as a developer and always open to new opportunities where I can contribute, improve, and make an impact. If you believe my skills align with something you’re building, feel free to contact me — I’d be happy to connect.
                        </ScrollReveal>
                        <div>
                            
                        </div>
                    </div>
                </div>
                <div>






                </div>
            </div>
        </div>
    );
};

export default About;