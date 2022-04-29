import React from 'react'
import HomeLayouts from 'layouts/PagesLayouts'
import HeadImage from "assets/learn.png"
import facebook from "assets/facebook.png"
import microsoft from "assets/microsoft.png"
import ClassCard from 'components/organism/ClassCard'
import BenefitsCard from 'components/organism/BenefitsCard'
import SectionLayouts from 'layouts/SectionLayouts'
import MentorsCard from 'components/organism/MentorsCard'
import { MentorsList, ClassLists, BenefitsList } from 'apis'
import Recommendation from 'components/templates/Recommendation'
import instructor from "assets/instructor.png"
import ContentLayouts from 'layouts/ContentLayouts'
import Descriptions from 'components/atoms/Descriptions'
import { questionList } from 'apis'
import { FaPhone, FaBookOpen, FaCommentDots, FaFacebook, FaInstagram, FaMailchimp, FaLinkedin, FaDribbble } from 'react-icons/fa'
import coverImage from "assets/covergreen.png"
import TabsComponent from 'components/templates/TabsComponent'
import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
    return (
        <React.Fragment>
            <HomeLayouts>
                {/* Helmets */}
                <Head>
                    <meta charSet="utf-8" />
                    <title>Belajarbekerja.com - Belajar dengan Mentor</title>
                    <meta name="description" content="belajarbekerja.com, elearning-platform" />
                    <meta name="title" content="Meta Tags — Preview, Edit and Generate" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://belajarbekerja.com/" />
                    <meta property="og:title" content="Belajarbekerja.com - Belajar dengan mentor" />
                    <meta property="og:description" content="platform elearning belajar bekerja" />
                </Head>
                {/* Heading Section */}
                <div className="w-full my-10 md:my-24">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2">
                            {/* Heading Pages */}
                            <h1 className="heading text-3xl md:text-[46px] mt-3 mb-5 leading-tight font-bold text-gray-700">Belajar dan Konsultasi bersama Mentor</h1>
                            <p className='text-sm leading-normal text-gray-600'>Investasi ilmu pengetahuan dan teknologi untuk siap kerja dan bersaing dan berkolaborasi di perusahaan teknologi</p>
                            <button className="py-3 mt-6 text-sm text-white px-6 bg-green-600 hover:bg-green-800 text-md font-bold">Coba Gratis</button>
                            {/* Company Partner */}
                            <div className="w-full grid grid-cols-4 gap-x-1 mt-14 items-center">
                                <div className="w-[80%] mx-auto"><Image src={facebook} className="w-full h-auto" alt={"amazon"} /></div>
                                <div className="w-[80%] mx-auto"><Image src={microsoft} className="w-full h-auto" alt={"google"} /></div>
                                <div className="w-[80%] mx-auto"><Image src={facebook} className="w-full h-auto" alt={"amazon"} /></div>
                                <div className="w-[80%] mx-auto"><Image src={microsoft} className="w-full h-auto" alt={"google"} /></div>
                            </div>
                        </div>
                        {/* Header Image */}
                        <div className="w-[80%] md:w-1/2 mt-12 md:mt-0 ml-3 md:ml-5 mx-auto">
                            <Image src={HeadImage} alt={"learn"} />
                        </div>
                    </div>
                </div>

                {/* Free Class Section */}
                <SectionLayouts>
                    {/* Heading Section */}
                    <h1 className="font-bold mb-2 text-2xl text-gray-700">Kursus Gratis Untukmu</h1>
                    <p className='text-sm leading-normal text-gray-600'>Tersedia beberapa kursus gratis yang bisa kamu coba pelajari</p>

                    {/* Fremium Class Lists */}
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                        {
                            ClassLists.map((classItems) => (
                                <ClassCard
                                    key={classItems.id}
                                    category={classItems.category}
                                    title={classItems.title}
                                    prices={classItems.prices}
                                    rating={classItems.rating_star}
                                    users_voted={classItems.users_voted}
                                />
                            ))
                        }
                    </div>
                </SectionLayouts>

                {/* Benefits Section */}
                <SectionLayouts addingclass="my-20">
                    <div className="w-full md:w-1/2 mx-auto">
                        <h1 className="w-fit text-white mx-auto font-medium py-2 px-4 rounded-full bg-green-600 text-sm md:text-md">Our Services</h1>
                        <h1 className="w-[80%] leading-normal mx-auto font-bold text-center mt-4 mb-2 text-2xl text-gray-700">Keuntungan Mengikuti Kursus di Kelas Bersama</h1>
                    </div>
                    <div className="mx-8 md:mx-[120px]">
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-0 md:gap-y-0 md:gap-x-8 mt-6 md:mt-10">
                            {
                                BenefitsList.map((benefits) => (
                                    <BenefitsCard key={benefits.id} title={benefits.title} description={benefits.description} id={benefits.id} />
                                ))
                            }
                        </div>
                    </div>
                </SectionLayouts>


                {/* Recommendation Mentors */}
                <Recommendation />

                <SectionLayouts addingclass='max-w-[1440px] mx-auto px-4 my-20 md:px-24'>
                    <div className="flex flex-col md:flex-row items-start">
                        <div className="w-full md:w-[35%] mb-4 md:mb-0">
                            <p className="text-sm font-medium text-gray-500 mb-2">FAQ Section</p>
                            <h1 className="font-bold text-3xl leading-snug text-gray-700">Mungkin ada pertanyaan yang sama</h1>
                        </div>
                        <div className="w-full md:w-[65%] mt-5 md:-mt-4">
                            {
                                questionList.map((items) => (
                                    <TabsComponent key={items.id} question={items.question} answers={items.answers} />
                                ))
                            }
                        </div>
                    </div>
                </SectionLayouts>

                {/* Section Join Kelas Bersama as Instructor */}
                <SectionLayouts addingclass='max-w-[1440px] mx-auto my-20 px-4 md:px-24'>
                    <div className="testimonial w-full relative">
                        <Image src={coverImage} alt="cover" />
                        <div className="absolute z-20 top-3 md:top-7 left-10 md:left-[80px] flex flex-col items-center space-y-0 md:space-y-5">
                            <h1 className="text-sm md:text-4xl text-white font-bold w-[70%] mb-2 md:mb-0 text-center">Ingin membuat kursus
                                di Kelas Bersama ?</h1>
                            <p className='text-white text-sm font-normal hidden md:block m-auto w-[60%] text-center'>Kamu akan mendapatkan kesempatan untuk menjadi mentor dibidangmu sekarang. Yuk buruan daftar disini !</p>
                            <button className="py-2 text-sm text-green-600 font-bold px-4 bg-white hover:bg-green-100">Request Mentor</button>
                        </div>
                    </div>
                </SectionLayouts>
            </HomeLayouts>
        </React.Fragment >
    )
}

export default Home