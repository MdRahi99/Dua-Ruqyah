import { FaBars } from "@react-icons/all-files/fa/FaBars";
import Category from "../Category/Category";
import Navbar from "./Navbar";

const MobileNavbar = () => {
    return (
        <div className="lg:hidden flex items-center gap-8">
            <div className="flex items-center justify-between z-20">
                <Navbar />
            </div>

            <div className="drawer drawer-end z-10">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-3 w-full rounded-lg bg-white">
                    <label htmlFor="my-drawer" className="flex items-center justify-between">
                        <h1 className="font-poppins text-sm text-[#393939]">Categories</h1>
                        <FaBars className="text-black" />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu min-h-full overflow-y-auto bg-white w-10/12">
                        <h1 className="font-poppins text-sm bg-green-600 text-center font-medium text-white p-2 rounded-lg mb-6">Categories</h1>
                        <Category />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;