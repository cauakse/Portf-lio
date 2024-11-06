import style from './header.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import Logotipo from '../../../public/creative.png'

import { useState, useEffect } from 'react';
export default function Header({turnBlack}) {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {

      if (turnBlack) {
         const handleScroll = () => {

            if (window.scrollY > window.innerHeight * 0.8) {
               setIsScrolled(true);
            } else {
               setIsScrolled(false);
            }
         };

         // Adiciona o listener do evento de scroll
         window.addEventListener('scroll', handleScroll);

         // Remove o listener quando o componente for desmontado
         return () => {
            window.removeEventListener('scroll', handleScroll);
         };
      }

   }, []);


   
   if(turnBlack==='false'){
      turnBlack=false;
   }
   if(turnBlack==='true'){
      turnBlack=true;
      }
   
   const navClass = turnBlack ? style.fixedContainer : style.relativeContainer;

   return (
      <>
         <nav className={navClass} style={{ backgroundColor: isScrolled ? 'black' : 'transparent'}}>
            <div className={style.flex}>
               <Link href='/'><Image src={Logotipo} className={style.logo} alt='KseLogo'></Image></Link>
               <Link href="/projects" className={turnBlack ? style.Link : style.LinkW}>Projects</Link>
               <Link href="/about" className={turnBlack ? style.Link : style.LinkW}>About</Link>
               <Link href="/contact" className={turnBlack ? style.Link : style.LinkW}>Contact</Link>
               <div className={style.icons}>

                  <Link href="https://www.instagram.com/caua_kse/" target="_blank" className={style.LinkI}>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
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
                           <g transform="scale(8,8)">
                              <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z" />
                           </g>
                        </g>
                     </svg>
                  </Link>
                  <Link href="https://www.linkedin.com/in/cau%C3%A3-pereira-domingues-9872a9305/" target='_blank' className={style.LinkI}>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
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
                              <path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM10.954,22h-2.95v-9.492h2.95zM9.449,11.151c-0.951,0 -1.72,-0.771 -1.72,-1.72c0,-0.949 0.77,-1.719 1.72,-1.719c0.948,0 1.719,0.771 1.719,1.719c0,0.949 -0.771,1.72 -1.719,1.72zM22.004,22h-2.948v-4.616c0,-1.101 -0.02,-2.517 -1.533,-2.517c-1.535,0 -1.771,1.199 -1.771,2.437v4.696h-2.948v-9.492h2.83v1.297h0.04c0.394,-0.746 1.356,-1.533 2.791,-1.533c2.987,0 3.539,1.966 3.539,4.522z"></path>
                           </g>
                        </g>
                     </svg>

                  </Link>
                  <Link href="https://github.com/cauakse" target='_blank' className={style.LinkI} >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
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
                     </svg>
                  </Link>
               </div>
            </div>
         </nav>
      </>
   );
}