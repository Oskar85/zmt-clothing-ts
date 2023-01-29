import React, { FC } from 'react';
import CategoryItem from "../category-item/category-item.component";
import './directory.style.scss'
import { ICategoriesProps } from "../../types/ICategories.types";


const Directory: FC<ICategoriesProps> = ( { categories } ) => {
    return (
        <div className="directory-container">
            {
                categories.map( ( category ) => (
                    <CategoryItem category={ category } key={ category.id }/>
                ) )
            }
        </div>
    )
};

export default Directory;