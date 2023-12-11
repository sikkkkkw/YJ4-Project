function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function review() {
    const array = ["수강 과정1", "수강생 이름1", "수강생 후기1<br>수강생 후기2",
                    "수강 과정2", "수강생 이름2", "수강생 후기2",
                    "수강 과정3", "수강생 이름3", "수강생 후기3"];
    const title = document.querySelector(".reviewBottomTxtBig1");
    const name = document.querySelector(".reviewBottomTxtName1");
    const content = document.querySelector(".reviewBottomTxtSmall1");
   
    while(true) {
        for(let i = 0; i < array.length; i++) {
            await sleep(2000);
            if(i%3 === 0 || i === 0) {
                title.innerHTML = array[i];
                name.innerHTML = array[i+1];
                content.innerHTML = array[i+2];
            }
        }
    }
}
async function review2() {
    const array = ["수강 과정1", "수강생 이름1", "수강생 후기1",
                    "수강 과정2", "수강생 이름2", "수강생 후기2",
                    "수강 과정3", "수강생 이름3", "수강생 후기3"];
    const title = document.querySelector(".reviewBottomTxtBig2");
    const name = document.querySelector(".reviewBottomTxtName2");
    const content = document.querySelector(".reviewBottomTxtSmall2");
   
    while(true) {
        for(let i = 0; i < array.length; i++) {
            await sleep(2000);
            if(i%3 === 0 || i === 0) {
                title.innerHTML = array[i];
                name.innerHTML = array[i+1];
                content.innerHTML = array[i+2];
            }
        }
    }
}
async function review3() {
    const array = ["수강 과정1", "수강생 이름1", "수강생 후기1",
                    "수강 과정2", "수강생 이름2", "수강생 후기2",
                    "수강 과정3", "수강생 이름3", "수강생 후기3"];
    const title = document.querySelector(".reviewBottomTxtBig3");
    const name = document.querySelector(".reviewBottomTxtName3");
    const content = document.querySelector(".reviewBottomTxtSmall3");
   
    while(true) {
        for(let i = 0; i < array.length; i++) {
            await sleep(2000);
            if(i%3 === 0 || i === 0) {
                title.innerHTML = array[i];
                name.innerHTML = array[i+1];
                content.innerHTML = array[i+2];
            }
        }
    }
}

setInterval(review(),2000)
setInterval(review2(),2000)
setInterval(review3(),2000)