import React, { forwardRef } from 'react'
import headshot from '../assets/headshot.jpg'

const AboutMe = forwardRef((props, ref) => {
  return (
    <div className="d-flex justify-content-center align-items-center" ref={ref}>
        <div className="home text-center mx-4 py-3">
            <div className=" my-3 d-flex justify-content-center align-items-center">
                <div className="me-3 text-start">
                    <h2 className="fs-1 fw-bold header">Jake Crowley</h2>
                    <p className="mt-2 fw-lighter">Jake is a full-stack engineer who solves complex problems. He attended Coding Dojo and has an Associate Degree in Computer Science</p>
                </div>
                <img className="shadow" id='headshot' src={headshot} height="50px" alt="Personal Portrait" />
            </div>
            <h1 className="fs-2 fw-bold text-start header">About Me</h1>
            <div className="my-4 d-flex justify-content-center align-items-center">
                <div className="row align-items-start">
                    <div className="col me-1">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam ipsum diam, ut interdum leo vehicula at. Fusce rhoncus consectetur lorem at pharetra. Suspendisse non lobortis quam. Duis dui dui, rhoncus sit amet tellus ut, tempor interdum eros. Nunc et vehicula dui. Aliquam auctor sollicitudin libero quis semper. Suspendisse fringilla augue sit amet varius mattis. Morbi nec magna ut lacus porta pretium vitae ut enim. Vivamus commodo, risus et interdum finibus, libero neque feugiat urna, nec volutpat sem odio sed metus. Etiam quis mi malesuada, ullamcorper libero eu, dignissim sem. Donec pharetra magna turpis, sit amet facilisis enim lobortis sed. Sed eu nunc in tellus mattis suscipit quis id urna. Cras et tincidunt velit. Duis erat lorem, dictum at neque at, maximus molestie mauris. Aenean blandit est in nunc tincidunt, et porta libero dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc quis leo scelerisque, feugiat felis sit amet, tempor diam. Curabitur et faucibus est.</h3>
                    </div>
                    <div className="col ms-1">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam ipsum diam, ut interdum leo vehicula at. Fusce rhoncus consectetur lorem at pharetra. Suspendisse non lobortis quam. Duis dui dui, rhoncus sit amet tellus ut, tempor interdum eros. Nunc et vehicula dui. Aliquam auctor sollicitudin libero quis semper. Suspendisse fringilla augue sit amet varius mattis. Morbi nec magna ut lacus porta pretium vitae ut enim. Vivamus commodo, risus et interdum finibus, libero neque feugiat urna, nec volutpat sem odio sed metus. Etiam quis mi malesuada, ullamcorper libero eu, dignissim sem. Donec pharetra magna turpis, sit amet facilisis enim lobortis sed. Sed eu nunc in tellus mattis suscipit quis id urna. Cras et tincidunt velit. Duis erat lorem, dictum at neque at, maximus molestie mauris. Aenean blandit est in nunc tincidunt, et porta libero dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc quis leo scelerisque, feugiat felis sit amet, tempor diam. Curabitur et faucibus est.</h3>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
})

export default AboutMe