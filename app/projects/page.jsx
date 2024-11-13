'use client';
import Header from '@/components/PRINCIPAIS/header/header.jsx';
import Footer from '@/components/PRINCIPAIS/footer/footer.jsx';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Client from './client/client';

export default function Page (){

    return (
        <>
        <Header turnBlack='true' follow='true' id='init'></Header>
        <Client></Client>
        <Footer link1="about" link2="contact"></Footer>
        </>
    )
}