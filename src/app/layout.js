import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Category from "./components/Category/Category";
import Settings from "./components/Settings/Settings";
import Search from "./components/Search/Search";
import Profile from "./components/Profile/Profile";
import MobileSettings from "./components/Settings/MobileSettings";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dua & Ruqyah",
  description: "Dua & Ruqyah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col p-4 lg:p-0 lg:flex-row lg:overflow-hidden justify-center bg-gray-100 lg:h-[100vh] gap-5 lg:gap-7">
        {/* ---------- Mobile Navbar ---------- */}
        <div className="lg:hidden flex items-center justify-between">
          <h1 className="font-poppins text-[18px] text-[#393939]">Dua Page</h1>
          <div className="">
            <MobileSettings />
          </div>
        </div>

        {/* ---------- Navbar ---------- */}
        <div className="lg:w-[5.21vw] bg-white rounded-2xl lg:h-[92vh] hidden lg:flex flex-col lg:my-7 items-center">
          <Navbar />
        </div>

        {/* ---------- Category ---------- */}
        <div className="lg:w-[22.34vw] flex flex-col lg:gap-5 lg:h-[92vh] lg:my-7">
          <h1 className="h-[6vh] hidden lg:flex font-poppins text-[22px] text-[#393939]">Dua Page</h1>
          <div className="lg:h-[86vh] bg-white rounded-lg lg:rounded-xl">
            <Category />
          </div>
        </div>

        {/* ---------- Content ---------- */}
        <div className="lg:w-[46.35vw] flex flex-col lg:gap-5 lg:h-[92vh] lg:mt-7">
          <div className="h-[6vh] hidden lg:flex justify-end">
            <Search />
          </div>
          <div className="lg:h-[86vh] overflow-y-auto rounded-lg lg:rounded-xl bg-white">
            {children}
          </div>
        </div>

        {/* ---------- Settings ---------- */}
        <div className="lg:w-[17.19vw] flex flex-col lg:gap-5 lg:h-[92vh] lg:my-7">
          <div className="h-[6vh] hidden lg:flex justify-end">
            <Profile />
          </div>
          <div className="lg:h-[86vh] hidden lg:flex bg-white rounded-2xl">
            <Settings />
          </div>
        </div>
      </body>
    </html>
  );
}
