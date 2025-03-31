// Typewriter effect for role
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleElement = document.getElementById('role');
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetweenRoles = 1500;



// Start the typewriter effect
setTimeout(typeWriter, 1000);

// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add hover effect to interactive elements
const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
    });
});

// Scroll Progress Indicator
const progressBar = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});

// Canvas Background Animation
const canvas = document.getElementById('hero-canvas');
if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    // Create particles for canvas background
    const particles = [];
    const particleCount = Math.floor(window.innerWidth / 10);

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5,
            color: `rgba(136, 211, 206, ${Math.random() * 0.5 + 0.1})`
        });
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            
            // Update position
            p.x += p.speedX;
            p.y += p.speedY;
            
            // Wrap around screen
            if (p.x > canvas.width) p.x = 0;
            if (p.x < 0) p.x = canvas.width;
            if (p.y > canvas.height) p.y = 0;
            if (p.y < 0) p.y = canvas.height;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            
            // Connect particles
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(136, 211, 206, ${1 - distance / 100})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
}

// Enhanced Scroll Animations
function scrollAnimation() {
    const elements = document.querySelectorAll('[data-scroll]');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementPosition < windowHeight - elementVisible) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
}

window.addEventListener('scroll', scrollAnimation);
window.addEventListener('load', scrollAnimation);

// 3D Tilt Effect
document.querySelectorAll('.tilt-element').forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        el.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Magnetic card effect
document.querySelectorAll('.magnetic-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Scroll to top button
const scrollTopBtn = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Floating Elements
function createFloatingElements() {
    const shapes = ['circle', 'square', 'triangle'];
    const colors = ['rgba(110, 69, 226, 0.3)', 'rgba(136, 211, 206, 0.3)', 'rgba(255, 255, 255, 0.2)'];
    
    for (let i = 0; i < 10; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        
        const size = Math.random() * 50 + 20;
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.background = color;
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.animationDuration = `${duration}s`;
        element.style.animationDelay = `${delay}s`;
        
        if (shape === 'circle') {
            element.style.borderRadius = '50%';
        } else if (shape === 'triangle') {
            element.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
            element.style.background = 'none';
            element.style.borderLeft = `${size/2}px solid transparent`;
            element.style.borderRight = `${size/2}px solid transparent`;
            element.style.borderBottom = `${size}px solid ${color}`;
            element.style.width = '0';
            element.style.height = '0';
        }
        
        document.body.appendChild(element);
    }
}

createFloatingElements();

// Enhanced Star Particles with Movement
const particlesContainer = document.getElementById('particles-js');
const particleCount = 150;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size classes
    const sizes = ['small', 'medium', 'large'];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    particle.classList.add(size);
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random animation properties
    const duration = Math.random() * 10 + 5; // 5-15 seconds
    const delay = Math.random() * 5; // 0-5 seconds delay
    const twinkleSpeed = Math.random() * 3 + 2; // 2-5 seconds
    
    // Apply animations
    particle.style.animation = `
        float ${duration}s ease-in-out infinite ${delay}s,
        twinkle ${twinkleSpeed}s ease-in-out infinite ${delay}s
    `;
    
    // Occasionally add colored stars (10% chance)
    if (Math.random() > 0.9) {
        const colors = ['#6e45e2', '#88d3ce', '#ff9a9e', '#fad0c4'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;
    }
    
    particlesContainer.appendChild(particle);
}

// Create shooting stars occasionally
function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting-star');
    
    // Random position
    shootingStar.style.left = `${Math.random() * 20}%`;
    shootingStar.style.top = `${Math.random() * 20}%`;
    
    // Random size
    const size = Math.random() * 2 + 1;
    shootingStar.style.width = `${size}px`;
    shootingStar.style.height = `${size}px`;
    
    particlesContainer.appendChild(shootingStar);
    
    // Remove after animation completes
    setTimeout(() => {
        shootingStar.remove();
    }, 3000);
}

