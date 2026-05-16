import React, { useEffect } from 'react';
import gsap from 'gsap';

const Projects = () => {
    useEffect(() => {
        gsap.utils.toArray('.project-card').forEach((card, index) => {
            gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.15,
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
        <section className="projects-section" id="projects">
            <div className="container">
                <h2 className="section-title">Selected Projects</h2>
                <div className="projects-grid">
                    <div className="project-card project-fitness">
                        <div className="project-visual">
                            <div className="project-visual-header">
                                <div className="project-icon"><i className="fas fa-dumbbell"></i></div>
                                <span className="project-category">AI Fitness</span>
                            </div>
                            <div className="project-snapshot">
                                <span className="snapshot-kicker">Shortlisted</span>
                                <strong>National AI Wrapper Competition 2025</strong>
                            </div>
                            <ul className="project-highlights">
                                <li>Intelligent recommendations</li>
                                <li>Full-stack fitness management</li>
                                <li>Mobile-first health experience</li>
                            </ul>
                        </div>
                        <div className="project-content">
                            <h3>FitFaat - Fitness and Health App</h3>
                            <p>Final year project focused on fitness management, AI-assisted recommendations, backend APIs, and an accessible mobile experience.</p>
                            <div className="project-tech">
                                <span className="tech-tag">React Native</span>
                                <span className="tech-tag">Node.js</span>
                                <span className="tech-tag">AI Integration</span>
                            </div>
                        </div>
                    </div>

                    <div className="project-card project-expense">
                        <div className="project-visual">
                            <div className="project-visual-header">
                                <div className="project-icon"><i className="fas fa-tools"></i></div>
                                <span className="project-category">Helpers</span>
                            </div>
                            <div className="project-snapshot">
                                <span className="snapshot-kicker">Built For</span>
                                <strong>Tracking, charts, and sync</strong>
                            </div>
                            <ul className="project-highlights">
                                <li>Sharing</li>
                                <li>Productivity</li>
                                <li>Real-time synchronization</li>
                                <li>Game helper</li>
                            </ul>
                        </div>
                        <div className="project-content">
                            <h3>Utility Apps</h3>
                            <p>A collection of small, practical mobile apps including file transfer crossplatform, and ai-cli helper experiences built around daily workflows.</p>
                            <div className="project-tech">
                                <span className="tech-tag">tellMe</span>
                                <span className="tech-tag">Za Flow</span>
                                <span className="tech-tag">DamageCalc</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
