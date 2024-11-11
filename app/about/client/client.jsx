import Image from 'next/image';
import style from './page.module.scss'
import Header from '../../../components/PRINCIPAIS/header/header.jsx';
import Footer from '../../../components/PRINCIPAIS/footer/footer.jsx';
import profile from '../../../public/profileOld.jpg';
import image1 from "../../../public/caroussel/item1-1.png"
import image2 from "../../../public/caroussel/item1-2.png"
import image3 from "../../../public/caroussel/item1-3.png"
import image4 from "../../../public/caroussel/item1-4.png"
import image5 from "../../../public/caroussel/item1-5.png"
import image6 from "../../../public/caroussel/item1-6.png"
import image7 from "../../../public/caroussel/item1-7.png"
import image8 from "../../../public/caroussel/item1-8.png"
import image9 from "../../../public/caroussel/item1-9.png"
import image10 from "../../../public/caroussel/item1-10.png"
import Stack from '../../../components/SECUNDARIOS/stack/stack.jsx';
import dynamic from 'next/dynamic';

import js from '../../../public/tecnologias/javascript.png'
import c from '../../../public/tecnologias/c.png'
import cpp from '../../../public/tecnologias/cpp.png'
import cs from '../../../public/tecnologias/cs.png'
import ts from '../../../public/tecnologias/typescript.png'
import java from '../../../public/tecnologias/java.png'
import python from '../../../public/tecnologias/python.png'


import node from '../../../public/tecnologias/node.png'
import express from '../../../public/tecnologias/express.png'
import react from '../../../public/tecnologias/react.png'
import next from '../../../public/tecnologias/next.png'
import html from   '../../../public/tecnologias/html.png'
import css from   '../../../public/tecnologias/css.png'
import sass from   '../../../public/tecnologias/sass.png'

import posgree from '../../../public/tecnologias/postgree.png'
import maria from   '../../../public/tecnologias/maria.png'
import elastic from   '../../../public/tecnologias/elastic.png'
import mongo from   '../../../public/tecnologias/mongo.png'
import mysql from   '../../../public/tecnologias/mysql.png'
import nosql from   '../../../public/tecnologias/nosql.png'
import sql from   '../../../public/tecnologias/sql.png'


