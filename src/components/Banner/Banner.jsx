import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Button from "../Common/Button/Button";
import { TbSocial } from "react-icons/tb";

const Banner = () => {
    return (
        <div>
            <div className="bg-[#fdfcdc] text-[#293241]">
                <div className="text-center py-40 md:py-60 w-full md:w-2/3 mx-auto">
                    <p className="text-5xl md:text-6xl font-bold">Hi, I'm Adib</p>
                    <p className="py-6 mx-2 text-xl">A result-oriented MERN Stack Web Developer specializing in building and managing scalable websites that drive product success.</p>
                    <a href="/#projects"><Button btnText={"PROJECTS"}></Button></a>
                    {/* Floating Soical Icon */}
                    <div className="fab fab-flower">
                        <div tabIndex={0} role="button" className="animate-bounce btn btn-lg md:btn-xl btn-circle bg-[#293241] text-xl"><TbSocial /></div>

                        <button className="fab-main-action btn btn-lg md:btn-xl btn-circle bg-[#293241] text-xl"><TbSocial /></button>

                        <button className="btn btn-lg md:btn-xl btn-circle bg-[#293241] text-xl"><a href="https://www.facebook.com/adib.chowdhury.922022" target="_blank"><FaFacebook /></a></button>
                        <button className="btn btn-lg md:btn-xl btn-circle bg-[#293241] text-xl"><a href="https://github.com/mdadib300" target="_blank"><FaGithub /></a></button>
                        <button className="btn btn-lg md:btn-xl btn-circle bg-[#293241] text-xl"><a href="https://www.linkedin.com/in/md-adib-chowdhury-4212b2373/" target="_blank"><FaLinkedin /></a></button>
                        <button className="btn btn-lg md:btn-xl btn-circle bg-[#293241] text-xl"><a href="https://www.youtube.com/@md.adibchowdhury8848" target="_blank"><FaYoutube /></a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;