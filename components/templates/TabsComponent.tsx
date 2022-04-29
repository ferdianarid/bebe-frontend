import React from 'react'
import { Disclosure } from '@headlessui/react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Transition } from '@headlessui/react'

const TabsComponent = ({ question, answers }: any) => {
    return (
        <div className="w-full px-0 md:px-4">
            <div className="w-full max-w-[550px] p-2 mx-auto bg-white rounded-2xl">
                <Disclosure>
                    {({ open }) => (
                        <React.Fragment>
                            <Disclosure.Button className="flex justify-between bg-green-100 w-full px-4 py-2 text-sm font-medium text-left text-green-900 rounded-lg hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                                <span>{question}</span>
                                <FaChevronDown
                                    className={`${open ? 'transform rotate-180' : ''
                                        } w-5 h-5 text-green-500`}
                                />
                            </Disclosure.Button>
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    <p className='text-sm leading-normal text-gray-600'>{answers}</p>
                                </Disclosure.Panel>
                            </Transition>
                        </React.Fragment>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

export default TabsComponent