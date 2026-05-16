import React, { useEffect } from 'react';
import gsap from 'gsap';

const Journey = () => {
    useEffect(() => {
        gsap.utils.toArray('.journey-card').forEach((card, index) => {
            gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    }, []);

    return (
        <section className="journey-section" id="journey">
            <div className="container">
                <h2 className="section-title">Professional Journey</h2>
                <div className="journey-content">
                    <div className="journey-subsection">
                        <h3 className="subsection-title">Work Experience</h3>
                        <div className="journey-grid">
                            <div className="journey-card work-card">
                                <div className="card-header">
                                    <div className="card-icon work-icon">
                                        <i className="fas fa-mobile-alt"></i>
                                    </div>
                                    <div className="card-info">
                                        <h4 className="card-title">MERN Backend - Intern</h4>
                                        <p className="card-company">NITB Limited</p>
                                        <p className="card-duration">Aug 2025 - Sep 2025</p>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <ul className="responsibilities">
                                        <li>Worked under the backend team using MERN stack, POSTman, Flutter.</li>
                                        <li>Supervised with the usage of RESTful APIs and Flutter crossplatforming.</li>
                                    </ul>
                                    <div className="tech-stack">
                                        <span className="tech-tag">React Native</span>
                                        <span className="tech-tag">Node.js</span>
                                        <span className="tech-tag">MongoDB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="journey-subsection">
                        <h3 className="subsection-title">Education</h3>
                        <div className="journey-grid">
                            <div className="journey-card edu-card">
                                <div className="card-header">
                                    <div className="card-icon edu-icon">
                                        <i className="fas fa-graduation-cap"></i>
                                    </div>
                                    <div className="card-info">
                                        <h4 className="card-title">Bachelor of Science in Software Engineering</h4>
                                        <p className="card-company">Air University, Islamabad</p>
                                        <p className="card-duration">2022 - 2026</p>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <p>Focused on mobile application development, full-stack engineering, API integration, and modern UI implementation.</p>
                                    <div className="coursework">
                                        <span className="course-tag">React Native</span>
                                        <span className="course-tag">API Integration</span>
                                        <span className="course-tag">UI Design</span>
                                        <span className="course-tag">State Management</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="journey-subsection">
                        <h3 className="subsection-title">Project Recognition</h3>
                        <div className="journey-grid">
                            <div className="journey-card dev-card">
                                <div className="card-header">
                                    <div className="card-icon dev-icon">
                                        <i className="fas fa-award"></i>
                                    </div>
                                    <div className="card-info">
                                        <h4 className="card-title">FitFaat - Fitness and Health App</h4>
                                        <p className="card-company">Final Year Project</p>
                                        <p className="card-duration">AI Wrapper Competition 2025</p>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <ul className="responsibilities">
                                        <li>Shortlisted for the National AI Wrapper Competition 2025.</li>
                                        <li>Built as a full-stack fitness management app with intelligent recommendations and AI integration.</li>
                                        <li>Combined mobile UX, backend APIs, and data-driven health features.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
