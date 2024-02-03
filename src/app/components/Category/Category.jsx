'use client'
import Image from "next/image";
import search from "../../assets/searchVector.png"
import useCategories from "@/app/hooks/useCategories";
import CategoryList from "./CategoryList";
import Loader from "../Loader/Loader";

const Category = () => {

    const [categories, loading, error] = useCategories();

    if (loading) return <Loader />;
    if (error) return <p>Error: {error}</p>;
    if (!categories) return null;

    return (
        <div className="h-[83vh]">
            <div className="hidden lg:flex flex-col">
                <h1 className="text-white text-center text-lg p-3 bg-[#1FA45B] rounded-t-2xl">Categories</h1>
                <div className="flex items-center m-3 rounded-sm shadow-sm bg-white">
                    <input type="text" placeholder="Search by Categories" className="input text-black focus:outline-none relative bg-white border-2 focus:border-2 pl-10 border-gray-200 focus:border-green-500 w-full" />
                    <Image
                        className="absolute ml-3 mt-1"
                        src={search}
                        alt="Search Icon"
                        width={19}
                        height={19}
                    />
                </div>
            </div>

            <div className="lg:h-[66vh] overflow-y-auto">
                {
                    categories?.map(category => {
                        return <CategoryList key={category._id}
                            category={category} />
                    })
                }
            </div>
        </div>
    );
};

export default Category;