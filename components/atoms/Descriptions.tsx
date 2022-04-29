import React from 'react'

type Description = {
    children: any
    textcolors?: string
    addingclass?: string
}

const Descriptions = ({ children, textcolors, addingclass }: Description) => {
    return (
        <React.Fragment>
            <p className={`text-sm ${addingclass} leading-normal ${textcolors ? textcolors : "text-gray-700"}`}>{children}</p>
        </React.Fragment>
    )
}

export default Descriptions