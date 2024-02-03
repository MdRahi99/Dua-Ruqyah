'use client'
import DuaDetails from "../components/DuaDetails/DuaDetails";
import Loader from "../components/Loader/Loader";
import useAllDuas from "../hooks/useAllDuas";

const Contents = () => {

    const [allDuas, loading] = useAllDuas();

    return (
        <div>
            {loading ?
                <Loader />
                :
                <div>
                    {allDuas.map(duas => {
                        return <DuaDetails key={duas._id} dua={duas} />
                    })}
                </div>
            }
        </div>
    );
};

export default Contents;
