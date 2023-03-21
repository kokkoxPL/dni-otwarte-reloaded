import { TypeAnimation } from "react-type-animation";
import {GrFacebookOption, GrInstagram, GrYoutube} from 'react-icons/gr'
import {FaTiktok} from 'react-icons/fa'

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

import BannerAnimation from "./Boxes";

const Banner =()=>{

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.banner .title, .banner .animation, .banner .text', {x:"-200px", opacity:0}, {x:0, opacity:1, duration:.7, stagger:.2, delay:2, ease:'easeInOut'});
        gsap.fromTo('.socials a', {x:"100px", opacity:0}, {x:0, opacity:1, duration:.5, stagger:.1, delay:3})
    },[])

    const offers=()=>{
        const offer = document.querySelector('.offers') as HTMLElement;
        offer.scrollIntoView({behavior: "smooth"});
    }

    return(
    <div className=' header grid lg:grid-cols-2 lg:container mx-auto lg:flex-row items-center my-[30px] font-mono w-[100%] h-screen'>
        <div className=' banner w-[70%] m-auto lg:w-full text-center'>
        <h1 className='title text-[25px] sm:text-[40px] text-center font-orbitron'>Zespół Szkół Technicznych i Ogólnokształcacych</h1>
            <TypeAnimation
                sequence={[
                    'Dni otwarte',
                    2000,
                    '',
                    100
                ]}
                repeat={Infinity}
                className='text-[60px] text-red-800 text-center w-full animation font-orbitron font-extralight'
            />
            <p className=' text-[25px] font-gruppo font-extrabold'><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 font-orbitron font-bold">"Sapere Aude"</span>- Odważ się być mądrym
            </p>
            <h1 onClick={offers} className="text-[30px] font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-pink-600 cursor-pointer p-[10px] hover:bg-gradient-to hover:from-fuchsia-700 hover:to-[crimson]">Oferta na rok 2023/2024</h1>

            <div className='socials flex text-[30px] my-[20px] m-auto justify-center'>
                <a href="https://www.facebook.com/ZSTiOBANACH/?locale=pl_PL"><GrFacebookOption className='hover:text-red-900 transition-all duration-300 mx-[10px]'/></a>
                <a href="https://www.instagram.com/zstio.fm/"><GrInstagram className='hover:text-red-900 transition-all duration-300 mx-[10px]'/></a>
                <a href="https://www.youtube.com/@zstio_fm"><GrYoutube className='hover:text-red-900 transition-all duration-300 mx-[10px]'/></a>
                <a href="https://www.tiktok.com/@zstio.fm"><FaTiktok className='hover:text-red-900 transition-all duration-300 mx-[10px]'/></a>
            </div>
                <Link to='/quiz'> <button className=' font-gruppo font-extrabold text-[30px] border-[2px] border-[crimson] text-[crimson] px-[45px] py-[15px] mt-[10px] rounded-full mb-[20px] bg-gradient-to-r hover:from-fuchsia-700 hover:to-red-700 hover:text-white transition-all duration-300'>Przejdź do quizu</button></Link>
            </div>

            <div>
                <BannerAnimation />
            </div>

        {/* <img src="https://images.unsplash.com/photo-1616440347437-b1c73416efc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGMlMjBzZXR1cHxlbnwwfHwwfHw%3D&w=1000&q=80" className='bannerImg w-[90%] max-w-[600px] rounded-full mx-auto'/> */}
    </div>    
    )
}

export default Banner;