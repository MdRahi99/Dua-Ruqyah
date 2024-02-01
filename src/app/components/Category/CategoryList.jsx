import Image from "next/image";
import img from "../../assets/test.png";
import Link from "next/link";

const CategoryList = ({ category }) => {

    const { cat_name_en, no_of_subcat, no_of_dua, subCategories } = category;

    return (
        <>
            <div className="collapse">
                <input type="radio" name="my-accordion-1" checked="checked" />
                <div className="flex collapse-title items-center justify-between p-3 rounded-lg hover:bg-[#E8F0F5] w-11/12 mx-auto">
                    <div className="flex w-11/12 items-center gap-3">
                        <Image
                            className="bg-[#CFE0E5] p-1 rounded-lg"
                            src={img}
                            alt="category"
                            width={51}
                            height={51} />

                        <div className="flex flex-col gap-1">
                            <h1 className="font-semibold text-[#1FA45B]">
                                {cat_name_en}
                            </h1>
                            <h2 className="text-xs text-gray-500">
                                Subcategory:
                                <span className="ml-1">{no_of_subcat}</span>
                            </h2>
                        </div>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="w-1/12">
                        <h1 className="flex flex-col items-center"><span className="text-black font-medium">{no_of_dua}</span> Duas</h1>
                    </div>
                </div>

                <div className="collapse-content flex flex-col w-full mx-auto">
                    {subCategories.map((subCategory, index) => (
                        <Link href='/'
                            key={subCategory.id}
                            className="flex items-center" >
                            <div className="border-l-2 border-green-600 border-dotted h-9 ml-6 p-2 relative">
                                {index >= 0 && <span className="absolute top-2 left-[-6px] transform -translate-y-1/2 font-extrabold text-[#1FA45B] text-3xl">.</span>}
                            </div>
                            <h1 className="font-medium text-black hover:text-[#1FA45B] text-sm w-full">
                                {subCategory.subcat_name_en}
                            </h1>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategoryList;