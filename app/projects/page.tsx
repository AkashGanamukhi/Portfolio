import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

// You can replace this with your own project data
const allProjects = [
  {
    title: "The Art Of Transformation",
    description: "A hybrid architecture combining GANs and VAEs to achieve image style transfer.",
    date: "2024-08-17",
    githubLink: "https://github.com/BRArjun/The-Art-Of-Transformation"
  },
  {
    title: "DevForge",
    description: "An AI-powered, web based development platform that coverts natural language descriptions to functional code. ",
    date: "2024-10-22",
    githubLink: "https://github.com/BRArjun/DevForge"
  },
  {
    title: "Cropify",
    description: "A web application that makes use of ML models to optimize plant yield and diagnose plant diseases.",
    date: "2024-01-05",
    githubLink: "https://github.com/BRArjun/Cropify_ML-WebDev"
  },
  {
    title: "TUIPad",
    description: "An AI-powered text editor built with the ncurses library.",
    date: "2024-06-21",
    githubLink: "https://github.com/BRArjun/TUITextEditor_Linux"
  },
  {
    title: "ToDoIt",
    description: "A todo list application implemented in C for understanding data structures using GTK 3.0 implementing the UI.",
    date: "2024-06-01",
    githubLink: "https://github.com/BRArjun/ToDoList_DataStructs"
  },
  {
    title: "Pieces",
    description: "A small BitTorrent client that supports torrent downloads made using the asyncio library.",
    date: "2024-06-12",
    githubLink: "https://github.com/BRArjun/PiecesClient_Networking"
  },
  {
    title: "ARify",
    description: "A simple AR application that lets you render 3D models on top of a reference surface in a live video feed.",
    date: "2024-06-11",
    githubLink: "https://github.com/BRArjun/ARify_AR-VR"
  },
  {
    title: "GamifiedPortfolio",
    description: "A casual portfolio website made using KaboomJS for adding gamified elements.",
    date: "2023-03-31",
    githubLink: "https://github.com/BRArjun/KaboomJS_Web-GameDev"
  },
  {
    title: "Attendee",
    description: "An OpenCV based facial recognition system with an integrated attendance recorder.",
    date: "2023-12-29",
    githubLink: "https://github.com/BRArjun/FacialRecoAttendanceSystem_ML"
  }
];

export default function ProjectsPage() {
  const featured = allProjects[0];
  const top2 = allProjects[1];
  const top3 = allProjects[2];
  const remainingProjects = allProjects.slice(3);

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          <Card className="group relative">
            <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  {featured.date ? (
                    <time dateTime={new Date(featured.date).toISOString()}>
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date(featured.date))}
                    </time>
                  ) : (
                    <span>SOON</span>
                  )}
                </div>
              </div>

              <h2
                className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
              >
                {featured.title}
              </h2>
              <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                {featured.description}
              </p>
              
              {featured.githubLink && (
                <a 
                  href={featured.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-30 text-zinc-400 hover:text-white transition-colors duration-300"
                  aria-label="GitHub Repository"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </a>
              )}
            </article>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            {[top2, top3].map((project, index) => (
              <Card key={index} className="group relative">
                <article className="p-4 md:p-8 relative">
                  <div className="flex justify-between gap-2 items-center">
                    <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                      {project.date ? (
                        <time dateTime={new Date(project.date).toISOString()}>
                          {Intl.DateTimeFormat(undefined, {
                            dateStyle: "medium",
                          }).format(new Date(project.date))}
                        </time>
                      ) : (
                        <span>SOON</span>
                      )}
                    </span>
                  </div>
                  <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {project.title}
                  </h2>
                  {project.description && (
                    <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {project.description}
                    </p>
                  )}
                  
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 z-30 text-zinc-400 hover:text-white transition-colors duration-300"
                      aria-label="GitHub Repository"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                    </a>
                  )}
                </article>
              </Card>
            ))}
          </div>
        </div>

        {/* New section for remaining projects */}
        <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {remainingProjects.map((project, index) => (
            <Card key={index} className="group relative">
              <article className="p-4 md:p-8 relative">
                <div className="flex justify-between gap-2 items-center">
                  <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                    {project.date ? (
                      <time dateTime={new Date(project.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(project.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </span>
                </div>
                <h2 className="z-20 text-xl font-medium duration-1000 text-zinc-200 group-hover:text-white font-display">
                  {project.title}
                </h2>
                {project.description && (
                  <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {project.description}
                  </p>
                )}
                
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 z-30 text-zinc-400 hover:text-white transition-colors duration-300"
                    aria-label="GitHub Repository"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </a>
                )}
              </article>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
