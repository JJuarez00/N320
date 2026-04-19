// ============================================================
//  animations.js — WaveForm Landing Page
//  Assignment 5: GSAP Animation
//
//  Name:   Joseph Juarez
//  Date:   04/18/2026
// ============================================================


// ============================================================
//  TASK 1 — Hero Section Timeline  (5 points)
//
//  TODO:
//  1. Animate the nav bar first (it starts at opacity: 0):
//     gsap.from('#mainNav', { opacity: 0, y: -20, duration: 0.5 })
//
//  2. Create a timeline:
//     const heroTl = gsap.timeline()
//
//  3. Chain .from() calls on heroTl in this order:
//     a. '#heroEyebrow'  → { opacity:0, y:-20, duration:0.5 }
//     b. '#heroLine1'    → { opacity:0, x:-40, duration:0.6 }
//     c. '#heroLine2'    → { opacity:0, x:40,  duration:0.6 }, position: "-=0.3"
//     d. '#heroSub'      → { opacity:0, y:20,  duration:0.5 }
//     e. '#heroActions'  → { opacity:0, y:20,  duration:0.4 }
//     f. '#heroBadges'   → { opacity:0,        duration:0.4 }
//
//  4. After the timeline, animate float cards with stagger:
//     gsap.from('.float-card', {
//         opacity: 0,
//         y: 60,
//         rotation: -5,
//         duration: 0.7,
//         ease: 'back.out(1.5)',
//         stagger: 0.15
//     })
// ============================================================


// Animate the nav bar sliding down from above
gsap.from('#mainNav', { opacity: 0, y: -20, duration: 0.5 });


// This animation helps reveal the hero timeline in a nice sequence.
const heroTl = gsap.timeline();

heroTl
  .from('#heroEyebrow', { opacity: 0, y: -20, duration: 0.5 })
  .from('#heroLine1',   { opacity: 0, x: -40, duration: 0.6 })
  .from('#heroLine2',   { opacity: 0, x:  40, duration: 0.6 }, '-=0.3') // overlaps with heroLine1
  .from('#heroSub',     { opacity: 0, y:  20, duration: 0.5 })
  .from('#heroActions', { opacity: 0, y:  20, duration: 0.4 })
  .from('#heroBadges',  { opacity: 0,         duration: 0.4 });


// This animation adds a nice staggered reveal to the floating cards.
gsap.from('.float-card', {
  opacity:  0,
  y:        60,
  rotation: -5,
  duration: 0.7,
  ease:     'back.out(1.5)',
  stagger:  0.15
});



























// ============================================================
//  TASK 2 — Stats Counter Animation  (4 points)
//
//  TODO:
//  1. Fade the stats ticker in:
//     gsap.from('#statsTicker', { opacity: 0, y: 30, duration: 0.6 })
//
//  2. Create a counter object:
//     const counters = { users: 0, tracks: 0, artists: 0 }
//
//  3. Animate the counter object:
//     gsap.to(counters, {
//         users:    12400,
//         tracks:   85000,
//         artists:  3200,
//         duration: 2,
//         ease:     'power2.out',
//         onUpdate: function() {
//             // Inside here, update the DOM with current values:
//             document.getElementById('numUsers').textContent
//                 = Math.floor(counters.users).toLocaleString()
//             document.getElementById('numTracks').textContent
//                 = Math.floor(counters.tracks).toLocaleString()
//             document.getElementById('numArtists').textContent
//                 = Math.floor(counters.artists).toLocaleString()
//         }
//     })
//
//  4. Show the funding stat after 0.5s:
//     gsap.delayedCall(0.5, function() {
//         document.getElementById('numFunding').textContent = '$500K'
//     })
// ============================================================


// Fade the entire stats ticker section in
gsap.from('#statsTicker', { opacity: 0, y: 30, duration: 0.6 });


// JS object that GSAP will animate, starts at all zeros
const counters = { users: 0, tracks: 0, artists: 0 };


// animates the object's properties, onUpdate fires every frame
gsap.to(counters, {
  users:    12400,
  tracks:   85000,
  artists:  3200,
  duration: 2,
  ease:     'power2.out',
  onUpdate: function() {
    document.getElementById('numUsers').textContent   = Math.floor(counters.users).toLocaleString();
    document.getElementById('numTracks').textContent  = Math.floor(counters.tracks).toLocaleString();
    document.getElementById('numArtists').textContent = Math.floor(counters.artists).toLocaleString();
  }
});


// Funding stat pops in after a short delay
gsap.delayedCall(0.5, function() {
  document.getElementById('numFunding').textContent = '$500K';
});



































// ============================================================
//  TASK 3 — Features Grid Stagger  (4 points)
//
//  TODO:
//  1. Create a timeline for the section header:
//     const featTl = gsap.timeline()
//     featTl.from('#featuresTitle', { opacity:0, y:30, duration:0.5 })
//           .from('#featuresSub',   { opacity:0, y:20, duration:0.4 }, "-=0.2")
//
//  2. Animate all feature cards with stagger:
//     gsap.from('.feature-card', {
//         opacity: 0,
//         y:       50,
//         scale:   0.95,
//         duration: 0.5,
//         ease:    'power2.out',
//         stagger: { each: 0.1, from: 'start' }
//     })
//
//  3. Add hover animations to each card:
//     document.querySelectorAll('.feature-card').forEach(function(card) {
//         card.addEventListener('mouseenter', function() {
//             gsap.to(card, { y: -6, scale: 1.02, duration: 0.2 })
//         })
//         card.addEventListener('mouseleave', function() {
//             gsap.to(card, { y: 0, scale: 1, duration: 0.2 })
//         })
//     })
// ============================================================




