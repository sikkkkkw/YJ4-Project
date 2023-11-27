// 스크롤 배경색상 변경
// window.addEventListener("scroll", () => {
//     if (window.scrollY > 550) {
//         document.body.style.backgroundColor = "rgb(102,178,255)";
//         document.body.style.color = "white";
//     } else {
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//     }
// });

// 스크롤 후기 동영상 테두리
document.addEventListener('scroll', () => {
  let image = document.getElementById('videoBack');

  if (window.scrollY > 900) {
    image.style.transform = 'scale(0.93)';
  } else {
    let size = 1 - window.scrollY * 0.0001;
    image.style.transform = `scale(${size})`
  }
});

//스크롤 수강후기 제목 변경
document.addEventListener('scroll', () => {
  let image = document.getElementById('reviewTitle');

  if (window.scrollY > 990) {
    image.style.top = '1650px';
    image.style.opacity = '1';
  } else {
    image.style.top = '1600px';
    image.style.opacity = '0.5';
  }
});

//스크롤 협약업체 제목 변경
document.addEventListener('scroll', () => {
  let image = document.getElementById('partyTitle');

  if (window.scrollY > 1450) {
    image.style.top = '2370px';
    image.style.opacity = '1';
  } else {
    image.style.top = '2320px';
    image.style.opacity = '0.5';
  }
});

//스크롤 온라인 상담 제목 변경
document.addEventListener('scroll', () => {
  let image = document.getElementById('onlineTitle');

  if (window.scrollY > 2100) {
    image.style.top = '2850px';
    image.style.opacity = '1';
  } else {
    image.style.top = '2800px';
    image.style.opacity = '0.5';
  }
});