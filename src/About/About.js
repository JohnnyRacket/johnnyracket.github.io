import React, { Component } from 'react';
import './About.css';
import Game from '../Game/Game';

export default function About(props) {
    return (
        <div className="about">
            <div className="title"> About Me </div>
            <div className="content">
                <div className="description">

                    I grew up in the golden ages of flash games as a child.
                    To me, the fact that all these games were so simple but so fun is what drew me in.
                    I always wanted to learn ActionScript and make my own flash game. I tried a couple times, but I only learned enough to make of of those "don't let your mouse touch the wall" type games.
                    I distinctly remember being very confused on the concept of loops, which in retrospect, is a very core concept for games!
                    <br /><br />
                    In college I spent a year as a microbiology major, I always wanted to know how things worked, and microbiology was great for this. But I started looking around at other majors and found myself once again enchanted with the idea that I could make things if I could code.
                    I have never looked back on the decision to switch to computer science and making things has been what I have loved doing ever since!
                    An example of my commitment, is that as an avid game player in my early days I could type incredibly fast with two fingers (>60 wpm). But feeling devoted to learning to code, I committed to forcing myself to learn how to type correctly before fully switching my major because I thought it would be absurd to be a programmer that cant type correctly.
                    <br /><br />
                    College was great and I learned so much from some great professors. One of the most memorable accomplishments was winning my schools hackathon, SwampHacks 2015, with (people who are now) my friends. We showed up only knowing a couple other people, and worked together to build a system that scraped our schools class schedule and would help you optimize your schedule.
                    Afterwards, I went out into the workforce, and somewhat ironically, I do just as much learning now as I did in college.
                    <br /><br />
                    My curiosity and want to know more leads me to reading a lot more than I used to. I still want to know how everything works.
                    I feel like I am never done learning, there is always something I want to understand better. This leads me to trying a lot fo stuff out; from microservice architectures, event sourcing systems, to building game engines and games from scratch.
                    <br /><br />
                    <strong>Anyways, enough about me, enjoy the HTML5/Typescript game I built from scratch to achieve some of my goals! Its embedded in this page! <br /> <a href="https://github.com/JohnnyRacket/playmaker" target="_blank">https://github.com/JohnnyRacket/playmaker</a></strong>
                </div>

                <Game />
            </div>

            <div className="grid">
                <div className="grid-item">
                    <div className="grid-item--title"> Interests/Skills </div>
                    <div className="grid-item--item"> System Architecture </div>
                    <div className="grid-item--item"> Game Development </div>
                    <div className="grid-item--item"> Frontend Design </div>
                    <div className="grid-item--item"> Backend System Design/Implementation </div>
                    <div className="grid-item--item"> Machine Learning </div>
                </div>
                <div className="grid-item">
                    <div className="grid-item--title"> Languages &amp; Tools </div>
                    <div className="grid-item--item"> C#, Javascript + Typescript, Java, Python </div>
                    <div className="grid-item--item"> Azure, Serverless, Kubernetes, Docker </div>
                    <div className="grid-item--item"> React, React Native, Angularjs, Node </div>
                </div>
                <div className="grid-item">
                    <div className="grid-item--title"> Interesting Accomplishments </div>
                    <div className="grid-item--item"> Published elysian package to NPM </div>
                    <div className="grid-item--item"> Taught a Convolutional Nueral Net to understand beerpong </div>
                    <div className="grid-item--item"> Built a React UI component library used by an entire company </div>
                    <div className="grid-item--item"> SwampHacks 2015 1st Place </div>
                    <div className="grid-item--item"> Eagle Scout </div>
                </div>
            </div>

        </div>
    );
}