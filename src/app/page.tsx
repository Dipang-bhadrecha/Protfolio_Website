// Home.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import { FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
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
      const observer = new IntersectionObserver(() => { }, { threshold: 1 });
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
            {/* <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link href="/" className="hover:text-[#6a9fa4] transition-colors whitespace-nowrap">
                  Dipang Bhadrecha
                </Link>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Software Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">Hi, I’m Dipang — a software engineer who loves building things that solve real problems, whether they come from personal frustration or the world around me. I enjoy the process of developing ideas into something real — it’s what keeps me glued to my laptop for hours. I don’t like limiting myself to any single tech stack; for me, it’s all about solving problems through code. Lately, I’ve been deeply fascinated by AI and currently focused on building my project, PromptLearn.</p>
            </div> */}
            <div>
  <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
    <Link href="/" className="hover:text-[#6a9fa4] transition-colors whitespace-nowrap">
      Dipang Bhadrecha
    </Link>
  </h1>

  <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
    Software Engineer
  </h2>

  {/* About Me Box */}
  <div
    className="
      mt-6 max-w-md rounded-2xl border border-slate-800/70
      bg-slate-900/60 p-5 sm:p-6 shadow-md
      hover:border-teal-700 hover:bg-slate-900/80
      transition duration-300
    "
  >
    <p className="text-sm sm:text-base leading-relaxed text-slate-300">
      Hi, I’m Dipang — a software engineer who loves building things that solve real problems, whether they come
      from personal frustration or the world around me. I enjoy the process of developing ideas into something real —
      it’s what keeps me glued to my laptop for hours. I don’t like limiting myself to any single tech stack; for me,
      it’s all about solving problems through code. Lately, I’ve been deeply fascinated by AI and currently focused
      on building my project,&nbsp;
      <a
        href="https://prompt-learn.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-400 font-medium hover:underline underline-offset-4 hover:text-teal-300 transition-colors"
      >
        PromptLearn
      </a>.
    </p>
  </div>
