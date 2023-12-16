const btnGo1 = document.querySelector("#btnGo1");
const btnGo2 = document.querySelector("#btnGo2");
const btnGo3 = document.querySelector("#btnGo3");

// 서버에 업데이트 전에 REDIRCT_URI 클라우드타입 호스팅 주소로 변경
const REDIRECT_URI =
  "https://port-0-landing-iwon-backend-by52fb24lbbufx8n.gksl2.cloudtype.app";
// const REDIRECT_URI = "http://localhost:3000";

btnGo1.addEventListener("click", () => {
  window.open(
    "http://www.yjjob.or.kr/p/?j=2&sm_lev=1&rPath=VmtWb2FrOVdRbEpRVkRBOStN&yjevent=true",
    "_blank"
  );
});
btnGo2.addEventListener("click", () => {
  window.open(
    `https://kauth.kakao.com/oauth/authorize?client_id=49765fcbcf0fe5bc094eb6ec9b643b8f&redirect_uri=${REDIRECT_URI}/api/v1/users/social/kakao/register&response_type=code`,
    "_blank"
  );
});
btnGo3.addEventListener("click", () => {
  window.open("https://lustrous-dieffenbachia-0e5fd9.netlify.app", "_blank");
});
