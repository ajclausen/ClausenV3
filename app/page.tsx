"use client";

import { experiences } from "@/data/experience";
// import { projects } from "@/data/projects"; // Temporarily unused
import { useEffect, useState } from "react";
import Link from "next/link";
// import Image from "next/image"; // Temporarily unused

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["about", "experience"]; // , "projects"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
  
  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-dracula-cyan text-dracula-background px-4 py-2 rounded">
        Skip to Content
      </a>

      <div className="lg:flex lg:justify-between">
        {/* Left side - Fixed header and nav */}
        <header className="px-6 py-24 lg:bg-transparent lg:backdrop-blur-none lg:shadow-none lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24 lg:px-12 lg:will-change-transform">
          <div>
            <h1 className="text-[3rem] font-bold tracking-[-0.025em] leading-none text-dracula-foreground">
              <Link href="/">Andrew Clausen</Link>
            </h1>
            <h2 className="mt-3 text-[1.25rem] font-medium leading-[1.75] text-dracula-foreground">
              System Engineer at ECO Parking
            </h2>
            <p className="mt-4 max-w-xs text-base font-normal leading-relaxed text-dracula-foreground">
              I architect infrastructure for 50+ smart parking facilities and build tools that solve real problems.
            </p>
            
            {/* Navigation - Hidden on mobile, shown on lg+ */}
            <nav className="hidden lg:block mt-16" aria-label="In-page jump links">
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="group flex items-center py-3">
                    <span className={`nav-indicator mr-4 h-px transition-all ${
                      activeSection === "about" 
                        ? "w-16 bg-lightest-slate" 
                        : "w-8 bg-dracula-comment group-hover:w-16 group-hover:bg-dracula-foreground group-focus-visible:w-16 group-focus-visible:bg-dracula-foreground"
                    }`}></span>
                    <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                      activeSection === "about"
                        ? "text-dracula-foreground"
                        : "text-dracula-foreground group-hover:text-dracula-pink group-focus-visible:text-dracula-pink"
                    }`}>
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#experience" className="group flex items-center py-3">
                    <span className={`nav-indicator mr-4 h-px transition-all ${
                      activeSection === "experience" 
                        ? "w-16 bg-lightest-slate" 
                        : "w-8 bg-dracula-comment group-hover:w-16 group-hover:bg-dracula-foreground group-focus-visible:w-16 group-focus-visible:bg-dracula-foreground"
                    }`}></span>
                    <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                      activeSection === "experience"
                        ? "text-dracula-foreground"
                        : "text-dracula-foreground group-hover:text-dracula-pink group-focus-visible:text-dracula-pink"
                    }`}>
                      Experience
                    </span>
                  </a>
                </li>
                {/* Projects navigation temporarily disabled
                <li>
                  <a href="#projects" className="group flex items-center py-3">
                    <span className={`nav-indicator mr-4 h-px transition-all ${
                      activeSection === "projects" 
                        ? "w-16 bg-lightest-slate" 
                        : "w-8 bg-dracula-comment group-hover:w-16 group-hover:bg-dracula-foreground group-focus-visible:w-16 group-focus-visible:bg-dracula-foreground"
                    }`}></span>
                    <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                      activeSection === "projects"
                        ? "text-dracula-foreground"
                        : "text-dracula-foreground group-hover:text-dracula-pink group-focus-visible:text-dracula-pink"
                    }`}>
                      Projects
                    </span>
                  </a>
                </li>
                */}
              </ul>
            </nav>
          </div>

          {/* Social links */}
          <ul className="mt-8 lg:mt-0 flex items-center space-x-5" aria-label="Social media">
            <li>
              <a 
                href="https://github.com/ajclausen" 
                target="_blank" 
                rel="noreferrer noopener"
                className="text-dracula-foreground hover:text-dracula-pink transition-colors"
                aria-label="GitHub (opens in a new tab)"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/andrewjclausen/" 
                target="_blank" 
                rel="noreferrer noopener"
                className="text-dracula-foreground hover:text-dracula-pink transition-colors"
                aria-label="LinkedIn (opens in a new tab)"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </li>
          </ul>
        </header>

        {/* Right side - Scrollable content */}
        <main id="content" className="px-6 pb-24 lg:w-[55%] lg:py-24 lg:px-12 text-dracula-foreground">
          <div className="max-w-2xl">
            {/* About Section */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-dracula-foreground lg:sr-only">About</h2>
              </div>
              <div>
                <p className="mb-4 leading-relaxed text-dracula-foreground">
                  I&apos;m a self-taught System Engineer who transformed from zero technical knowledge into the sole network architect for 50+ smart parking facilities nationwide. My unconventional path through{" "}
                  <a href="#experience" className="font-medium text-dracula-green hover:text-dracula-pink focus-visible:text-dracula-pink">
                    Apprentice University&apos;s hands-on program
                  </a>
                  {" "}taught me that the best solutions come from understanding both the technical details and business impact.
                </p>
                <p className="mb-4 leading-relaxed text-dracula-foreground">
                  At{" "}
                  <a href="https://www.ecoparkingtechnologies.com/" target="_blank" rel="noreferrer noopener" className="font-medium text-dracula-green hover:text-dracula-pink focus-visible:text-dracula-pink">
                    ECO Parking Technologies
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  , I&apos;ve built the infrastructure that powers some of the nation&apos;s largest parking deployments, including a 693-sensor Las Vegas casino requiring custom 10G fiber solutions. When our legacy system threatened to limit our growth, I led the migration to a modern{" "}
                  <a href="https://www.cloudflare.com/" target="_blank" rel="noreferrer noopener" className="font-medium text-dracula-green hover:text-dracula-pink focus-visible:text-dracula-pink">
                    Cloudflare-based architecture
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  , eliminating vendor lock-in and saving thousands monthly.
                </p>
                <p className="mb-4 leading-relaxed text-dracula-foreground">
                  Beyond infrastructure, I&apos;m a builder at heart. I&apos;ve created production applications that our teams use daily—from a React-based cost calculator that speeds up sales quotes to a full-stack project tracker that integrates with legacy systems. Each tool solves real problems I&apos;ve experienced firsthand.
                </p>
                <p className="mb-4 leading-relaxed text-dracula-foreground">
                  My technical toolkit spans from low-level Linux administration to modern web frameworks, but what sets me apart is my approach: when I encounter a challenge, I don&apos;t wait for someone else to solve it. Whether it&apos;s teaching myself fiber optics through YouTube or building a Ruby microservice to bridge incompatible systems, I find a way forward.
                </p>
                <p className="mb-4 leading-relaxed text-dracula-foreground">
                  Currently pursuing my BSNES degree to formalize my practical experience, I&apos;m excited about the intersection of IoT, cloud infrastructure, and smart city technology. I believe the best engineering happens when you deeply understand the problem space—and I&apos;ve been in the trenches long enough to know what works. Feel free to reach out at{" "}
                  <a href="mailto:andrew@clausen.app" className="font-medium text-dracula-green hover:text-dracula-pink focus-visible:text-dracula-pink">
                    andrew@clausen.app
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-dracula-foreground lg:sr-only">Experience</h2>
              </div>
              <div>
                <ol className="group/list">
                  {experiences.map((experience) => (
                    <li key={experience.id} className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-dracula-current-line/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-dracula-foreground sm:col-span-2" aria-label={experience.dateRange}>
                          {experience.dateRange}
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-dracula-foreground">
                            <div>
                              <a
                                className="inline-flex items-baseline font-medium leading-tight text-dracula-green hover:text-dracula-pink focus-visible:text-dracula-pink group/link text-base"
                                href={experience.companyUrl}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={`${experience.title} at ${experience.company} (opens in a new tab)`}
                              >
                                <span>
                                  {experience.title} ·{" "}
                                  <span className="inline-block">
                                    {experience.company}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </div>
                            {experience.previousTitles && (
                              <div className="mt-0.5">
                                {experience.previousTitles.map((title, index) => (
                                  <div key={index} className="text-dracula-foreground text-sm" aria-label={`Previous role: ${title}`}>
                                    <span className="font-medium">→</span> {title}
                                  </div>
                                ))}
                              </div>
                            )}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-dracula-foreground">{experience.description}</p>
                          {experience.links && (
                            <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                              {experience.links.map((link, index) => (
                                <li key={index} className="mr-4">
                                  <a
                                    className="relative mt-2 inline-flex items-center text-sm font-medium text-dracula-green hover:text-dracula-pink focus-visible:text-dracula-pink"
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="mr-1 h-3 w-3"
                                      aria-hidden="true"
                                    >
                                      <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                                      <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                                    </svg>
                                    <span>{link.label}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {experience.technologies.map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-dracula-purple/10 px-3 py-1 text-xs font-medium leading-5 text-dracula-purple">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-12">
                  <a
                    className="inline-flex items-center font-medium leading-tight text-dracula-foreground group"
                    aria-label="View Full Resume (opens in a new tab)"
                    href="/andrew-clausen-resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span>
                      View Full{" "}
                      <span className="inline-block">
                        Résumé
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </section>

            {/* Projects Section - Temporarily disabled for launch
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-dracula-foreground lg:sr-only">Projects</h2>
              </div>
              <div>
                <ul className="group/list">
                  {projects.map((project) => (
                    <li key={project.id} className="mb-12">
                      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-dracula-current-line/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-dracula-green hover:text-dracula-pink focus-visible:text-dracula-pink group/link text-base"
                              href={project.url || project.githubUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label={`${project.title} (opens in a new tab)`}
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                {project.title}
                                {" "}
                                <span className="inline-block">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-dracula-foreground">{project.description}</p>
                          {project.githubStars && (
                            <a
                              className="relative mt-2 inline-flex items-center text-sm font-medium text-dracula-green hover:text-dracula-pink focus-visible:text-dracula-pink"
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label={`${project.githubStars} stars on GitHub (opens in a new tab)`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="mr-1 h-3 w-3"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{project.githubStars}</span>
                            </a>
                          )}
                          {project.technologies.length > 0 && (
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                              {project.technologies.map((tech) => (
                                <li key={tech} className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-dracula-purple/10 px-3 py-1 text-xs font-medium leading-5 text-dracula-purple">
                                    {tech}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        {project.imageUrl && (
                          <div className="sm:order-1 sm:col-span-2 sm:translate-y-1">
                            <div className="rounded border-2 border-slate/10 transition group-hover:border-slate/30 overflow-hidden">
                              <Image 
                                src={project.imageUrl} 
                                alt={`${project.title} screenshot`}
                                width={200}
                                height={112}
                                className="w-full h-auto"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-12">
                  <a
                    className="inline-flex items-center leading-tight text-dracula-foreground font-medium group"
                    aria-label="View Full Project Archive"
                    href="/archive"
                  >
                    <span>
                      View Full Project{" "}
                      <span className="inline-block">
                        Archive
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </section>
            */}

            {/* Footer with attribution */}
            <footer className="max-w-md pb-16 text-sm text-dracula-foreground sm:pb-0">
              <p className="mt-4">
                Inspired by{" "}
                <a href="https://brittanychiang.com" target="_blank" rel="noreferrer noopener" className="font-medium text-dracula-green hover:text-dracula-pink focus-visible:text-dracula-pink">
                  Brittany Chiang&apos;s portfolio design
                </a>
                .
              </p>
            </footer>
          </div>
        </main>
      </div>
      
      {/* Time Travel Button commented out for now */}
      {/**
      <button
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3 bg-lightest-navy/90 backdrop-blur rounded-full shadow-lg hover:bg-lightest-navy transition-all duration-300 group"
        aria-label="Click to time travel Spinning Tardis from Doctor Who"
        title="Click to time travel"
      >
        <span className="text-dracula-foreground text-sm whitespace-nowrap">Click to time travel</span>
        <svg 
          className="w-5 h-5 text-dracula-purple animate-spin-slow" 
          viewBox="0 0 20 20" 
          fill="currentColor"
          aria-hidden="true"
          aria-label="Spinning Tardis from Doctor Who"
        >
          <path d="M10 2L2 6L10 10L18 6L10 2Z" strokeWidth="1.5" />
          <path d="M2 14L10 18L18 14" strokeWidth="1.5" />
          <path d="M2 10L10 14L18 10" strokeWidth="1.5" />
        </svg>
      </button>
      */}
    </>
  );
}