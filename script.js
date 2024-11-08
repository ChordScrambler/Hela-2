const splitTypes2 = document.querySelectorAll('.landing-page h2');
if (splitTypes2.length > 0) {
    splitTypes2.forEach((chars) => {
        const text2 = new SplitType(chars, { types: 'chars' });

        gsap.from(text2.chars, {
            scrollTrigger: {
                trigger: chars,
                start: 'top 80%',
                end: 'top 0%',
                markers: false,
                toggleActions: 'play play play reverse',
            },
            filter: "blur(3px)",
            y: "2rem",
            stagger: 0.01,
            duration: 1,
            ease: 'power3.out',
        });
    });
}

const splitTypes = document.querySelectorAll('.landing-page h4');
if (splitTypes.length > 0) {
    splitTypes.forEach((chars) => {
        const text = new SplitType(chars, { types: 'chars' });

        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: chars,
                start: 'top 80%',
                end: 'top 0%',
                markers: false,
                toggleActions: 'play play play reverse',
            },
            filter: "blur(3px)",
            y: "2rem",
            stagger: 0.01,
            duration: 1,
            ease: 'power3.out',
        });
    });
}


const splitTypes3 = document.querySelectorAll('.timeline-section h4');
if (splitTypes3.length > 0) {
    splitTypes3.forEach((chars) => {
        const text3 = new SplitType(chars, { types: 'chars' });

        gsap.from(text3.chars, {
            scrollTrigger: {
                trigger: chars,
                start: 'top 80%',
                end: 'top 0%',
                markers: false,
                toggleActions: 'play play play reverse',
            },
            filter: "blur(3px)",
            y: "2rem",
            stagger: 0.01,
            duration: 1,
            ease: 'power3.out',
        });
    });
}

gsap.from(".timeline-section img", {
    scrollTrigger: {
        trigger: chars,
        start: 'top 80%',
        end: 'top 0%',
        markers: false,
        toggleActions: 'play play play reverse',
    },
    filter: "blur(3px)",
    opacity: 0,
    y: "8rem",
    stagger: 0.01,
    duration: 1,
    ease: 'power3.out',
});
