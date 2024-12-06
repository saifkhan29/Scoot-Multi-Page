gsap.registerPlugin(ScrollTrigger) 
const tl = gsap.timeline();
const homeHeroImg1 = document.querySelectorAll('.home-image-content-1 .content h2, .home-image-content-1 .content p, .home-image-content-1 .content button')
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.features',     // Element that triggers the animation
        start: '10% 20%',                // Start the animation when the top of the element hits the center of the viewport
        scrub: false,                      // Optional: Remove smooth scrubbing if not needed
        once: true,                        // Animation happens only once
        markers: false                      // For debugging, remove in production
    }
});

const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home-image-content-1',     // Element that triggers the animation
        start: '10% 20%',                // Start the animation when the top of the element hits the center of the viewport
        scrub: false,                      // Optional: Remove smooth scrubbing if not needed
        once: true,                        // Animation happens only once
        markers: true                      // For debugging, remove in production
    }
});

// Hero Animation

tl.fromTo('.hero-main-text', {
    opacity: 0,
    y: '5rem'
}, {
    opacity: 1,
    duration: 1,
    ease: "power1.out",
    y: 0
})

tl.fromTo('.hero-yellow-line-1', {
    opacity: 0,
    x: '-100%'
}, {
    duration: 1.5,
    opacity: 1,
    x: '10px',
    ease: 'power2.out'
})

tl.fromTo('.hero-para-anim span', {
    opacity: 0,
    x: '-30px'
}, {
    duration: 4,
    opacity: 1,
    x: '0',
    ease: 'power2.out',
    stagger: {
        amount: 1,  // Total duration for all words to be staggered (adjust as needed)
        from: "start", // This ensures the animation starts from the first word and goes rightwards
        axis: "x",
    }
})

tl.fromTo('.hero-yellow-line-2-main', {
    strokeDasharray: '1000',  // Set a large value to make the path hidden initially
    strokeDashoffset: '1000', // Initially, the path is hidden (offset equals its total length)
    opacity: 0
}, {
    delay: 1,
    strokeDashoffset: 0,     // Animate to 0 to reveal the path
    duration: 3,             // Duration of the animation
    opacity: 1,
}, "+3");

tl.add([
    gsap.fromTo('.hero-yellow-line-2-arrow-1', {
        strokeDasharray: '61',  // Set a large value to make the path hidden initially
        strokeDashoffset: '30.5', // Initially, the path is hidden (offset equals its total length)
        opacity: 0
    }, {
        strokeDashoffset: 0,     // Animate to 0 to reveal the path
        duration: 0.8,             // Duration of the animation
        opacity: 1,
        delay: 1
    }),

    gsap.fromTo('.hero-yellow-line-2-arrow-2', {
        strokeDasharray: '55',  // Set a large value to make the path hidden initially
        strokeDashoffset: '-27.5', // Initially, the path is hidden (offset equals its total length)
        opacity: 0
    }, {
        strokeDashoffset: 0,     // Animate to 0 to reveal the path
        duration: 0.8,           
        opacity: 1,
        delay: 1
    })
], "+4")

tl.fromTo('.hero-btn', {
    opacity: 0,
    y: '5rem'
}, {
    duration: 1,
    y: 0,
    delay: 1.5,
    opacity: 1,
    ease: "power1.out"
}, "+4")

// End of Hero Animation

// Start of Features

tl2.fromTo('.features-card-line', {
    opacity: 0,
    x: '-100%'   // Initial state of the element
}, {
    opacity: 1,    // Final state of opacity
    x: '0%',       // Final position of the element
    duration: 0.8,
})
    
.fromTo('.features-card:nth-of-type(3) .img', {
    opacity: 0,
    x: '-100vw'
}, {
    opacity: 1,
    x: 0,
    duration: 0.6,
    ease: "power1.out"
})
    
.fromTo('.features-card:nth-of-type(2) .img', {
    opacity: 0,
    x: '-100vw'
}, {
    opacity: 1,
    x: 0,
    duration: 0.6,
    ease: "power1.out"
})
    
.fromTo('.features-card:nth-of-type(1) .img', {
    opacity: 0,
    x: '-100vw'
}, {
    opacity: 1,
    x: 0,
    duration: 0.6,
    ease: "power1.out"
})
    
.fromTo('.features-card:nth-of-type(1) .features-card-content', {
    opacity: 0,
    y: '20px'
}, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out"
})
    
.fromTo('.features-card:nth-of-type(2) .features-card-content', {
    opacity: 0,
    y: '20px'
}, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out"
})
    
.fromTo('.features-card:nth-of-type(3) .features-card-content', {
    opacity: 0,
    y: '20px'
}, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out"
})

// End of Features

// Start of Home Image Content 1
homeHeroImg1.forEach((elem, idx) => {
    tl3.fromTo(elem, {
        opacity: 0,
        y: '20px'
    
    }, {
        opacity: 1,
        delay: idx * 0.2,
        y: 0
    })
})

tl3.fromTo('.home-image-content-1 .section .image', {
    opacity: 0,
    y: '10px'

}, {
    opacity: 1,
    duration: 1,
    y: 0,
    ease: "power2.out",
    z: -1
})

tl3.fromTo('.arrowPath', {
    strokeDasharray: '1000',  // Set a large value to make the path hidden initially
    strokeDashoffset: '1000', // Initially, the path is hidden (offset equals its total length)
    opacity: 0
}, {
    strokeDashoffset: 0,     // Animate to 0 to reveal the path
    duration: 2,             // Duration of the animation
    opacity: 1,
    scrollTrigger: {
        trigger: '.arrow-right-image-1',
        start: 'top center',   // Start the animation when the top of the element hits the center of the viewport
        markers: false,         // Display markers for debugging
        scrub: false,            // Smooth scroll-based animation
        once: true
    }
});

tl3.fromTo('.arrowHead-1', {
    strokeDasharray: '56',  // Set a large value to make the path hidden initially
    strokeDashoffset: '-28', // Initially, the path is hidden (offset equals its total length)
    opacity: 0
}, {
    strokeDashoffset: 0,     // Animate to 0 to reveal the path
    duration: 0.5,             // Duration of the animation
    opacity: 1,
    delay: 1,
    scrollTrigger: {
        trigger: '.arrow-right-image-1',
        start: 'top center',   // Start the animation when the top of the element hits the center of the viewport
        markers: false,         // Display markers for debugging
        scrub: false,            // Smooth scroll-based animation
        once: true
    }
});

tl3.fromTo('.arrowHead-2', {
    strokeDasharray: '61',  // Set a large value to make the path hidden initially
    strokeDashoffset: '30.5', // Initially, the path is hidden (offset equals its total length)
    opacity: 0
}, {
    strokeDashoffset: 0,     // Animate to 0 to reveal the path
    duration: 0.5,             // Duration of the animation
    opacity: 1,
    delay: 1,
    scrollTrigger: {
        trigger: '.arrow-right-image-1',
        start: 'top center',   // Start the animation when the top of the element hits the center of the viewport
        markers: false,         // Display markers for debugging
        scrub: false,            // Smooth scroll-based animation
        once: true
    }
});

// End of Home Image Content 1
