function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function reviewCycle(array, titleSelector, nameSelector, contentSelector) {
    const title = document.querySelector(titleSelector);
    const name = document.querySelector(nameSelector);
    const content = document.querySelector(contentSelector);

    while (true) {
        for (let i = 0; i < array.length; i += 3) {
            title.innerHTML = array[i];
            name.innerHTML = array[i + 1];
            content.innerHTML = array[i + 2];

            await sleep(3500);
        }
    }
}

setInterval(() => reviewCycle(
    ["수강 과정1", "수강생 이름1", "수강생 후기1<br>수강생 후기2",
     "수강 과정2", "수강생 이름2", "수강생 후기2",
     "수강 과정3", "수강생 이름3", "수강생 후기3"],
    ".reviewBottomTxtBig1",
    ".reviewBottomTxtName1",
    ".reviewBottomTxtSmall1"
), 3500);

setInterval(() => reviewCycle(
    ["수강 과정1", "수강생 이름1", "수강생 후기1",
     "수강 과정2", "수강생 이름2", "수강생 후기2",
     "수강 과정3", "수강생 이름3", "수강생 후기3"],
    ".reviewBottomTxtBig2",
    ".reviewBottomTxtName2",
    ".reviewBottomTxtSmall2"
), 3500);

setInterval(() => reviewCycle(
    ["수강 과정1", "수강생 이름1", "수강생 후기1",
     "수강 과정2", "수강생 이름2", "수강생 후기2",
     "수강 과정3", "수강생 이름3", "수강생 후기3"],
    ".reviewBottomTxtBig3",
    ".reviewBottomTxtName3",
    ".reviewBottomTxtSmall3"
), 3500);