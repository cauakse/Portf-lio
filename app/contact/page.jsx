"use client"

import Footer from '@/components/PRINCIPAIS/footer/footer'
import style from './page.module.scss'
import Header from '@/components/PRINCIPAIS/header/header'
export default function Page (){
    return (
        <>
           <Header turnBlack='true' follow='true' id='init'></Header>
           <div className={style.main}>
                <h1 className={style.text}>
                    IN DEVELOPMENT
                </h1>
           </div>
           <Footer link1="about" link2="projects"></Footer>
        </>
    )

}