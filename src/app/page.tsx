"use client";

import { useState, useEffect } from 'react';

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
    <div className="min-h-screen bg-[#0c142c] text-[#bcb6c9]">
      <a href="#content" className="skip-link">
        Skip to Content
      </a>

      <div className="lg:flex min-h-screen">
        {/* Sidebar Navigation */}
        <aside className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-96 flex flex-col lg:justify-between p-6 lg:p-12 z-10">
          <div>
            <header className="mb-6 lg:mb-8">
              <h1 className="text-3xl lg:text-5xl font-bold text-[#bcb6c9] mb-3">
                <a href="/" className="hover:text-[#6a9fa4] transition-colors">
                  Dipang Bhadrecha
                </a>
              </h1>
              <h2 className="text-lg lg:text-xl font-medium text-[#bcb6c9] mb-4">
                Software Engineer
              </h2>
              <p className="text-[#7281a4] text-base lg:text-lg leading-relaxed">
                I build backend systems.
              </p>
            </header>

            <nav className="mb-6 lg:mb-8">
              <ul className="flex lg:flex-col space-x-6 lg:space-x-0 lg:space-y-3 overflow-x-auto">
                {[
                  { id: 'about', label: 'About' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                  //{ id: 'writing', label: 'Writing' }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`group flex items-center text-xs lg:text-sm font-medium tracking-widest uppercase whitespace-nowrap ${
                        activeSection === item.id
                          ? 'text-[#bcb6c9]'
                          : 'text-[#7281a4] hover:text-[#bcb6c9]'
                      } transition-colors`}
                    >
                      <span className={`h-px mr-2 lg:mr-4 transition-all hidden lg:block ${
                        activeSection === item.id
                          ? 'w-16 bg-[#bcb6c9]'
                          : 'w-8 bg-[#7281a4] group-hover:w-16 group-hover:bg-[#bcb6c9]'
                      }`} />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex space-x-5 justify-center lg:justify-start">
            {[
              { href: 'https://github.com/Dipang-bhadrecha/', icon: 'https://ext.same-assets.com/1599097462/3783633550.svg', label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/dipang/', icon: 'https://ext.same-assets.com/1599097462/2563901416.svg', label: 'LinkedIn' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7281a4] hover:text-[#6a9fa4] hover:-translate-y-1 transition-all"
                aria-label={social.label}
              >
                <img src={social.icon} alt={social.label} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main id="content" className="lg:ml-96 flex-1">
          <div className="max-w-2xl mx-auto py-12 lg:py-24 px-6 lg:px-12">

            {/* About Section */}
            <section id="about" className="mb-16 lg:mb-24">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-[#bcb6c9]">About</h2>
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
                <div className="group relative grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-8 pb-1 transition-all hover:bg-[#1a2332] hover:shadow-lg hover:drop-shadow-lg rounded-lg p-4 hover:-translate-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#7281a4] mt-1">
                    2024 — Present
                  </div>
                  <div>
                    <h3 className="font-medium leading-snug text-[#bcb6c9] group-hover:text-[#6a9fa4] transition-colors">
                      <a
                      >
                        Feelance Developer
                        <img src="https://ext.same-assets.com/1599097462/2320907649.svg" alt="" className="w-3 h-3 ml-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-[#7281a4]">
                      Develop and maintain backend systems for Seafreshh, Gujarat’s first marine marketplace, using Node.js and MongoDB, while designing mobile-first user interfaces in Figma to ensure a smooth and accessible experience. Map and optimize client operations using tools like Miro, offering process improvements grounded in fisheries industry insights. Additionally, contribute to various backend features on a contract or referral basis, collaborating with peers and clients to implement scalable solutions,and real-time functionality, helping accelerate development timelines and deliver robust backend support for evolving project needs.
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {['JavaScript', 'TypeScript', 'Nodejs', 'AWS', 'Figma', 'Api development', 'backend Developement'].map((tech) => (
                        <li key={tech} className="rounded-full bg-[#155d50] px-3 py-1 text-xs font-medium text-[#6a9fa4]">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Ahura Technosoft */}
                <div className="group relative grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-8 pb-1 transition-all hover:bg-[#1a2332] hover:shadow-lg hover:drop-shadow-lg rounded-lg p-4 hover:-translate-y-1">
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
                      Maintained and enhanced the backend for Evindia’s, an EV-focused platform; improved scalability and database efficiency on AWS EC2.eveloped real-time multiplayer backend features for a card game using Node.js and Socket.IO.Built REST APIs for Quotastic, a free quotation platform, handling user data, authentication, and content management.
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

                {/* Spotify Course */}
                <div className="group relative grid lg:grid-cols-[1fr_200px] gap-4 lg:gap-8 items-center">
                  <div className="order-2">
                    <img
                      src="https://ext.same-assets.com/1599097462/849522504.png"
                      alt="Build a Spotify Connected App Newline course marketing card"
                      className="rounded border-2 border-[#323e52] transition-all group-hover:border-[#6a9fa4] group-hover:-translate-y-1"
                    />
                  </div>
                  <div className="order-1">
                    <h3 className="font-medium leading-snug text-[#bcb6c9] group-hover:text-[#6a9fa4] transition-colors">
                      <a
                        href="https://www.newline.co/courses/build-a-spotify-connected-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline"
                      >
                        Build a Spotify Connected App
                        <img src="https://ext.same-assets.com/1599097462/1354271685.svg" alt="" className="w-3 h-3 ml-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-[#7281a4]">
                      Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.
                    </p>
                  </div>
                </div>

                {/* Spotify Profile */}
                <div className="group relative grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-8 items-center">
                  <div>
                    <img
                      src="https://ext.same-assets.com/1599097462/849522504.png"
                      alt="Spotify Profile app homepage"
                      className="rounded border-2 border-[#323e52] transition-all group-hover:border-[#6a9fa4] group-hover:-translate-y-1"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium leading-snug text-[#bcb6c9] group-hover:text-[#6a9fa4] transition-colors">
                      <a
                        href="https://spotify-profile.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline"
                      >
                        Spotify Profile
                        <img src="https://ext.same-assets.com/1599097462/395157150.svg" alt="" className="w-3 h-3 ml-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-[#7281a4]">
                      Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
                    </p>
                    <div className="mt-2 flex items-center">
                      <a href="https://github.com/bchiang7/spotify-profile" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs text-[#6a9fa4] hover:text-[#bcb6c9] transition-colors">
                        <img src="https://ext.same-assets.com/1599097462/1443725800.svg" alt="" className="w-3 h-3 mr-1" />
                        682
                      </a>
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

              </div>
            </section>

          </div>
        </main>
      </div>

      {/* Korok Image */}
      <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 opacity-60 hover:opacity-100 transition-opacity z-10">
        <img
          src="https://ext.same-assets.com/1599097462/2248006837.png"
          alt="Korok character"
          className="w-12 h-12 lg:w-16 lg:h-16"
        />
      </div>
    </div>
  );
}
