import React from 'react'
import Navbar from './navbar/navbar'
import Home from './home/home'
import "aos/dist/aos.css";
import About from './about/about';
import Tech from './tech/tech';
import Foot from './footer/foot';
import Projects from './project/project';
import Experience from './experience/experience';
import Skills from './tech/tech';
import Contact from './contact/contact';
import Services from './service/service';
import FloatingContactButton from './navbar/floatingContactButton';

export default function () {
    return (
        <>
            <Navbar />
            <FloatingContactButton />
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="services"><Services /></section>
            <section id="tech"><Skills /></section>
            <section id="project"><Projects /></section>
            <section id="experience"><Experience /></section>
            <section id='contact'><Contact/></section>
            <section id="contact"><Foot /></section>
        </>

    )
}
