let userIdAdd = [];
let userPwAdd = [];

function loginCk(event) {
    event.preventDefault();
    const savedId = localStorage.getItem("Email", userIdAdd);
    const savedPw = localStorage.getItem("Pw", userPwAdd);
    const parseId = JSON.parse(savedId);
    const parsePw = JSON.parse(savedPw);
    userIdAdd = parseId;
    userPwAdd = parsePw;

    const userId = document.getElementById("LoginInputMail").value;
    const userPw = document.getElementById("LoginInputPw").value;

    for (let i = 0; i < userIdAdd.length; i++) {
        if (userIdAdd[i] !== userId || userPwAdd[i] !== userPw) {
            alert("제대로 입력하세요");
        } else {
            alert("로그인 성공");
            return;
        }
    }

    alert("가입 정보가 없습니다.");
}

function Add(event) {
    event.preventDefault();
    console.log("실행")
    const SignUpId = document.getElementById("SignUpInputMail");
    const SignUpPw = document.getElementById("SignUpInputPW");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(SignUpId.value) || SignUpPw.value.length < 6) {
        alert("양식을 지켜 입력해주세요");
    } else {
        userIdAdd.push(SignUpId.value);
        userPwAdd.push(SignUpPw.value);
        saveIdPw();
        console.log(userIdAdd, userPwAdd)
        alert("가입 성공");
        window.close();

    }
}
function saveIdPw() {
    localStorage.setItem("Email", JSON.stringify(userIdAdd));
    localStorage.setItem("Pw", JSON.stringify(userPwAdd));
}


document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginCk");
    const signUpForm = document.getElementById("signCk");

    console.log("DOMContentLoaded event fired"); // 확인을 위한 로그 추가

    if (loginForm) {
        loginForm.addEventListener("submit", loginCk);
    }

    if (signUpForm) {
        signUpForm.addEventListener("submit", Add);
    }
});
