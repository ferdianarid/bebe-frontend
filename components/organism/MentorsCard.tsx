import React from 'react'
import instructor from "assets/learn.png"
import instructor2 from "assets/learn.png"
import { IMentors } from 'interfaces/IMentors'
import Image from 'next/image'

const MentorsCard = ({ id, name, roles, description }: IMentors) => {
    let instructorImages: any = ""
    if (id === 1) {
        instructorImages = instructor
    } else {
        instructorImages = instructor2
    }
    return (
        <React.Fragment>
            <div className="max-w-[450px] overflow-hidden h-40 flex bg-white border border-gray-200">
                <div className="w-40">
                    <div className="w-full h-full">
                        <div className="bg-green-500 w-40 h-40">
                            <Image src={instructorImages} alt={`instructor${id}`} className="object-cover" />
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <p className='text-[10px] py-1 px-2 rounded-full bg-green-600 w-fit text-white'>{roles}</p>
                    <p className="text-md font-bold leading-normal text-gray-700 my-2">{name}</p>
                    <p className="text-xs font-normal text-gray-500">{description}</p>
                    <p className="text-xs mt-3 font-normal text-green-600">Detail Mentor</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MentorsCard