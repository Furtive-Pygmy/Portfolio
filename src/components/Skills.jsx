import React, { useEffect } from 'react';
import gsap from 'gsap';

const Skills = () => {
    useEffect(() => {
        gsap.utils.toArray('.skill-card').forEach((card, index) => {
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
        <section className="skills-section" id="skills">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>
                <div className="skills-grid">
                    <div className="skill-card coding-skills">
                        <div className="card-icon"><i className="fas fa-layer-group"></i></div>
                        <h3>Full-Stack Engineering</h3>
                        <div className="skills-list">
                            <span className="skill-tag">JavaScript/TypeScript</span>
                            <span className="skill-tag">React</span>
                            <span className="skill-tag">Node.js</span>
                            <span className="skill-tag">Express</span>
                            <span className="skill-tag">React Native</span>
                            <span className="skill-tag">KMP</span>
                        </div>
                    </div>

                    <div className="skill-card design-skills">
                        <div className="card-icon"><i className="fas fa-database"></i></div>
                        <h3>Databases & APIs</h3>
                        <div className="skills-list">
                            <span className="skill-tag">REST APIs</span>
                            <span className="skill-tag">PostgreSQL</span>
                            <span className="skill-tag">MongoDB</span>
                            <span className="skill-tag">Local JSON</span>
                            <span className="skill-tag">Authentication Tokens</span>
                        </div>
                    </div>

                    <div className="skill-card soft-skills">
                        <div className="card-icon"><i className="fas fa-drafting-compass"></i></div>
                        <h3>Tools & Growth</h3>
                        <div className="skills-list">
                            <span className="skill-tag">GitHub</span>
                            <span className="skill-tag">Expo CLI</span>
                            <span className="skill-tag">TailwindCSS</span>
                            <span className="skill-tag">Figma</span>
                            <span className="skill-tag">Linux</span>
                            <span className="skill-tag">ADB</span>
                            <span className="skill-tag">IBSPAINT & ShotCut</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
