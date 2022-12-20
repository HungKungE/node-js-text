"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

const login = () => {
    const req = {
        id: id.value,
        psword: psword.value,
    };

    console.log(req);
}

loginBtn.addEventListener("click", login);

console.log(id);
console.log("hello");