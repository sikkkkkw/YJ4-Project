//스크롤 수강후기 제목 변경
document.addEventListener('scroll', () => {
  let image = document.querySelector('#reviewTitle');

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
  let image = document.querySelector('#onlineTitle');

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
  let image = document.querySelector('#partyTitle');

  if (window.scrollY > 2700) {
    image.style.top = '15px';
    image.style.opacity = '1';
  } else {
    image.style.top = '50px';
    image.style.opacity = '0.5';
  }
});

//스크롤 배경1
document.addEventListener('scroll', () => {
  let lfBlue = document.querySelector('#lfBlue');
  let lfSky = document.querySelector('#lfSky');
  let rgBlue = document.querySelector('#rgBlue');
  let rgSky = document.querySelector('#rgSky');

  lfBlue.style.left = window.scrollY > 350 ? '-250px' : '-400px';
  lfSky.style.left = window.scrollY > 350 ? '-360px' : '-400px';
  rgBlue.style.right = window.scrollY > 750 ? '-90px' : '-140px';
  rgSky.style.right = window.scrollY > 750 ? '-170px' : '-220px';
});

document.addEventListener('scroll', () => {
  let lfBlue = document.querySelector('#lfBlue2');
  let lfSky = document.querySelector('#lfSky2');
  let rgBlue = document.querySelector('#rgBlue2');
  let rgSky = document.querySelector('#rgSky2');

  lfBlue.style.left = window.scrollY > 2100 ? '-300px' : '-400px';
  lfSky.style.left = window.scrollY > 2100 ? '-200px' : '-400px';
  rgBlue.style.right = window.scrollY > 2400 ? '-100px' : '-140px';
  rgSky.style.right = window.scrollY > 2400 ? '-200px' : '-220px';
});