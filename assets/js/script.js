// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Form Submission Tracking
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', () => {
        gtag('event', 'conversion', {
            'send_to': 'AW-XXXXXXXX/YYYYYYYYYYYY',
            'value': 1.0,
            'currency': 'USD'
        });
    });
});