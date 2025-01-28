// script.js

// Initialize Email.js
emailjs.init("your_user_id"); // Replace with your Email.js User ID

// Handle form submission
document.getElementById("appointmentForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const message = document.getElementById("message").value;

  // Create an object for Email.js
  const templateParams = {
    name,
    email,
    phone,
    date,
    time,
    message,
  };

  // Send email using Email.js
  emailjs
    .send("service_lgtfz2h", "template_60p9mcj", templateParams) 
    .then(
      function (response) {
        document.getElementById("responseMessage").classList.remove("hidden");
        document.getElementById("responseMessage").textContent =
          "Appointment successfully booked!";
        document.getElementById("responseMessage").style.color = "green";
        document.getElementById("appointmentForm").reset();
      },
      function (error) {
        document.getElementById("responseMessage").classList.remove("hidden");
        document.getElementById("responseMessage").textContent =
          "Failed to book appointment. Please try again.";
        document.getElementById("responseMessage").style.color = "red";
        console.error("Email.js error:", error);
      }
    );
});
