"use client";

import Header from "@/components/PRINCIPAIS/header/header";
import style from './page.module.scss'
import arrow from '../public/arrowDown.gif'
import Image from "next/image";
import { useEffect, useState } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Home() {
  const [brightness, setBrightness] = useState(1); 

  useEffect(() => {
    Aos.init();
    const handleScroll = () => {
      const scrollTop = window.scrollY; 
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight; 
      const newBrightness = 1 - Math.min(scrollTop / maxScroll, 1) * 1.4;

      setBrightness(newBrightness);
    };

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <div className={style.supa}>
      <Header></Header>
      <div className={style.container} 
      style={{
        filter: `brightness(${brightness})`,
        }}>
        <div className={style.content}>
          <div className={style.main}>
            <div className={style.devSection} data-aos="fade-up" data-aos-duration="1000">
              <h1 className={style.devText}>
                DEVELOPER &<br />
                SCIENTIFIC RESEARCHER
              </h1>
            </div>
            <div className={style.aboutSection} data-aos='fade-left' data-aos-duration="1000">
              <h1 className={style.aboutText}>
                I am a student and scientific researcher in the field of virtual reality at Unoeste. Passionate about exploring, learning, and creating new technologies, I strive to bring innovative ideas to life.</h1>
            </div>
          </div>
          <div className={style.arrow}><Image className={style.arrowImg} src={arrow} alt="Arrow"></Image></div>
        </div>
      </div>

      <div className={style.secondSection}>

      </div>
    </div>
  );
}