</div>


            {/* Desktop Navigation */}
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                {[
                  // { id: 'about', label: 'About' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                  // { id: 'worked-on', label: 'Worked On...' },
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
                      {/* <span className="nav-text">{item.label}</span> */}
                      <span className="nav-text text-lg font-semibold text-slate-300 group-hover:text-teal-400 transition-colors">
                        {item.label}
                      </span>

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
                      className={`text-xs font-medium tracking-widest uppercase whitespace-nowrap ${activeSection === item.id
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
            ].map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <span className="social-icon hover:text-teal-400 transition-colors text-slate-300 text-xl">
                    {social.icon}
                  </span>
                </a>
              </li>
            ))}

            {/* Resume Text Link */}
            <li>
              <a
                href="/resume/Dipang_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Résumé"
                className="text-slate-300 hover:text-teal-400 transition-colors font-medium text-base tracking-wide"
              >
                Résumé
              </a>
            </li>
          </ul>

        </header>

        {/* Main Content Area - Takes remaining half width */}
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          <div className="max-w-6xl mx-auto">

            {/* About Section */}
            <section id="about" className="mb-16 lg:mb-24">
              <div className="space-y-4 text-[#7281a4] leading-relaxed">
                {/* <p> I’m a backend-focused developer passionate about building scalable systems and practical solutions that make a real-world impact. I’m always sharpening my skills—solving coding challenges on LeetCode, diving into system design, and exploring the fundamentals of computer science beyond just Node.js and Express. I thrive on learning, and I’m eager for opportunities where I can apply my growing knowledge to meaningful projects. </p> */}
                {/* <p> Does the About section really matter? Projects and skills tell the story better than words ever could. </p> */}
              </div>
            </section>

            {/* Experience Section */}
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-[#bcb6c9]">
                Experience
              </h2>
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0" />

              <div>
                <ol className="group/list">

                  {/* Freelance Work - Seafreshh */}
                  <li className="mb-12">
                    <details
                      className="
    group relative overflow-hidden rounded-xl border border-slate-800/60
    bg-slate-900/40 p-4 md:p-5 shadow-sm
    transition hover:border-slate-700 hover:bg-slate-900/60 hover:shadow-md
    focus-within:ring-2 focus-within:ring-teal-500/30
    open:border-slate-700
  "
                    >
                      <summary className="list-none cursor-pointer">
                        <div className="flex items-start justify-between gap-4">
                          <div className="leading-tight">
                            <h3 className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Freelance Developer · <span className="inline-block">Seafreshh</span>
                              </span>
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                            <span>Oct 2024 — Feb 2025</span>
                            <svg className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </summary>

                      <div className="mt-4 pt-1 overflow-hidden max-h-0 transition-[max-height] duration-300 ease-in-out group-open:max-h-[900px]">
                        <p className="text-sm leading-relaxed text-slate-300">
                          Worked on a freelance project for Seafreshh, a business related to my father’s field, to help build their online presence. I gathered requirements to understand their business model, pricing, supply chain, and customer outreach. I designed a minimal phase 1 prototype in Figma and developed the backend. I also collaborated closely with a freelance frontend developer to complete the project.
                        </p>
                        <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                          {["Node.js", "MongoDB", "Figma", "Backend Development", "Client Requirements Gathering", "UI/UX Design", "Process Optimization"].map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  </li>

                  {/* Ahura Technosoft */}
                  <li className="mb-12">
                    <details
                      className="
    group relative overflow-hidden rounded-xl border border-slate-800/60
    bg-slate-900/40 p-4 md:p-5 shadow-sm
    transition hover:border-slate-700 hover:bg-slate-900/60 hover:shadow-md
    focus-within:ring-2 focus-within:ring-teal-500/30
    open:border-slate-700
  "
                    >
                      <summary className="list-none cursor-pointer">
                        <div className="flex items-start justify-between gap-4">
                          <div className="leading-tight">
                            <h3 className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Software Engineer · <span className="inline-block">Ahura Technosoft</span>
                              </span>
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                            <span>Sep 2023 — Oct 2024</span>
                            <svg className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </summary>

                      <div className="mt-4 pt-1 overflow-hidden max-h-0 transition-[max-height] duration-300 ease-in-out group-open:max-h-[900px]">
                        <p className="text-sm leading-relaxed text-slate-300">
                          Maintained and enhanced the backend for Evindia's, an EV-focused platform; improved scalability and database efficiency on AWS EC2. Developed real-time multiplayer backend features for a card game using Node.js and Socket.IO. Built REST APIs for Quotastic, a free quotation platform, handling user data, authentication, and content management.
                        </p>
                        <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                          {["JavaScript", "TypeScript", "Node.js", "AWS", "REST APIs", "API Development", "Socket.IO", "Express.js", "MySQL", "Database Design & Management", "Git", "Linux"].map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  </li>

                  {/* Bytes Technolabs */}
                  <li className="mb-12">
                    <details
                      className="
      group relative overflow-hidden rounded-xl border border-slate-800/60
      bg-slate-900/40 p-4 md:p-5 shadow-sm
      transition hover:border-slate-700 hover:bg-slate-900/60 hover:shadow-md
      focus-within:ring-2 focus-within:ring-teal-500/30
      open:border-slate-700
    "
                    >
                      <summary className="list-none cursor-pointer ">
                        <div className="flex items-start justify-between gap-4">
                          <div className="leading-tight">
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="#" target="_blank" rel="noreferrer noopener" aria-label="Node.js Trainee Developer at Bytes Technolabs (opens in a new tab)">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Trainee Node.js Developer ·{' '}
                                <span className="inline-block">
                                  Bytes Technolabs
                                </span>
                              </span>
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                            <span>Mar '23 — Jun '23</span>
                            <svg className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </summary>

                      <div className="mt-4 pt-1 overflow-hidden max-h-0 transition-[max-height] duration-300 ease-in-out group-open:max-h-[900px]">
                        <p className="text-sm leading-relaxed text-slate-300">
                          As a Trainee Node.js Developer, I collaborated with frontend and backend teams to develop a grocery application, primarily focusing on backend functionalities. I completed a comprehensive training program and received a certificate in Node.js development.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {['Node.js', 'JavaScript', 'TypeScript', 'Express.js', 'NestJs', 'MongoDB', 'MySQL', 'Backend Development', 'Git'].map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  </li>

                  {/* Rushkar Technology Pvt. Ltd */}
                  <li className="mb-12">
                    <details
                      className="
    group relative overflow-hidden rounded-xl border border-slate-800/60
    bg-slate-900/40 p-4 md:p-5 shadow-sm
    transition hover:border-slate-700 hover:bg-slate-900/60 hover:shadow-md
    focus-within:ring-2 focus-within:ring-teal-500/30
    open:border-slate-700
  "
                    >
                      <summary className="list-none cursor-pointer ">
                        <div className="flex items-start justify-between gap-4">
                          <div className="leading-tight">
                            <h3 className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Software Engineer Intern · <span className="inline-block">Rushkar Technology Pvt. Ltd</span>
                              </span>
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                            <span>2022 — 2022</span>
                            <svg className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </summary>

                      <div className="mt-4 pt-1 overflow-hidden max-h-0 transition-[max-height] duration-300 ease-in-out group-open:max-h-[900px]">
                        <p className="text-sm leading-relaxed text-slate-300">
                          As a Software Engineer Intern, I gained practical experience in .NET technology. While not developing a new project, I worked extensively with pre-built projects, particularly the "Nigarsa" project, to gain a deep understanding of existing software architectures and enhance my software engineering skills through analysis and learning.
                        </p>
                        <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                          {[".NET", "C#", "SQL Server", "Software Engineering Principles", "Project Analysis"].map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  </li>

                </ol>

              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-[#bcb6c9]">Projects</h2>
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"></div>
              <div>
                <ul className="group/list">

                  {/* Project: PromptLearn */}
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                      {/* Image */}
                      <div className="z-10 mb-2 mt-1 sm:col-span-2">
                        <img
                          src="assets/promptlearn.png"
                          alt="PromptLearn"
                          className="rounded border-2 border-slate-200/10 transition-all group-hover:border-teal-300/30 group-hover:-translate-y-1 w-full"
                        />
                      </div>

                      {/* Content */}
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <Link
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                            href="https://prompt-learn.vercel.app/"
                            aria-label="PromptLearn"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              PromptLearn
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                              </svg>
                            </span>
                          </Link>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400">
                          PromptLearn is an interactive AI mind mapping tool designed to help you organize and visualize your AI prompts and responses. It's built with a clean, dark-themed interface, offering a digital canvas where you can create, connect, and manage prompts in a hierarchical tree structure. With features like zooming, panning, and multi-node selection, it makes organizing complex AI workflows intuitive and efficient. This tool is perfect for AI prompt engineers, researchers, and developers who want a visual way to manage their prompt engineering projects and AI conversation trees.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {['React', 'Next.js', 'Tailwind CSS', 'Google cloud console', 'gemini API', 'Generative model'].map((tech) => (
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

          </div>
        </main>
      </div>
    </div>
  );
}