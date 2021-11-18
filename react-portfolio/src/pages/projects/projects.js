/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './projects.css';
import images from '../../assets';


function Projects() {

    return (
        <div class="projects">
            <h1>These are the Projects I have worked on</h1>
            <div id="work" class="worksection container">
                <div class="card">
                    <p class="divHeader">Trailr</p>
                    <a href="https://github.com/giftilicious/Travel-Guide"><img src={images.trailr} width="480" height="320"
                        alt="javascript image" /></a>
                </div>
                <div class="card">
                    <p class="divHeader">Vacation Planner</p>
                    <a href="https://romzzp.github.io/Group-Project1/"><img src={images.vacationPlanner} width="480"
                        height="320" alt="html image" /></a>
                </div>
                <div class="card">
                    <p class="divHeader">Day PLanner</p>
                    <a href="https://romzzp.github.io/DayPlanner/"><img src={images.dayPlanner} width="480" height="320"
                        alt="html image" /></a>
                </div>
                <div class="card">
                    <p class="divHeader">Password Generator</p>
                    <a href="https://romzzp.github.io/passwordGenerator/"><img src={images.passwordGenerator}
                        width="480" height="320" alt="css image" /></a>
                </div>
                <div class="card">
                    <p class="divHeader">Trip Expense Planner</p>
                    <a href="https://github.com/romzzp/Trip-Expense-Planner"><img src={images.tripExpensePlanner} width="480"
                        height="320" alt="javascript image" /></a>
                </div>
                <div class="card">
                    <p class="divHeader">README Generator</p>
                    <a href="https://github.com/romzzp/README-Generator"><img src={images.readmeGenerator} width="480"
                        height="320" alt="javascript image" /></a>
                </div>
                <div class="card">
                    <p class="divHeader">Employee Team Builder</p>
                    <a href="https://github.com/romzzp/EmployeeTeamBuilder"><img src={images.employeeTeamBuillder} width="480"
                        height="320" alt="javascript image" /></a>
                </div>
                <div class="card">
                    <p class="divHeader">Note Taker</p>
                    <a href="https://github.com/romzzp/Note-Taker"><img src={images.noteTaker} width="480" height="320"
                        alt="javascript image" /></a>
                </div>
            </div>
        </div>
    )
}


export default Projects;