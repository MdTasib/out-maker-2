import React, { useEffect, useState } from 'react';

const useCategories = () => {
    const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://theoutmaker.com/api/get/collection/all")
      .then((res) => res.json())
      .then((data) => setCategories(data.Collections));
  }, []);
    return { categories}
};

export default useCategories;