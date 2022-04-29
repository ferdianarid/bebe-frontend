import React from 'react'
import { FaPhone, FaBookOpen, FaCommentDots, FaFacebook, FaInstagram, FaMailchimp, FaLinkedin, FaDribbble } from 'react-icons/fa'
import Descriptions from 'components/atoms/Descriptions'
import SectionLayouts from 'layouts/SectionLayouts'

const SecondFooter = () => {
    return (
        <React.Fragment>
            <SectionLayouts addingclass='px-4 py-10 mx-auto max-w-[1440px] md:px-24 md:py-10 bg-[#252525]'>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-y-0 gap-x-5 bg-[#252525]">
                    <div className="">
                        <h1 className="font-bold text-lg text-white mb-2">Belajar Bekerja</h1>
                        <Descriptions textcolors='text-white' addingclass='leading-[1.9]'>Sebuah platform belajar online yang mempermudah setiap orang yang ingin belajar dengan waktu yang fleksibel dan metode belajar yang terstruktur</Descriptions>
                    </div>
                    <div className="flex flex-col space-y-4 ml-0 md:ml-10">
                        <Descriptions textcolors='text-white' addingclass='font-bold'>Tentang Kami</Descriptions>
                        <Descriptions textcolors='text-white'>Request Mentor</Descriptions>
                        <Descriptions textcolors='text-white'>Pilih Mentors</Descriptions>
                        <Descriptions textcolors='text-white'>Akses Kursus</Descriptions>
                        <Descriptions textcolors='text-white'>Tanya Jawab</Descriptions>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <Descriptions textcolors='text-white' addingclass='flex items-center gap-x-3 font-bold'>Layanan Contact Center</Descriptions>
                        <Descriptions textcolors='text-white' addingclass='flex items-center gap-x-3'><FaPhone size={24} /> +674367236542</Descriptions>
                        <Descriptions textcolors='text-white' addingclass='flex items-center gap-x-3'><FaBookOpen size={24} /> Formulir Pengaduan</Descriptions>
                        <Descriptions textcolors='text-white' addingclass='flex items-center gap-x-3'><FaCommentDots size={24} /> Live Chatting</Descriptions>
                        <Descriptions textcolors='text-white' addingclass='flex items-center gap-x-3'><FaMailchimp size={24} /> Mailchimp Belajar Bekerja</Descriptions>
                    </div>
                    <div className="">
                        <Descriptions textcolors='text-white' addingclass='font-bold'>Ikuti Kami di</Descriptions>
                        <div className="flex items-center space-x-2 mt-3">
                            <Descriptions textcolors='text-white'><FaFacebook size={24} /></Descriptions>
                            <Descriptions textcolors='text-white'><FaInstagram size={24} /></Descriptions>
                            <Descriptions textcolors='text-white'><FaLinkedin size={24} /></Descriptions>
                            <Descriptions textcolors='text-white'><FaDribbble size={24} /></Descriptions>
                        </div>
                    </div>
                </div>
                <hr className='mt-10' />
                <div className="text-left text-xs font-bold text-white mt-4">Belajar Bekerja</div>
            </SectionLayouts>
        </React.Fragment>
    )
}

export default SecondFooter