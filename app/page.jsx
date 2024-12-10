"use client";

import Header from "@/components/PRINCIPAIS/header/header";
import style from './page.module.scss'
import arrow from '../public/arrowDown.gif'
import Image from "next/image";
import profile from '../public/magnus.gif'
import Footer from "@/components/PRINCIPAIS/footer/footer";
import dynamic from "next/dynamic";

import { useEffect, useState } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Home() {
  const [brightness, setBrightness] = useState(1); 

  useEffect(() => {
    Aos.init();
    const handleScroll = () => {
      const scrollTop = window.scrollY; 
      const maxScroll = (document.documentElement.scrollHeight - window.innerHeight)/2; 
      const newBrightness = 1 - Math.min(scrollTop / maxScroll, 1) * 0.965;

      setBrightness(newBrightness);
    };

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <div className={style.supa}>
      <Header turnBlack='true' follow='true' id="init"></Header>
      <div className={style.container} 
      style={{
        filter: `brightness(${brightness})`,
        }} >
        <div className={style.content}>
          <div className={style.main}>
            <div className={style.devSection} data-aos="fade-up" data-aos-duration="1000">
              <h1 className={style.devText}>
                DESENVOLVEDOR &<br />
                PESQUISADOR CIENTÍFICO
              </h1>
            </div>
            <div className={style.aboutSection} data-aos='fade-left' data-aos-duration="1000">
              <h1 className={style.aboutText}>
                Sou estudante e pesquisador científico na área de realidade virtual na Unoeste. Apaixonado por explorar, aprender e criar novas tecnologias, me esforço para dar vida a ideias inovadoras.
              </h1>
            </div>
          </div>
          <div className={style.arrow}><Image className={style.arrowImg} src={arrow} alt="Arrow"></Image></div>
        </div>
      </div>

      <div className={style.secondSection}>
        <div className={style.contentContainer}>
          <div className={style.textSide} data-aos="fade-right" data-aos-duration="1000">
            <div className={style.textHeader}>
              <h1 className={style.meTittle}>Olá. Eu sou Cauã,</h1>
              <div className={style.accentBar}></div>
            </div>
            
            <div className={style.textContent}>
              <p className={style.meText}>
                Uso minha paixão e habilidades para desenvolver produtos digitais inovadores e experiências imersivas. Minha expertise abrange desde design e implementação até gerenciamento efetivo de projetos, atendendo clientes nacionais e internacionais. Como pesquisador e criador, colaboro com empresas, startups e instituições educacionais para dar vida a soluções tecnológicas de ponta. Com foco em realidade virtual e design minimalista, busco unir funcionalidade com inspiração artística, sempre expandindo os limites das experiências digitais.
              </p>
            </div>

            <div className={style.techBadges}>
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>TypeScript</span>
            </div>
          </div>

          <div className={style.imageSide} data-aos="fade-left" data-aos-duration="1000">
            <div className={style.imageFrame}>
              <Image src={profile} className={style.imageS} alt="Foto de Perfil" />
              <div className={style.glowEffect}></div>
              <div className={style.cornerAccents}>
                <div className={style.corner}></div>
                <div className={style.corner}></div>
                <div className={style.corner}></div>
                <div className={style.corner}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.decorativeElements}>
          <div className={style.orbTop}></div>
          <div className={style.orbBottom}></div>
          <div className={style.grid}></div>
          <div className={style.floatingShapes}>
            <div className={style.shape}></div>
            <div className={style.shape}></div>
            <div className={style.shape}></div>
          </div>
        </div>
      </div>
      <Footer link1="about" link2="contact"></Footer>
    </div>
    </>
  );
}
