import React, { useState, Fragment } from 'react'
import Descriptions from "components/atoms/Descriptions"
import { Transition, Dialog } from '@headlessui/react'
import instructor from "assets/instructor.png"
import FormMentors from 'components/organism/FormMentors'
import Image from 'next/image'

const Recommendation = () => {
    const [activate, setActivate] = useState(false)
    const closeModal = () => setActivate(false)
    const openModal = () => setActivate(true)
    return (
        <React.Fragment>
            <div className="bg-green-700 mt-32 py-8 h-auto md:h-[360px] max-w-[1440px] mx-auto flex flex-col md:flex-row items-center px-0 md:px-48">
                <div className="w-[50%] mb-6 md:mb-0 md:w-[30%] h-auto border-4 border-white bg-gray-200">
                    <Image src={instructor} className="object-cover" alt="images" /></div>
                <div className="w-[90%] md:w-[70%] ml-0 md:ml-9">
                    <h1 className="font-bold text-2xl md:text-4xl text-white mb-4">Masih belum menemukan mentor yang sesuai?</h1>
                    <Descriptions textcolors='text-white'>Kami sangat akan mendengarkan suara teman-teman belajar bekerja. Silahkan sarankan kepada kami mentor yang kalian inginkan</Descriptions>
                    <button onClick={openModal} className="py-2 text-sm text-white mt-4 px-4 bg-green-500 hover:bg-green-600">Rekomendasikan Mentor</button>
                </div>
            </div>
            <Transition appear show={activate} as={Fragment}>
                <Dialog
                    as="div"
                    className="w-[400px] mx-auto fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-md font-bold leading-6 text-gray-900 mb-4"
                                >
                                    Masukkan Mentor Rekomendasimu
                                </Dialog.Title>
                                <FormMentors />

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-green-900 bg-[#efecff] border border-transparent rounded-md hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                                        onClick={closeModal}
                                    >
                                        Tidak dulu, nanti saja
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </React.Fragment>
    )
}

export default Recommendation