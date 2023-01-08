"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    comfirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

const register = () => {
    if(!id.value) {
        return alert("ID를 입력해주세요.");
    }

    if(psword.value !== comfirmPsword.value) {
        return alert("비밀번호가 일치하지 않습니다.");
    }

    const req = {
        id: id.value,
        psword: psword.value,
        name: name.value,
    };

    fetch("/register", {
        method: "POST",
        headers : {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    }).then((res)=> res.json())
      .then((res)=> {
        if(res.success){
            location.href = "/login";
        } else {
            alert(res.msg);
        }        
    }).catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    })
}

registerBtn.addEventListener("click", register);