// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic skill chart animation
window.addEventListener('load', () => {
    const skills = {
        'html-skill': 90,
        'css-skill': 85,
        'js-skill': 75
    };

    Object.keys(skills).forEach(skill => {
        const skillElement = document.getElementById(skill);
        setTimeout(() => {
            skillElement.style.width = `${skills[skill]}%`;
        }, 500);
    });
});

// Form submission handling (basic)
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for reaching out!');
});
