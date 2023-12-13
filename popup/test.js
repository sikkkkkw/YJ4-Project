document.addEventListener("DOMContentLoaded", function () {
    // 쿠키가 "done"으로 설정되어 있는지 확인 (사용자가 하루 동안 팝업을 닫았는지 여부)
    if (getCookie("popupClosed") !== "done") {
      // 설정되어 있지 않다면 팝업 표시
      let pop = document.getElementById("stamp_layer");
      pop.style.display = "block";
    }
  });
  
  function PopupNoDisplay_1() {
    var hideCheckbox = document.getElementById('hideCheckbox');
  
    if (hideCheckbox.checked) {
      setCookie("popupClosed", "done", 1); // 쿠키를 1일 동안 "done"으로 설정
      stampPopClose(); // 수정: 팝업을 닫는 함수 호출
    }
  }
  
  function stampPopClose() {
    document.getElementById("stamp_layer").style.display = "none";
  }
  
  // 쿠키 이름에 해당하는 쿠키 값을 가져오는 함수
  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }
  
  function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setTime(todayDate.getTime() + (expiredays * 60 * 1000)); // 1일로 설정
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toUTCString() + ";";
  }
  
  function pageOpen() {
    let url = "eventpage.html";
    window.open(url, "_blank", "");
  }
  