import React from 'react'
import Navbar from 'components/moleculs/Navbar'

const HomeLayouts = ({ children }: any) => {
    return (
        <React.Fragment>
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-24">
                <Navbar />
                {children}
            </div>
        </React.Fragment>
    )
}

export default HomeLayouts