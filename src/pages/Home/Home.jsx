import React from "react";
import Intro from '../../components/Intro/Intro';
import Cards from '../../components/Cards/Cards';
import Timeline from '../../components/Timeline/Timeline';
import './index.css';

function Inicial() {
    return(
        <div className="home">
            <Intro />
            <Cards />
            <Timeline />
        </div>
    );
}

export default Inicial;