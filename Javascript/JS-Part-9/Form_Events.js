let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from redirecting
    alert("Form submitted"); // Show the alert popup
    console.log("Form submitted"); // Log the form submission to the console
});
 