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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

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
import html from '../../../public/tecnologias/html.png'
import css from '../../../public/tecnologias/css.png'
import sass from '../../../public/tecnologias/sass.png'

import posgree from '../../../public/tecnologias/postgree.png'
import maria from '../../../public/tecnologias/maria.png'
import elastic from '../../../public/tecnologias/elastic.png'
import mongo from '../../../public/tecnologias/mongo.png'
import mysql from '../../../public/tecnologias/mysql.png'
import nosql from '../../../public/tecnologias/nosql.png'
import sql from '../../../public/tecnologias/sql.png'


import boot from '../../../public/tecnologias/bootstrap.png'
import git from '../../../public/tecnologias/git.png'
import linux from '../../../public/tecnologias/linux.png'
import unity from '../../../public/tecnologias/unity.png'
import spring from '../../../public/tecnologias/springboot.png'

import bimg from '../../../public/onebitcode/certificatesImg/bIMG.png'
import cimg from '../../../public/onebitcode/certificatesImg/cIMG.png'
import cmimg from '../../../public/onebitcode/certificatesImg/cmIMG.png'
import gimg from '../../../public/onebitcode/certificatesImg/gIMG.png'
import himg from '../../../public/onebitcode/certificatesImg/hIMG.png'
import jimg from '../../../public/onebitcode/certificatesImg/jIMG.png'
import nimg from '../../../public/onebitcode/certificatesImg/nIMG.png'
import rimg from '../../../public/onebitcode/certificatesImg/rIMG.png'
import saimg from '../../../public/onebitcode/certificatesImg/saIMG.png'
import simg from '../../../public/onebitcode/certificatesImg/sIMG.png'
import timg from '../../../public/onebitcode/certificatesImg/tIMG.png'

import Aos from 'aos';
import 'aos/dist/aos.css';
import Certificado from '@/components/SECUNDARIOS/certificado/certificado';

