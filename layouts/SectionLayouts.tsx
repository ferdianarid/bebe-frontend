import React from 'react'

const SectionLayouts = ({ children, addingclass }: any) => {
    return (
        <React.Fragment>
            <div className={`w-full mt-24 ${addingclass}`}>
                {children}
            </div>
        </React.Fragment>
    )
}

export default SectionLayouts