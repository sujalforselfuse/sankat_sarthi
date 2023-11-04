import React, { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import logo from '../../Images/sarthi_logo.png'
// import openSidebar from '../Images/quill_hamburger-sidebar open.png'
// import closeSidebar from '../Images/quill_hamburger-sidebar close.png'

const Navbar = () => {

    const location = useLocation();

    const [sidebar, setsidebar] = useState(false);

    const sidebarRef = useRef(null);

    //   Funtion to Open the sidebar

    const handleOpenSidebar = () => {
        setsidebar(true)
        document.body.style.overflow = 'hidden';
    }

    //   Funtion to close the sidebar

    const handleCloseSidebar = () => {
        setsidebar(false)
        document.body.style.overflow = 'auto';
    }

    useEffect(() => {
        // Handle clicks outside the sidebar
        const handleOutsideClick = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                handleCloseSidebar()
            }
        };

        // Attach the event listener
        document.addEventListener('mousedown', handleOutsideClick);

        // Clean up the event listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [sidebar]);

    return (

        // <div className="flex flex-col items-center">

        //     {/* Desktop Navbar */}

        //     <div className="w-full 2xl:max-w-full max-w-[74rem] items-center justify-between text-sm flex">

        //         {/* Logo */}

        //         <div>

        //             <img src="" alt='Zorway' className='2xl:w-[150px] 2xl:h-[150px] w-[78px] h-[78px]' />

        //         </div>

        //         {/* Nav Links Section  */}

        //         <div className="sm:flex w-full items-center justify-center lg:static lg:h-auto lg:w-auto lg:bg-none hidden">

        //             {/* Nav Links  */}

        //             <nav className="md:ml-auto flex flex-wrap items-center justify-center">

        //                 <a href='/' className="mr-5 text-base 2xl:text-[1.5rem] text-[#AA67FE] cursor-pointer font-medium tracking-widest" style={{ filter: 'drop-shadow(0px 4px 3px #AA67FE)' }}>Home</a>

        //                 <a href='#service' className={`nav-link ${location.pathname === '/' ? 'text-orange-500' : ''}`} style={{ filter: 'drop-shadow(0px 2px 2px #FFFFFF)' }}>HOW IT WORKS</a>

        //                 <a href='#testimonal' className={`nav-link ${location.pathname === '/' ? 'text-orange-500' : ''}`} style={{ filter: 'drop-shadow(0px 2px 2px #FFFFFF)' }}>SERVICES</a>

        //                 <a href='#about' className={`nav-link ${location.pathname === '/' ? 'text-orange-500' : ''}`} style={{ filter: 'drop-shadow(0px 2px 2px #FFFFFF)' }}>WHY SARTHI?</a>

        //             </nav>

        //             {/* contact button */}

        //             <a href={'#contact'} className="lg:px-4 px-3 py-2 2xl:py-2 relative rounded group 2xl:text-2xl text-lg font-medium text-black flex items-center justify-center">

        //                 <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-orange-300 to-orange-400"></span>

        //                 <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-orange-400 to-orange-300"></span>

        //                 <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-orange-700 to-orange-300"></span>

        //                 <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-orange-700 from-orange-300"></span>

        //                 <span className="relative">Contact us</span>

        //             </a>

        //         </div>

        //         {/* Hamburger button */}

        //         <div className='sm:hidden flex relative z-[500]'>

        //             {sidebar ?

        //                 //  Open Hamburger button

        //                 <img src="" alt='Zorway' className='w-[40px] h-[40px]' onClick={handleCloseSidebar} />

        //                 :

        //                 //  Close Hamburger button

        //                 <img src="" alt='Zorway' className='w-[40px] h-[40px]' onClick={handleOpenSidebar} />}

        //         </div>

        //     </div>

        //     {/* Sidebar - Mobile Navbar */}

        //     {sidebar &&

        //         <div className='sm:hidden flex flex-col items-center justify-center absolute z-50 bg-[#131313] gap-y-8 w-[90%] py-8 px-4 rounded-lg transition-all translate-y-[5rem]' onClick={handleCloseSidebar} ref={sidebarRef}>

        //             <a href='/' onClick={() => { setsidebar(!sidebar) }} className="flex items-center w-full justify-center pb-4 border-b-4 border-dashed text-2xl text-[#AA67FE] cursor-pointer font-bold tracking-wider">Home</a>

        //             <a href='#service' onClick={() => { setsidebar(!sidebar) }} className="nav-link-mob">Our Services</a>

        //             <a href='#testimonal' onClick={() => { setsidebar(!sidebar) }} className="nav-link-mob">Testimonals</a>

        //             <a href='#about' onClick={() => { setsidebar(!sidebar) }} className="nav-link-mob">About Us</a>

        //             {/* contact button */}

        //             <a href='#contact' onClick={() => { setsidebar(!sidebar) }} className='mt-12'>

        //                 <button className="inline-flex shadow-2xl items-center bg-[#AA67FE] border-0 py-4 px-8 focus:outline-none rounded-lg text-xl md:mt-0 tracking-wider" style={{ boxShadow: '0px -2px 16px 0px #AA67FE' }}>

        //                     Contact Us

        //                 </button>

        //             </a>

        //         </div>}

        //     {sidebar && <div className='absolute top-0 left-0 h-[100vh] z-[-1] bg-black w-[100%] opacity-40'></div>}

        // </div>
        <div>

            <nav className="">

                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">

                    <a href="/" className="flex items-center">
                        <img src={logo} className="h-20" alt="Logo" />

                        <div className='flex sm:flex-row flex-col gap-x-2 uppercase text-orange-600'>
                            <span className="text-3xl font-black whitespace-nowrap dark:text-white">Sankat</span>
                            <span className="text-3xl font-black whitespace-nowrap dark:text-white">Sarthi</span>
                        </div>
                    </a>

                    <div className="flex items-center">

                        {/* Login button */}

                        <a href={'/login'} className="lg:px-6 px-3 py-1 2xl:py-2 relative rounded group 2xl:text-2xl text-lg font-medium text-black flex items-center justify-center">

                            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-orange-300 to-orange-400"></span>

                            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-orange-400 to-orange-300"></span>

                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-orange-400 to-orange-300"></span>

                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-orange-400 from-orange-300"></span>

                            <span className="relative">Login</span>

                        </a>

                    </div>

                </div>

            </nav>

            <nav className="">

                <div className="max-w-screen-xl px-4 py-3 mx-auto">

                    <div className="flex items-center">

                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            
                            <li>
                                <a href="/" className={`nav-link ${location.pathname === '/' ? 'text-orange-500 before:w-full' : 'text-gray-900'}`}>HOME</a>
                            </li>

                            <li>
                                <a href="#" className={`nav-link ${location.pathname === '#works' ? 'text-orange-500 before:w-full' : 'text-gray-900'}`}>HOW IT WORKS</a>
                            </li>

                            <li>
                                <a href="#" className={`nav-link ${location.pathname === '#services' ? 'text-orange-500 before:w-full' : 'text-gray-900'}`}>SERVICES</a>
                            </li>

                            <li>
                                <a href="#" className={`nav-link ${location.pathname === '#reasons' ? 'text-orange-500 before:w-full' : 'text-gray-900'}`}>WHY SARTHI?</a>
                            </li>

                        </ul>

                    </div>
                    
                </div>

            </nav>

        </div>
    )
}

export default Navbar


