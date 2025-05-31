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

    for (const section of document.querySelectorAll('section[id]')) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    // Outer-most container: Controls overall max-width and responsive padding from screen edges
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 bg-[#0c142c] text-[#bcb6c9]">
      <a href="#content" className="skip-link">
        Skip to Content
      </a>

      {/* Main layout container for large screens: Flex split between sidebar and main content */}
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Sidebar Navigation - Fixed on large screens, takes half width */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            {/* Removed lg:px-24 from this div. Content will now align to the left within its half-width column */}
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
              <ul className="mt-16 w-max"> {/* Exactly like Brittany's: mt-16 and w-max */}
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
                      <span className="nav-text">{item.label}</span>
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
          {/* Removed lg:px-24 from this ul. Social icons will now align to the left within its half-width column */}
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
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <div className="max-w-2xl mx-auto"> {/* This div limits the actual content width, mimicking Brittany's site */}

            {/* About Section */}
            <section id="about" className="mb-16 lg:mb-24">
              <div className="space-y-4 text-[#7281a4] leading-relaxed">
                <p>
                  I'm a developer passionate about building scalable backend systems and intuitive user experiences that solve real-world problems. I enjoy working at the crossroads of technology and impact, crafting solutions that are both technically sound and deeply aligned with user needs.
                </p>
                <p>
                  I’m currently focused on sharpening my problem-solving abilities through Data Structures and Algorithms to prepare for challenging software engineering roles. In parallel, I’m deepening my understanding of system design and architecture to align with the evolving demands of the AI and ML-driven tech landscape. My goal is to grow continuously, embrace new responsibilities, and contribute to innovative, forward-thinking teams while expanding my technical expertise.
                </p>
                <p>
                  In my spare time, I enjoy exploring random ideas at my desk, going on unplanned weekend hikes with friends, and wandering the city in search of a good espresso and a quiet café corner.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-16 lg:mb-24">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-[#bcb6c9]">Experience</h2>
              <div className="space-y-12">
                {/* Freelance Developer */}
                <div className="group relative grid lg:grid-cols-[1fr_2fr] gap-4 lg:gap-8 pb-1 transition-all hover:bg-[#1a2332] hover:shadow-lg hover:drop-shadow-lg rounded-lg p-4 hover:-translate-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#7281a4] mt-1">
                    2024 — Present
                  </div>
                  <div>
                    <h3 className="font-medium leading-snug text-[#bcb6c9] group-hover:text-[#6a9fa4] transition-colors">
                      <a
                        href="https://www.ahuratechnosoft.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1"
                      >
                        Ahura Technosoft
                        <img src="https://ext.same-assets.com/1599097462/2320907649.svg" alt="" className="w-3 h-3 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    </h3>

                    <p className="mt-2 text-sm leading-normal text-[#7281a4]">
                      Develop and maintain backend systems for Seafreshh, Gujarat’s first marine marketplace, using Node.js and MongoDB, while designing mobile-first user interfaces in Figma to ensure a smooth and accessible experience. Map and optimize client operations using tools like Miro, offering process improvements grounded in fisheries industry insights. Additionally, contribute to various backend features on a contract or referral basis, collaborating with peers and clients to implement scalable solutions, and real-time functionality, helping accelerate development timelines and deliver robust backend support for evolving project needs.
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {['JavaScript', 'TypeScript', 'Nodejs', 'AWS', 'Figma', 'Api development', 'Backend Developement'].map((tech) => (
                        <li key={tech} className="rounded-full bg-[#155d50] px-3 py-1 text-xs font-medium text-[#6a9fa4]">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Ahura Technosoft */}
                <div className="group relative grid lg:grid-cols-[1fr_2fr] gap-4 lg:gap-8 pb-1 transition-all hover:bg-[#1a2332] hover:shadow-lg hover:drop-shadow-lg rounded-lg p-4 hover:-translate-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#7281a4] mt-1">
                    2018 — 2024
                  </div>
                  <div>
                    <h3 className="font-medium leading-snug text-[#bcb6c9] group-hover:text-[#6a9fa4] transition-colors">
                      <a
                        href="https://ahuratechnosoft.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline"
                      >
                        Software Engineer · Ahura technosoft
                        <img src="https://ext.same-assets.com/1599097462/1998606599.svg" alt="" className="w-3 h-3 ml-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-[#7281a4]">
                      Maintained and enhanced the backend for Evindia’s, an EV-focused platform; improved scalability and database efficiency on AWS EC2. Developed real-time multiplayer backend features for a card game using Node.js and Socket.IO. Built REST APIs for Quotastic, a free quotation platform, handling user data, authentication, and content management.
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {['JavaScript', 'TypeScript', 'HTML & SCSS', 'React', 'Next.js', 'React Native', 'WordPress', 'Contentful', 'Node.js', 'PHP'].map((tech) => (
                        <li key={tech} className="rounded-full bg-[#155d50] px-3 py-1 text-xs font-medium text-[#6a9fa4]">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Resume Link */}
                <div className="mt-12">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-base font-semibold leading-tight text-[#bcb6c9] hover:text-[#6a9fa4] transition-colors group"
                  >
                    View Full Résumé
                    <img src="https://ext.same-assets.com/1599097462/1743763944.svg" alt="" className="w-4 h-4 ml-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </div>

              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-16 lg:mb-24">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-[#bcb6c9]">Projects</h2>
              <div className="space-y-12 lg:space-y-16">

                {/* Project 1 */}
                <div className="group relative grid lg:grid-cols-[1fr_2fr] gap-4 lg:gap-8 items-center">
                  <div>
                    <img
                      src="https://ext.same-assets.com/1599097462/849522504.png"
                      alt="evIndia electric vehicle searching company"
                      className="rounded border-2 border-[#323e52] transition-all group-hover:border-[#6a9fa4] group-hover:-translate-y-1"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium leading-snug text-[#bcb6c9] group-hover:text-[#6a9fa4] transition-colors">
                      <a
                        href="https://evindia.online/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline"
                      >
                        evIndia Web
                        <img src="https://ext.same-assets.com/1599097462/395157150.svg" alt="" className="w-3 h-3 ml-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-[#7281a4]">
                      Migrated backend systems to AWS EC2, implemented scheduled cron jobs for maintenance and backups. Managed the admin panel for dynamic content updates and user administration.
                    </p>
                    <div className="mt-2 flex items-center">
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {['React', 'Express', 'Spotify API', 'Heroku'].map((tech) => (
                        <li key={tech} className="rounded-full bg-[#155d50] px-3 py-1 text-xs font-medium text-[#6a9fa4]">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Project 2 - Placeholder, replace with real data */}
                <div className="group relative grid lg:grid-cols-[1fr_2fr] gap-4 lg:gap-8 items-center">
                  <div>
                    <img
                      src="https://ext.same-assets.com/1599097462/849522504.png" // Replace with actual image
                      alt="Placeholder Project 2"
                      className="rounded border-2 border-[#323e52] transition-all group-hover:border-[#6a9fa4] group-hover:-translate-y-1"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium leading-snug text-[#bcb6c9] group-hover:text-[#6a9fa4] transition-colors">
                      <a
                        href="#" // Replace with actual project URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline"
                      >
                        Placeholder Project Two
                        <img src="https://ext.same-assets.com/1599097462/395157150.svg" alt="" className="w-3 h-3 ml-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-[#7281a4]">
                      This is a placeholder description for your second project. Update this with details about the project's purpose, technologies, and your contributions.
                    </p>
                    <div className="mt-2 flex items-center">
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {['Next.js', 'Tailwind CSS', 'Firebase', 'Stripe'].map((tech) => ( // Example tech stack
                        <li key={tech} className="rounded-full bg-[#155d50] px-3 py-1 text-xs font-medium text-[#6a9fa4]">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Project 3 - Placeholder, replace with real data */}
                <div className="group relative grid lg:grid-cols-[1fr_2fr] gap-4 lg:gap-8 items-center">
                  <div>
                    <img
                      src="https://ext.same-assets.com/1599097462/849522504.png" // Replace with actual image
                      alt="Placeholder Project 3"
                      className="rounded border-2 border-[#323e52] transition-all group-hover:border-[#6a9fa4] group-hover:-translate-y-1"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium leading-snug text-[#bcb6c9] group-hover:text-[#6a9fa4] transition-colors">
                      <a
                        href="#" // Replace with actual project URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline"
                      >
                        Placeholder Project Three
                        <img src="https://ext.same-assets.com/1599097462/395157150.svg" alt="" className="w-3 h-3 ml-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-[#7281a4]">
                      Description for your third project. Detail the problem it solves, the technologies used, and your role.
                    </p>
                    <div className="mt-2 flex items-center">
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {['Python', 'Django', 'PostgreSQL', 'Docker'].map((tech) => ( // Example tech stack
                        <li key={tech} className="rounded-full bg-[#155d50] px-3 py-1 text-xs font-medium text-[#6a9fa4]">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

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