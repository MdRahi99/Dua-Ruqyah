import { useState, useEffect } from 'react';
import axios from 'axios';

const useAllDuas = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [allDuas, setAllDuas] = useState(null);

    useEffect(() => {
        const fetchAllDuas = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://dua-ruqyah-server.vercel.app/duas');
                setAllDuas(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllDuas();
    }, []);

    return [ allDuas, loading, error ];
};

export default useAllDuas;
