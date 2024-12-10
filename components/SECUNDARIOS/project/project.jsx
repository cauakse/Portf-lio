import style from './project.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Project({ title, description, image, githubLink, deployLink, techs = [], status = 'Completed' }) {

    Aos.init();
    return (
        <div className={style.supa}>
            <h1>{title}</h1>
            <span className={style.status}>{status}</span>
            
            <Image src={image} alt={title} className={style.Image} />
            
            <div className={style.text}>
                <h2>{description}</h2>
            </div>

            <div className={style.techStack}>
                {techs.map((tech, index) => (
                    <span key={index} className={style.tech}>{tech}</span>
                ))}
            </div>

            <div className={style.buttons}>
                <div className={style.buttonGroup}>
                    <Link href={githubLink? githubLink : 'https://github.com/caua-kse'} target="_blank" className={style.icon}>
                        <svg 
                            width="45" 
                            height="45" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                                fill="#FFFFFF"
                            />
                        </svg>
                        <span className={style.buttonLabel}>GitHub</span>
                    </Link>
                </div>

                <div className={style.buttonGroup}>
                    <Link href={deployLink? deployLink : 'https://caua-kse.github.io/'} target="_blank" className={style.icon2}>
                        <svg 
                            width="40" 
                            height="40" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                d="M12 1.5l-9 16h18l-9-16zm0 3.82l5.526 9.68H6.474L12 5.32z" 
                                fill="#FFFFFF"
                            />
                        </svg>
                        <span className={style.buttonLabel}>Deploy</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}