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
    ["경영회계", "박** 수료생", "열정 넘치는 선생님 덕분에 자격증도 많이 따고 새로운 회계/세무라는 분야로 취업 도전하여 성공하게 되어 너무 기쁩니다~!!^^",
     "디자인/패션", "최** 수료생", "선생님이 너무 훌륭하셔서 학습이 막힘없이 진행될 뿐만아니라 앞으로 진로에 대해서도 많은 이야기들과 길을 제시해주셔서 자신감을 얻을 수 있었습니다.",
     "용접/건축", "김** 수료생", "이 수업을 듣게되어 행운이라 생각합니다. 전공과 전혀 다른 분야였음에도 어려움 없이 수업을 따라갈 수 있었습니다. "],
    ".reviewBottomTxtBig1",
    ".reviewBottomTxtName1",
    ".reviewBottomTxtSmall1"
), 3500);

setInterval(() => reviewCycle(
    ["조경/가구", "최** 수료생", "5개월동안 수업 들으며 성장할 수 있는 시간이었습니다 너무 자세하게 착하신 선생님께서 알려주셔서 많은걸 배울수 있었습니다. 감사합니다 :)",
     "기계/전기", "김** 수료생", "강사님의 열정을 느낄 수 있는 강의였습니다. 기초부터 차근차근 가르쳐주시고, 질문에도 친절하게 답변해주셨습니다. 감사합니다.",
     "IT&middotSW", "한** 수료생", "정말 필요했던 수업이었어요. 영진직업전문학교 덕분에 좋은 곳에 취직할 수 있을 것 같습니다."],
    ".reviewBottomTxtBig2",
    ".reviewBottomTxtName2",
    ".reviewBottomTxtSmall2"
), 3500);

setInterval(() => reviewCycle(
    ["IT&middotSW", "권** 수료생", "포트폴리오 퀄리티가 높게 나올 수 있어서 좋았습니다! 선생님이 하라고 한 대로만 했는데, 노베이스에서 취업까지 성공했습니다. 감사합니다!",
    "경영회계", "이** 수료생", "단순히 합격을 위한 공부가 아니라 실무에 적용할 수 있도록 개념을 정리해주셔서 많은 도움이 되었습니다.",
     "디자인/패션", "윤** 수료생", "수업 분위기도 편했고, 모르는 문제가 생기면 선생님께서 차근차근 알려주셔서 잘 따라 갈 수 있었습니다. 만족스럽고 유익한 과정이었어요."],
    ".reviewBottomTxtBig3",
    ".reviewBottomTxtName3",
    ".reviewBottomTxtSmall3"
), 3500);