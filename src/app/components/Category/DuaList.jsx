import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";
import Link from "next/link";

const DuaList = ({ subCategory, cat_name_en, cat_id }) => {

    const { id, subcat_id, subcat_name_en, duas } = subCategory;

    return (
        <>
            <div className="collapse">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="flex items-center justify-between collapse-title p-3 rounded-lg hover:bg-[#E8F0F5]">
                    <div className="flex w-full items-center gap-3">
                        <div className="border-l-2 border-green-600 border-dotted h-9 ml-3 relative">
                            <span className="absolute top-2 left-[-6px] transform -translate-y-1/2 font-extrabold text-[#1FA45B] text-3xl">.</span>
                        </div>
                        <h1 className="font-medium text-black hover:text-[#1FA45B] text-sm w-full">
                            {subcat_name_en}
                        </h1>
                    </div>
                </div>

                <div className="collapse-content flex flex-col w-full mx-auto">
                    {duas.map(dua => (
                        <Link href={`/duas/${cat_name_en}?cat=${cat_id}&subcat=${subcat_id}&dua=${dua.dua_id}`} key={dua._id} className="flex items-center">
                            <div className="ml-3 p-1">
                                <MdKeyboardArrowRight className="text-xl font-bold text-green-600" />
                            </div>
                            <h1 className="font-normal text-black hover:text-[#1FA45B] py-2 text-sm w-full">
                                {dua.dua_name_en}
                            </h1>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DuaList;