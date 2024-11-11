'use client';
import Header from '@/components/PRINCIPAIS/header/header.jsx';
import style from './page.module.scss'
import Footer from '@/components/PRINCIPAIS/footer/footer.jsx';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Page (){

    const [brightness,setBrightness] = useState(1);
    const [animation,setAnimation] = useState(true);

    useEffect(() => {
        Aos.init();
        const handleScroll = () => {
          const scrollTop = window.scrollY; 
          const maxScroll = (document.documentElement.scrollHeight - window.innerHeight)/2; 
          const newBrightness = 1 - Math.min(scrollTop / maxScroll, 1) * 0.965;
    
          setBrightness(newBrightness);
        };
    
        window.addEventListener('scroll', handleScroll);

        setTimeout(() => {
            setAnimation(false);
          }, 3500);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <>
        <Header turnBlack='true' follow='true' id='init'></Header>
        <div className={style.main} style={{
        filter: `brightness(${brightness})`,
        }}> 
            <div className={style.godText} data-aos="fade-down" data-aos-duration="1200">
                <h1 className={`${style.textHoverEffect} ${animation ? style.animateOnce : style.whiteAfter}`}>
                \"God the Father Creator, sit and witness the strength of Your creation.\"</h1>
            </div>
            <div className={style.downText} data-aos="fade-up" data-aos-duration="1200">
                <h1 className={`${style.textHoverEffect} ${animation ? style.animateOnce : style.whiteAfter}`}>
                    Below, behold a selection of my creations.</h1>
            </div>
        </div>
        <div className={style.main2}>
            
        </div>
        <Footer link1="about" link2="contact"></Footer>
        </>
    )
}