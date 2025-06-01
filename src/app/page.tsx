// Home.tsx
"use client";

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  

  return (
    // Outer-most container: Controls overall max-width and responsive padding from screen edges
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0"> 
      <a href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">
        Skip to Content
      </a>

      {/* Main layout container for large screens: Flex split between sidebar and main content */}
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Sidebar Navigation - Fixed on large screens, takes half width */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/" className="hover:text-[#6a9fa4] transition-colors whitespace-nowrap">
                  Dipang Bhadrecha
                </a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Software Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">I build backend systems and UI. Currently mastering DSA and System Design for advanced software engineering roles.</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max"> 
                {[
                  { id: 'about', label: 'About' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                ].map((item) => (
                  <li key={item.id} key={item.id}>
                    <a
                      href={`#${item.id}`} // Use href for actual link
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }} // Keep smooth scroll
                      className={`group flex items-center py-3 ${activeSection === item.id ? 'active' : ''}`}
                    >
                      {/* Nav indicator and text styles are now in globals.css for reusability */}
                      <span className="nav-indicator"></span>
                      <span className="nav-text">{item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Navigation */}
            <nav className="mb-6 lg:hidden">
              <ul className="flex space-x-10 overflow-x-auto p-4 sm:p-6 md:p-8 lg:p-0"> {/* Adjusted for mobile padding */}
                {[
                  { id: 'about', label: 'About' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-xs font-medium tracking-widest uppercase whitespace-nowrap ${
                        activeSection === item.id
                          ? 'text-[#bcb6c9]'
                          : 'text-[#7281a4] hover:text-[#bcb6c9]'
                      } transition-colors`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Links - Positioned at bottom on desktop, center on mobile */}
          <ul className="flex space-x-5 justify-center lg:justify-start mt-auto text-white">
            {[
              { href: 'https://github.com/Dipang-bhadrecha/', icon: <FaGithub />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/dipang/', icon: <FaLinkedin />, label: 'LinkedIn' },
            ].map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 hover:-translate-y-1 transition-all"
                  aria-label={social.label}
                >
                  <span className="text-white text-3xl">{social.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </header>

        {/* Main Content Area - Takes remaining half width */}
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          <div className=" max-w-6xl mx-auto "> {/* This div limits the actual content width */}

            {/* About Section */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
              </div>
              <div className="text-body">
                <p>
                  I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
                </p>
                <p>
                  Currently, I'm a Software Engineer at{' '}
                  <a href="https://www.ahuratechnosoft.com/" target="_blank" rel="noreferrer noopener">
                    Ahura Technosoft
                  </a>, specializing in backend development. I contribute to the creation and maintenance of systems that power web applications, ensuring our platform meets performance standards and best practices to deliver an excellent user experience.
                </p>
                <p>
                  In the past, I've had the opportunity to develop software across a variety of settings — from{' '}
                  <a href="https://evindia.online/" target="_blank" rel="noreferrer noopener">
                    EV India
                  </a>{' '}
                  to{' '}
                  <a href="https://quotastic.in/" target="_blank" rel="noreferrer noopener">
                    Quotastic
                  </a>.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-[#bcb6c9]">Experience</h2>
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                </div>

                
                <div>
                  <ol className="group/list">

                    {/* Freelance Work */}
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">
                          2024 — Present
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                              <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://www.ahuratechnosoft.com/" target="_blank" rel="noreferrer noopener" aria-label="Software Engineer at Ahura Technosoft (opens in a new tab)">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                  Software Engineer ·{' '}
                                  <span className="inline-block">
                                    Ahura Technosoft
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal">
                            Build and maintain critical components used to construct web applications. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web development.
                          </p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {['JavaScript', 'TypeScript', 'Node.js', 'React'].map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>

                    {/* Ahura Technosoft */}
                    <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">
                          2024 — Present
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                              <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://www.ahuratechnosoft.com/" target="_blank" rel="noreferrer noopener" aria-label="Software Engineer at Ahura Technosoft (opens in a new tab)">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                  Software Engineer ·{' '}
                                  <span className="inline-block">
                                    Ahura Technosoft
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal">
                            Build and maintain critical components used to construct web applications. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web development.
                          </p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {['JavaScript', 'TypeScript', 'Node.js', 'React'].map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>

                    {/* Bytes Technolabs */}
                    <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">
                          2024 — Present
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                              <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://www.ahuratechnosoft.com/" target="_blank" rel="noreferrer noopener" aria-label="Software Engineer at Ahura Technosoft (opens in a new tab)">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                  Software Engineer ·{' '}
                                  <span className="inline-block">
                                    Ahura Technosoft
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal">
                            Build and maintain critical components used to construct web applications. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web development.
                          </p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {['JavaScript', 'TypeScript', 'Node.js', 'React'].map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>

                    {/* Rushkar Technology pvt. ltd */}
                    <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">
                          2024 — Present
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                              <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://www.ahuratechnosoft.com/" target="_blank" rel="noreferrer noopener" aria-label="Software Engineer at Ahura Technosoft (opens in a new tab)">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                  Software Engineer ·{' '}
                                  <span className="inline-block">
                                    Ahura Technosoft
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal">
                            Build and maintain critical components used to construct web applications. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web development.
                          </p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {['JavaScript', 'TypeScript', 'Node.js', 'React'].map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                      
                  </ol>
                  <div className="mt-12">

                    {/* Resume link */}
                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base" href="/resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)">
                      <span>
                        View Full{' '}
                        <span className="inline-block">
                          Résumé
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                      </span>
                    </a>

                  </div>
                </div>

                
              </section>

            {/* Projects Section */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-[#bcb6c9]">Projects</h2>
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            </div>

            <div>
            <ul className="group/list">

                  {/* Project 1 */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      
                      {/* Image column */}
                      <div className="z-10 mb-2 mt-1 sm:col-span-2">
                        <img
                          src="https://ext.same-assets.com/1599097462/849522504.png"
                          alt="evIndia electric vehicle searching company"
                          className="rounded border-2 border-slate-200/10 transition-all group-hover:border-teal-300/30 group-hover:-translate-y-1 w-full"
                        />
                      </div>
                      
                      {/* Content column */}
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a 
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" 
                              href="https://evindia.online/" 
                              target="_blank" 
                              rel="noreferrer noopener" 
                              aria-label="evIndia Web (opens in a new tab)"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                evIndia Web
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400">
                          Migrated backend systems to AWS EC2, implemented scheduled cron jobs for maintenance and backups. Managed the admin panel for dynamic content updates and user administration.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {['React', 'Express', 'Spotify API', 'Heroku'].map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  {/* Project 2 */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      
                      {/* Image column */}
                      <div className="z-10 mb-2 mt-1 sm:col-span-2">
                        <img
                          src="https://ext.same-assets.com/1599097462/849522504.png"
                          alt="evIndia electric vehicle searching company"
                          className="rounded border-2 border-slate-200/10 transition-all group-hover:border-teal-300/30 group-hover:-translate-y-1 w-full"
                        />
                      </div>
                      
                      {/* Content column */}
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a 
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" 
                              href="https://evindia.online/" 
                              target="_blank" 
                              rel="noreferrer noopener" 
                              aria-label="evIndia Web (opens in a new tab)"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                evIndia Web
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400">
                          Migrated backend systems to AWS EC2, implemented scheduled cron jobs for maintenance and backups. Managed the admin panel for dynamic content updates and user administration.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {['React', 'Express', 'Spotify API', 'Heroku'].map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  {/* Project 3 */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      
                      {/* Image column */}
                      <div className="z-10 mb-2 mt-1 sm:col-span-2">
                        <img
                          src="https://ext.same-assets.com/1599097462/849522504.png"
                          alt="evIndia electric vehicle searching company"
                          className="rounded border-2 border-slate-200/10 transition-all group-hover:border-teal-300/30 group-hover:-translate-y-1 w-full"
                        />
                      </div>
                      
                      {/* Content column */}
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a 
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" 
                              href="https://evindia.online/" 
                              target="_blank" 
                              rel="noreferrer noopener" 
                              aria-label="evIndia Web (opens in a new tab)"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                evIndia Web
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400">
                          Migrated backend systems to AWS EC2, implemented scheduled cron jobs for maintenance and backups. Managed the admin panel for dynamic content updates and user administration.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {['React', 'Express', 'Spotify API', 'Heroku'].map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                </ul>
              </div>
            </section>
            
            {/* Worked On Section - Without Years */}
            <section id="worked-on" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Things I've worked on">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-[#bcb6c9]">Worked On...</h2>
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              </div>

              <div>
                <ul className="group/list">

                  {/* Item 1 */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-8"> {/* Full width now */}
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                5 Common Accessibility Pitfalls and How to Avoid Them
                                5 Common Accessibility Pitfalls and How to Avoid Them
                                5 Common Accessibility Pitfalls and How to Avoid Them 
                                5 Common Accessibility Pitfalls and How to Avoid Them
                              </span>
                            </a>
                          </div>
                        </h3>
                      </div>
                    </div>
                  </li>

                  {/* Item 2 */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-8">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>5 Common Accessibility Pitfalls and How to Avoid Them
                                5 Common Accessibility Pitfalls and How to Avoid Them
                                5 Common Accessibility Pitfalls and How to Avoid Them 
                                5 Common Accessibility Pitfalls and How to Avoid Them
                              </span>
                            </a>
                          </div>
                        </h3>
                      </div>
                    </div>
                  </li>

                  {/* Item 3 */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-8">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>5 Common Accessibility Pitfalls and How to Avoid Them
                                5 Common Accessibility Pitfalls and How to Avoid Them
                                5 Common Accessibility Pitfalls and How to Avoid Them 
                                5 Common Accessibility Pitfalls and How to Avoid Themh
                              </span>
                            </a>
                          </div>
                        </h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

          </div>
        </main>
      </div>

      {/* Optional Korok Image (if you want to include it) */}
      {/* <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 opacity-60 hover:opacity-100 transition-opacity z-10">
        <img
          src="https://ext.same-assets.com/1599097462/2248006837.png"
          alt="Korok character"
          className="w-12 h-12 lg:w-16 lg:h-16"
        />
      </div> */}
    </div>
  );
}