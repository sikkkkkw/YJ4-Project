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

//스크롤 수강후기 제목 변경
document.addEventListener('scroll', () => {
  let image = document.getElementById('reviewTitle');

  if (window.scrollY > 950) {
    image.style.top = '10px';
    image.style.opacity = '1';
  } else {
    image.style.top = '30px';
    image.style.opacity = '0.5';
  }
});

//스크롤 온라인 상담 제목 변경
document.addEventListener('scroll', () => {
  let image = document.getElementById('onlineTitle');

  if (window.scrollY > 2100) {
    image.style.top = '8px';
    image.style.opacity = '1';
  } else {
    image.style.top = '30px';
    image.style.opacity = '0.5';
  }
});


//스크롤 협약업체 제목 변경
document.addEventListener('scroll', () => {
  let image = document.getElementById('partyTitle');

  if (window.scrollY > 2600) {
    image.style.top = '15px';
    image.style.opacity = '1';
  } else {
    image.style.top = '50px';
    image.style.opacity = '0.5';
  }
});