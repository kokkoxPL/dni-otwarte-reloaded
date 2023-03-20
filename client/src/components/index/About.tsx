import CountUp from "react-countup";
import { useEffect } from "react";
import {useInView} from 'react-intersection-observer';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const About =()=>{
    const [ref, inView] = useInView({threshold:0.65});

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.about .element', {y:'200px', opacity:0}, {y:0, opacity:1, duration:.7, stagger:.2,
            scrollTrigger:{trigger:'.about',
                            start:'top 90%',
                            toggleActions: "restart",
                        }})
     },[])

    const countElements = [
        {
            startVariable: 0,
            endVariable: 8,
            description: "Kierunków Technikum",
        },
        {
            startVariable: 0,
            endVariable: 54,
            description: 'Miejsce w Polsce',
        },
        {
            startVariable: 0,
            endVariable: 7,
            description: 'Kierunków Szkoły Branżowej',
        }
    ]

    return(
        <div className="bg-black p-[100px] text-[20px] border-t-[10px] border-red-600 overflow-hidden" ref={ref}>
            <h1 className=" font-orbitron text-center text-[40px] text-red-600 mb-[50px]">O SZKOLE</h1>

            <div className="about flex justify-center space-x-10 sm:space-x-[150px]">
                    {countElements.map((countElement, index) => {
                        return(
                            <div key={index} className="group element hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-[crimson] rounded-3xl w-[180px]">
                                <div className="text-center rounded-3xl border-[2px] border-[crimson] h-[220px]">
                                    <div className=" text-[50px] font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-[crimson] group-hover:text-black relative top-[10%]">
                                        {inView ? <CountUp start={0} end={countElement.endVariable} duration={2} delay={.3}/> : 0}
                                    </div>
                                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-[crimson] font-gruppo font-bold text-[25px] group-hover:text-black  relative top-[10%]">
                                        <p>{countElement.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default About;