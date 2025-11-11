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