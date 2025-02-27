const menuIcon = document.getElementById('menuIcon');
const nav = document.getElementById('nav');
const links = document.querySelectorAll('#link');

function toggleMenuIcon() {
    menuIcon.classList.toggle("change");
    nav.classList.toggle('visible');
}

menuIcon.addEventListener('click', toggleMenuIcon);
links.forEach((item) => {
    item.addEventListener('click', toggleMenuIcon);
});

document.getElementById("contact-container").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        event.preventDefault();
    }
});