// Timeline for the section header
const featTl = gsap.timeline();
featTl
  .from('#featuresTitle', { opacity: 0, y: 30, duration: 0.5 })
  .from('#featuresSub',   { opacity: 0, y: 20, duration: 0.4 }, '-=0.2');


// All 6 feature cards cascade in with stagger
gsap.from('.feature-card', {
  opacity:  0,
  y:        50,
  scale:    0.95,
  duration: 0.5,
  ease:     'power2.out',
  stagger:  { each: 0.1, from: 'start' }
});


// Hover micro-interactions: each card lifts and grows on mouseenter
document.querySelectorAll('.feature-card').forEach(function(card) {
  card.addEventListener('mouseenter', function() {
    gsap.to(card, { y: -6, scale: 1.02, duration: 0.2 });
  });
  card.addEventListener('mouseleave', function() {
    gsap.to(card, { y: 0, scale: 1, duration: 0.2 });
  });
});







































// ============================================================
//  TASK 4 — Playlist Slide-In  (4 points)
//
//  TODO:
//  1. Animate the section header:
//     const plTl = gsap.timeline()
//     plTl.from('#playlistTitle', { opacity:0, x:-30, duration:0.5 })
//         .from('#playlistSub',   { opacity:0, x:-20, duration:0.4 }, "-=0.2")
//
//  2. Animate all playlist tracks with stagger:
//     gsap.from('.pl-track', {
//         opacity:  0,
//         x:        -60,
//         duration: 0.4,
//         ease:     'power2.out',
//         stagger:  0.12,
//         delay:    0.4
//     })
//
//  3. Add click interactions:
//     const allTracks = document.querySelectorAll('.pl-track')
//     allTracks.forEach(function(track) {
//         track.addEventListener('click', function() {
//             // First clear all tracks
//             gsap.to(allTracks, { backgroundColor: 'transparent', duration: 0.2 })
//             // Then highlight the clicked one
//             gsap.to(track, { backgroundColor: 'rgba(29,185,84,0.15)', duration: 0.2 })
//         })
//     })
// ============================================================


// Timeline for the section header: slides in from the left
const plTl = gsap.timeline();
plTl
  .from('#playlistTitle', { opacity: 0, x: -30, duration: 0.5 })
  .from('#playlistSub',   { opacity: 0, x: -20, duration: 0.4 }, '-=0.2');


// All 5 track rows slide in from the left with stagger
gsap.from('.pl-track', {
  opacity:  0,
  x:        -60,
  duration: 0.4,
  ease:     'power2.out',
  stagger:  0.12,
  delay:    0.4
});


// Click interaction: highlights the clicked track, and clears all others
const allTracks = document.querySelectorAll('.pl-track');
allTracks.forEach(function(track) {
  track.addEventListener('click', function() {
    // Clear every track first
    gsap.to(allTracks, { backgroundColor: 'transparent', duration: 0.2 });
    // Then highlight just the clicked one
    gsap.to(track, { backgroundColor: 'rgba(29,185,84,0.15)', duration: 0.2 });
  });
});





























// ============================================================
//  TASK 5 — Pricing Cards Bounce In + Button Pulse  (3 points)
//
//  TODO:
//  1. Animate the section header with stagger:
//     gsap.from(['#pricingTitle', '#pricingSub'], {
//         opacity:  0,
//         y:        30,
//         duration: 0.5,
//         stagger:  0.15
//     })
//
//  2. Animate the pricing cards with bounce ease:
//     gsap.from('.price-card', {
//         opacity:  0,
//         y:        60,
//         scale:    0.9,
//         duration: 0.6,
//         ease:     'back.out(1.7)',
//         stagger:  0.15
//     })
//
//  3. Add a repeating pulse on the featured CTA button:
//     gsap.to('.price-btn-primary', {
//         scale:    1.05,
//         duration: 0.8,
//         repeat:   -1,
//         yoyo:     true,
//         ease:     'sine.inOut'
//     })
//
//  4. Fade in the footer:
//     gsap.from('#siteFooter', { opacity: 0, y: 20, duration: 0.6 })
// ============================================================

// Section header fades up — title then subtitle with stagger
gsap.from(['#pricingTitle', '#pricingSub'], {
  opacity:  0,
  y:        30,
  duration: 0.5,
  stagger:  0.15
});


// 3 pricing cards bounce in with elastic overshoot ease
gsap.from('.price-card', {
  opacity:  0,
  y:        60,
  scale:    0.9,
  duration: 0.6,
  ease:     'back.out(1.7)',
  stagger:  0.15
});


// Featured CTA button pulses forever: draws the eye to the main offer
gsap.to('.price-btn-primary', {
  scale:    1.05,
  duration: 0.8,
  repeat:   -1,
  yoyo:     true,
  ease:     'sine.inOut'
});


// Fade in footer with a slight upward movement.
gsap.from('#siteFooter', { opacity: 0, y: 20, duration: 0.6 });
