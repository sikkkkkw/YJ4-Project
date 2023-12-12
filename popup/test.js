document.addEventListener("DOMContentLoaded", function(){
    // 1분(60,000밀리초) 후에 팝업을 띄우기 위해 setTimeout 사용
    setTimeout(function() {
        let pop = document.getElementById("stamp_layer");
        pop.style.display = "block";
    }, 60000); // 1분 후에 실행
});

// 나머지 코드는 그대로 유지

document.getElementById('open').onclick = function() {
    stampPopOpen();
}

function openPop() {
    document.getElementById('popup_layer').style.display = "block";
}

function closePop() {
    document.getElementById('popup_layer').style.display = "none";
}

function openPop2() {
    document.getElementById('popup_layer2').style.display = "block";
}

function closePop2() {
    document.getElementById('popup_layer2').style.display = "none";
}

function stampPopOpen() {
    document.getElementById("stamp_layer").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function stampPopClose() {
    document.getElementById("stamp_layer").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

document.getElementById('eventpage').onclick = function() {
    pageOpen();
}

function pageOpen() {
    let url = "eventpage.html";
    window.open(url, "_blank","     " )
}

function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setTime(todayDate.getTime() + (expiredays * 60 * 1000)); // 1분으로 설정
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toUTCString() + ";";
}

function PopupNoDisplay_1() {
    var hideCheckbox = document.getElementById('hideCheckbox');

    if (hideCheckbox.checked) {
        setCookie("popupClosed", "done", 1); // 1분 후에 쿠키 만료
        document.getElementById('stamp_layer').style.display = "none";
    }
}
