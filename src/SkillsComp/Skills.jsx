import React from 'react'
import "./Skills.css"

const Skills = () => {
    return (
        <div class="interests  bg-dark">

            <div class="section-title">
                <h2>Skills</h2>
            </div>

            <div class="row">
                <div class="col-lg-3 col-md-4">
                    <div class="icon-box">
                        <i class="fa fa-html5" aria-hidden="true"></i>
                        <h3>HTML</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                    <div class="icon-box">
                        <i class="fa fa-css3" aria-hidden="true"></i>
                        <h3>CSS</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                    <div class="icon-box">
                        <i class='bx bxl-javascript'></i>
                        <h3>JAVASCRIPT</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
                    <div class="icon-box">
                        <i class='bx bxl-bootstrap' ></i>
                        <h3>BOOTSTRAP</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4">
                    <div class="icon-box">
                        <i class='bx bxl-react' ></i>
                        <h3>REACT</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4">
                    <div class="icon-box">
                        {/* <i class='bx bxl-mongodb'></i> */}
                        <i class="fa fa-database" aria-hidden="true"></i>
                        <h3>MONGODB</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4">
                    <div class="icon-box">
                        <i class='bx bxl-nodejs'></i>
                        <h3>NODEJS</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4">
                    <div class="icon-box">
                        <i class='bx bxl-git'></i>
                        <h3>GIT</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4">
                    <div class="icon-box">
                        <i class='bx bxl-redux'></i>
                        <h3>REDUX</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4">
                    <div class="icon-box">
                        <i class='bx bxl-wordpress' ></i>
                        <h3>WORDPRESS</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4">
                    <div class="icon-box">
                        <i class='bx bxl-python'></i>
                        <h3>PYTHON-FLASK</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 mt-4">
                    <div class="icon-box">
                        <i class='bx bxl-tailwind-css'></i>
                        <h3>TAILWIND</h3>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Skills