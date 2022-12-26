import React from "react";
import Intro from '../../components/Intro/Intro';
import Cards from '../../components/Cards/Cards';
import Timeline from '../../components/Timeline/Timeline';
import IntroQuiz from "../../components/IntroQuiz/IntroQuiz";
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import './index.css';

function Inicial() {
    return(
        <div className="home">
            <Header/>
            <Intro />
            <Cards />
            <Timeline />
            <IntroQuiz />
            <Footer/>
        </div>
    );
}

export default Inicial;