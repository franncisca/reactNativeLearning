import {ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import client, { urlFor } from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(`
      *[_type == "category"]
    `
    ).then((data) => {
      setCategories(data);
    });

  },[]);

  // console.log(categories)


  // console.log(categories[0]);

  return (
    <ScrollView
      contentContainerStyle={{
          paddingHorizontal:15,
          paddingTop:10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      >

        {/* Category Card*/}
        {categories.map( (category) => (
          <CategoryCard
            key={category._id}
            imgUrl={category.image}
            title={category.name}
          />
        ))}

    </ScrollView>
  );
};

export default Categories