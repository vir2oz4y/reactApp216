import React, {useState} from 'react';
import {Category} from "./models";
import CategoryElement from "./CategoryElement";

const CategoryPage = () => {
    const [categoryList, setcategoryList] = useState<Category[]>([
        {
            id: 0,
            name: 'Category 1'
        },
        {
            id: 1,
            name: 'Category 2'
        }
    ])
    const onDeleteClick = (id:number) =>{
        setcategoryList(prev => [...prev.filter(el => el.id !== id)])

    }
    return (

        <div>
            <h1>Category</h1>
            <div>
                {categoryList.map((el, i) => <CategoryElement key={i} category={el}
                onDeleteClick={() => onDeleteClick(el.id)}/>)}
            </div>
        </div>
    );
};

export default CategoryPage;