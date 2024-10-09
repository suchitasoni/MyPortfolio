import React from "react";
import WorkingWoman from "../styles/WorkingWoman.gif";
import motion from "../styles/motion.webp";
import Typewriter from "./Typewriter";

const Content = () => {
    return(
        <div style={{padding: '10vh 5vw'}}>
            <section id="home">
                <div><h1>I'm Suchita Soni</h1></div>
                <div><h1> <Typewriter text= "This is Working Fine !!"/>
                </h1></div>
                <div id="workingWoman"><img src={WorkingWoman} height="300vh"/></div>
            </section>
            <section id="about">
            </section>
            <section id="experience"></section>
            <section id="contact"></section>
        </div>
    )
}

export default Content;