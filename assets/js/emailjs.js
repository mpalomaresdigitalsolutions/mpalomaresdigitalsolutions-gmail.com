// emailjs.js

// Wait until the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Send the form using EmailJS with your provided service and template IDs
        emailjs.sendForm('service_menami7', 'template_l1tl3wg', this)
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            formMessage.style.display = 'block';
            formMessage.style.color = 'green';
            formMessage.textContent = 'Message sent successfully!';
            contactForm.reset();
          }, function(error) {
            console.log('FAILED...', error);
            formMessage.style.display = 'block';
            formMessage.style.color = 'red';
            formMessage.textContent = 'Failed to send message. Please try again later.';
          });
      });
    }
  });
  