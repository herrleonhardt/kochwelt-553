function toggleResponsiveNav() {
  const menu = document.getElementById("responsive-nav");
  menu.classList.toggle("responsive-nav-closed");
}


function sendMail(event){﻿
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/mankkbgb", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./contact-form-sent.html";
    }).catch((error) => {
        console.log(error);
    });
}