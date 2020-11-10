import React, { Component } from 'react';
import './Intro.css';
import sketch from './sketch4.png';

export default function Intro(props) {
    return (
        <div className="Intro">
            <div className="Intro-text">
                <div className="Intro-text-bold">Full-Stack.</div>
                <div className="Intro-text-statement">I work on everything from designing backend architectures to creating a crisp &amp; responsive frontend!</div>
            </div>
            <div className="Intro-picture">
                <img className="Intro-picture--pic" src={sketch} />
                {/* <span className="Intro-pciture--subtext">(self portrait)</span> */}
            </div>
        </div>
    );
}