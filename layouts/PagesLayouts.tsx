import React from 'react'
import Footer from 'components/templates/Footer'
import Navbar from 'components/moleculs/Navbar'

const PagesLayouts = ({ children }: any) => {
    return (
        <React.Fragment>
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-24">
                <Navbar />
                {children}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default PagesLayouts