import boot from   '../../../public/tecnologias/bootstrap.png'
import git from   '../../../public/tecnologias/git.png'
import linux from   '../../../public/tecnologias/linux.png'
import unity from   '../../../public/tecnologias/unity.png'
import spring from '../../../public/tecnologias/springboot.png'

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function ClientOnlyComponent() {

    if(typeof(window) == 'undefined')
        return null;

    Aos.init();

    const propsL = {
        prop1: { img: <Image src={js} alt='Language Picture'></Image>, texto: "C" },
        prop2: { img: <Image src={cpp} alt='Language Picture'></Image>, texto: "C++" },
        prop3: { img: <Image src={cs} alt='Language Picture'></Image>, texto: "C#" },
        prop4: { img: <Image src={ts} alt='Language Picture'></Image>, texto: "Java" },
        prop5: { img: <Image src={java} alt='Language Picture'></Image>, texto: "JavaScript" },
        prop6: { img: <Image src={python} alt='Language Picture'></Image>, texto: "TypeScript" },
        prop7: { img: <Image src={c} alt='Language Picture'></Image>, texto: "C" },
    }

    const propsF = {
        prop1:{img: <Image src={node} alt='Framework Picture'></Image>,texto:"Node"},
        prop2:{img: <Image src={express}alt='Framework Picture'></Image>,texto:"Express"},
        prop3:{img: <Image src={html}alt='Framework Picture'></Image>,texto:"HTML"},
        prop4:{img: <Image src={react}alt='Framework Picture'></Image>,texto:"React"},
        prop5:{img: <Image src={next}alt='Framework Picture'></Image>,texto:"Next"},
        prop6:{img: <Image src={css}alt='Framework Picture'></Image>,texto:"CSS"},
        prop7:{img: <Image src={sass}alt='Framework Picture'></Image>,texto:"SASS"},
    }

    const propsB = {
        prop1:{img: <Image src={posgree} alt='Database Picture'></Image>,texto:"Postgree"},
        prop2:{img: <Image src={maria}alt='Database Picture'></Image>,texto:"MariaDB"},
        prop3:{img: <Image src={elastic}alt='Database Picture'></Image>,texto:"ElasticSearch"},
        prop4:{img: <Image src={mongo}alt='Database Picture'></Image>,texto:"Mongo"},
        prop5:{img: <Image src={mysql}alt='Database Picture'></Image>,texto:"MySQL"},
        prop6:{img: <Image src={nosql}alt='Database Picture'></Image>,texto:"NoSQL"},
        prop7:{img: <Image src={sql}alt='Database Picture'></Image>,texto:"SQL"},
    }

    const propsD = {
        prop1:{img: <Image src={boot} alt='Diversity Picture'></Image>,texto:"BootStrap"},
        prop2:{img: <Image src={spring}alt='Diversity Picture'></Image>,texto:"SpringBoot"},
        prop3:{img: <Image src={linux}alt='Diversity Picture'></Image>,texto:"Linux"},
        prop4:{img: <Image src={git}alt='Diversity Picture'></Image>,texto:"Git"},
        prop5:{img: <Image src={unity}alt='Diversity Picture'></Image>,texto:"Unity"},
    }

    return (
        <>
        <div className={style.container}>
            <Header turnBlack='false' follow='false'></Header>
            <div className={style.mainContainer} id='init'>
                <div className={style.myImage} data-aos="fade-right" data-aos-duration="1000" >
                    <Image src={profile} alt='Profile Picture' className={style.profileImage} />
                </div>
                <div className={style.aboutDiv}>
                    <h1 className={style.aboutText}data-aos="fade-left" data-aos-duration="1000" >
                        Hi, my name is Cauã Pereira Domingues. I am a Computer Science student and scientific researcher at Unoeste in Brazil. I live in Presidente Prudente and have experience in full-stack application development. Below, you’ll find some a bit more about me. Enjoy!
                    </h1>
                    <a href="/CauaPereiraLinkedin.pdf" download="CurriculoCauaPereira.pdf" className={style.downloadButton}>Click Here to Dowload my CV</a>
                        
                    
                </div>
            </div>
            <div className={style.caroussel}>
                <div className={style.item} style={{ animationDelay: 1 + 's' }}>
                    <Image alt="Caroussel img" src={image1}></Image>
                </div>
                <div className={style.item} style={{ animationDelay: 2 + 's' }}>
                    <Image alt="Caroussel img" src={image2}></Image>
                </div>
                <div className={style.item} style={{ animationDelay: 3 + 's' }}>
                    <Image alt="Caroussel img" src={image3}></Image>
                </div>
                <div className={style.item} style={{ animationDelay: 4 + 's' }}>
                    <Image alt="Caroussel img" src={image4}></Image>
                </div>
                <div className={style.item} style={{ animationDelay: 5 + 's' }}>
                    <Image alt="Caroussel img" src={image5}></Image>
                </div>
                <div className={style.item} style={{ animationDelay: 6 + 's' }}>
                    <Image alt="Caroussel img" src={image6}></Image>
                </div>
                <div className={style.item} style={{ animationDelay: 7 + 's' }}>
                    <Image alt="Caroussel img" src={image7}></Image>
                </div>
                <div className={style.item} style={{ animationDelay: 8 + 's' }}>
                    <Image alt="Caroussel img" src={image8}></Image>
                </div>
                <div className={style.item} style={{ animationDelay: 9 + 's' }}>
                    <Image alt="Caroussel img" src={image9}></Image>
                </div>
                <div className={style.item} style={{ animationDelay: 10 + 's' }}>
                    <Image alt="Caroussel img" src={image10}></Image>
                </div>
            </div>
            <div className={style.secondDiv}>
                <Stack tittle="Web-Development" {...propsF}></Stack >
                <div className={style.double}>
                    <Stack tittle="Languages" {...propsL}></Stack>
                    <Stack tittle="Data-Base" {...propsB}></Stack>
                </div>
                <Stack tittle="Diversity" {...propsD}></Stack>
            </div>
            <div className={style.textMe} >
                <div className={style.meRight} data-aos="fade-right" data-aos-duration="2000">
                    <h1>I&aposm Cauã Pereira, a Computer Science student and virtual reality researcher at Unoeste, based in Presidente Prudente, Brazil. With a solid foundation in programming languages like C, Python, Java, and JavaScript, I specialize in full-stack development using frameworks like Node.js and React.</h1>
                </div>
                <div className={style.meLeft} data-aos="fade-left" data-aos-duration="2000">
                    <h1>
                    I thrive on creating immersive, innovative digital solutions and blending functionality with minimalist, art-inspired design. My experience includes both hands-on projects and teaching, where I’ve guided students through programming logic and data structures. Passionate about exploring new tech, I’m dedicated to pushing boundaries in every project I take on.
                    </h1>
                </div>
            </div>
            <Footer link1="projects" link2="contact"></Footer>
        </div>
        </>
    );
}