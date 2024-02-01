import Image from "next/image";
import profile from "../../assets/profile.png";
import polygon from "../../assets/Polygon 2.png";

const Profile = () => {
    return (
        <div className="flex items-center gap-2">
            <Image className=""
                src={profile}
                alt="Search Icon"
                width={40}
                height={40}
            />
            <Image className=""
                src={polygon}
                alt="Polygon Icon"
                width={10}
                height={8}
            />
        </div>
    );
};

export default Profile;