import React from 'react'
import { Menu } from '@headlessui/react'

type Category = {
    category: string
    linkRedirect: string
}

const ItemsCategory = ({ category, linkRedirect }: Category) => {
    return (
        <React.Fragment>
            <Menu.Item>
                {({ active }) => (
                    <a
                        href={`/kategori/${linkRedirect}`}
                        className={`${active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                    >
                        {category}
                    </a>
                )}
            </Menu.Item>
        </React.Fragment>
    )
}

export default ItemsCategory