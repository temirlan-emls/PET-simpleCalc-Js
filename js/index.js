const calcDisplay = document.querySelector(".calcDisplay");
const calcButtons = document.querySelectorAll(".nums");
const calcLogicButtons = document.querySelectorAll(".logic");
const calcEqualToButton = document.querySelector(".buttonEqualTo");
const removeButton = document.querySelector(".remove");
const clearButton = document.querySelector(".clear");
const inProgress = document.querySelector(".inProgress");
const addFloatButton = document.querySelector(".addFloat");
const addPlusMinusButton = document.querySelector(".addPlusMinus");
let firstNums = "";
let secondNums = "";
let fistOrSecond = "first";
let logicButton = "";

const numsClickHandler = (e) => {
    if (fistOrSecond === "first") {
        firstNums += e.target.innerText;
        calcDisplay.innerHTML = `<p>${firstNums}</p>`;
    } else if (fistOrSecond === "second") {
        secondNums += e.target.innerText;
        calcDisplay.innerHTML = `<p>${secondNums}</p>`;
    }
};
const logicClickHandler = (e) => {
    calcLogicButtons.forEach((logic) => {
        logic.classList.remove("active");
        if (logic === e.target) {
            logic.classList.add("active");
            logicButton = logic.innerText;
        }
        if (logic.classList.contains("active")) {
            fistOrSecond = "second";
        }
    });
};
const removeActive = (e) => {
    calcLogicButtons.forEach((logic) => {
        logic.classList.remove("active");
    });
};
const equalToClickHandler = (e) => {
    let finalNum1 = parseFloat(firstNums);
    let finalNum2 = parseFloat(secondNums);
    if (logicButton === "+") {
        calcDisplay.innerHTML = `<p>${finalNum1 + finalNum2}</p>`;
        firstNums = `${finalNum1 + finalNum2}`;
        secondNums = "";
        removeActive();
    }
    if (logicButton === "-") {
        calcDisplay.innerHTML = `<p>${finalNum1 - finalNum2}</p>`;
        firstNums = `${finalNum1 - finalNum2}`;
        secondNums = "";
        removeActive();
    }
    if (logicButton === "×") {
        calcDisplay.innerHTML = `<p>${finalNum1 * finalNum2}</p>`;
        firstNums = `${finalNum1 * finalNum2}`;
        secondNums = "";
        removeActive();
    }
    if (logicButton === "÷") {
        calcDisplay.innerHTML = `<p>${finalNum1 / finalNum2}</p>`;
        firstNums = `${finalNum1 / finalNum2}`;
        secondNums = "";
        removeActive();
    }
};
const removeClickHandler = (e) => {
    if (fistOrSecond === "first") {
        if (firstNums.length === 1 || firstNums.length === 0) {
            calcDisplay.innerHTML = `<p>${0}</p>`;
        } else {
            firstNums = firstNums.slice(0, -1);
            calcDisplay.innerHTML = `<p>${firstNums}</p>`;
        }
    } else if (fistOrSecond === "second") {
        if (secondNums.length === 1 || secondNums.length === 0) {
            calcDisplay.innerHTML = `<p>${0}</p>`;
        } else {
            secondNums = secondNums.slice(0, -1);
            calcDisplay.innerHTML = `<p>${secondNums}</p>`;
        }
    }
};
const clearClickHandler = () => {
    firstNums = "";
    secondNums = "";
    fistOrSecond = "first";
    logicButton = "";
    calcDisplay.innerHTML = `<p>${0}</p>`;
};
const inProgressClickHandler = (e) => {
    calcDisplay.innerHTML = `<p>%-in progress</p>`;
};
const addFloatClickHandler = (e) => {
    if (fistOrSecond === "first") {
        if (firstNums.length === 1 || firstNums.length === 0) {
            calcDisplay.innerHTML = `<p>${0}</p>`;
        } else {
            firstNums += ".";
            calcDisplay.innerHTML = `<p>${firstNums}</p>`;
        }
    } else if (fistOrSecond === "second") {
        if (secondNums.length === 1 || secondNums.length === 0) {
            calcDisplay.innerHTML = `<p>${0}</p>`;
        } else {
            secondNums += ".";
            calcDisplay.innerHTML = `<p>${secondNums}</p>`;
        }
    }
};
const addPlusMinusClickHandler = (e) => {
    if (fistOrSecond === "first") {
        if (firstNums.length === 0 || calcDisplay.innerText === 0) {
            calcDisplay.innerHTML = `<p>${0}</p>`;
        } else if (firstNums[0] === "-") {
            firstNums = firstNums.substring(1);
        } else {
            firstNums = "-" + firstNums;
            calcDisplay.innerHTML = `<p>${firstNums}</p>`;
        }
    } else if (fistOrSecond === "second") {
        if (secondNums.length === 0 || calcDisplay.innerText === 0) {
            calcDisplay.innerHTML = `<p>${0}</p>`;
        } else if (secondNums[0] === "-") {
            secondNums = secondNums.substring(1);
        } else {
            secondNums = "-" + secondNums;
            calcDisplay.innerHTML = `<p>${secondNums}</p>`;
        }
    }
};

calcButtons.forEach((num) => {
    num.addEventListener("click", (e) => numsClickHandler(e));
});
calcLogicButtons.forEach((logic) => {
    logic.addEventListener("click", (e) => logicClickHandler(e));
});
calcEqualToButton.addEventListener("click", (e) => equalToClickHandler(e));
removeButton.addEventListener("click", (e) => removeClickHandler(e));
clearButton.addEventListener("click", (e) => clearClickHandler(e));
inProgress.addEventListener("click", () => inProgressClickHandler());
addFloatButton.addEventListener("click", (e) => addFloatClickHandler(e));
addPlusMinusButton.addEventListener("click", (e) =>
    addPlusMinusClickHandler(e)
);
