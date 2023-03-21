import About from "./index/About";
import Banner from "./index/Banner";
import Offer from "./index/Offer";

import gsap from "gsap";
import { useEffect } from "react";

const Index = () => {
    useEffect(()=>{
        gsap.fromTo('.bgW', {top:0, zIndex:60}, {top:'-100%', duration:1, delay:1})
        gsap.fromTo('.bgB', {top:'100%', zIndex:70}, {top:'-100%', duration:1.5, delay:.2})
        gsap.fromTo('.bgR', {top:'100%', zIndex:80}, {top:'-100%', duration:1.5, delay:.4})
    })

    return (
        <>
            <div className="bgs">
                <div className="bgW bg-slate-100 w-[100%] h-screen absolute left-0"></div>
                <div className="bgB bg-black w-[120%] h-screen absolute left-0"></div>
                <div className="bgR bg-red-700 w-[100%] h-screen absolute left-0"></div>
            </div>
            <Banner />
            <About/>
            <div className="w-full h-[10px] bg-gradient-to-r from-fuchsia-700 to-red-700"></div>
            <Offer/>
        </>
    )
}

export default Index;