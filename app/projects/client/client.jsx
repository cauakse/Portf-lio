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
                &quot;Deus pai criador, sente-se e testemunhe a força de tua criação.&quot;</h1>
            </div>
            <div className={style.downText} data-aos="fade-up" data-aos-duration="1200">
                <h1 className={`${style.textHoverEffect} ${animation ? style.animateOnce : style.whiteAfter}`}>
                    Abaixo, veja algumas das minhas criações.</h1>
            </div>
        </div>
       
       <div className={style.transition}>
       <h1 className={style.h1Name} data-aos="fade-down" data-aos-duration="1000">Alguns dos meus projetos</h1>
       </div>

        <div className={style.main2}>
          <div className={style.projectsContainer}>
              <Project 
                  title="Agency Page"
                  description="Uma landing page moderna e responsiva para agências, desenvolvida com Next.js e design clean."
                  image={landing} 
                  githubLink="https://github.com/cauakse/landing-page"
                  deployLink="https://landing-page-five-indol.vercel.app/"
                  techs={['HTML', 'CSS', 'JavaScript', 'React','Next.js']}
                  status="Concluído"
              />
              <Project 
                  title="SpaceX Copy" 
                  description="Clone da página da SpaceX, recriando a interface moderna e minimalista com animações suaves."
                  image={spacex} 
                  githubLink="https://github.com/cauakse/SpaceX-LandingPage"
                  deployLink="https://space-x-landing-page-delta.vercel.app/"
                  techs={['HTML', 'CSS', 'JavaScript', 'React','Next.js']}
                  status="Concluído"
              />
              <Project 
                  title="Unity Game" 
                  description="Jogo desenvolvido na Unity, explorando mecânicas de gameplay e design de níveis."
                  image={unity}  
                  githubLink="https://www.linkedin.com/feed/update/urn:li:activity:7255672853772046336/"
                  deployLink="https://www.linkedin.com/feed/update/urn:li:activity:7255672853772046336/"
                  techs={['Unity', 'C#', 'Game Design']}
                  status="Em Desenvolvimento"
              />
              <Project 
                  title="Busca CEP" 
                  description="Aplicação para consulta de CEP brasileiro utilizando API REST, com interface intuitiva."
                  image={cep}  
                  githubLink="https://github.com/cauakse/BuscaCep"
                  deployLink="https://busca-cep-woad.vercel.app/"
                  techs={['HTML', 'CSS', 'JavaScript', 'React','Next.js']}
                  status="Concluído"
              />
              <Project 
                  title="Sistema Comercial" 
                  description="Sistema de gestão comercial desenvolvido em Java com interface JavaFX e banco de dados PostgreSQL."
                  image={boteco}  
                  githubLink=""
                  deployLink=""
                  techs={['Java', 'JavaFX', 'PostgreSQL', 'JDBC']}
                  status="Em Desenvolvimento"
              />
          </div>
            
        </div>
        </>);
}