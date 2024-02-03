import Image from "next/image";
import img from "../../assets/test.png";
import DuaList from "./DuaList";
import Link from "next/link";

const CategoryList = ({ category }) => {
    const { cat_id, cat_name_en, no_of_subcat, no_of_dua, subCategories } = category;

    return (
        <div key={category._id} className="collapse">
            <input type="radio" name="my-accordion-1" />
            <div className="flex items-center collapse-title justify-between p-3 rounded-lg hover:bg-[#E8F0F5] w-11/12 mx-auto">
                <div className="flex w-11/12 items-center gap-3">
                    <Image
                        className="bg-[#CFE0E5] p-1 rounded-lg"
                        src={img}
                        alt="category"
                        width={51}
                        height={51}
                    />
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
            <div className="collapse-content">
                {subCategories.map(subCategory => (
                    <DuaList key={subCategory._id}
                        subCategory={subCategory}
                        cat_name_en={cat_name_en}
                        cat_id={cat_id} />
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
