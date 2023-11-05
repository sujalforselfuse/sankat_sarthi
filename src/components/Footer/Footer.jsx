import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { IoMdMail } from 'react-icons/io'
import logo from '../../Images/sarthi_logo.png'
import {PiInstagramLogoFill} from 'react-icons/pi'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
    return (

        <main className="flex flex-col relative z-10 bg-green-100 pt-4 pb-4 sm:pt-[30px] sm:gap-y-4">

            {/* Logo */}

            <div className='flex justify-center'>

                <img src={logo} alt='Zorway' className='w-[162px] h-[162px]' />

            </div>

            {/* Footer */}

            <footer className='border-t-2 border-[#000000] pt-8 sm:mb-0 mb-8'>

                {/* Social Media Links Mobile */}

                <div className='sm:hidden gap-x-3 px-6 mb-4 items-center w-full justify-center flex'>

                    {/* Twitter */}

                    <AiFillTwitterCircle />

                    {/* Instagram */}

                    <PiInstagramLogoFill />

                    {/* Linkedin */}

                    <AiFillLinkedin />  

                </div>

                {/* Details Section */}

                <div className="container mx-auto">

                    <div className="flex flex-wrap justify-center 2xl:justify-between lg:gap-x-12 xl:gap-x-0">

                        {/* Contact */}

                        <div className="w-full px-4 sm:w-1/3 lg:w-3/12">

                            <div className="w-full">

                                <h4 className="footer-headings">Reach Us</h4>

                                {/* Conatct Details */}

                                <div className='flex flex-col justify-between gap-y-4'>

                                    {/* Mobile Number */}

                                    <h1 className='flex items-center text-[#000000] 2xl:text-2xl font-medium gap-x-4'>
                                        <span><BiSolidPhoneCall className='text-xl 2xl:text-3xl' /></span> +91 9100545426
                                    </h1>

                                    {/* Email */}

                                    <div className='flex items-center text-[#000000] font-medium 2xl:text-2xl gap-x-4'>
                                        <span><IoMdMail className='text-xl 2xl:text-3xl' /></span> xyz@gmail.com
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Company */}

                        <div className="w-full px-4 sm:w-1/3 lg:w-2/12 sm:inline-block hidden">

                            <div className="mb-10 w-full">

                                <h4 className="footer-headings">Company</h4>

                                {/* Website Section Links */}

                                <ul>

                                    {/* About */}

                                    <li>
                                        <a
                                            rel='noreferrer'
                                            href="/"
                                            className="footer-links"
                                        >
                                            About
                                        </a>
                                    </li>

                                    {/* Contact */}

                                    <li>
                                        <a
                                            rel='noreferrer'
                                            href="/"
                                            className="footer-links"
                                        >
                                            Contact
                                        </a>
                                    </li>

                                    {/* Services */}

                                    <li>
                                        <a
                                            rel='noreferrer'
                                            href="/"
                                            className="footer-links"
                                        >
                                            Services
                                        </a>
                                    </li>

                                    {/* Testimonals */}

                                    <li>
                                        <a
                                            rel='noreferrer'
                                            href="/"
                                            className="footer-links"
                                        >
                                            SOS
                                        </a>
                                    </li>

                                </ul>

                            </div>

                        </div>

                        {/* Legal */}

                        <div className="w-full px-4 sm:w-1/3 lg:w-2/12 sm:inline-block hidden">

                            <div className="mb-10 w-full">

                                <h4 className="footer-headings">Legal</h4>

                                {/* Legal terms */}

                                <ul>

                                    {/* Privacy Policy */}

                                    <li>
                                        <a
                                            rel='noreferrer'
                                            href=" "
                                            className="footer-links"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>

                                    {/* Terms & Services */}

                                    <li>
                                        <a
                                            rel='noreferrer'
                                            href=" "
                                            className="footer-links"
                                        >
                                            Terms & Services
                                        </a>
                                    </li>

                                    {/* Terms of Use */}

                                    <li>
                                        <a
                                            rel='noreferrer'
                                            href=" "
                                            className="footer-links"
                                        >
                                            Terms of Use
                                        </a>
                                    </li>

                                    {/* Refund Policy */}

                                    <li>
                                        <a
                                            rel='noreferrer'
                                            href=" "
                                            className="footer-links"
                                        >
                                            Refund Policy
                                        </a>
                                    </li>

                                </ul>

                            </div>

                        </div>

                        {/* Social Media Links */}

                        <div className="w-full px-4 2xl:px-0 sm:w-2/3 lg:w-[304px] h-[207px] 2xl:w-[390px] 2xl:h-[300px] bg-[#131313] rounded-xl sm:inline-block hidden">

                            <div className="my-4 w-full">

                                <h4 className="text-[#FFFFFF] mb-6 text-lg 2xl:text-3xl font-semibold text-center tracking-wide">Connect With Us</h4>

                                <div className='flex flex-col gap-y-3 2xl:gap-7 px-6'>

                                    {/* Twitter link */}

                                    <a
                                        rel='noreferrer'
                                        className="flex gap-x-4 items-center"
                                        target='_blank'
                                        href={' '}>

                                        <AiFillTwitterCircle className='cursor-pointer text-3xl text-green-300' />

                                        <h1 className='text-sm 2xl:text-2xl font-normal text-[#FFFFFF]'> Twitter - Sankat_Sarthi</h1>

                                    </a>


                                    {/* Instagram link */}

                                    <a
                                        rel='noreferrer'
                                        className="flex gap-x-4 items-center"
                                        target='_blank'
                                        href={'https://instagram.com/zorwayglobal?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'}>

                                        <PiInstagramLogoFill className='cursor-pointer text-3xl text-green-300' />

                                        <h1 className='text-sm 2xl:text-2xl font-normal text-[#FFFFFF]'> Instagram - Sankat_Sarthi</h1>

                                    </a>

                                    {/* Linkedin Link */}

                                    <a
                                        rel='noreferrer'
                                        className="flex gap-x-4 items-center"
                                        target='_blank'
                                        href={'https://www.linkedin.com/company/zorway-global/'}>

                                        <AiFillLinkedin className='cursor-pointer text-3xl text-green-300' />

                                        <h1 className='text-sm 2xl:text-2xl font-normal text-[#FFFFFF]'> linkedin - Sankat_Sarthi</h1>

                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Design Component */}

                <div>

                    <span className="absolute left-0 bottom-0 z-[-1]">

                        <svg
                            width="217"
                            height="229"
                            viewBox="0 0 217 229"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                                fill="url(#paint0_linear_1179_5)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1179_5"
                                    x1="76.5"
                                    y1="281"
                                    x2="76.5"
                                    y2="1.22829e-05"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#3056D3" stopOpacity="0.08" />
                                    <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </span>

                    <span className="absolute top-10 right-10 z-[-1]">

                        <svg
                            width="75"
                            height="75"
                            viewBox="0 0 75 75"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                                fill="url(#paint0_linear_1179_4)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1179_4"
                                    x1="-1.63917e-06"
                                    y1="37.5"
                                    x2="75"
                                    y2="37.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#13C296" stopOpacity="0.31" />
                                    <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </span>

                </div>

            </footer>

            {/* Copyright */}

            <copyright>

                <div className="text-lg 2xl:text-4xl font-semibold text-[#000000] text-center 2xl:mt-6">© Copyright Sankat_Sarthi. All Rights Reserved
                </div>

            </copyright>

        </main>
    )
}

export default Footer
