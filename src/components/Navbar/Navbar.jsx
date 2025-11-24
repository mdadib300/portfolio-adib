import { RiMenu4Fill } from "react-icons/ri";
import navImg from '../../assets/nav-img.png';
const Navbar = () => {

    const navigations = <>
        <li><a href="/">HOME</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#contact">CONTACT</a></li>
    </>

    return (
        <div className="sticky top-0 z-50">
            <div className="navbar bg-[#293241] text-[#e0fbfc] px-1 lg:px-10 py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-2xl mr-2 lg:mr-0">
                            <RiMenu4Fill />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-[#293241] text-[#e0fbfc] font-bold rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navigations}
                        </ul>
                    </div>
                    <a href="/">
                        <div className="flex items-center">
                            <img className="w-12 mr-4 hidden md:flex" src={navImg} alt="Adib" />
                            <a className="text-xl hover:text-[#fdfcdc]">MD ADIB CHOWDHURY</a>
                        </div>
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        {navigations}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;