// Create shooting stars at random intervals
setInterval(createShootingStar, 3000);

// Add this to your existing JavaScript to handle certification card interactions
// Add this to your existing JavaScript to handle certification card interactions
document.querySelectorAll('.certification-card').forEach(card => {
    // Add click effect
    card.addEventListener('click', function() {
        this.style.transform = 'translateY(-5px) scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'translateY(-10px)';
        }, 200);
    });

    // Add glow effect on hover
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 15px 30px rgba(110, 69, 226, 0.4)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
    });
});

// Add smooth scrolling to certification links
document.querySelectorAll('.view-certificate').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // In a real implementation, this would open the certificate
        // For demo purposes, we'll show an alert
        const certName = this.closest('.certification-card').querySelector('h3').textContent;
        alert(`This would normally open the ${certName} certificate in a new window.`);
        
        // Animation for feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Remove conflicting classes and add manual flip

document.querySelectorAll('.exp-card').forEach(card => {
    // Completely remove problematic attributes
    card.classList.remove('tilt-element');
    card.removeAttribute('data-scroll');
    
    // Force reset all transforms
    card.style.transform = '';
    card.style.transition = '';
    
    // Add manual flip with 3D preservation
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'rotateY(180deg)';
        card.style.webkitTransform = 'rotateY(180deg)'; // Safari fix
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg)';
        card.style.webkitTransform = 'rotateY(0deg)'; // Safari fix
    });
});


// Enhanced skills hover effect
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mousemove', (e) => {
        const rect = skill.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        skill.style.setProperty('--mouse-x', `${x}px`);
        skill.style.setProperty('--mouse-y', `${y}px`);
        
        // Dynamic glow position
        const icon = skill.querySelector('.skill-icon');
        const glowX = (x / rect.width) * 100;
        const glowY = (y / rect.height) * 100;
        icon.style.transformOrigin = `${glowX}% ${glowY}%`;
    });
    
    // Reset on mouse leave
    skill.addEventListener('mouseleave', () => {
        const icon = skill.querySelector('.skill-icon');
        icon.style.transform = 'scale(1)';
        icon.style.transformOrigin = 'center';
    });
});

// Timeline Animation
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Call this when timeline is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateTimeline();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

const timeline = document.querySelector('.education-timeline');
if (timeline) {
    observer.observe(timeline);
}

// Floating Tech Icons Animation
function animateTechIcons() {
    const icons = document.querySelectorAll('.floating-icons i');
    
    icons.forEach((icon, index) => {
        // Randomize initial positions slightly
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        // Animate each icon with different timing
        icon.animate(
            [
                { transform: `translate(${randomX}px, ${randomY}px) rotate(0deg)`, opacity: 0.7 },
                { transform: `translate(${randomX + 10}px, ${randomY - 30}px) rotate(180deg)`, opacity: 1 },
                { transform: `translate(${randomX}px, ${randomY}px) rotate(360deg)`, opacity: 0.7 }
            ],
            {
                duration: 15000 + Math.random() * 10000,
                iterations: Infinity,
                delay: index * 2000
            }
        );
    });
}

// Initialize when about section is in view
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateTechIcons();
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

const aboutSection = document.getElementById('about');
if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

const texts = [
    "Python Developer",
    "Data Analyst",
    "AI Enthusiast",
    "Web Designer"
];
let speed = 100;
const textElement = document.querySelector(".typewriter-text"); // Fixed selector (was textElements)
let textIndex = 0;
let characterIndex = 0; // Fixed typo (was charcterIndex)

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    }
    else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }
    else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Start the typewriter effect
window.onload = function() {
    setTimeout(typeWriter, 1000); // Added slight initial delay
};

// Smooth download animation
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      // Add click animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
      
      // Optional: Track downloads
      console.log('Resume downloaded');
      // You could add analytics here
    });
  });