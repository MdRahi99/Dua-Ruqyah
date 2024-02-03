'use client'
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "@react-icons/all-files/fa/FaPlay";
import { FaPause } from "@react-icons/all-files/fa/FaPause";

const PlayAudio = ({audio}) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const audioElement = audioRef.current;
        if (!audioElement) return;
        const handleEnded = () => {
            setIsPlaying(false);
        };

        audioElement.addEventListener('ended', handleEnded);

        return () => {
            audioElement.removeEventListener('ended', handleEnded);
        };
    }, []);

    return (
        <div>
            {
                audio ?
                    <>
                        <button onClick={togglePlay}>{isPlaying ? <div className="bg-[#1FA45B] rounded-full h-10 flex items-center justify-center w-10"><FaPause className="text-white text-xl" /></div> : <div className="bg-[#1FA45B] rounded-full h-10 flex items-center justify-center w-10"><FaPlay className="text-white text-xl" /></div>}</button>
                        <audio ref={audioRef} src={audio} type="audio/mpeg" />
                    </>
                    :
                    <div>

                    </div>
            }
        </div>
    );
};

export default PlayAudio;