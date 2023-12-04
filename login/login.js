// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlT5OIfOyOOQGDA36uGDklZc4GvLYkArc",
  authDomain: "easylogin-a7dd7.firebaseapp.com",
  projectId: "easylogin-a7dd7",
  storageBucket: "easylogin-a7dd7.appspot.com",
  messagingSenderId: "235391155162",
  appId: "1:235391155162:web:d704e31fcb3774953e1ee3",
  measurementId: "G-PY835B2ZYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const auth = getAuth();

document.querySelector('#SignUpSubBtn').addEventListener('click', (event) => {
  event.preventDefault()
  const email1 = document.querySelector('#SignUpInputMail').value
  const password1 = document.querySelector('#SignUpInputPW').value

  createUserWithEmailAndPassword(auth, email1, password1)
    .then((userCredential) => {
      alert('가입이 완료되었습니다.')
      location.reload()
      const user = userCredential.user;
    })
    .catch((error) => {
      alert('에러 발생. 비밀번호는 최소 6자리입니다.')
      location.reload()
      const errorCode = error.code;
      const errorMessage = error.message;
    });
})

document.querySelector('#LogInSubBtn').addEventListener('click', (event) => {
  event.preventDefault()
  const email2 = document.querySelector('#LoginInputMail').value
  const password2 = document.querySelector('#LoginInputPw').value

  signInWithEmailAndPassword(auth, email2, password2)
  .then((userCredential) => {
    alert('로그인이 완료되었습니다.')
    location.reload()
    const user = userCredential.user;
  })
  .catch((error) => {
    alert('로그인 실패')
    location.reload()
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})



