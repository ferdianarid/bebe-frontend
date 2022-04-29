import React, { useState } from 'react'
import Navbar from 'components/moleculs/Navbar'
import { FaGithub, FaGitlab, FaImages, FaInstagram, FaLinkedin, FaMapMarked, FaMapPin, FaStar, FaStarHalf } from 'react-icons/fa'
import Image from "next/image"
import Footer from 'components/templates/Footer'
import SecondFooter from 'components/templates/SecondFooter'
const Mentors = () => {
    return (
        <React.Fragment>
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-24">
                <Navbar />
            </div>
            <div className="w-full h-[180px] md:h-[260px] m-auto text-center bg-blue-800 background"></div>
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-24 mb-20">
                <div className="flex flex-col md:flex-row">
                    <div className="h-40 w-40 bg-gray-100 rounded-full -mt-20 flex items-center justify-center">
                        {/* <FaImages className='text-gray-400' size={48} /> */}
                        <Image src="/jeff.png" alt="jeff" className='rounded-full' height={160} width={160} />
                    </div>
                    <div className="mt-6 md:mt-4 ml-0 md:ml-4">
                        <h1 className="font-bold text-2xl">Jeff Delaney <span className='py-1 px-2 border border-blue-600 text-blue-600  rounded-full text-[11px]'>Verified</span></h1>
                        <h3 className="font-medium mt-1 text-sm">Google Developer Expert</h3>
                    </div>
                    <div className="mt-6 md:mt-4 flex flex-col ml-0 md:ml-44">
                        <h3 className="font-bold mt-1 text-sm mb-1">Social Media</h3>
                        <div className="flex mt-2 space-x-6">
                            <FaInstagram size={28} className="text-blue-800" /><FaGithub size={28} className="text-blue-800" /><FaGitlab size={28} className="text-blue-800" /><FaLinkedin size={28} className="text-blue-800" />
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-between mt-12">
                    <div className="w-full pr-0 md:pr-16">
                        {/* Tentang */}
                        <div className="flex items-center space-x-8 md:space-x-16">
                            <h1 className="font-bold md:text-md text-sm text-blue-800 border-b-4 pb-1 border-blue-800">Tentang</h1>
                            <h1 className="font-medium text-gray-500 pb-1 md:text-md text-sm">Kelas</h1>
                            <h1 className="font-medium text-gray-500 pb-1 md:text-md text-sm">Review</h1>
                        </div>
                        <p className="text-sm text-gray-500 mt-4 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum eos animi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem delectus tempora eius tempore et. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ab ipsam repudiandae tempore adipisci officiis.  <span className="text-blue-700 font-semibold ml-1">Selengkapnya...</span> </p>
                        {/* Kategori */}
                        <h1 className="font-bold mt-16 text-md text-gray-700">Kategori</h1>
                        <div className="flex md:block space-x-5 md:space-x-0">
                            <div className="flex flex-col md:flex-row md:items-center items-start mt-4 space-y-2 md:space-y-0 md:space-x-2">
                                <div className="py-2 px-4 rounded-full bg-blue-100 text-xs font-medium text-blue-600 w-fit">Teknologi</div>
                                <div className="py-2 px-4 rounded-full bg-blue-100 text-xs font-medium text-blue-600 w-fit">Pengembangan Web</div>
                                <div className="py-2 px-4 rounded-full bg-blue-100 text-xs font-medium text-blue-600 w-fit">Frontend Development</div>
                                <div className="py-2 px-4 rounded-full bg-blue-100 text-xs font-medium text-blue-600 w-fit">Web Performance</div>
                                <div className="py-2 px-4 rounded-full bg-blue-100 text-xs font-medium text-blue-600 w-fit">Firebase</div>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center items-start mt-4 space-y-2 md:space-y-0 md:space-x-2">
                                <div className="py-2 px-4 rounded-full bg-blue-100 text-xs font-medium text-blue-600 w-fit">Backend Development</div>
                                <div className="py-2 px-4 rounded-full bg-blue-100 text-xs font-medium text-blue-600 w-fit">Infrastruktur Server</div>
                                <div className="py-2 px-4 rounded-full bg-blue-100 text-xs font-medium text-blue-600 w-fit">Data Engineering</div>
                                <div className="py-2 px-4 rounded-full bg-blue-100 text-xs font-medium text-blue-600 w-fit">Mock Interview</div>
                            </div>
                        </div>
                        {/* Pengalaman */}
                        <h1 className="font-bold mt-12 text-md text-gray-700">Pengalaman Kerja</h1>
                        <div className="mt-4 relative">
                            <div className="absolute border-l-4 border-blue-400 h-[780px] md:h-[535px] left-0 top-2"></div>
                            <div className="h-3 w-3 bg-blue-400 rounded-full absolute -left-[4px] top-2"></div>
                            <div className="ml-6">
                                <h1 className="font-bold text-lg">VP of Engineering, EC2 Service</h1>
                                <div className="flex my-3 md:my-0 flex-col md:flex-row items-start md:items-center justify-between">
                                    <h1 className="font-bold text-blue-600 mt-1 text-sm">Amazon Web Services, Amazon</h1>
                                    <h1 className="font-medium text-gray-600 mt-1 text-sm flex items-center space-x-2"><FaMapMarked size={20} className="mr-3" /> San Francisco, United States</h1>
                                </div>
                                <div className="my-3">
                                    <h1 className="font-medium text-sm text-gray-600">September 2021 - Sekarang</h1>
                                </div>
                                <h1 className="mt-2 text-sm text-gray-500 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla perspiciatis laborum doloremque ex repellat porro reprehenderit ipsum odit Lorem ipsum dolor sit amet consectetur. voluptates architecto?</h1>
                            </div>
                        </div>

                        <div className="mt-8 relative">
                            <div className="h-3 w-3 bg-blue-400 rounded-full absolute -left-[4px] top-2"></div>
                            <div className="ml-6">
                                <h1 className="font-bold text-lg">Senior Platform Engineer, Firebase</h1>
                                <div className="flex my-3 md:my-0 flex-col md:flex-row items-start md:items-center justify-between">
                                    <h1 className="font-bold text-blue-600 mt-1 text-sm">Google LLC United States</h1>
                                    <h1 className="font-medium text-gray-600 mt-1 text-sm flex items-center space-x-2"><FaMapMarked size={20} className="mr-3" /> Los Angeles, United States</h1>
                                </div>
                                <div className="my-3">
                                    <h1 className="font-medium text-sm text-gray-600">September 2020 - Agustus 2021</h1>
                                </div>
                                <h1 className="mt-2 text-sm text-gray-500 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla perspiciatis laborum doloremque ex repellat porro reprehenderit ipsum odit Lorem ipsum dolor sit amet consectetur. voluptates architecto?</h1>
                            </div>
                        </div>

                        <div className="mt-8 relative">
                            <div className="h-3 w-3 bg-blue-400 rounded-full absolute -left-[4px] top-2"></div>
                            <div className="ml-6">
                                <h1 className="font-bold text-lg">Senior Software Engineer</h1>
                                <div className="flex my-3 md:my-0 flex-col md:flex-row items-start md:items-center justify-between">
                                    <h1 className="font-bold text-blue-600 mt-1 text-sm">Facebook Meta</h1>
                                    <h1 className="font-medium text-gray-600 mt-1 text-sm flex items-center space-x-2"><FaMapMarked size={20} className="mr-3" /> Phoenix, United States</h1>
                                </div>
                                <div className="my-3">
                                    <h1 className="font-medium text-sm text-gray-600">Januari 2019 - September 2020</h1>
                                </div>
                                <h1 className="mt-2 text-sm text-gray-500 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla perspiciatis laborum doloremque ex repellat porro reprehenderit ipsum odit Lorem ipsum dolor sit amet consectetur. voluptates architecto?</h1>
                            </div>
                        </div>

                        {/* Tentang */}
                        <div className="mt-12">
                            <h1 className="font-bold mt-12 text-md text-gray-700">Testimoni Peserta</h1>
                            <div className="mt-4">
                                <div className="flex items-center">
                                    <h1 className="font-bold text-md text-gray-700">Harris Morison</h1>
                                    <h1 className="font-medium ml-5 text-xs text-gray-500">Bachelor Degree, Computer Science</h1>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="flex items-center space-x-1">
                                        <FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStarHalf className="text-yellow-400" />
                                    </div>
                                    <span className="ml-2 text-sm font-bold">4.5</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-4 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum eos animi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem delectus tempora eius tempore et. Lorem, ipsum dolor sit amet</p>
                            </div>

                            <div className="mt-6">
                                <div className="flex items-center">
                                    <h1 className="font-bold text-md text-gray-700">Ferdian Ahmad R</h1>
                                    <h1 className="font-medium ml-5 text-xs text-gray-500">Frontend Engineer di Meta</h1>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="flex items-center space-x-1">
                                        <FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" /><FaStar className="text-yellow-400" />
                                    </div>
                                    <span className="ml-2 text-sm font-bold">5.0</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-4 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum eos animi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem delectus tempora eius tempore et. Lorem, ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                    {/* bg-[#e7e7ff] */}
                    <div className="w-full md:w-[400px] mt-14 md:mt-0 bg-white border border-blue-200 rounded-xl h-fit p-4">
                        <h1 className="font-bold text-md">Jadwal Konsultasi</h1>
                        <div className="grid gap-3 grid-cols-2 mt-3">
                            <div className="p-4 rounded-md bg-blue-600 text-white text-center text-sm flex flex-col space-y-1">
                                <p className="text-white text-xs">Senin</p>
                                <hr className='text-white' />
                                <p className="text-white text-xs font-bold">22/12/22</p>
                                <hr className='text-white' />
                                <p className="text-white text-xs">229 Kuota</p>
                            </div>

                            <div className="p-4 rounded-md bg-white text-white border border-blue-200 text-center text-sm flex flex-col space-y-1">
                                <p className="text-blue-600 text-xs">Jumat</p>
                                <hr className='text-blue-600' />
                                <p className="text-blue-600 text-xs font-bold">12/01/23</p>
                                <hr className='text-blue-600' />
                                <p className="text-blue-600 text-xs">590 Kuota</p>
                            </div>

                            <div className="p-4 rounded-md bg-white text-white border border-blue-200 text-center text-sm flex flex-col space-y-1">
                                <p className="text-blue-600 text-xs">Rabu</p>
                                <hr className='text-blue-600' />
                                <p className="text-blue-600 text-xs font-bold">23/02/22</p>
                                <hr className='text-blue-600' />
                                <p className="text-blue-600 text-xs">889 Kuota</p>
                            </div>

                            <div className="p-4 rounded-md bg-white text-white border border-blue-200 text-center text-sm flex flex-col space-y-1">
                                <p className="text-blue-600 text-xs">Senin</p>
                                <hr className='text-blue-600' />
                                <p className="text-blue-600 text-xs font-bold">20/03/22</p>
                                <hr className='text-blue-600' />
                                <p className="text-blue-600 text-xs">980 Kuota</p>
                            </div>
                        </div>
                        <h1 className="font-bold text-md mt-8">Waktu Tersedia</h1>
                        <div className="grid gap-3 grid-cols-2 mt-3">
                            <p className='w-full px-3 py-2 rounded-md bg-blue-600 text-white font-bold text-center text-xs'>20:00 WIB</p>
                            <p className='w-full px-3 py-2 rounded-md bg-white text-blue-600 border border-blue-200 font-bold text-center text-xs'>22:00 WIB</p>
                            <p className='w-full px-3 py-2 rounded-md bg-white text-blue-600 border border-blue-200 font-bold text-center text-xs'>00:00 WIB</p>
                        </div>
                        <div className="px-4 py-3 w-full text-center rounded-md bg-blue-600 text-white font-bold text-sm mt-8">Jadwalkan Konsultasi</div>
                    </div>
                </div>
            </div>
            <SecondFooter />
        </React.Fragment>
    )
}

export default Mentors