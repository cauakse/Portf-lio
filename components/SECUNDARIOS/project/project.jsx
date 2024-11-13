import style from './project.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Project(props) {

    Aos.init();
    return (
        <>
            <div className={style.supa} data-aos="flip-right" data-aos-duration="750">
                <h1>{props.tittle}</h1>
                <Image src={props.image} alt='Project Image' className={style.Image}></Image>
                <div className={style.text}>
                    <h2>Theme : {props.tema}</h2>
                </div>
                <div className={style.buttons}>
                    <Link href={props.linkV} target='_blank' className={style.icon}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="80"
                            viewBox="0 0 300 150"
                            style={{ fill: '#FFFFFF' }}
                        >
                            <g
                                fill="#ffffff"
                                fillRule="nonzero"
                                stroke="none"
                                strokeWidth="1"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="10"
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                                style={{ mixBlendMode: 'normal' }}
                            >
                                <g transform="scale(8.53333,8.53333)">
                                    <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z" />
                                </g>
                            </g>
                        </svg></Link>
                    <Link href={props.linkG}  target='_blank' className={style.icon2}>
                    <svg data-testid="geist-icon" height="60" stroke-linejoin="round" viewBox="0 0 16 16" width="60" style={{color: 'black'}}><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1L0 15H16L8 1ZM8 4.02335L2.58477 13.5H13.4152L8 4.02335Z" fill="currentColor"></path></svg>
                    </Link>
                </div>
            </div>
        </>
    );
}