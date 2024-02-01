import Image from "next/image";
import settings from "../../assets/settings.svg";

const MobileSettings = () => {
    return (
        <>
            <Image className=""
                src={settings}
                alt="Search Icon"
                width={30}
                height={30}
            />
        </>
    );
};

export default MobileSettings;