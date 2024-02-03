import { useState, useEffect } from 'react';
import axios from 'axios';

const useCategories = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/duas/categories');
                setCategories(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return [ categories, loading, error ];
};

export default useCategories;
