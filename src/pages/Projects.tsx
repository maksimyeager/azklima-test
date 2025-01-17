import React, { useState } from "react";

import Partners from "../components/Partners";
import playSvg from "../assets/icons/play.svg";
import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";
import project6 from "../assets/projects/project6.jpg";
import project7 from "../assets/projects/project7.jpg";
import project8 from "../assets/projects/project8.jpg";
import project9 from "../assets/projects/project9.jpg";
import project10 from "../assets/projects/project10.jpg";
import project11 from "../assets/projects/project11.jpg";
import project12 from "../assets/projects/project12.jpg";

const projects = [
    { imageUrl: project1 },
    { imageUrl: project2 },
    { imageUrl: project3 },
    { imageUrl: project4 },
    { imageUrl: project5 },
    { imageUrl: project6 },
    { imageUrl: project7 },
    { imageUrl: project8 },
    { imageUrl: project9 },
    { imageUrl: project10 },
    { imageUrl: project11 },
    { imageUrl: project12 },
];

import video from "../assets/videos/video-1.mp4";

const Projects: React.FC = () => {
    const [openVideoIndex, setOpenVideoIndex] = useState<number | null>(null);

    const handleVideoClick = (index: number) => {
        setOpenVideoIndex(openVideoIndex === index ? null : index); // Если кликнуть по открытому видео, оно закроется
    };

    return (
        <div className="projects">
            <div className="projects__block">
                <div className="container">
                    <h1 className="title-1">Şəkillər</h1>
                    <div className="photos">
                        {projects.map((project, index) => (
                            <div className="photo" key={index}>
                                <img
                                    src={project.imageUrl}
                                    alt={`Project ${index}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="projects__block">
                <div className="container">
                    <h1 className="title-1">Videolar</h1>
                    <div className="videos">
                        {Array.from({ length: 3 }, (_, index) => index + 1).map(
                            (project, index) => (
                                <div
                                    key={index}
                                    className="video"
                                    onClick={() => handleVideoClick(index)}
                                >
                                    <div className="video--overlay">
                                        <img
                                            className="video--icon"
                                            src={playSvg}
                                            alt=""
                                        />
                                    </div>
                                    <img src={project1} alt="" />
                                    {openVideoIndex === index && (
                                        <div className="project-video-block">
                                            <video
                                                src={video}
                                                controls
                                                autoPlay
                                                className="project-video"
                                            ></video>
                                        </div>
                                    )}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
            <Partners />
        </div>
    );
};

export default Projects;
