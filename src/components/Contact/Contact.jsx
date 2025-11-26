import BlurText from '../Common/BlurText/BlurText';
import { IoCall } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const Contact = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <div id='contact' className='bg-[#293241] text-[#e0fbfc] pb-20'>
            <BlurText
                text="CONTACT"
                delay={200}
                animateBy="letters"
                direction="bottom"
                onAnimationComplete={handleAnimationComplete}
                className="flex justify-center text-4xl font-semibold py-10"
            />
            <p className='text-center text-xl px-2 lg:px-30 mb-10'>Feel free to Contact me for any web dev. related need and I will get back to you as soon as possible</p>
            <div className='flex justify-center px-5 md:px-10'>
                <div className="stats shadow block lg:flex">
                    <div className="stat p-5 md:p-10 bg-[#e0fbfc] text-[#293241]">
                        <div className="stat-figure text-4xl">
                            <IoCall />
                        </div>
                        <div className="stat-title text-[#293241] text-xl font-bold">Phone Number</div>
                        <div className="stat-desc text-[#293241] text-lg">+880 1755 270 626</div>
                    </div>

                    <div className="stat p-5 md:p-10 bg-[#e0fbfc] text-[#293241]">
                        <div className="stat-figure text-4xl">
                            <MdOutlineAlternateEmail />
                        </div>
                        <div className="stat-title text-[#293241] text-xl font-bold">Email Address</div>
                        <div className="stat-desc text-[#293241] text-lg">mdadib300@gmail.com</div>
                    </div>

                    <div className="stat p-5 md:p-10 bg-[#e0fbfc] text-[#293241]">
                        <div className="stat-figure text-4xl">
                            <FaHome />
                        </div>
                        <div className="stat-title text-[#293241] text-xl font-bold">Current Location</div>
                        <div className="stat-desc text-[#293241] text-lg">Barishal, Bangladesh</div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-5'>
                <a href="https://drive.google.com/file/d/1b1BeNUQxANdXS1jGKJ1mBfIaY9OXVCA4/view?usp=sharing" target='_blank'><button className="btn px-10 py-3 bg-[#e0fbfc] text-[#293241]">See Resume</button></a>
            </div>
        </div>
    );
};

export default Contact;