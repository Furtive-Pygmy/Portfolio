import React, { useEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.to('.greeting', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
            .to('.name', { opacity: 1, y: 0, duration: 1, ease: 'back.out(1.7)' }, '-=0.4')
            .to('.title', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.6')
            .to('.description', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.4')
            .to('.hero-stats', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.4')
            .to('.hero-cta', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.4');
    }, []);

    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="greeting">Hello, I'm</div>
                    <div className="name-container">
                        <h1 className="name">Shayan Ali</h1>
                    </div>
                    <div className="title-container">
                        <h2 className="title">Full Stack Developer for Web and Android</h2>
                    </div>
                    <p className="description">
                        I build web and mobile apps using modern frameworks such as MERN stack, React Native and KMP, targeting
                        scalability and responsiveness
                        with a strong focus on performance optimization and maintainability.
                    </p>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">2026</span>
                            <span className="stat-label">BS Software Engineering</span>
                        </div>
                    </div>
                    <div className="hero-cta">
                        <a href="https://github.com/Furtive-Pygmy" className="primary-btn">
                            <i className="fas fa-code"></i>
                            <span>View Projects</span>
                        </a>
                        <a href="mailto:shayandp75@gmail.com" className="secondary-btn">
                            <i className="fas fa-envelope"></i>
                            <span>Let's Collaborate</span>
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-image-container">
                        <div className="image-backdrop"></div>
                        <div className="profile-image-wrapper">
                            <img src="/assets/shayan.png" className="profile-image" alt="Shayan Ali" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
