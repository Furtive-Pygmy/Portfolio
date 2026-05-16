import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        let scene, camera, renderer, particles;
        let mouseX = 0, mouseY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        // const initThreeJS = () => {
        //     const canvas = canvasRef.current;
        //     if (!canvas || window.innerWidth <= 720) return;

        //     scene = new THREE.Scene();
        //     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        //     renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
        //     renderer.setSize(window.innerWidth, window.innerHeight);

        //     const geometry = new THREE.BufferGeometry();
        //     const particleCount = 500;
        //     const positions = new Float32Array(particleCount * 3);
        //     const colors = new Float32Array(particleCount * 3);

        //     for (let i = 0; i < particleCount * 3; i += 3) {
        //         positions[i] = (Math.random() - 0.5) * 2000;
        //         positions[i + 1] = (Math.random() - 0.5) * 2000;
        //         positions[i + 2] = (Math.random() - 0.5) * 2000;

        //         const color = new THREE.Color(0x2AC0FB);
        //         colors[i] = color.r;
        //         colors[i + 1] = color.g;
        //         colors[i + 2] = color.b;
        //     }

        //     geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        //     geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        //     const material = new THREE.PointsMaterial({
        //         size: 3,
        //         vertexColors: true,
        //         transparent: true,
        //         opacity: 0.8
        //     });

        //     particles = new THREE.Points(geometry, material);
        //     scene.add(particles);

        //     camera.position.z = 500;

        //     const onDocumentMouseMove = (event) => {
        //         mouseX = event.clientX - windowHalfX;
        //         mouseY = event.clientY - windowHalfY;
        //     };

        //     const onWindowResize = () => {
        //         windowHalfX = window.innerWidth / 2;
        //         windowHalfY = window.innerHeight / 2;
        //         camera.aspect = window.innerWidth / window.innerHeight;
        //         camera.updateProjectionMatrix();
        //         renderer.setSize(window.innerWidth, window.innerHeight);
        //     };

        //     document.addEventListener('mousemove', onDocumentMouseMove);
        //     window.addEventListener('resize', onWindowResize);

        //     const animate = () => {
        //         if (!renderer || !scene || !camera) return;
        //         requestAnimationFrame(animate);

        //         if (particles) {
        //             particles.rotation.x += 0.0005;
        //             particles.rotation.y += 0.001;

        //             camera.position.x += (mouseX * 0.0005 - camera.position.x) * 0.05;
        //             camera.position.y += (-mouseY * 0.0005 - camera.position.y) * 0.05;
        //             camera.lookAt(scene.position);
        //         }

        //         renderer.render(scene, camera);
        //     };

        //     animate();

        //     return () => {
        //         document.removeEventListener('mousemove', onDocumentMouseMove);
        //         window.removeEventListener('resize', onWindowResize);
        //         if (renderer) renderer.dispose();
        //     };
        // };

        // const cleanup = initThreeJS();

        // return () => {
        //     if (cleanup) cleanup();
        // };
    }, []);

    return <canvas id="canvas-background" ref={canvasRef} style={{ pointerEvents: 'none' }}></canvas>;
};

export default Background;
