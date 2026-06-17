
window.onload = function () {
alert("Welcome to The Love Trust website 💛 Helping communities through education.");
};

<button id="topBtn" onclick="scrollToTop()">⬆ Top</button>

let topButton = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    }); 
}

function thankUser() {
    alert("Thank you for supporting The Love Trust 💛");
}

document.getElementById("contactForm")
    .addEventListener("submit", function(event){

    event.preventDefault();

    // Clear previous errors
    document.querySelectorAll(".error").forEach(
        error => error.textContent = ""
    );

    let fullName =
        document.getElementById("fullname").value.trim();

    let email =
        document.getElementById("email").value.trim();

    let phone =
        document.getElementById("phone").value.trim();

    let messageType =
        document.getElementById("messageType").value;

    let message =
        document.getElementById("message").value.trim();

    let status =
        document.getElementById("statusMessage");

    status.textContent = "";

    let valid = true;

    // Name validation
    if(fullName === ""){
        document.getElementById("nameError").textContent =
        "Please enter your full name.";
        valid = false;
    }

    // Phone validation
    let phonePattern = /^[0-9]{10,15}$/;

    if(!phonePattern.test(phone)){
        document.getElementById("phoneError").textContent =
        "Phone number must contain 10 to 15 digits.";
        valid = false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        document.getElementById("emailError").textContent =
        "Please enter a valid email address.";
        valid = false;
    }

    // Message validation
    if(message.length < 10){
        document.getElementById("messageError").textContent =
        "Message must be at least 10 characters.";
        valid = false;
    }

    // Message type validation
    if(messageType === ""){
        document.getElementById("messageTypeError").textContent =
        "Please select a message type.";
        valid = false;
    }

    if(!valid){
        status.textContent =
        "Please correct the errors above.";

        status.style.color = "red";
        return;
    }

    // Create email
    let recipient = "info@lovetrust.co.za";

    let subject = encodeURIComponent(
        "Website Contact Form - " + messageType
    );

    let body = encodeURIComponent(
        "NEW WEBSITE ENQUIRY\n\n" +
        "Full Name: " + fullName + "\n" +
        "Email Address: " + email + "\n" +
        "Phone Number: " + phone + "\n" +
        "Message Type: " + messageType + "\n\n" +
        "Message:\n" + message
    );

    let mailtoLink =
        "mailto:" + recipient +
        "?subject=" + subject +
        "&body=" + body;

    status.textContent =
    "Opening your email application...";

    status.style.color =
    "brown";

    document.getElementById("contactForm").reset();

    alert(
        "Thank you for contacting The Love Trust. Your email will now open and you will be redirected to the Thank You page."
    );

    window.location.href = mailtoLink;

    (function () {
        window.location.href = "thankyou.html";
    }, 5000);
    });

document.getElementById("enquiryForm").addEventListener("submit", function(event) {
        event.preventDefault(); // stop page reload

            // Get correct values
            let name = document.getElementById("fullname").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();
            let interest = document.getElementById("interest").value;

            let response = "";

            // Clear old errors (optional improvement)
            document.getElementById("nameError").innerText = "";
            document.getElementById("emailError").innerText = "";
            document.getElementById("messageError").innerText = "";
            document.getElementById("interestError").innerText = "";

            let valid = true;

            // NAME validation
            if (name.length < 10 || name.length > 40) {
                document.getElementById("nameError").innerText =
                    "Name must be between 10 and 40 characters.";
                valid = false;
            }

            // EMAIL validation (basic regex)
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                 document.getElementById("emailError").innerText =
                    "Enter a valid email address.";
                valid = false;
            }

            // MESSAGE validation
            if (message.length < 10 || message.length > 50) {
                document.getElementById("messageError").innerText =
                    "Message must be 10–50 characters.";
                valid = false;
            }

            // INTEREST validation
            if (interest === "") {
                document.getElementById("interestError").innerText =
                    "Please select an option.";
                valid = false;
            }

            // If invalid, stop
            if (!valid) return;

            // Processing logic
            switch (interest) {

                case "services":
                    response = "Thank you " + name + ". Our services include education and training programmes.";
                    break;

                case "volunteer":
                    response = "Thank you " + name + ". Volunteer applications are open. We will contact you soon.";
                    break;

                case "sponsor":
                    response = "Thank you " + name + ". Sponsorship starts from R500/month.";
                    break;

                default:
                    response = "Invalid selection.";
            }

             // Show response
            let box = document.getElementById("responseBox");
            box.style.display = "block";
            box.innerHTML = response;
        });
document.querySelector("form").addEventListener("submit", function(event){

    let name = document.getElementById("fullname").value;

    if(name.length < 3){
        alert("Please enter a valid name.");
        event.preventDefault();
    }

});

lightbox.option({
    'resizeDuration' : 200,     //Image resizing animation takes 0.2 seconds
    'wrapAround' : true,        //Last image links back to the first image
    'fadeDuration' : 300        //Fade taks o.3 seconds
})