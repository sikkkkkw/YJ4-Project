// script.js

// 스크롤 위치 체크 함수
function checkScrollPosition() {
    var gotoTopButton = document.getElementById('goto-top');

    if (window.scrollY > 20 || document.documentElement.scrollTop > 20) {
        gotoTopButton.style.display = 'block';
    } else {
        gotoTopButton.style.display = 'none';
    }
}

// 초기에 한 번 호출
checkScrollPosition();

// Top 버튼을 클릭했을 때의 동작
function scrollToTop() {
    var currentPosition = window.scrollY || document.documentElement.scrollTop;
    var targetPosition = 0;
    var duration = 500; // 조절 가능한 값 (밀리초 단위)

    var startTime = null;

    function animateScroll(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }

        var progress = timestamp - startTime;
        var easeInOutQuad = progress => progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        var scrollTo = currentPosition + (targetPosition - currentPosition) * easeInOutQuad(progress / duration);

        window.scrollTo(0, scrollTo);

        if (progress < duration) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
}

// 스크롤 이벤트에 따라 스크롤 위치 체크
window.onscroll = checkScrollPosition;
