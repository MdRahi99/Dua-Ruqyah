import Image from "next/image";
import search from "../../assets/searchVector.png"

const Search = () => {
    return (
        <div className="w-2/5 relative">
            <input type="text" placeholder="Search by Dua Name" className="input text-black rounded-md bg-white h-10 focus:outline-none focus:border-2 focus:border-green-500 w-full pl-2 text-sm" />
            <div className="absolute top-1 right-1 p-[9px] rounded-md bg-[#F3F4F6]">
                <Image
                    className=""
                    src={search}
                    alt="Search Icon"
                    width={15}
                    height={15}
                />
            </div>
        </div>
    );
};

export default Search;