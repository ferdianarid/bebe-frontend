import React, { useState } from 'react'
import PagesLayouts from "layouts/HomeLayouts"
import Descriptions from 'components/atoms/Descriptions'

const Mentors = () => {
    return (
        <React.Fragment>
            <PagesLayouts>
                <div className="max-w-2xl m-auto mt-10 text-center">
                    <h1 className="mentor-heading text-[2rem] font-bold text-green-700 md:text-heading-lg">Mentor</h1>
                    <Descriptions>Kamu bisa pilih mentor favooritmu yang akan membimbing selama belajar</Descriptions>
                </div>
            </PagesLayouts>
        </React.Fragment>
    )
}

export default Mentors