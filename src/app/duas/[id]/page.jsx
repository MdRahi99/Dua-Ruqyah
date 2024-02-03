'use client'
import DuaDetails from '@/app/components/DuaDetails/DuaDetails';
import Loader from '@/app/components/Loader/Loader';
import useDuas from '@/app/hooks/useDuas';
import { useSearchParams } from 'next/navigation';

const Duas = ({ params }) => {
    const { id } = params;
    const query = useSearchParams();

    const [duas, loading] = useDuas(id, query);

    return (
        <>
            {loading ?
                <Loader />
                :
                <div className='grid grid-cols-1 gap-3'>
                    {duas.map(dua => {
                        return <DuaDetails key={dua._id} dua={dua} />
                    })}
                </div>
            }
        </>
    );
};

export default Duas;
