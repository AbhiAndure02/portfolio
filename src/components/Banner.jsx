import {AiFillGithub} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import {FaInstagram} from 'react-icons/fa';
import img from '../assets/boy.png'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner=()=> {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0, 
            duration: 750
        })
    },[])

  return (
    <div data-aos = 'fade-up' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center ">
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white ">
        <h1 className="text-[55px] font-semibold mb-8 leading-normal">WELCOME TO <span className="text-fuchsia-600 ">MY PORTFOLIO </span></h1>
        <p>I am a full stack web developer with a passion for creating interactive and responsive web application. I have experience working with javascript, React, Java , Html, css, Tailwind Css, NodeJs, Express, Mysql, Next js I am always looking to expand my knowledge and skill set,</p>
        <div className="flex mt-8 gap-2 ">
            <div className="flex items-center justify-center ">
                <div className="flex space-x-2 ">
                    <a href="https://github.com/AbhiAndure02" className="text-fuchsia-700 hover:text-fuchsia-500 rounded-full glow p-2  ">
                        <AiFillGithub className="text-[28px]"/>
                    </a>
                    <a href="https://www.linkedin.com/in/abhishek-andure-228567228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="text-fuchsia-700 hover:text-fuchsia-500 rounded-full glow p-2  ">
                        <FaLinkedinIn className="text-[28px]"/>
                    </a>
                    <a href="https://x.com/aa_abhiandure2?t=3EuaXRc7cvLR0y0kdZg7TQ&s=09" className="text-fuchsia-700 hover:text-fuchsia-500 rounded-full glow p-2  ">
                        <FiTwitter className="text-[28px]"/>
                    </a>
                    <a href="https://www.instagram.com/i__am__abhi__/" className="text-fuchsia-700 hover:text-fuchsia-500 rounded-full glow p-2  ">
                        <FaInstagram className="text-[28px]"/>
                    </a>
                </div>
            </div>
        </div>
        </div>

        <img src= {img} width={230} height={290} className='rounded-full border-2 p-1 border-fuchsia-600 img_glow' alt="" />

      
    </div>
  )
}
export default Banner;