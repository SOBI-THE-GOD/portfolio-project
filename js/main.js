const $ = document;
const welcomeMessageCont = $.querySelector(".welcome-message");
const mainCont = $.querySelector(".main-container");
let changingMainGradFirstTimeOut = "";
let changingMainGradSecondTimeOut = "";
let changingMainGradThirdTimeOut = "";
let changingMainGradFourthTimeOut = "";
const colorGradsArr = [
    { grad1: "#D4145A", grad2: "#FBB03B" },
    { grad1: "rgb(72,70,203)", grad2: "rgb(101,157,102)" },
    { grad1: "#009245", grad2: "#FCEE21" },
    { grad1: "#662D8C", grad2: "#ED1E79" },
    { grad1: "#C6EA8D", grad2: "#FE90AF" },
    { grad1: "#EA8D8D", grad2: "#A890FE" },
    { grad1: "#D8B5FF", grad2: "#1EAE98" },
    { grad1: "#4E65FF", grad2: "#92EFFD" },
    { grad1: "#A9F1DF", grad2: "#FFBBBB" },
    { grad1: "#C33764", grad2: "#1D2671" },
    { grad1: "#93A5CF", grad2: "#E4EfE9" },
    { grad1: "#FFECD2", grad2: "#FCB69F" },
    { grad1: "#764BA2", grad2: "#667EEA" },
    { grad1: "#EEBD89", grad2: "#D13ABD" },
    { grad1: "#9600FF", grad2: "#AEBAF8" },
    { grad1: "#F6EA41", grad2: "#F148C7" },
    { grad1: "#0DCDA4", grad2: "#C2FCD4" },
    { grad1: "#A4C9E3", grad2: "#9618F6" },
];
const kLogo = $.querySelector(".k-logo");
const subTitlesArr = Array.from($.querySelectorAll(".sub-titles"));
const innerCont = $.querySelector(".outer-container");
const subTitlesCont = $.querySelector(".sub-titles-container");
let isProjectDetailOpen = false;
let isKnowledgePageUp = false;
let projectsDetailShowCaseTimeOut = "";
let lastprojectDetailElemCalled = "";
let lastTranslateYDesired = "";
let addEventListenerTimeOut = "";
window.onload = () => {
    setRandomPageGrad();
    setTimeout(() => {
        mainCont.style.opacity = "1";
    }, 100);
    let currentIndex = 0;
    let welcomeAnmInterval = setInterval(() => {
        Array.from(welcomeMessageCont.children[currentIndex].children).forEach(
            (elem, index) => {
                if (elem.innerHTML === " ") {
                    elem.style.width = ".4ch";
                }
                elem.style.animation = `fromBottomTextAnm ${
                    0.5 + index * 0.1
                }s ease-in-out forwards`;
                if (currentIndex !== welcomeMessageCont.children.length - 1) {
                    setTimeout(() => {
                        elem.style.animation = `toTopTextAnm ${
                            0.5 + index * 0.1
                        }s ease-in-out forwards`;
                    }, 2000);
                }
            }
        );
        if (currentIndex === welcomeMessageCont.children.length - 1) {
            clearInterval(welcomeAnmInterval);
        }
        currentIndex++;
    }, 2000);
    $.querySelector(".static-footer").innerHTML = `
        <i class="fa-regular fa-copyright"></i>
        <span>Created by SOBI</span>`;
    validator();
};
// event listeners
innerCont.addEventListener("mouseover", innerContOverHandler);
subTitlesCont.addEventListener("mouseover", subTitlesContOverHandler);
innerCont.addEventListener("mouseout", innerContOverOutHandler);
subTitlesCont.addEventListener("mouseout", subTitlesContOverOutHandler);
kLogo.addEventListener("click", kLogoClickHandler);
subTitlesArr.forEach((elem) => {
    elem.addEventListener("mouseover", subTitlesMousOver);
    elem.addEventListener("click", subTitlesClickHandler);
    elem.addEventListener("mouseout", subTitlesMousOut);
});
$.querySelector(".fa-chevron-down").addEventListener(
    "click",
    downIconClickHandler
);
$.querySelector(".fa-chevron-up").addEventListener("click", upIconClickHandler);
// functions :
function innerContOverHandler() {
    changeOpacityToZeroByClass("second-top-left");
    changeOpacityToZeroByClass("second-bottom-right");
}
function innerContOverOutHandler() {
    changeOpacityToOneByClass("second-top-left");
    changeOpacityToOneByClass("second-bottom-right");
}
function subTitlesContOverHandler() {
    changeOpacityToZeroByClass("second-sub-titles-grad");
}
function subTitlesContOverOutHandler() {
    changeOpacityToOneByClass("second-sub-titles-grad");
}
function subTitlesMousOver(e) {
    e.target.querySelector(".sub-title-second-grad").style.opacity = "0";
}
function subTitlesMousOut(e) {
    e.target.querySelector(".sub-title-second-grad").style.opacity = "1";
}
function upIconClickHandler() {
    isKnowledgePageUp = false;
    $.querySelector(".intro").style.cssText = ` opacity: 1;
    transform: translateY(0rem);`;
    $.querySelector(".knowledge").style.cssText = ` opacity: 0;
    transform: translateY(15rem);`;
}
function downIconClickHandler() {
    isKnowledgePageUp = true;
    let knowledgeTransferedTop =
        $.querySelector(".knowledge").offsetTop -
        $.querySelector(".intro").offsetTop +
        +getComputedStyle($.querySelector(".icon-container")).height.slice(
            0,
            -2
        );
    $.querySelector(".intro").style.cssText = ` opacity: 0;
    transform: translateY(-15rem);`;
    $.querySelector(".knowledge").style.cssText = ` opacity: 1;
    transform: translateY(-${knowledgeTransferedTop / 10}rem);`;
}
function changeOpacityToZeroByClass(classId) {
    $.querySelector(`.${classId}`).style.opacity = "0";
}
function changeOpacityToOneByClass(classId) {
    $.querySelector(`.${classId}`).style.opacity = "1";
}
function getRandomNumFromZeroToDesire(desiredNum) {
    return Math.floor(Math.random() * desiredNum);
}
function setRandomPageGrad() {
    let gradColorsIndex = getRandomNumFromZeroToDesire(
        colorGradsArr.length - 1
    );
    $.documentElement.style.setProperty(
        "--grad-1",
        colorGradsArr[gradColorsIndex].grad1
    );
    $.documentElement.style.setProperty(
        "--grad-2",
        colorGradsArr[gradColorsIndex].grad2
    );
}
function kLogoClickHandler() {
    changeGradSmoothly();
    if (isKnowledgePageUp) {
        console.log(isKnowledgePageUp);
        upIconClickHandler();
    } else {
        $.querySelector(".intro").style.cssText =
            "transform: translateY(0rem) scaleX(1); opacity: 1;";
        isKnowledgePageUp = false;
        lastprojectDetailElemCalled.style.cssText = `transform: translateY(-${
            lastTranslateYDesired / 10
        }rem) scaleX(0);
            opacity: 0;`;
        isProjectDetailOpen = false;
    }
}
function changeGradSmoothly() {
    let colorGradIndex = getRandomNumFromZeroToDesire(colorGradsArr.length - 1);
    innerCont.removeEventListener("mouseover", innerContOverHandler);
    subTitlesCont.removeEventListener("mouseover", subTitlesContOverHandler);
    innerCont.removeEventListener("mouseout", innerContOverOutHandler);
    subTitlesCont.removeEventListener("mouseout", subTitlesContOverOutHandler);
    clearTimeout(addEventListenerTimeOut);
    addEventListenerTimeOut = setTimeout(() => {
        innerCont.addEventListener("mouseover", innerContOverHandler);
        subTitlesCont.addEventListener("mouseover", subTitlesContOverHandler);
        innerCont.addEventListener("mouseout", innerContOverOutHandler);
        subTitlesCont.addEventListener("mouseout", subTitlesContOverOutHandler);
    }, 300);
    clearTimeout(changingMainGradFirstTimeOut);
    clearTimeout(changingMainGradSecondTimeOut);
    clearTimeout(changingMainGradThirdTimeOut);
    clearTimeout(changingMainGradFourthTimeOut);
    if (
        getComputedStyle($.querySelector(".second-bottom-right")).opacity ===
        "0"
    ) {
        // seconds
        $.querySelector(
            ".second-bottom-right"
        ).style.background = `linear-gradient(135deg,${colorGradsArr[colorGradIndex].grad1} 0%,${colorGradsArr[colorGradIndex].grad2} 50%,${colorGradsArr[colorGradIndex].grad1} 100%)`;
        changeOpacityToOneByClass("second-bottom-right");
        $.querySelector(
            ".second-top-left"
        ).style.background = `linear-gradient(315deg,${colorGradsArr[colorGradIndex].grad1} 0%,${colorGradsArr[colorGradIndex].grad2} 50%,${colorGradsArr[colorGradIndex].grad1} 100%)`;
        changeOpacityToOneByClass("second-top-left");
        Array.from($.querySelectorAll(".details-second-side-grad")).forEach(
            (elem) => {
                elem.style.background = `linear-gradient(0deg,${colorGradsArr[colorGradIndex].grad1} 0%,${colorGradsArr[colorGradIndex].grad2} 100%)`;
                elem.style.opacity = "1";
            }
        );

        // firsts
        changingMainGradFirstTimeOut = setTimeout(() => {
            $.querySelector(
                ".first-top-left"
            ).style.background = `linear-gradient(315deg,${colorGradsArr[colorGradIndex].grad2} 0%,${colorGradsArr[colorGradIndex].grad1} 50%,${colorGradsArr[colorGradIndex].grad2} 100%)`;
            $.querySelector(
                ".first-bottom-right"
            ).style.background = `linear-gradient(135deg,${colorGradsArr[colorGradIndex].grad2} 0%,${colorGradsArr[colorGradIndex].grad1} 50%,${colorGradsArr[colorGradIndex].grad2} 100%)`;
            Array.from($.querySelectorAll(".details-first-side-grad")).forEach(
                (elem) => {
                    elem.style.background = `linear-gradient(0deg,${colorGradsArr[colorGradIndex].grad2} 0%,${colorGradsArr[colorGradIndex].grad1} 100%)`;
                }
            );
        }, 300);
    } else {
        // seconds
        $.querySelector(
            ".first-bottom-right"
        ).style.background = `linear-gradient(135deg,${colorGradsArr[colorGradIndex].grad2} 0%,${colorGradsArr[colorGradIndex].grad1} 50%,${colorGradsArr[colorGradIndex].grad2} 100%)`;
        changeOpacityToZeroByClass("second-bottom-right");
        $.querySelector(
            ".first-top-left"
        ).style.background = `linear-gradient(315deg,${colorGradsArr[colorGradIndex].grad2} 0%,${colorGradsArr[colorGradIndex].grad1} 50%,${colorGradsArr[colorGradIndex].grad2} 100%)`;
        changeOpacityToZeroByClass("second-top-left");
        Array.from($.querySelectorAll(".details-first-side-grad")).forEach(
            (elem) => {
                elem.style.background = `linear-gradient(0deg,${colorGradsArr[colorGradIndex].grad2} 0%,${colorGradsArr[colorGradIndex].grad1} 100%)`;
            }
        );
        Array.from($.querySelectorAll(".details-second-side-grad")).forEach(
            (elem) => {
                elem.style.opacity = "0";
            }
        );

        // firsts
        changingMainGradSecondTimeOut = setTimeout(() => {
            $.querySelector(
                ".second-top-left"
            ).style.background = `linear-gradient(315deg,${colorGradsArr[colorGradIndex].grad1} 0%,${colorGradsArr[colorGradIndex].grad2} 50%,${colorGradsArr[colorGradIndex].grad1} 100%)`;
            $.querySelector(
                ".second-bottom-right"
            ).style.background = `linear-gradient(135deg,${colorGradsArr[colorGradIndex].grad1} 0%,${colorGradsArr[colorGradIndex].grad2} 50%,${colorGradsArr[colorGradIndex].grad1} 100%)`;
            Array.from($.querySelectorAll(".details-second-side-grad")).forEach(
                (elem) => {
                    elem.style.background = `linear-gradient(0deg,${colorGradsArr[colorGradIndex].grad1} 0%,${colorGradsArr[colorGradIndex].grad2} 100%)`;
                }
            );
        }, 300);
    }
    // titles

    if (
        getComputedStyle($.querySelector(".second-sub-titles-grad")).opacity ===
        "0"
    ) {
        $.querySelector(
            ".second-sub-titles-grad"
        ).style.background = `linear-gradient(135deg,${colorGradsArr[colorGradIndex].grad2} 0%,${colorGradsArr[colorGradIndex].grad1} 50%,${colorGradsArr[colorGradIndex].grad2} 100%)`;
        changeOpacityToOneByClass("second-sub-titles-grad");
        Array.from($.querySelectorAll(".sub-title-second-grad")).forEach(
            (elem) => {
                elem.style.opacity = "1";
            }
        );
        Array.from($.querySelectorAll(".sub-title-second-grad")).forEach(
            (elem) => {
                elem.style.background = `linear-gradient(270deg,${colorGradsArr[colorGradIndex].grad1} 0%,${colorGradsArr[colorGradIndex].grad2} 100%)`;
            }
        );
        changingMainGradThirdTimeOut = setTimeout(() => {
            $.querySelector(
                ".first-sub-titles-grad"
            ).style.background = `linear-gradient(135deg,${colorGradsArr[colorGradIndex].grad1} 0%,${colorGradsArr[colorGradIndex].grad2} 50%,${colorGradsArr[colorGradIndex].grad1} 100%)`;
            Array.from($.querySelectorAll(".sub-title-first-grad")).forEach(
                (elem) => {
                    elem.style.background = `linear-gradient(270deg,${colorGradsArr[colorGradIndex].grad2} 0%,${colorGradsArr[colorGradIndex].grad1} 100%)`;
                }
            );
        }, 300);
    } else {
        $.querySelector(
            ".first-sub-titles-grad"
        ).style.background = `linear-gradient(135deg,${colorGradsArr[colorGradIndex].grad1} 0%,${colorGradsArr[colorGradIndex].grad2} 50%,${colorGradsArr[colorGradIndex].grad1} 100%)`;
        changeOpacityToZeroByClass("second-sub-titles-grad");
        Array.from($.querySelectorAll(".sub-title-second-grad")).forEach(
            (elem) => {
                elem.style.opacity = "0";
            }
        );
        Array.from($.querySelectorAll(".sub-title-first-grad")).forEach(
            (elem) => {
                elem.style.background = `linear-gradient(270deg,${colorGradsArr[colorGradIndex].grad2} 0%,${colorGradsArr[colorGradIndex].grad1} 100%)`;
            }
        );
        changingMainGradThirdTimeOut = setTimeout(() => {
            $.querySelector(
                ".second-sub-titles-grad"
            ).style.background = `linear-gradient(135deg,${colorGradsArr[colorGradIndex].grad2} 0%,${colorGradsArr[colorGradIndex].grad1} 50%,${colorGradsArr[colorGradIndex].grad2} 100%)`;
            Array.from($.querySelectorAll(".sub-title-second-grad")).forEach(
                (elem) => {
                    elem.style.background = `linear-gradient(270deg,${colorGradsArr[colorGradIndex].grad1} 0%,${colorGradsArr[colorGradIndex].grad2} 100%)`;
                }
            );
        }, 300);
    }
    // titles
    changingMainGradFourthTimeOut = setTimeout(() => {
        $.documentElement.style.setProperty(
            "--grad-1",
            colorGradsArr[colorGradIndex].grad1
        );
        $.documentElement.style.setProperty(
            "--grad-2",
            colorGradsArr[colorGradIndex].grad2
        );
    }, 300);
}
function subTitlesClickHandler() {
    let projectDetailElemCalled = Array.from(
        $.querySelectorAll(".projects")
    ).find((elem) => {
        return elem.dataset.pName === this.dataset.pName;
    });
    let translateYDesired =
        projectDetailElemCalled.offsetTop - $.querySelector(".intro").offsetTop;
    clearTimeout(projectsDetailShowCaseTimeOut);
    changeGradSmoothly();
    if (isProjectDetailOpen) {
        if (projectDetailElemCalled !== lastprojectDetailElemCalled) {
            lastprojectDetailElemCalled.style.cssText = `transform: translateY(-${
                lastTranslateYDesired / 10
            }rem) scaleX(0);
            opacity: 0;`;
            projectDetailElemCalled.style.cssText = `transform: translateY(-${
                translateYDesired / 10
            }rem) scaleX(1);
            opacity: 1;`;
        } else {
            isProjectDetailOpen = false;
            $.querySelector(".intro").style.cssText =
                "transform: translateY(0rem) scaleX(1); opacity: 1;";
            projectDetailElemCalled.style.cssText = `transform: translateY(-${
                translateYDesired / 10
            }rem) scaleX(0);
            opacity: 0;`;
        }
    } else {
        isProjectDetailOpen = true;
        if (isKnowledgePageUp) {
            upIconClickHandler();
            projectsDetailShowCaseTimeOut = setTimeout(() => {
                $.querySelector(".intro").style.cssText =
                    "transform: translateY(0rem) scaleX(0); opacity: 0;";
                projectDetailElemCalled.style.cssText = `transform: translateY(-${
                    translateYDesired / 10
                }rem) scaleX(1);
                opacity: 1;`;
            }, 500);
        } else {
            $.querySelector(".intro").style.cssText =
                "transform: translateY(0rem) scaleX(0); opacity: 0;";
            projectDetailElemCalled.style.cssText = `transform: translateY(-${
                translateYDesired / 10
            }rem) scaleX(1);
            opacity: 1;`;
        }
    }
    lastTranslateYDesired = translateYDesired;
    lastprojectDetailElemCalled = projectDetailElemCalled;
}
function validator() {
    if (
        !$.querySelector(".static-footer").querySelector("span") ||
        $.querySelector(".static-footer").querySelector("span").innerHTML === ""
    ) {
        $.querySelector(".main-container").innerHTML = "";
    }
}
