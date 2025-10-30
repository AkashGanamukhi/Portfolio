import Link from "next/link";
import React from "react";

interface ArticleProps {
  project: {
    slug: string;
    title: string;
    description?: string;
    date?: string;
    githubLink?: string; // New optional property for GitHub link
  };
}

export const Article: React.FC<ArticleProps> = ({ project }) => {
  return (
    <div className="group relative">
      <Link href={`/projects/${project.slug}`} className="block">
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
                <span></span>
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
        </article>
      </Link>
      
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
    </div>
  );
};