'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

const useDuas = (id, query) => {
    const [duas, setDuas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cat_Id = query.get('cat');
        const subcat_Id = query.get('subcat');
        const dua_Id = query.get('dua');

        const fetchDuas = async (cat_Id, subcat_Id, dua_Id) => {
            try {
                let url = `http://localhost:5000/duas/${id}?cat=${cat_Id}`;
                if (subcat_Id !== null) {
                    url += `&subcat=${subcat_Id}`;
                }
                if (dua_Id !== null) {
                    url += `&dua=${dua_Id}`;
                }
    
                const response = await axios.get(url);
                setDuas(response.data.duas);
            } catch (error) {
                console.error('Error fetching dua data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (cat_Id) {
            fetchDuas(cat_Id, subcat_Id, dua_Id);
        }
    }, [query, id]);

    return [ duas, loading ];
};

export default useDuas;
