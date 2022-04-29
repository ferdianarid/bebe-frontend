import React from 'react'
import { FaStar, FaStarHalf, FaImages } from "react-icons/fa"
import { IClass } from 'interfaces/IClass'
import Image from 'next/image'

const ClassCard = ({ category, images, title, prices, rating, users_voted }: IClass) => {
    return (
        <React.Fragment>
            <div className="w-full p-3 border border-gray-300">
                <div className="w-full h-36 bg-gray-200 mb-4 flex items-center justify-center text-gray-400">
                    {
                        images ? <Image src={images} layout="fill" className="object-cover h-full" alt="images" /> : <FaImages size={64} />
                    }
                </div>
                <p className='text-[10px] py-1 px-2 rounded-full bg-green-600 w-fit text-white'>{category}</p>
                <p className="text-sm font-bold leading-normal text-gray-700 my-2">{title}</p>
                <p className="text-sm font-semibold leading-normal text-gray-600">Rp. {prices}</p>
                <p className="text-sm flex items-center gap-x-[2px] text-yellow-400 font-semibold leading-normal mt-2">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
                    {rating} <span className="text-xs text-gray-700"> ( {users_voted} ) </span>
                </p>
            </div>
        </React.Fragment>
    )
}

export default ClassCard