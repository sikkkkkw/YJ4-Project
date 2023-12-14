function formCheck(event) {
  const name = document.getElementById("userName");
  const phone = document.getElementById("userPhone");
  const job = document.querySelector('input[type=radio][name="Ask"]:checked');
  const ckbx = document.querySelector("input[type=checkbox]:checked");

  //숫자인지 확인하기위해 문자로 받은 번호를 숫자로 변환
  let phonevalue = parseInt(phone.value);

  //새로고침 방지
  event.preventDefault();

  //원하는 값이 들어오는지 체크
  //이름 체크
  if (
    name.value === null ||
    typeof name.value !== "string" ||
    name.value.length > 3 ||
    /\d/.test(name.value)
  ) {
    alert("False Name");
  }
  //번호 체크
  else if (
    phonevalue.toString().length < 10 ||
    phone.value === null ||
    isNaN(phonevalue)
  ) {
    alert("False Number");
  }
  //라디오 버튼 선택여부 체크
  else if (!job) {
    alert("False Job");
  }
  //개인정보 수집여부 선택여부 체크
  else if (!ckbx) {
    alert("False Ckbx");
  }
  //이름,전화번호,라디오 버튼,수집여부가 조건에 맞다면 데이터 변환
  else {
    // console.log("받아온 데이터 : " + name.value);
    // console.log("받아온 데이터 : " + phone.value);
    // console.log("받아온 데이터 : " + job.value);

    // let info = {
    //   name: name.value,
    //   phone: phone.value,
    //   job: job.value,
    // };

    // let infojson = JSON.stringify(info);
    // console.log(typeof(infojson))
    // console.log("변환한 데이터" + infojson);
    //제출 버튼 클릭후 값 초기화
    // name.value = " ";
    // phone.value = " ";
    // job.checked = false;
    // ckbx.checked = false;
    //임시(서버로 값을 넘기지 않음)
    // return false;
    const cloudUrl =
      "https://port-0-landing-iwon-backend-by52fb24lbbufx8n.gksl2.cloudtype.app";
    const localUrl = "http://localhost:3000";

    fetch(`${cloudUrl}/api/v1/consulting/write-yj`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        type: "영진직업전문학교 송암전",
        name: name.value,
        // email,
        tel: phone.value,
        category: job.value,
        // message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.ok === true) {
          alert("성공");
        }
      });
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", formCheck);
