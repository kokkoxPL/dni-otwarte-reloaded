import { useEffect } from "react";
import { TimelineMax } from "gsap/gsap-core";

const BannerAnimation = () =>{

    useEffect(()=>{
        const box = document.querySelectorAll(".box");
        const Ibox = document.querySelectorAll(".Ibox");
        const IIbox = document.querySelectorAll(".IIbox");
        const IIIbox = document.querySelectorAll(".IIIbox");

        const tl = new TimelineMax({repeat: -1});
        tl.from(Ibox,.1, {top:0, left:0, border:'none'})
            .addLabel('moveBox')
                .to([box[0],box[2]], 1,  {left:0, delay:.2}, 'moveBox')
            .addLabel('show')
                .to(Ibox, {borderWidth:'2px', borderColor:'black', borderStyle:'solid'})
                .to(Ibox[0], {y:'-200px', delay:.1}, 'show')
                .to(Ibox[1], {y:'200px', delay:.1}, 'show')
            // .addLabel('move')
                .to(Ibox[0], {x:'200px'}, 'move')
                .to(Ibox[1], {x:'-200px'}, 'move')
            .addLabel('hide')
                .to(box[0], {left:'200px'}, 'hide')
                .to(box[2], {left:'-200px'}, 'hide')
            .addLabel('hideY')
                .to(Ibox[0], {y:0}, 'hideY')
                .to(Ibox[1], {y:0}, 'hideY')
            .addLabel('moveX')
                .to(Ibox[0], {x:'0'}, 'moveX')
                .to(Ibox[1], {x:'0'}, 'moveX')
            .fromTo('.bgB', {x:'-220px'}, {x:0})
                .to('.bgB', {y:'-220px'})
                .to(Ibox,.1, {top:0, left:0})
    },[])

    return(
        <div className="boxes w-[80%] flex m-auto relative">
                <div className="box border-[2px] border-black w-[200px] h-[200px] relative left-[200px]">
                    <div className="Ibox border-[2px] border-black w-[200px] h-[200px] absolute top-0 left-0 my-auto m-[2px]">
                    </div>
                </div>
                    <div className="box border-[2px] border-black w-[200px] h-[200px] overflow-hidden m-[2px]">
                        <div className="bgB w-[220px] h-[220px] bg-black"></div>
                </div>
             <div className="box border-[2px] border-black w-[200px] h-[200px] relative left-[-200px]">
                    <div className="Ibox border-[2px] border-black w-[200px] h-[200px] absolute top-0 left-0 my-auto m-[2px]">

                </div>
             </div>
    </div>
    )

}

export default BannerAnimation;