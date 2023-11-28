import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']); 

    const onAddCategory = ( newCategory) =>{
      const CaseTown = newCategory.toUpperCase();

      if(categories.includes(CaseTown)) return;
      
      setCategories([CaseTown, ...categories]);
    }
      

  return (
    <>
        <h1>GitExpertApp</h1>

        <AddCategory onNewCategory={(value) => onAddCategory(value)}/>

        {
            categories.map( (category) => (
              <GifGrid 
                key={category}
                category={category}
              
              /> 
            ))
        }
        

    </>
  )
}
