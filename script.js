"use strict";

const hero = document.querySelector(".hero");
const p = document.querySelectorAll(".extra");
console.log(p);

hero.addEventListener("hover", function () {
    p.forEach(function (e) {
        e.classList.remove("hidden");
    });
});
