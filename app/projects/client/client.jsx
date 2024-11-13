import Aos from 'aos';
import 'aos/dist/aos.css';
import style from './page.module.scss'
import cep from '../../../public/Projects/cep.png'
import unity from '../../../public/Projects/unity.png'
import landing from '../../../public/Projects/landing.png'
import spacex from '../../../public/Projects/spacex.png'
import boteco from '../../../public/Projects/boteco.png'
import { useState, useEffect } from 'react';

import Project from '@/components/SECUNDARIOS/project/project';

export default function Client (){
    
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
    
      if (typeof (window) == 'undefined')
        return null;
    
    return (<>
     <div className={style.main} style={{
        filter: `brightness(${brightness})`,
        }}> 
            <div className={style.godText} data-aos="fade-down" data-aos-duration="1200">
                <h1 className={`${style.textHoverEffect} ${animation ? style.animateOnce : style.whiteAfter}`}>
                &quot;God the Father Creator, sit and witness the strength of Your creation.&quot;</h1>
            </div>
            <div className={style.downText} data-aos="fade-up" data-aos-duration="1200">
                <h1 className={`${style.textHoverEffect} ${animation ? style.animateOnce : style.whiteAfter}`}>
                    Below, behold a selection of my creations.</h1>
            </div>
        </div>
       
       <div className={style.transition}>
       <h1 className={style.h1Name} data-aos="fade-down" data-aos-duration="1000">Some of my Projects</h1>
       </div>

        <div className={style.main2}>
          <div className={style.projectsContainer}>
              <Project tittle="Agency Page" image={landing} tema="Landing Page" linkG="https://landing-page-five-indol.vercel.app/" linkV="https://github.com/cauakse/landing-page"></Project>
              <Project tittle="Spacex Copy" image={spacex} tema="Single Page Aplication" linkG="https://space-x-landing-page-delta.vercel.app/" linkV="https://github.com/cauakse/SpaceX-LandingPage"></Project>
              <Project tittle="Unity Game" image={unity}  tema="Game Design" linkG="https://www.linkedin.com/feed/update/urn:li:activity:7255672853772046336/" linkV="https://www.linkedin.com/feed/update/urn:li:activity:7255672853772046336/"></Project>
              <Project tittle="Brasilian CEP" image={cep}  tema="API Rest" linkG="https://busca-cep-woad.vercel.app/" linkV="https://github.com/cauakse/BuscaCep"></Project>
              <Project tittle="Comercial System" image={boteco}  tema="Generic Boteco System" linkG="" linkV=""></Project>
          </div>
            
        </div>
        </>);
}