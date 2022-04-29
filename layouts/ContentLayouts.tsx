import React from 'react'

const ContentLayouts = ({ children }: any) => {
    return (
        <React.Fragment>
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-24">
                {children}
            </div>
        </React.Fragment>
    )
}

export default ContentLayouts