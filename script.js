document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const msg = document.getElementById("formMessage");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Stop default submit

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

            msg.style.display = "block";

            const url = new URL("page1.html", window.location.origin);
            url.searchParams.append("user", name);
            url.searchParams.append("service", service);

            // Safety check if page1.html exists
            fetch(url.pathname, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        setTimeout(() => {
                            window.location.href = url.toString();
                        }, 1000);
                    } else {
                        alert("❌ page1.html file not found on the server.");
                    }
                })
                .catch(() => {
                    alert("⚠ Unable to connect to the server to load page1.html.");
                });
        });
    }
});
