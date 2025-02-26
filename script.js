document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let data = { name, phone, message };

    fetch("https://script.google.com/macros/s/AKfycbwYPzqESaUHotMI8_AU2WZycw9kbg1knt_LU0c4prDDWVffS5Bq6cDxmgT1RFr7dC3P/exec", {  // Replace with your new URL
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "text/plain" }
    })
    .then(response => response.text())
    .then(result => {
        console.log("Server Response:", result);
        document.getElementById("responseMessage").innerText = "✅ Thank you! We'll contact you soon.";
        document.getElementById("contactForm").reset();
    })
    .catch(error => console.error("Fetch Error:", error));
});
