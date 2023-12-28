const btnGo1 = document.querySelector("#btnGo1");
const btnGo2 = document.querySelector("#btnGo2");
const btnGo3 = document.querySelector("#btnGo3");
const missionId = localStorage.getItem("missionId");

// 서버에 업데이트 전에 REDIRCT_URI 클라우드타입 호스팅 주소로 변경
// const REDIRECT_URI = "http://localhost:3000";
const REDIRECT_URI =
  "https://port-0-landing-iwon-backend-by52fb24lbbufx8n.gksl2.cloudtype.app";
const REACT = "https://lustrous-dieffenbachia-0e5fd9.netlify.app";
// const REACT = "http://localhost:5173";

// btnGo1.addEventListener("click", () => {
//   window.open(
//     "http://www.yjjob.or.kr/p/?j=2&sm_lev=1&rPath=VmtWb2FrOVdRbEpRVkRBOStN&yjevent=true",
//     "_blank"
//   );
// });
// 아이캔 애플리케이션
btnGo2.addEventListener("click", () => {
  // alert(REDIRECT_URI);
  window.open(
    `https://kauth.kakao.com/oauth/authorize?client_id=49765fcbcf0fe5bc094eb6ec9b643b8f&redirect_uri=${REDIRECT_URI}/api/v1/users/social/kakao/register&response_type=code`,
    "_self"
  );
});

btnGo3.addEventListener("click", () => {
  if (!missionId) {
    alert("카카오채널 추가 미션을 먼저 수행하셔야 합니다.");
    window.location.href =
      "https://sikkkkkw.github.io/YJ4-Project/eventpage.html";
  }
  ndow.open(`${REACT}?id=${missionId}`, "_self");
});

const url = new URL(window.location.href);
const param = new URLSearchParams(url.search);
const id = param.get("id");

if (missionId !== null) {
  fetch(`${REDIRECT_URI}/api/v1/users/login/success`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: missionId }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.ok === true) {
        const circleTxt2 = document.querySelector("#circleTxt2");
        circleTxt2.innerText = "미션완료";
      }
    });
} else {
  console.log("missionId 없음");
}

fetch(`${REDIRECT_URI}/api/v1/users/instaUrl?id=${missionId}`)
  .then((res) => res.json())
  .then((data) => {
    if (data?.user?.instaUrl !== "") {
      const circleTxt3 = document.querySelector("#circleTxt3");
      circleTxt3.innerText = "미션완료";
    }
  });

fetch(`${REDIRECT_URI}/api/v1/users/login/success`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ id }),
})
  .then((res) => res.json())
  .then((data) => {
    if (data.ok === true) {
      const circleTxt2 = document.querySelector("#circleTxt2");
      circleTxt2.innerText = "미션완료";
      localStorage.setItem("missionId", id);
    }
  });
