import React from 'react';
import './About.scss'

const About = () => {
    return(
        <React.Fragment>
            <div class="about-container">
                <div class="title">About Me</div>
                <div class="info">A little bit about me, I am a third year Computer Engineering major at UC Santa Cruz. I am really interested in Software Engineering, networking, IOT, and embedded systems. I created this site from scratch as a way for me to get exposure in a lot of these areas. I will be updating this site daily as a blog and link all the work I do during this time!</div>
                <div class="changes">Slight Changes: I decided I wanted to tweak the rules a little bit from the FreeCodeCamp version but it will mostly be the same. I will be doing daily projects/mini-projects in the areas I am personally interested in opposed to the guided curriculum and I am using my own template for recording all of the updates. Otherwise, I am excited to get this started and see how long we can go!</div>
            </div>
        </React.Fragment>
    );
}

export default About;