import Image from "next/image";
import language from "../../assets/language.png";
import general from "../../assets/general.png";
import font from "../../assets/font.png";
import mode from "../../assets/mode.png";
import settings from "../../assets/settings.svg";

const Settings = () => {

    const settingsItems = [
        { src: language, title: 'Language Settings' },
        { src: general, title: 'General Settings' },
        { src: font, title: 'Font Settings' },
        { src: font, title: 'Appearance Settings' },
    ];

    return (
        <>
            <div className="drawer drawer-end flex flex-col lg:drawer-open lg:h-[80vh]">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content lg:hidden">
                    <label htmlFor="my-drawer">
                        <Image className=""
                            src={settings}
                            alt="Search Icon"
                            width={30}
                            height={30}
                        />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-white lg:rounded-lg rounded-l-2xl lg:rounded-l-lg w-2/3 lg:w-full min-h-full">
                        <div className="w-full">
                            <h1 className="text-black text-center font-bold my-6">Settings</h1>
                            <div className="mx-3 flex flex-col gap-6">
                                {
                                    settingsItems.map((setting, index) => {
                                        return <button key={index} className="flex gap-4 hover:border-l-4 hover:text-[#1FA45B] hover:font-semibold border-[#1FA45B] transition-transform duration-300 ease-in-out transform-gpu hover:scale-90 items-center p-2 bg-[#F7F8FA] rounded-md">
                                            <Image
                                                src={setting.src}
                                                alt="Logo2"
                                                width={24}
                                                height={24}
                                            />
                                            <h2>{setting.title}</h2>
                                        </button>
                                    })
                                }
                            </div>
                            <div className="flex items-center justify-between py-5 border-gray-50 mx-3 p-2 border-x-2 border-b-2">
                                <h1 className=" text-black">Night Mode</h1>
                                <Image
                                    src={mode}
                                    alt="mode"
                                    width={30}
                                    height={16} />
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Settings;