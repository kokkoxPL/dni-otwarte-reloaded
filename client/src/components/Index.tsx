import About from "./index/About";
import Banner from "./index/Banner";
import Offer from "./index/Offer";

import gsap from "gsap";
import { useEffect } from "react";

const Index = () => {
    useEffect(()=>{
        gsap.fromTo('.bgW', {top:0, zIndex:60}, {top:'-100%', duration:1, delay:1})
        gsap.fromTo('.bgG', {top:'100%', zIndex:70}, {top:'-100%', duration:1.5, delay:.2})
    })

    return (
        <>
            <div className="bgs">
                <div className="bgW bg-slate-100 w-[100%] h-screen absolute"></div>
                <div className="bgG bg-gray-500 w-[100%] h-screen absolute"></div>
            </div>
            <Banner />
            <About/>
            <div className="w-full h-[10px] bg-gradient-to-r from-fuchsia-700 to-red-700"></div>
            <Offer/>
        </>
    )
}

export default Index;