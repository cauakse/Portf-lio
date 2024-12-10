import style from './certificado.module.scss'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Certificado({ url, tittle, img }) {
    if (typeof window !== 'undefined') {
        Aos.init()
    }

    return (
        <div className={style.certificateCard} data-aos="fade-up" data-aos-duration="1000">
            <div className={style.certificateContent}>
                <div className={style.certificateImage}>
                    <Image src={img} alt={tittle} />
                    <div className={style.overlay}>
                        <span>Ver Certificado</span>
                    </div>
                </div>
                <div className={style.certificateInfo}>
                    <h3>{tittle}</h3>
                    <div className={style.certificateBadge}>
                        <span>OneBitCode</span>
                    </div>
                </div>
            </div>
            <a href={url} target="_blank" className={style.certificateLink} rel="noreferrer">
                <span className={style.viewButton}>
                    Visualizar PDF
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </span>
            </a>
        </div>
    )
}