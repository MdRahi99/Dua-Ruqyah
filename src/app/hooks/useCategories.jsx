import { useState, useEffect } from 'react';
import axios from 'axios';

const useCategories = () => {
  const [data, setData] = useState({ categories: null, subCategories: null, duas: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = 'https://dua-ruqyah-server.vercel.app/api/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await axios.get(`${apiUrl}category`);
        const subCategoryResponse = await axios.get(`${apiUrl}sub_category`);
        const duaResponse = await axios.get(`${apiUrl}dua`);

        const categories = categoryResponse.data;
        const subCategories = subCategoryResponse.data;
        const duas = duaResponse.data;

        const categorizedSubCategories = subCategories.map(subCategory => ({
          ...subCategory,
          duas: duas.filter(dua => dua.subcat_id === subCategory.id)
        }));

        const categorizedCategories = categories.map(category => ({
          ...category,
          subCategories: categorizedSubCategories.filter(subCategory => subCategory.cat_id === category.cat_id)
        }));

        setData({ categories: categorizedCategories, subCategories, duas });
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { ...data, loading, error };
};

export default useCategories;
