import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

const Offer =()=>{
    const kierunki =[
        {
            img:'https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80',
            title:'Technik Programista',
            desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quos!',
            link: 'https://strona.zstiojar.edu.pl/technik-programista/'
        },
        {
            img:'https://img.redro.pl/obrazy/technology-robot-sci-fi-woman-cyborg-android-background-humanoid-artificial-intelligence-wallpaper-3d-render-400-167856899.jpg',
            title:'Technik Informatyk',
            desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quos!',
            link:'https://strona.zstiojar.edu.pl/technik-informatyk/'
        },
        {
            img:'https://eu.crucial.com/content/dam/crucial/articles/about-graphic-design/graphic-design-hardware-whats-right-for-you/desk-with-computer-for-graphic-design.jpg.transform/small-jpg/img.jpg',
            title:'Technik Grafiki i Poligrafii Cyfrowej',
            desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quos!',
            link:'https://strona.zstiojar.edu.pl/technik-grafiki-i-poligrafii-cyfrowej/'
        },
        {
            img:'https://zstiojar.edu.pl/wp-content/uploads/2023/02/technik-mechanik.jpg',
            title:'Technik Mechanik',
            desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quos!',
            link:'https://strona.zstiojar.edu.pl/technik-mechanik/'
        },
        {
            img:'https://kkz.edu.pl/aktualnosci/wp-content/uploads/2019/02/cylinders-569151_1280.jpg',
            title:'Technik Pojazdów Samochodowych',
            desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quos!',
            link:'https://strona.zstiojar.edu.pl/technik-pojazdow-samochodowych/'
        },
        {
            img:'https://zawody.kwalifikacjezawodowe.info/img/exp_wo3/5/61/zawod-Monter-elektronik-obrazek_duzy_107561.jpg',
            title:'Technik Elektronik',
            desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quos!',
            link:'https://strona.zstiojar.edu.pl/technik-elektronik/'
        },
        {
            img:'https://zawody.kwalifikacjezawodowe.info/img/exp_wo3/6/76/zawod-Technik-teleinformatyk-obrazek_duzy_107676.jpg',
            title:'Technik Teleinformatyk',
            desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quos!',
            link:'https://strona.zstiojar.edu.pl/technik-teleinformatyk/'
        },
        {
            img:'https://emt-systems.pl/layout/xautomatyka-mechatronika-szkolenie-01.jpg.pagespeed.ic.lU-j_NEZP6.jpg',
            title:'Technik Automatyk',
            desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quos!',
            link:'https://strona.zstiojar.edu.pl/technik-automatyk/'
        },
    ]

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.offers .offer', {y:'200px', opacity:0}, {y:0, opacity:1, duration:.7, stagger:.2,
            scrollTrigger:{trigger:'.offers',
                            start:'top 80%',
                            toggleActions: "restart",
    }})
    },[])

    return(
        <div className="offers bg-white p-[100px]">
            <div>
                <div className="w-[100%] grid grid-cols-3 gap-[30px]">
                    <div className="offer items-center text-center my-auto">
                        <h2 className="text-[40px] font-gruppo font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-fuchsia-600">OFERTA SZKOŁY</h2>
                        <p className="text-[20px] text-justify w-[80%] mx-auto my-[20px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia animi debitis vero eius quo id velit voluptatum ipsum voluptas iure?</p>
                        <Link to="https://zstiojar.edu.pl/nabor-2023-2024/"><button className=" border-[2px] border-[crimson] text-[crimson] px-[20px] py-[10px] font-gruppo font-extrabold text-[20px] rounded-full bg-gradient-to-r hover:from-fuchsia-700 hover:to-red-700 hover:text-white transition-all duration-300">Dowiedz się więcej</button></Link>
                    </div>
                    {kierunki.map((kierunek, index)=>{
                        return(
                          <Link key={index} to={kierunek.link}>
                              <div className=" offer group relative overflow-hidden rounded-3xl border-[2px] border-black">
                                    <div className=" group-hover:scale-125 transition-all duration-500">
                                        <div style={{background: `linear-gradient(80deg, rgba(0,0,0,.1), black),url(${kierunek.img})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize:'cover',
                                            backgroundPosition:'50%',
                                            aspectRatio:'16/9'}}>
                                            <div className="group-hover:bg-black/70 w-full h-full z-40 transition-all">
                                        <div className="relative w-[60%] top-[100%] left-[20%] group-hover:top-[50%] transition-all duration-500 delay-100">
                                            <h2 className=" text-[20px] font-orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-red-700">{kierunek.title}</h2>
                                            <p className="text-white">{kierunek.desc}</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                          </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Offer;