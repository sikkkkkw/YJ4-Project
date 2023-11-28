// document.querySelector("#ptest1").addEventListener("click", function() {
//     test1();
// });

// document.getElementById('Box').onclick = function() {
//     test1();
// }

// function test1() {
//     let url = "asd.html";
//     let options ="width = 600, height = 400, ,menubar = no, toolbar = no, location = no, status = no, scrollbar = no";
//     window.open( url, "", options);
// }

function openPop() {
    document.getElementById('popup_layer').style.display="block";
}

function closePop() {
    document.getElementById('popup_layer').style.display="none";
}

function openPop2() {
    document.getElementById('popup_layer2').style.display="block";
}

function closePop2() {
    document.getElementById('popup_layer2').style.display="none";
}

function stampPopOpen() {
    document.getElementById("stamp_layer").style.display="block";
    document.getElementById("overlay").style.display="block";
}

function stampPopClose() {
    document.getElementById("stamp_layer").style.display="none";
    document.getElementById("overlay").style.display="none";
}

document.addEventListener("DOMContentLoaded", function(){
    let pop = document.getElementById("stamp_layer");
    pop.style.display = "block";
})