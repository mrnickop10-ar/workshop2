// ======== MENU TOGGLE ======== //
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    // Toggle visibility via CSS class
    navLinks.classList.toggle('open');

    // Update button icon + accessibility
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.innerHTML = isExpanded ? '✕' : '☰';
}

// Add menu button listener
menuButton.addEventListener('click', toggleMenu);

// Close menu when any nav link is clicked (mobile UX improvement)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            toggleMenu();
        }
    });
});


// ======== CONTACT FORM VALIDATION ======== //
const contactForm = document.getElementById('contact-form-id');
const messageDiv = document.getElementById('form-message');


if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission and page refresh

    // Show simple message
    alert('Message delivered! Thank you for contacting me.');

    // Optionally, reset form fields
    contactForm.reset();
  });
}

