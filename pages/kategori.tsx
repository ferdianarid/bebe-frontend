import React from 'react'
import PagesLayouts from 'layouts/PagesLayouts'
import tech from "assets/technology.jpg"
import design from "assets/design.jpg"
import CategoryCard from 'components/organism/CategoryCard'
import { ListCategory } from 'apis'

const marketing = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hcmtldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
const game = "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpcnR1YWwlMjByZWFsaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"

const images = [tech, design, marketing, game]

const Category: React.FC = () => {
    return (
        <React.Fragment>
            <PagesLayouts>
                <div className="w-full mt-10">
                    {/* Category Heading */}
                    <h1 className="category-title font-bold mb-2 text-2xl text-gray-700">Kategori</h1>
                    <p className='text-sm leading-normal text-gray-600'>Daftar kategori menarik yang bisa kamu pilih sesuai keinginan</p>
                    {/* List Category */}
                    <div className="w-full mt-8 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
                        {
                            ListCategory.map((category) => (
                                <CategoryCard
                                    uniqKey={category.id}
                                    image={images[category.id - 1]}
                                    title={category.title}
                                    subcategory={category.list.map(items => <p className="text-sm my-2 font-medium text-gray-600">{items.subcategory}</p>)}
                                />
                            ))
                        }
                    </div>
                </div>
            </PagesLayouts>
        </React.Fragment >
    )
}

export default Category