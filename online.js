document.getElementById("form").onsubmit = function() {
    event.preventDefault();
    const name = document.getElementById("userName");
    const phone = document.getElementById("userPhone");
    const job = document.querySelector('input[type=radio][name="Ask"]:checked');
    

    console.log("받아온 데이터 : " + name.value);
    console.log("받아온 데이터 : " + phone.value)
    console.log("받아온 데이터 : " + job.value);

    let info = {
        name : name.value,
        phone : phone.value,
        job : job.value
    }

    let infojson = JSON.stringify(info);
    console.log(typeof(infojson))
    console.log("변환한 데이터" + infojson);
    return false;
}

