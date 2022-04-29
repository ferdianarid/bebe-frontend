import React, { useState } from "react";

// import  TransitionHeadless UI React
import { Transition, Menu } from "@headlessui/react"

import { ClassCategory } from "apis/"

import ItemsCategory from "components/organism/ItemsCategory";

import { FaChevronDown, FaChevronUp } from "react-icons/fa"

import Link from "next/link";

// Navbar Components
function Navbar() {
    // State isOpen
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar w-full bg-white top-0 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <p className="nav-link font-bold text-lg">Belajarbekerja.com</p>
                        </Link>
                        {/* <img src={Logoimg} width="128px" alt="travelia-logo" /> */}
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {/* <a className="text-sm text-gray-700">Kategori</a> */}
                            <div className="relative inline-block text-left">
                                <Menu>
                                    {({ open }: any) => (
                                        <React.Fragment>
                                            <span className="rounded-md shadow-sm">
                                                <Menu.Button className="inline-flex items-center space-x-2 text-sm text-gray-700 justify-center transition duration-150 ease-in-out  focus:border-blue-300 focus:shadow-outline-blue">
                                                    <Link href="/kategori">
                                                        <p className="nav-link font-normal text-xs text-gray-700 hover:text-green-700">Kategori</p>
                                                    </Link>
                                                    {
                                                        open ? <FaChevronUp width={24} /> : <FaChevronDown width={24} />
                                                    }
                                                </Menu.Button>
                                            </span>

                                            <Transition
                                                show={open}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items
                                                    static
                                                    className="absolute left-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                                >
                                                    <div className="py-1">
                                                        {
                                                            ClassCategory.map((items) => (
                                                                <ItemsCategory key={items.id} category={items.name} linkRedirect={items.links} />
                                                            ))
                                                        }
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </React.Fragment>
                                    )}
                                </Menu>
                            </div>
                            <Link href="/kursus">
                                <p className="nav-link font-normal text-xs text-gray-700 hover:text-green-700">Kursus</p>
                            </Link>
                            <Link href="/mentors">
                                <p className="nav-link font-normal text-xs text-gray-700 hover:text-green-700">Mentors</p>
                            </Link>
                            <input className="py-2 w-[313px] px-4 border border-green-400 text-xs focus:border-green-700" type="search" name="search" id="search" placeholder='Mau belajar apa ?' />
                            <div className="flex gap-x-4">
                                <Link href="/auth/masuk">
                                    <p className="nav-link py-2 px-4 border  hover:cursor-pointer hover:bg-green-400 hover:text-white border-green-400 font-normal text-xs text-gray-700 ">Masuk</p>
                                </Link>
                                <Link href="/auth/daftar">
                                    <p className="nav-link py-2 px-4 border  hover:cursor-pointer hover:bg-green-400 hover:text-white border-green-400 font-normal text-xs text-gray-700 ">Daftar</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-900 focus:outline-none "
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref: any) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-5 flex flex-col sm:px-3">
                            <div className="relative inline-block text-left">
                                <Menu>
                                    {({ open }: any) => (
                                        <React.Fragment>
                                            <span className="rounded-md shadow-sm">
                                                <Menu.Button className="inline-flex items-center space-x-2 text-sm text-gray-700 justify-center transition duration-150 ease-in-out  focus:border-blue-300 focus:shadow-outline-blue">
                                                    <Link href="/kategori">
                                                        <p className="nav-link font-semibold text-gray-700 hover:text-green-700">Kategori</p>
                                                    </Link>
                                                    {
                                                        open ? <FaChevronUp width={24} /> : <FaChevronDown width={24} />
                                                    }
                                                </Menu.Button>
                                            </span>

                                            <Transition
                                                show={open}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items
                                                    static
                                                    className="absolute left-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                                >
                                                    <div className="py-1">
                                                        {
                                                            ClassCategory.map((items) => (
                                                                <ItemsCategory key={items.id} category={items.name} linkRedirect={items.links} />
                                                            ))
                                                        }
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </React.Fragment>
                                    )}
                                </Menu>
                            </div>
                            <Link href="/kursus">
                                <p className="nav-link font-semibold text-gray-700 hover:text-green-700">Kursus</p>
                            </Link>
                            <Link href="/mentors">
                                <p className="nav-link font-semibold text-gray-700 hover:text-green-700">Mentors</p>
                            </Link>
                            <input className="py-2 px-4 border border-green-400 text-sm" type="search" name="search" id="search" placeholder='search somethings' />
                            <div className="flex gap-x-4 mt-3">
                                <Link href="/masuk">
                                    <p className="nav-link font-semibold text-gray-700 hover:text-green-700">Masuk</p>
                                </Link>
                                <Link href="/daftar">
                                    <p className="nav-link font-semibold text-gray-700 hover:text-green-700">Daftar</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </nav >
    )
}

export default Navbar;