import Image from "next/image";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import home from "../../assets/home 1.png";
import dashboard from "../../assets/dashboard.png";
import light from "../../assets/light.png";
import bookmark from "../../assets/bookmark.png";
import ruqyah from "../../assets/ruqyah 1.png";
import duaInfo from "../../assets/dua-info 1.png";
import books from "../../assets/books 1.png";
import Link from "next/link";
import {RiDashboardFill} from "@react-icons/all-files/ri/RiDashboardFill"

const navLinks = [
    { src: home, alt: 'Home' },
    { src: dashboard, alt: 'Dashboard' },
    { src: light, alt: 'Light' },
    { src: bookmark, alt: 'Bookmark' },
    { src: ruqyah, alt: 'Ruqyah' },
    { src: duaInfo, alt: 'Dua Info' },
    { src: books, alt: 'Books' }
];


const Navbar = () => {
    return (
        <>
            <div className="drawer lg:drawer-open h-full flex flex-col items-center">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="text-4xl text-green-600 lg:hidden"><RiDashboardFill /></label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu min-h-full flex flex-col bg-white rounded-xl items-center justify-between">
                        <Link href='/' className="h-1/6">
                            <Image className=""
                                src={logo}
                                alt="Logo"
                                width={73}
                                height={73}
                            />
                        </Link>
                        <div className="h-4/6 flex flex-col items-center justify-center gap-6">
                            {navLinks.map((image, index) => (
                                <Link href='/' key={index} className="p-2 rounded-full bg-[#E8F0F5] transition-transform duration-300 ease-in-out transform-gpu hover:scale-110">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={20}
                                        height={30}
                                    />
                                </Link>
                            ))}
                        </div>
                        <div className="h-1/6 flex items-end mb-3">
                            <div className="p-2 bg-[#1FA45B] rounded-xl">
                                <Image
                                    src={logo2}
                                    alt="Logo2"
                                    width={32}
                                    height={24}
                                />
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;