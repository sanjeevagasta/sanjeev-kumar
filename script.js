function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

function showMessage() {
    alert("Message Sent Successfully!");
}