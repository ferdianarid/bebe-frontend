import React from 'react'
import { ICategory } from 'interfaces/ICategory'

const CategoryCard = ({ uniqKey, title, subcategory, image }: ICategory) => {
    return (
        <React.Fragment>
            <div key={uniqKey} className="w-full">
                <img src={image} className="h-[160px] object-cover" alt="health" />
                <div className="my-4">
                    <h2 className="text-lg mb-4 font-bold text-gray-800">{title}</h2>
                    {subcategory}
                </div>
            </div>
        </React.Fragment>
    )
}

export default CategoryCard