import React, { useEffect } from 'react';
import gsap from 'gsap';

const Contact = () => {
    useEffect(() => {
        gsap.to('.contact-content', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.contact-content',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }, []);

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <p className="contact-description">
                        Interested in mobile app development, full-stack features, or collaboration opportunities? I would love to hear about your project ideas.
                    </p>
                    <div className="social-links">
                        <a href="mailto:shayandp75@gmail.com" className="social-link" aria-label="Email"><i className="fas fa-envelope"></i></a>
                        <a href="https://wa.me/923330003525" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                        <a href="tel:+923330003525" className="social-link" aria-label="Phone"><i className="fas fa-phone"></i></a>
                    </div>
                    <div className="contact-meta">
                        <a href="mailto:shayandp75@gmail.com">shayandp75@gmail.com</a>
                        <span>WhatsApp: +92 3330003525</span>
                        <span>Phone: +92 3330003525</span>
                    </div>
                    <a href="/assets/shayancv.jpg" download="shayancv.jpg" className="cv-button" aria-label="Download CV">
                        <i className="fas fa-download"></i>
                        <span>Download CV</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
