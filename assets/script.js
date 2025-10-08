document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Apply the cached theme on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeToggle.textContent = savedTheme === 'dark-mode' ? '☀️' : '🌙';
    }

    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            // Save the new theme to localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark-mode');
                themeToggle.textContent = '☀️'; // Sun icon for dark mode
            } else {
                localStorage.removeItem('theme');
                themeToggle.textContent = '🌙'; // Moon icon for light mode
            }
        });
    }

    // Hamburger menu functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Dynamic project loading
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        fetch('projects.json')
            .then(response => response.json())
            .then(projects => {
                projects.forEach(project => {
                    const projectElement = document.createElement('div');
                    projectElement.classList.add('project');

                    projectElement.innerHTML = `
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
                        <p class="project-links">
                            <a href="${project.live_url}" target="_blank">View Project</a> |
                            <a href="${project.source_url}" target="_blank">Source Code</a>
                        </p>
                    `;
                    projectsContainer.appendChild(projectElement);
                });
            })
            .catch(error => console.error('Error loading projects:', error));
    }

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let isValid = true;

            // Reset previous errors
            document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
            document.querySelectorAll('#contact-form .invalid').forEach(el => el.classList.remove('invalid'));

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            if (name.value.trim() === '') {
                isValid = false;
                showError(name, 'Name is required.');
            }
            if (email.value.trim() === '') {
                isValid = false;
                showError(email, 'Email is required.');
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                isValid = false;
                showError(email, 'Please enter a valid email address.');
            }
            if (message.value.trim() === '') {
                isValid = false;
                showError(message, 'Message is required.');
            }

            const successMessage = document.getElementById('form-success-message');
            if (isValid) {
                // Explicitly clear all error states on success
                [name, email, message].forEach(input => {
                    input.classList.remove('invalid');
                    const formGroup = input.parentElement;
                    const errorElement = formGroup.querySelector('.error-message');
                    errorElement.style.display = 'none';
                });

                successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
                successMessage.style.display = 'block';
                contactForm.reset();
                setTimeout(() => successMessage.style.display = 'none', 5000);
            } else {
                successMessage.style.display = 'none';
            }
        });

        function showError(input, message) {
            const formGroup = input.parentElement;
            const errorElement = formGroup.querySelector('.error-message');
            input.classList.add('invalid');
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    // Dynamic copyright year
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }
});