// 스크롤 후기 동영상 테두리
// document.addEventListener('scroll', () => {
//   let image = document.getElementById('videoBack');

//   if (window.scrollY > 900) {
//     image.style.transform = 'scale(0.93)';
//   } else {
//     let size = 1 - window.scrollY * 0.0001;
//     image.style.transform = `scale(${size})`
//   }
// });

// 스크롤 후기 동영상 그림자
// document.addEventListener('scroll', () => {
//   let image = document.getElementById('videoBack');

//   if(window.scrollY > 500) {
//     image.style.opacity = '1';
//   } else {
//     image.style.opacity = '0.5';
//   }
// })


//스크롤 수강후기 제목 변경
document.addEventListener('scroll', () => {
  let image = document.getElementById('reviewTitle');

  if (window.scrollY > 1090) {
    image.style.top = '1750px';
    image.style.opacity = '1';
  } else {
    image.style.top = '1800px';
    image.style.opacity = '0.5';
  }
});

//스크롤 협약업체 제목 변경
document.addEventListener('scroll', () => {
  let image = document.getElementById('partyTitle');

  if (window.scrollY > 1550) {
    image.style.top = '2530px';
    image.style.opacity = '1';
  } else {
    image.style.top = '2580px';
    image.style.opacity = '0.5';
  }
});

//스크롤 온라인 상담 제목 변경
document.addEventListener('scroll', () => {
  let image = document.getElementById('onlineTitle');

  if (window.scrollY > 2000) {
    image.style.top = '2850px';
    image.style.opacity = '1';
  } else {
    image.style.top = '2900px';
    image.style.opacity = '0.5';
  }
});