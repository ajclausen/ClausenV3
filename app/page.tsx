"use client";

import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/writing";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["about", "experience", "projects"];
    
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
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan text-navy px-4 py-2 rounded">
        Skip to Content
      </a>

      <div className="lg:flex lg:justify-between">
        {/* Left side - Fixed header and nav */}
        <header className="px-6 py-24 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24 lg:px-12">
          <div>
            <h1 className="text-[3rem] font-bold tracking-[-0.025em] leading-none text-slate-200 whitespace-nowrap">
              <Link href="/">Andrew Clausen</Link>
            </h1>
            <h2 className="mt-3 text-[1.25rem] font-medium leading-[1.75] text-slate-200">
              System Engineer
            </h2>
            <p className="mt-4 max-w-xs text-base font-normal leading-relaxed text-slate-400">
              I build robust systems and craft digital experiences with precision.
            </p>
            
            {/* Navigation - Hidden on mobile, shown on lg+ */}
            <nav className="hidden lg:block mt-16" aria-label="In-page jump links">
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="group flex items-center py-3">
                    <span className={`nav-indicator mr-4 h-px transition-all ${
                      activeSection === "about" 
                        ? "w-16 bg-lightest-slate" 
                        : "w-8 bg-slate group-hover:w-16 group-hover:bg-lightest-slate group-focus-visible:w-16 group-focus-visible:bg-lightest-slate"
                    }`}></span>
                    <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                      activeSection === "about"
                        ? "text-lightest-slate"
                        : "text-slate-400 group-hover:text-teal-300 group-focus-visible:text-teal-300"
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
                        : "w-8 bg-slate group-hover:w-16 group-hover:bg-lightest-slate group-focus-visible:w-16 group-focus-visible:bg-lightest-slate"
                    }`}></span>
                    <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                      activeSection === "experience"
                        ? "text-lightest-slate"
                        : "text-slate-400 group-hover:text-teal-300 group-focus-visible:text-teal-300"
                    }`}>
                      Experience
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#projects" className="group flex items-center py-3">
                    <span className={`nav-indicator mr-4 h-px transition-all ${
                      activeSection === "projects" 
                        ? "w-16 bg-lightest-slate" 
                        : "w-8 bg-slate group-hover:w-16 group-hover:bg-lightest-slate group-focus-visible:w-16 group-focus-visible:bg-lightest-slate"
                    }`}></span>
                    <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                      activeSection === "projects"
                        ? "text-lightest-slate"
                        : "text-slate-400 group-hover:text-teal-300 group-focus-visible:text-teal-300"
                    }`}>
                      Projects
                    </span>
                  </a>
                </li>
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
                className="text-slate-400 hover:text-teal-300 transition-colors"
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
                href="https://www.linkedin.com/in/andrew-clausen/" 
                target="_blank" 
                rel="noreferrer noopener"
                className="text-slate-400 hover:text-teal-300 transition-colors"
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
        <main id="content" className="px-6 pb-24 lg:w-[55%] lg:py-24 lg:px-12 text-slate-400">
          <div className="max-w-2xl">
            {/* About Section */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">About</h2>
              </div>
              <div>
                <p className="mb-4 leading-relaxed text-slate-400">
                  I&apos;m a technical professional who bridges the gap between engineering and product development. My journey began with web design and development through{" "}
                  <a href="https://bitwiseindustries.com/" target="_blank" rel="noreferrer noopener" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                    Bitwise Fellows
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  , where I discovered my passion for creating clean, modern digital experiences that marry good design with technical excellence.
                </p>
                <p className="mb-4 leading-relaxed text-slate-400">
                  Currently, I&apos;m a System Engineer at{" "}
                  <a href="https://www.ecoparking.com/" target="_blank" rel="noreferrer noopener" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                    ECO Parking Technologies
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  , where I configure{" "}
                  <a href="https://ui.com/" target="_blank" rel="noreferrer noopener" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                    Ubiquiti networks
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  , manage product installations, and integrate complex systems. My role combines technical expertise with strategic thinking to deliver solutions that work seamlessly in real-world environments.
                </p>
                <p className="mb-4 leading-relaxed text-slate-400">
                  Throughout my career, I&apos;ve worked with diverse organizations including{" "}
                  <a href="#" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">OMNISource Marketing<span className="sr-only"> (opens in a new tab)</span></a>,{" "}
                  <a href="#" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">Bitwise Solutions<span className="sr-only"> (opens in a new tab)</span></a>,{" "}
                  <a href="https://www.t2systems.com/" target="_blank" rel="noreferrer noopener" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">T2 Systems<span className="sr-only"> (opens in a new tab)</span></a>, and{" "}
                  <a href="#" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">Sincerely Hers<span className="sr-only"> (opens in a new tab)</span></a>.
                  I also founded{" "}
                  <a href="#projects" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                    NexusOpus
                  </a>
                  , where I designed and developed{" "}
                  <a href="https://wordpress.org/" target="_blank" rel="noreferrer noopener" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                    WordPress sites
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  {" "}for high-profile clients, further honing my eye for quality design and user experience.
                </p>
                <p className="mb-4 leading-relaxed text-slate-400">
                  When I&apos;m not configuring systems or crafting digital experiences, you&apos;ll find me exploring the latest tech innovations,{" "}
                  <a href="https://github.com/ajclausen" target="_blank" rel="noreferrer noopener" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                    contributing to open source
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  , or diving into intriguing new topics. I believe in continuous learning and staying curious about the ever-evolving world of technology. Feel free to reach out at{" "}
                  <a href="mailto:andrew@clausen.app" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                    andrew@clausen.app
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">Experience</h2>
              </div>
              <div>
                <ol className="group/list">
                  {experiences.map((experience) => (
                    <li key={experience.id} className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-lightest-navy/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2" aria-label={experience.dateRange}>
                          {experience.dateRange}
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-lightest-slate">
                            <div>
                              <a
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href={experience.companyUrl}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={`${experience.title} at ${experience.company} (opens in a new tab)`}
                              >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
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
                                  <div key={index} className="text-slate-400 text-sm" aria-label={`Previous role: ${title}`}>
                                    <span className="font-medium">→</span> {title}
                                  </div>
                                ))}
                              </div>
                            )}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-400">{experience.description}</p>
                          {experience.links && (
                            <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                              {experience.links.map((link, index) => (
                                <li key={index} className="mr-4">
                                  <a
                                    className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
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
                                <div className="flex items-center rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium leading-5 text-cyan">
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
                    className="inline-flex items-center font-medium leading-tight text-slate-200 group"
                    aria-label="View Full Resume (opens in a new tab)"
                    href="/resume.pdf"
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

            {/* Projects Section */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">Projects</h2>
              </div>
              <div>
                <ul className="group/list">
                  {projects.map((project) => (
                    <li key={project.id} className="mb-12">
                      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-lightest-navy/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
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
                          <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>
                          {project.githubStars && (
                            <a
                              className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
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
                                  <div className="flex items-center rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium leading-5 text-cyan">
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
                    className="inline-flex items-center leading-tight text-slate-200 font-medium group"
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

            {/* Writing Section */}
            <section id="writing" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Blog posts">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">Writing</h2>
              </div>
              <div>
                <ul className="group/list">
                  {blogPosts.map((post) => (
                    <li key={post.id} className="mb-12">
                      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-lightest-navy/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:col-span-2 pt-1">
                          {post.icon === "♿" && (
                            <div className="rounded border-2 border-slate/10 p-2 bg-lightest-navy/10 w-fit">
                              <svg className="w-10 h-10 text-slate-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15L13.5 7.5C13.1 7.1 12.6 6.9 12 6.9S10.9 7.1 10.5 7.5L7.91 10.09C7.66 10.34 7.66 10.76 7.91 11.01L10.5 13.6C10.9 14 11.4 14.2 12 14.2S13.1 14 13.5 13.6L15.09 12.01L15 15L12.96 16.29L10.5 20.5H12.2L14.42 16.81L17 15.5V11.5H21V9ZM8.5 12.5L7.5 13.5L4 10L7.5 6.5L8.5 7.5L6 10L8.5 12.5Z"/>
                              </svg>
                            </div>
                          )}
                          {post.icon === "🔭" && (
                            <div className="rounded border-2 border-slate/10 p-2 bg-lightest-navy/10 w-fit">
                              <svg className="w-10 h-10 text-slate-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M21.53 20.47L17.87 16.81C18.55 15.58 18.97 14.17 18.97 12.53C18.97 8.36 15.61 5 11.44 5C7.27 5 3.91 8.36 3.91 12.53S7.27 20.06 11.44 20.06C13.08 20.06 14.49 19.64 15.72 18.96L19.38 22.62C19.68 22.92 20.17 22.92 20.47 22.62L22.62 20.47C22.92 20.17 22.92 19.68 21.53 20.47ZM11.44 18C8.4 18 5.94 15.54 5.94 12.5S8.4 7 11.44 7S16.94 9.46 16.94 12.5S14.48 18 11.44 18Z"/>
                              </svg>
                            </div>
                          )}
                          {post.icon === "🎃" && (
                            <div className="rounded border-2 border-slate/10 p-2 bg-lightest-navy/10 w-fit">
                              <svg className="w-10 h-10 text-slate-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM9 8C8.45 8 8 8.45 8 9C8 9.55 8.45 10 9 10C9.55 10 10 9.55 10 9C10 8.45 9.55 8 9 8ZM15 8C14.45 8 14 8.45 14 9C14 9.55 14.45 10 15 10C15.55 10 16 9.55 16 9C16 8.45 15.55 8 15 8ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z"/>
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="z-10 sm:col-span-6">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">{post.year}</p>
                          <h3>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                              href={post.url}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label={`${post.title} (opens in a new tab)`}
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                {post.title}
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
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Footer with attribution */}
            <footer className="max-w-md pb-16 text-sm text-slate-400 sm:pb-0">
              <p>
                Loosely designed in{" "}
                <a href="https://www.figma.com/" target="_blank" rel="noreferrer noopener" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                  Figma
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>{" "}
                and coded in{" "}
                <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer noopener" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                  Visual Studio Code
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>{" "}
                by yours truly. Built with{" "}
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                  Next.js
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>{" "}
                and{" "}
                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                  Tailwind CSS
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                , deployed with{" "}
                <a href="https://vercel.com/" target="_blank" rel="noreferrer noopener" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                  Vercel
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                . All text is set in the{" "}
                <a href="https://rsms.me/inter/" target="_blank" rel="noreferrer noopener" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                  Inter
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>{" "}
                typeface.
              </p>
              <p className="mt-4">
                Inspired by{" "}
                <a href="https://brittanychiang.com" target="_blank" rel="noreferrer noopener" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                  Brittany Chiang&apos;s portfolio design
                </a>
                .
              </p>
            </footer>
          </div>
        </main>
      </div>
      
      {/* Time Travel Button (TARDIS) */}
      <button
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3 bg-lightest-navy/90 backdrop-blur rounded-full shadow-lg hover:bg-lightest-navy transition-all duration-300 group"
        aria-label="Click to time travel Spinning Tardis from Doctor Who"
        title="Click to time travel"
      >
        <span className="text-slate-400 text-sm whitespace-nowrap">Click to time travel</span>
        <svg 
          className="w-5 h-5 text-cyan animate-spin-slow" 
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
    </>
  );
}