import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-[#0d1b2a] text-[#e0fbfc] p-10">
            <aside className="w-full md:w-1/2">
                <h1 className="text-2xl font-bold">Md. Adib Chowdhury</h1>
                <p>
                    A MERN Stack Web Developer who architects digital worlds, crafting scalable systems that breathe, grow, and move in harmony with a product’s vision.
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Adib</p>
            </aside>
            <nav>
                <h1 className="text-2xl font-bold">Social</h1>
                <div className="grid grid-flow-col gap-4">
                    <a className="text-2xl" href="https://www.facebook.com/adib.chowdhury.922022" target="_blank"><FaFacebook /></a>
                    <a className="text-2xl" href="https://www.youtube.com/@md.adibchowdhury8848" target="_blank"><FaYoutube /></a>
                    <a className="text-2xl" href="https://github.com/mdadib300" target="_blank"><FaGithub /></a>
                    <a className="text-2xl" href="https://www.linkedin.com/in/md-adib-chowdhury-4212b2373/" target="_blank"><FaLinkedin /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;