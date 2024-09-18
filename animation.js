gsap.registerPlugin(ScrollTrigger);

// Get the path length for the animation
const pathLength = document.querySelector("#arrowPath").getTotalLength();

// Set up initial properties for the path
gsap.set("#arrowPath", {
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength, // Hide the path initially
});

// Animate the arrow filling and fading in
gsap.to("#arrowPath", {
    strokeDashoffset: 0, // Reveal the path
    opacity: 1, // Fade in the arrow
    scrollTrigger: {
        trigger: "#arrow",
        start: "top center", // Start when the arrow is at the center
        end: "bottom top", // End when the arrow is off the bottom
        scrub: true, // Smooth scrubbing
        markers: true // Optional: for debugging
    },
    duration: 2,
});

// Animate opacity from 0 to 1 on scroll
gsap.fromTo("#arrow", {
    opacity: 0 // Initially hidden
}, {
    opacity: 1, // Fade in the arrow
    scrollTrigger: {
        trigger: "#arrow",
        start: "top center", // Start when the arrow is at the center
        end: "bottom top", // End when the arrow is off the bottom
        scrub: true,
        markers: true // Optional: for debugging
    },
    duration: 1,
});