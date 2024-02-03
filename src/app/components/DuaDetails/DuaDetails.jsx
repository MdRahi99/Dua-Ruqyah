import Image from "next/image";
import icon from "../../assets/allah (Traced).png";
import { MdContentCopy } from "@react-icons/all-files/md/MdContentCopy";
import { FiBookmark } from "@react-icons/all-files/fi/FiBookmark";
import { RiLightbulbLine } from "@react-icons/all-files/ri/RiLightbulbLine";
import { BiShareAlt } from "@react-icons/all-files/bi/BiShareAlt";
import { MdReport } from "@react-icons/all-files/md/MdReport";
import PlayAudio from "../PlayAudio/PlayAudio";

const DuaDetails = ({ dua }) => {

    const { audio, clean_arabic, dua_name_en, refference_en, top_en, translation_en, transliteration_en } = dua;

    return (
        <div className="flex flex-col gap-8 bg-white rounded-xl p-6">
            <div className="flex items-center gap-3">
                <Image
                    src={icon}
                    alt="icon"
                    width={35}
                    height={35} />
                <h1 className="font-semibold text-[#1FA45B] text-[16px]">1. {dua_name_en}</h1>
            </div>
            <p className="text-[16px] font-normal text-[#393939] text-justify">{top_en}</p>

            <p className="text-right font-normal text-[24px] text-[#393939]">{clean_arabic}</p>

            <h3 className="text-[16px] font-semibold text-[#393939]">Transliteration: <span className="font-normal italic">{transliteration_en}</span></h3>

            <h3 className="text-[16px] font-semibold text-[#393939]">Translation: <span className="font-normal">{translation_en}</span></h3>

            <h3 className="text-[16px] text-[#1FA45B] font-semibold">Reference: <span className="font-medium text-[#393939] block">{refference_en}</span></h3>

            <div className="flex items-center justify-between">
                <PlayAudio audio={audio} />

                <div className="flex items-center gap-6">
                    <MdContentCopy className="text-xl text-[#868686]" />
                    <FiBookmark className="text-xl text-[#868686]" />
                    <RiLightbulbLine className="text-xl text-[#868686]" />
                    <BiShareAlt className="text-xl text-[#868686]" />
                    <MdReport className="text-xl text-[#868686]" />
                </div>
            </div>
        </div>
    );
};

export default DuaDetails;
