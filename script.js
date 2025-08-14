document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const msg = document.getElementById("formMessage");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const service = document.getElementById("service").value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !service) {
                alert("⚠ Please fill all required fields.");
                return;
            }

            if (!emailPattern.test(email)) {
                alert("⚠ Please enter a valid email address.");
                return;
            }

            // Hide the form
            form.style.display = "none";

            // Personalised thank‑you message in the same page
            msg.innerHTML = `🎉 Thank you <strong>${name}</strong>, your booking for <strong>${service}</strong> has been received!`;
            msg.style.display = "block";

            // Change meta description dynamically
document.querySelector("meta[name='description']").setAttribute(
    "content",
    "90° Tattoo Studio | Ludhiana's Best Tattoos, Cover-up, and Laser Removal by Sandy Sharma."
);

// Change page title
document.title = "90° Tattoo Studio | Best Tattoos in Ludhiana";

// Example: Change Open Graph image
document.querySelector("meta[property='og:image']").setAttribute(
    "content",
    "https://example.com/path-to-your-tattoo-studio-photo.jpg"
);

        });
    }
});