export default function ClientOnlyComponent() {

    if (typeof (window) == 'undefined')
        return null;

    Aos.init();

    const propsL = {
        prop1: { img: <Image src={js} alt='Language Picture'></Image>,
        name: "JavaScript",
        experience: "2 anos",
        level: "Avançado",
        description: "JavaScript é uma linguagem de programação interpretada de alto nível, usada principalmente para criar interatividade em páginas web.",
        projects: [
            "Portfolio pessoal",
            "Landing Page",
            "API",
            "Calculadora"
        ]  },
        prop2: { img: <Image src={cpp} alt='Language Picture'></Image>,
        name: "C++",
        experience: "3 anos",
        level: "Avançado",
        description: "C++ é uma linguagem de programação compilada multi-paradigma e de uso geral. C++ inclui a programação de procedimento, programação orientada a objetos e, em menor grau, programação genérica.",
        projects: [
            "Interpretador Python",
            "Codificador e Decodificador de mensagens HuFFman",
            "Sistema de gerenciamento de estoque",
            "Sistema de gerenciamento de biblioteca",
            "Kdtree",
            "Listas Generalizadas"
        ] },
        prop3: { img: <Image src={cs} alt='Language Picture'></Image>,
        name: "C#",
        experience: "6 meses",
        level: "Intermediário",
        description: "C# é uma linguagem de programação orientada a objetos desenvolvida pela Microsoft como parte da plataforma .NET.",
        projects: [
            "Game de sobrevivência",
            "Iniciação Científica Glossofobia"
        ] },
        prop4: { img: <Image src={ts} alt='Language Picture'></Image>,
        name: "TypeScript",
        experience: "2 anos",
        level: "Avançado",
        description: "TypeScript é uma linguagem de programação tipada estaticamente que é um superconjunto de JavaScript, adicionando tipagem estática e recursos de linguagem orientados a objetos.",
        projects: [
            "Portfolio pessoal",
            "Sistema de gestão",
            "E-commerce"
        ] },
        prop5: { img: <Image src={java} alt='Language Picture'></Image>,
        name: "Java",
        experience: "2 anos",
        level: "Avançado",
        description: "Java é uma linguagem de programação orientada a objetos e altamente utilizada para desenvolvimento de aplicações robustas e escaláveis.",
        projects: [
            "Sistema comercial",
            "Alteração de imagens",
            "Sistema de gerenciamento de estoque"
        ] },
        prop6: { img: <Image src={python} alt='Language Picture'></Image>,
        name: "Python",
        experience: "2 anos",
        level: "Avançado",
        description: "Python é uma linguagem de programação interpretada de alto nível, usada principalmente para criar scripts e automatizar tarefas.",
        projects: [
            "Pacman",
            "Jogo da velha",
            "Jogo da forca",
            "Data analysis"
        ] },
        prop7: { img: <Image src={c} alt='Language Picture'></Image>,
        name: "C",
        experience: "2 anos",
        level: "Avançado",
        description: "C é uma linguagem de programação compilada de uso geral, estruturada, imperativa, procedural, padronizada pela ISO e pelo IEEE.",
        projects: [
            "Interpretador Python",
            "Codificador e Decodificador de mensagens HuFFman",
            "Sistema de gerenciamento de estoque",
            "Sistema de gerenciamento de biblioteca",
            "Kdtree",
            "Listas Generalizadas"
        ] }
    }

    const propsF = {
        prop1: { img: <Image src={node} alt='Framework Picture'></Image>,
        name: "Node",
        experience: "2 anos",
        level: "Avançado",
        description: "Node.js é uma plataforma de desenvolvimento de aplicações web server-side baseada em JavaScript, que permite a execução de código JavaScript fora de um navegador web.",
        projects: [
            "Portfolio pessoal",
            "Landing Page",
            "API",
            "Calculadora"
        ] },
        prop2: { img: <Image src={express} alt='Framework Picture'></Image>,
        name: "Express",
        experience: "2 anos",
        level: "Avançado",
        description: "Express é um framework web para Node.js que fornece um conjunto de ferramentas para construir APIs web e aplicativos web robustos e escaláveis.",
        projects: [
            "Portfolio pessoal",
            "Landing Page",
            "API",
            "Calculadora"
        ]},
        prop3: { img: <Image src={html} alt='Framework Picture'></Image>,
        name: "HTML",
        experience: "2 anos",
        level: "Avançado",
        description: "HTML é uma linguagem de marcação utilizada para estruturar páginas web.",
        projects: [
            "Portfolio pessoal",
          "Landing Page",
            "API",
            "Calculadora"
        ]},
        prop4: { img: <Image src={react} alt='Framework Picture'></Image>,
        name: "React",
        experience: "2 anos",
        level: "Avançado",
        description: "React é uma biblioteca JavaScript para construção de interfaces de usuário com foco em componentes reutilizáveis e estado gerenciável.",
        projects: [
            "Portfolio pessoal",
            "Sistema de gestão",
            "E-commerce",
            "Landing Page",
            "Calculadora",
            "API"
        ]},
        prop5: { img: <Image src={next} alt='Framework Picture'></Image>,
        name: "Next",
        experience: "2 anos",
        level: "Avançado",
        description: "Next.js é um framework React para construção de aplicações web modernas e escaláveis.",
        projects: [
            "Portfolio pessoal",
            "Sistema de gestão",
            "E-commerce"
        ]},
        prop6: { img: <Image src={css} alt='Framework Picture'></Image>,
        name: "CSS",
        experience: "2 anos",
        level: "Avançado",
        description: "CSS é uma linguagem de estilo utilizada para definir a apresentação de documentos HTML.",
        projects: [
            "Portfolio pessoal",
            "Landing Page",
            "API",
            "Calculadora"
        ]},
        prop7: { img: <Image src={sass} alt='Framework Picture'></Image>,
        name: "SASS",
        experience: "1 anos",
        level: "Avançado",
        description: "SASS é uma extensão de CSS que permite a criação de estilos mais complexos e organizados.",
        projects: [
            "Portfolio pessoal",
            "Landing Page",
            "API",
            "Calculadora"
        ]},
    }

    const propsB = {
        prop1: { img: <Image src={posgree} alt='Database Picture'></Image>,
        name: "Postgree",
        experience: "1 anos",
        level: "Avançado",
        description: "Postgree é um sistema de gerenciamento de banco de dados relacional open-source, que oferece suporte a uma ampla variedade de recursos avançados.",
        projects: [
            "Sistema comercial",
            "Sistema de gerenciamento de estoque"
        ] },
        prop2: { img: <Image src={maria} alt='Database Picture'></Image>,
        name: "MariaDB",
        experience: "6 meses",
        level: "Intermediário",
        description: "MariaDB é um sistema de gerenciamento de banco de dados relacional open-source, que oferece suporte a uma ampla variedade de recursos avançados.",
        projects: [
            "Sistema comercial"
        ] },
        prop3: { img: <Image src={elastic} alt='Database Picture'></Image>,
        name: "ElasticSearch",
        experience: "2 meses",
        level: "Iniciante",
        description: "ElasticSearch é um sistema de gerenciamento de banco de dados distribuído e escalável, que oferece suporte a uma ampla variedade de recursos avançados.",
        projects: [
            "Sistema comercial"
        ] },
        prop4: { img: <Image src={mongo} alt='Database Picture'></Image>,
        name: "MongoDB",
        experience: "2 meses",
        level: "Iniciante",
        description: "MongoDB é um sistema de gerenciamento de banco de dados NoSQL, que oferece suporte a uma ampla variedade de recursos avançados.",
        projects: [
        ] },
        prop5: { img: <Image src={mysql} alt='Database Picture'></Image>,
        name: "MySQL",
        experience: "1 ano",
        level: "Avançado",
        description: "MySQL é um sistema de gerenciamento de banco de dados relacional open-source, que oferece suporte a uma ampla variedade de recursos avançados.",
        projects: [
            "Sistema comercial",
            "Sistema de gerenciamento de estoque"
        ] },
        prop6: { img: <Image src={nosql} alt='Database Picture'></Image>,
        name: "NoSQL",
        experience: "2 meses",
        level: "Iniciante",
        description: "NoSQL é um sistema de gerenciamento de banco de dados NoSQL, que oferece suporte a uma ampla variedade de recursos avançados.",
        projects: [
            "Sistema comercial"
        ] },
        prop7: { img: <Image src={sql} alt='Database Picture'></Image>,
        name: "SQL",
        experience: "1 ano",
        level: "Avançado",
        description: "SQL é um sistema de gerenciamento de banco de dados relacional open-source, que oferece suporte a uma ampla variedade de recursos avançados.",
        projects: [
            "Sistema comercial",
            "Sistema de gerenciamento de estoque"
        ] },
    }

    const propsD = {
        prop1: { img: <Image src={boot} alt='Diversity Picture'></Image>,
        name: "BootStrap",
        experience: "1 ano",
        level: "Avançado",
        description: "BootStrap é uma biblioteca CSS para construir interfaces de usuário responsivas e modernas.",
        projects: [
            "Portfolio pessoal",
            "Landing Page",
            "API",
            "Calculadora"
        ] },
        prop2: { img: <Image src={spring} alt='Diversity Picture'></Image>,
        name: "SpringBoot",
        experience: "2 meses",
        level: "Iniciante",
        description: "SpringBoot é um framework Java para construir aplicações web robustas e escaláveis.",
        projects: [
            "Sistema comercial"
        ] },
        prop3: { img: <Image src={linux} alt='Diversity Picture'></Image>,
        name: "Linux",
        experience: "1 ano",
        level: "Avançado",
        description: "Linux é um sistema operacional open-source, que oferece suporte a uma ampla variedade de recursos avançados.",
        projects: [
            "Sistema comercial"
        ] },
        prop4: { img: <Image src={git} alt='Diversity Picture'></Image>,
        name: "Git",
        experience: "1 ano",
        level: "Avançado",
        description: "Git é um sistema de controle de versão distribuído, que oferece suporte a uma ampla variedade de recursos avançados.",
        projects: [
            "Sistema comercial"
        ] },
        prop5: { img: <Image src={unity} alt='Diversity Picture'></Image>, texto: "Unity" },
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
                        <h1 className={style.aboutText} data-aos="fade-left" data-aos-duration="1000" >
                            Olá, meu nome é Cauã Pereira Domingues. Sou estudante de Ciência da Computação e pesquisador científico na Unoeste no Brasil. Moro em Presidente Prudente e tenho experiência em desenvolvimento full-stack de aplicações. Abaixo, você encontrará um pouco mais sobre mim. Aproveite!
                        </h1>
                        <a href="/CauaPereiraLinkedin.pdf" download="CurriculoCauaPereira.pdf" className={style.downloadButton}>Clique Aqui para Baixar meu CV</a>


                    </div>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={5}
                    loop={true}
                    speed={3000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    className={style.caroussel}
                >
                    <SwiperSlide>
                        <Image alt="Caroussel img" src={image1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt="Caroussel img" src={image2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt="Caroussel img" src={image3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt="Caroussel img" src={image4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt="Caroussel img" src={image5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt="Caroussel img" src={image6} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt="Caroussel img" src={image7} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt="Caroussel img" src={image8} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt="Caroussel img" src={image9} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt="Caroussel img" src={image10} />
                    </SwiperSlide>
                </Swiper>
                <div className={style.secondDiv}>
                    <Stack tittle="Desenvolvimento Web" {...propsF}></Stack>
                    <Stack tittle="Linguagens" {...propsL}></Stack>
                    <Stack tittle="Banco de Dados" {...propsB}></Stack>
                    <Stack tittle="Diversos" {...propsD}></Stack>
                </div>

                <div className={style.divTransition}>
                    <h2>Minha Jornada</h2>
                </div>

                <div className={style.textMe}>
                    <div className={style.meRight} data-aos="fade-right" data-aos-duration="2000">
                        <h1 className={style.meTittle}>
                            Olá. Eu sou Cauã,
                        </h1>
                        <h1 className={style.meText}>
                            Uso minha paixão e habilidades para desenvolver produtos digitais inovadores e experiências imersivas. Minha expertise abrange desde design e implementação até gerenciamento efetivo de projetos, atendendo clientes nacionais e internacionais. Como pesquisador e criador, colaboro com empresas, startups e instituições educacionais para dar vida a soluções tecnológicas de ponta. Com foco em realidade virtual e design minimalista, busco unir funcionalidade com inspiração artística, sempre expandindo os limites das experiências digitais.
                        </h1>
                    </div>
                    <div className={style.meLeft} data-aos="fade-left" data-aos-duration="2000">
                        <h1>
                            Sou Cauã Pereira, estudante de Ciência da Computação e pesquisador de realidade virtual na Unoeste, em Presidente Prudente, Brasil. Com uma base sólida em linguagens de programação como C, Python, Java e JavaScript, me especializo em desenvolvimento full-stack usando frameworks como Node.js e React.
                        </h1>
                        <h1>
                            Estou cursando Bacharelado em Ciência da Computação na Unoeste, focando em construir fortes habilidades técnicas e analíticas. Junto aos meus estudos, completei 17 cursos no SENAI e certificações adicionais com a One Bit Code, cobrindo tópicos como HTML, CSS, JavaScript, React, Git e TypeScript, me dando uma base sólida em desenvolvimento full-stack e inovação.
                        </h1>
                    </div>
                </div>
                <div className={style.divTransition}>
                    <h2>Abaixo, alguns dos meus certificados</h2>
                </div>
                <div className={style.certificates}>
                    <Certificado url="/onebitcode/Certificado_BOOTSTRAP.pdf" tittle="BootStrap" img={bimg}></Certificado>
                    <Certificado url="/onebitcode/Certificado_CSS.pdf" tittle="CSS" img={cimg}></Certificado>
                    <Certificado url="/onebitcode/Certificado_CSS-moderno.pdf"tittle="Mordern CSS" img={cmimg}></Certificado>
                    <Certificado url="/onebitcode/Certificado_Git-GitHub.pdf" tittle="Git Github" img={gimg}></Certificado>
                    <Certificado url="/onebitcode/Certificado_HTML5.pdf" tittle="HTML5" img={himg}></Certificado>
                    <Certificado url="/onebitcode/Certificado_JS.pdf" tittle="JavaScript" img={jimg}></Certificado>
                    <Certificado url="/onebitcode/Certificado_NEXT.pdf" tittle="NextJS" img={nimg}></Certificado>
                    <Certificado url="/onebitcode/Certificado-REACT.pdf" tittle="React" img={rimg}></Certificado>
                    <Certificado url="/onebitcode/Certificado_TypeScript.pdf" tittle="TypeScript" img={timg}></Certificado>
                    <Certificado url="/onebitcode/Certificado-Sass.pdf" tittle="SASS" img={saimg}></Certificado>
                    <Certificado url="/onebitcode/Certificado_CSS_JS_HTML.pdf" tittle="Start Programation" img={simg}></Certificado>
                </div>
                <Footer link1="projects" link2="contact"></Footer>
            </div>
        </>
    );
}