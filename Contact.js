document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    emailjs.sendForm(
        "adinath4356@gmail.com",
        "template_4rs5vzk",
        this
    ).then(
        function () {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        },
        function (error) {
            alert("Failed to send message. Try again!");
            console.error(error);
        }
    );
});

window.addEventListener("load", () => {
    document.querySelectorAll(".animate").forEach(el => {
      el.classList.add("show");
    });
  });
