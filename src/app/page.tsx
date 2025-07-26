// Home.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import Link from 'next/link';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [showResumePreview, setShowResumePreview] = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      }
    );

    // Get all sections with IDs
    const sections = Array.from(document.querySelectorAll('section[id]'));
    sectionsRef.current = sections as HTMLElement[];
    
    // Observe each section
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Temporarily disable the observer to prevent race conditions
      const observer = new IntersectionObserver(() => {}, { threshold: 1 });
      observer.observe(section);
      
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Re-enable after scroll completes
      setTimeout(() => {
        observer.disconnect();
      }, 1000);
    }
  };
  

  return (
    // Outer-most container: Controls overall max-width and responsive padding from screen edges
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0"> 
      <Link href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">
        Skip to Content
      </Link>

      {/* Main layout container for large screens: Flex split between sidebar and main content */}
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Sidebar Navigation - Fixed on large screens, takes half width */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link href="/" className="hover:text-[#6a9fa4] transition-colors whitespace-nowrap">
                  Dipang Bhadrecha
                </Link>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Software Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">I build backend systems. Currently mastering DSA and System Design for advanced software engineering roles.</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                {[
                  { id: 'about', label: 'About' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'worked-on', label: 'Worked On...' },
                ].map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className={`group flex items-center py-3 ${activeSection === item.id ? 'active' : ''}`}
                    >
                      <span className="nav-indicator"></span>
                      <span className="nav-text">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Navigation */}
            <nav className="mb-6 lg:hidden">
              <ul className="flex space-x-10 overflow-x-auto p-4 sm:p-6 md:p-8 lg:p-0">
                {[
                  { id: 'about', label: 'About' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'worked-on', label: 'Worked On...' },
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
          <ul className="flex space-x-5 justify-center lg:justify-start mt-auto">
            {[
              { href: 'https://github.com/Dipang-bhadrecha/', icon: <FaGithub />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/dipang/', icon: <FaLinkedin />, label: 'LinkedIn' },
              { href: 'https://leetcode.com/u/user4485LY/', icon: <SiLeetcode />, label: 'LeetCode' },
              { href: 'https://www.hackerrank.com/profile/dipaang_bhadrec1', icon: <SiHackerrank />, label: 'HackerRank' },
            ].map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <span className="social-icon">
                    {social.icon}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </header>

        {/* Main Content Area - Takes remaining half width */}
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          <div className="max-w-6xl mx-auto">

            {/* About Section */}
            <section id="about" className="mb-16 lg:mb-24">
              <div className="space-y-4 text-[#7281a4] leading-relaxed">
                <p> I’m a backend-focused developer passionate about building scalable systems and practical solutions that make a real-world impact. I’m always sharpening my skills—solving coding challenges on LeetCode, diving into system design, and exploring the fundamentals of computer science beyond just Node.js and Express. I thrive on learning, and I’m eager for opportunities where I can apply my growing knowledge to meaningful projects. </p>
                <p> When I’m not coding, you’ll find me playing ukulele, experimenting in the kitchen, or enjoying my happiest place: working on new ideas or learning at my computer.</p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-[#bcb6c9]">Experience</h2>
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"></div>

              <div>
                <ol className="group/list">

                  {/* Software Engineer - Aspirant */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="October 2024 to Present">
                        Feb 2025 - current
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="#" target="_blank" rel="noreferrer noopener" aria-label="Freelance Developer (opens in a new tab)">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Software Engineer ·{' '}
                                <span className="inline-block">
                                  Aspirant
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                           Currently based in Bengaluru, actively preparing for SDE1 and backend roles by sharpening my skills in C++, Python, AWS, and system design. I’m driven to join an innovative, stable company and stay ahead of the curve by building AI-driven projects and pursuing AWS certification.
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* Freelance Work - Seafreshh */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="October 2024 to Present">
                       Oct 2024 — Feb 2025
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="#" target="_blank" rel="noreferrer noopener" aria-label="Freelance Developer (opens in a new tab)">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Freelance Developer ·{' '}
                                <span className="inline-block">
                                  Seafreshh
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Worked on a freelance project for Seafreshh, a business related to my father’s field, to help build their online presence. I gathered requirements to understand their business model, pricing, supply chain, and customer outreach. I designed a minimal phase 1 prototype in Figma and developed the backend. I also collaborated closely with a freelance frontend developer to complete the project.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {['Node.js', 'MongoDB', 'Figma', 'Backend Development', 'Client Requirements Gathering', 'UI/UX Design', 'Process Optimization'].map((tech) => (
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
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="September 2023 to October 2024">
                         Sep 2023 — Oct 2024
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://ahuratechnosoft.com/" target="_blank" rel="noreferrer noopener" aria-label="Software Engineer at Ahura Technosoft (opens in a new tab)">
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
                          Maintained and enhanced the backend for Evindia's, an EV-focused platform; improved scalability and database efficiency on AWS EC2. Developed real-time multiplayer backend features for a card game using Node.js and Socket.IO. Built REST APIs for Quotastic, a free quotation platform, handling user data, authentication, and content management.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {['JavaScript', 'TypeScript', 'Node.js', 'AWS', 'REST APIs', 'API Development', 'Socket.IO', 'Express.js', 'MySQL', 'Database Design & Management', 'Git', 'Linux'].map((tech) => (
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
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="March 2023 to June 2023">
                       Mar '23 — Jun '23
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="#" target="_blank" rel="noreferrer noopener" aria-label="Node.js Trainee Developer at Bytes Technolabs (opens in a new tab)">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Trainee Node.js Developer ·{' '}
                                <span className="inline-block">
                                  Bytes Technolabs
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          As a Trainee Node.js Developer, I collaborated with frontend and backend teams to develop a grocery application, primarily focusing on backend functionalities. I completed a comprehensive training program and received a certificate in Node.js development.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {['Node.js', 'JavaScript', 'TypeScript', 'Express.js', 'NestJs','MongoDB', 'MySQL', 'Backend Development','Git' ].map((tech) => (
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
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="March 2022 to September 2022">
                        2022 — 2022
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="#" target="_blank" rel="noreferrer noopener" aria-label="Software Engineer Intern at Rushkar Technology (opens in a new tab)">
                              <span className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Software Engineer Intern ·{' '}
                                <span className="inline-block">
                                  Rushkar Technology pvt. ltd
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          As a Software Engineer Intern, I gained practical experience in .NET technology. While not developing a new project, I worked extensively with pre-built projects, particularly the "Nigarsa" project, to gain a deep understanding of existing software architectures and enhance my software engineering skills through analysis and learning.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {['.NET', 'C#', 'SQL Server', 'Software Engineering Principles', 'Project Analysis'].map((tech) => (
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
                <div className="mt-12 flex flex-col gap-4">
                  {/* Resume link */}
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                    href="/resume/Dipang_Resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="View Full Résumé (opens in a new tab)"
                  >
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
                  <button
                    className="inline-flex items-center px-4 py-2 bg-teal-700 text-white rounded hover:bg-teal-600 transition-colors w-max"
                    onClick={() => setShowResumePreview((prev) => !prev)}
                  >
                    {showResumePreview ? 'Hide Resume Preview' : 'Preview Resume'}
                  </button>
                  {showResumePreview && (
                    <div className="w-full max-w-2xl border border-slate-700 rounded shadow-lg overflow-hidden">
                      <iframe
                        src="/resume/Dipang_Resume.pdf"
                        title="Resume Preview"
                        className="w-full h-[600px]"
                      />
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-[#bcb6c9]">Projects</h2>
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"></div>
              <div>
                <ul className="group/list">

                  {/* Project: Seafreshh */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      
                      {/* Image */}
                      <div className="z-10 mb-2 mt-1 sm:col-span-2">
                        <img
                          src="assets/seafreshh.png"
                          alt="Seafreshh Online Fish Delivery"
                          className="rounded border-2 border-slate-200/10 transition-all group-hover:border-teal-300/30 group-hover:-translate-y-1 w-full"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <Link 
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" 
                            href="#" 
                            aria-label="Seafreshh Online Fish Delivery"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Seafreshh
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                              </svg>
                            </span>
                          </Link>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400">
                          Developed an online fish delivery platform tailored for Gujarat fisheries, featuring mobile-first design, multiple authentication options, dynamic delivery charge calculations, preorder and large order functionalities, and real-time order tracking.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((tech) => (
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

                  {/* Project: evIndia */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      
                      <div className="z-10 mb-2 mt-1 sm:col-span-2">
                        <img
                          src="assets/evindia.png"
                          alt="evIndia electric vehicle searching company"
                          className="rounded border-2 border-slate-200/10 transition-all group-hover:border-teal-300/30 group-hover:-translate-y-1 w-full"
                        />
                      </div>
                      
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
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

                  {/* Project: Quotastic */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      
                      <div className="z-10 mb-2 mt-1 sm:col-span-2">
                        <img
                          src="assets/quotastic.png"
                          alt="Quotastic Quotes and Motivation app"
                          className="rounded border-2 border-slate-200/10 transition-all group-hover:border-teal-300/30 group-hover:-translate-y-1 w-full"
                        />
                      </div>
                      
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <Link 
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" 
                            href="#" 
                            aria-label="Quotastic Quotes and Motivation app"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Quotastic
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                              </svg>
                            </span>
                          </Link>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400">
                          Created a React app for daily quotes and motivation with an intuitive UI, featuring search, categories, and user favorites.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {['React', 'JavaScript', 'CSS', 'REST API'].map((tech) => (
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

                  {/* Project: Atleast (Game Project) */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      
                      <div className="z-10 mb-2 mt-1 sm:col-span-2">
                        <img
                          src="assets/atleast.png"
                          alt="Atleast Game Project"
                          className="rounded border-2 border-slate-200/10 transition-all group-hover:border-teal-300/30 group-hover:-translate-y-1 w-full"
                        />
                      </div>
                      
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <Link 
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" 
                            href="#" 
                            aria-label="Atleast Game Project"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Atleast
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                              </svg>
                            </span>
                          </Link>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400">
                          Designed and developed a browser-based game using React and HTML5 Canvas featuring unique mechanics and interactive gameplay.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {['React', 'JavaScript', 'HTML5 Canvas', 'CSS'].map((tech) => (
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

            {/* Worked On Section*/}
            <section id="worked-on" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Things I've worked on">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-[#bcb6c9]">Worked On...</h2>
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"></div>

              <div>
                <ul className="group/list">

                  {/* Item 1 */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-8">
                        <h3 className="font-medium leading-snug text-slate-200">Backend Architecture & API Development</h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                          <span className="group-hover:hidden">
                            Designed scalable REST APIs using Node.js, Express.js, and NestJS for platforms like Seafreshh and Quotastic.....
                          </span>
                          <span className="hidden group-hover:inline">
                            I've built scalable REST APIs using Node.js, Express.js, and NestJS—particularly in production for platforms like Seafreshh and Quotastic. The backend architecture emphasized modular design, clean code principles, and performance optimizations using asynchronous flows and middleware patterns.
                          </span>
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Categories">
                          {['Node.js', 'NestJS', 'Express.js'].map((category) => (
                            <li key={category} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {category}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  {/* Item 2 */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-8">
                        <h3 className="font-medium leading-snug text-slate-200">Real-Time Communication & Event-Driven Logic</h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                          <span className="group-hover:hidden">
                            Integrated Socket.IO for multiplayer games and notification modules across interactive platforms......
                          </span>
                          <span className="hidden group-hover:inline">
                            I've implemented real-time features using Socket.IO for multiplayer card games and in-app notifications. These systems required event-driven architecture, session handling, and optimized broadcasting strategies for low-latency communication.
                          </span>
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Categories">
                          {['Socket.IO', 'WebSockets', 'Event Systems'].map((category) => (
                            <li key={category} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {category}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  {/* Item 3 */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-8">
                        <h3 className="font-medium leading-snug text-slate-200">Infrastructure, Cloud & Server Automation</h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                          <span className="group-hover:hidden">
                            Deployed applications using AWS EC2, configured cron jobs, and automated server routines on Linux.
                          </span>
                          <span className="hidden group-hover:inline">
                            Managed Linux-based AWS EC2 instances for backend deployments, set up cron jobs for recurring tasks, and ensured stability using SSH, monitoring tools, and automated health checks for production-grade platforms.
                          </span>
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Categories">
                          {['AWS EC2', 'Linux', 'Automation'].map((category) => (
                            <li key={category} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {category}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  {/* Item 4 */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-8">
                        <h3 className="font-medium leading-snug text-slate-200">UI/UX, Mobile-first Design & System Flows</h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                          <span className="group-hover:hidden">
                            Designed responsive, mobile-first layouts in Figma and integrated logic for maps, delivery, and routing.
                          </span>
                          <span className="hidden group-hover:inline">
                            I've crafted mobile-first designs in Figma with a focus on real-world flows like address mapping, per-km delivery logic, and multi-mode checkouts. I mapped out systems visually using Miro and translated those flows into performant frontend layouts.
                          </span>
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Categories">
                          {['Figma', 'Responsive Design', 'UX Strategy'].map((category) => (
                            <li key={category} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {category}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  {/* Item 5 */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-8">
                        <h3 className="font-medium leading-snug text-slate-200">Auth Systems, Admin Panels & DevOps Tools</h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                          <span className="group-hover:hidden">
                            Built custom auth flows (OTP & email-based), admin panels, and used tools like Git, Postman, and Miro.
                          </span>
                          <span className="hidden group-hover:inline">
                            Implemented OTP-based login and secure authentication strategies along with custom admin dashboards for managing operations. I've also used Git for version control, Postman for API testing, and Miro for visualizing end-to-end product logic.
                          </span>
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Categories">
                          {['Authentication', 'Admin Tools', 'DevOps'].map((category) => (
                            <li key={category} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {category}
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
          </div>
        </main>
      </div>
    </div>
  );
}