import style from './certificado.module.scss'
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Certificado({ url, tittle,img,d }) {
    Aos.init();
    return (
        <div className={style.supa} data-aos="fade-right" data-aos-duration="500">
            <div className={style.container}>
                <h1>Certificate: {tittle}</h1>
                <h1>In Name of Cauã Pereira</h1>
                <a href={url} download={"CertificadoCPD" + tittle + ".pdf"} className={style.downloadButton}>Click Here to Dowload</a>
            </div>
            <div className={style.imgContainer}>
                <Image src={img} alt='Certificate Image' className={style.img}></Image>
            </div>
        </div>
    );
}