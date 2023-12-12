document.addEventListener("DOMContentLoaded", function () {
    var cookiedata = document.cookie;

    if (cookiedata.indexOf("popupClosed=done") < 0) {
        document.getElementById('stamp_layer').style.display = "block";
    } else {
        document.getElementById('stamp_layer').style.display = "none";
    }
});

function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

function PopupNoDisplay_1() {
    var hideCheckbox = document.getElementById('hideCheckbox');

    if (hideCheckbox.checked) {
        setCookie("popupClosed", "done", 1); // Set the cookie to expire in 1 day
        document.getElementById('stamp_layer').style.display = "none";
    }
}