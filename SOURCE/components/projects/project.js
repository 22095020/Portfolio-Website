import React from 'react';
import './project.css';
import icn1 from '../../assets/e-Learning.jpg';
import icn2 from '../../assets/portfolio.jpg';
import icn3 from '../../assets/tic tac toe.jpg';

const Project = () => {
  return (
    <div>
        <section class="courses" id="project">
            <h2>My Projects</h2>
            <div class="container courses_container">
                <article class="course">
                    <div>
                        <img src={icn1} alt="" class="course_image" />
                    </div>
                    <div class="course_info">
                        <h4>E Learning website</h4>
                        
                        <a href="courses.html" class="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article class="course">
                    <div >
                        <img
                            src={icn2} alt="" class="course_image"/>
                    </div>
                    <div class="course_info">
                        <h4>Portfolio</h4>
                        
                        <a href="courses.html" class="btn btn-primary">Learn More</a>
                    </div>
                </article>

                <article class="course">
                    <div >
                        <img src={icn3} alt="" class="course_image"/>
                    </div>
                    <div class="course_info">
                        <h4>TIC TAC TOE Game</h4>
                       <br></br>
                        <a href="courses.html" class="btn btn-primary">Learn More</a>
                    </div>
                </article>
            </div>
        </section>
    </div>
  )
}

export default Project
