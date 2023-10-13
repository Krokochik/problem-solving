String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

const towersIn = document.querySelector("#towers__in");
const towersBtn = document.querySelector("#towers__btn");
const towersOut = document.querySelector("#towers__out");
let towersInput;
towersBtn.addEventListener("click", () => {
    let iterate = true;
    (towersInput = towersIn.value.trim().split(" ")).forEach(e => {
        if (iterate) {
            if (isNaN(Number.parseInt(e))) {
                towersIn.value = "";
                towersIn.setCustomValidity("Invalid field.");
                towersInput = undefined;
                iterate = false;
            } else {
                towersIn.setCustomValidity("");
            }
        }
    });

    // task solution
    let towers = new Map();
    towersInput.forEach(block => {
        if (towers.has(block)) {
            towers.set(block, towers.get(block) + 1);
        } else towers.set(block, 1);
    });

    towersOut.innerHTML =
        `<h3 class="task__subtitle">Вывод программы</h3>
         <span>Макс. высота: ${Math.max(...towers.values())}</span>
         <span>Кол-во башен: ${towers.size}</span><br>`
});

const ufoIn = document.querySelector("#ufo__in");
const ufoBtn = document.querySelector("#ufo__btn");
const ufoOut = document.querySelector("#ufo__out");
let ufoInput;

ufoBtn.addEventListener("click", () => {
    let iterate = true;
    (ufoInput = ufoIn.value.trim().split(" ")).forEach(e => {
        if (iterate) {
            if (isNaN(Number.parseInt(e))) {
                ufoIn.value = "";
                ufoIn.setCustomValidity("Invalid field.");
                ufoInput = undefined;
                iterate = false;
            } else {
                ufoIn.setCustomValidity("");
            }
        }
    });

    // task solution
    const maxWeight = Math.max(...ufoInput);
    const minWeight = Math.min(...ufoInput);

    ufoOut.innerHTML =
        `<h3 class="task__subtitle">Вывод программы</h3>
         <span>Макс. масса: ${maxWeight}</span>
         <span>Мин. масса: ${minWeight}</span><br>`
});

const numIn = document.querySelector("#num__in");
const numBtn = document.querySelector("#num__btn");
const numOut = document.querySelector("#num__out");
let numInput;

numBtn.addEventListener("click", () => {

    if (!Number.parseInt(numIn.value)) {
        numIn.value = "";
        numIn.setCustomValidity("Invalid field.");
        return;
    } else {
        numInput = numIn.value;
        numIn.setCustomValidity("");
    }

    // task solution
    let solve = () => {
        for (let i = 0; i < numInput.length; i++) {
            for (let j = 9; j > Number.parseInt(numInput[i]); j--) {
                let temp = numInput;
                temp = temp.replaceAt(i, j.toString())
                if (Number.parseInt(temp) % 3 === 0) {
                    return temp;
                }
            }
        }
        return numInput;
    }

    numOut.innerHTML =
        `<h3 class="task__subtitle">Вывод программы</h3>
         <span>Ответ: ${solve()}</span><br>`
});

const suicideIn = document.querySelector("#suicide__in");
const suicideBtn = document.querySelector("#suicide__btn");
const suicideOut = document.querySelector("#suicide__out");
let suicideInput;

suicideBtn.addEventListener("click", () => {

    let badInput = true;
    suicideInput = suicideIn.value.split(" ");
    for (let i = 0; i < suicideInput.length; i++) {
        suicideInput[i] = Number.parseInt(suicideInput[i]);
        if ((badInput = !suicideInput[i])) break;
    }

    if (suicideIn.value.split(" ").length !== 2 || badInput) {
        suicideIn.value = "";
        suicideIn.setCustomValidity("Invalid field.");
        return;
    } else {
        suicideIn.setCustomValidity("");
    }

    // task solution
    suicideInput = {
        count: suicideInput[0],
        step: suicideInput[1]
    };

    let people = [];
    for (let i = 1; i < suicideInput.count + 1; i++) {
        people.push(i);
    }
    let i = suicideInput.step - 1;
    while (people.length > 1) {
        if (i >= people.length) {
            i -= people.length;
            continue;
        }
        people.splice(i, 1);
        i += suicideInput.step - 1;
        console.log(people)
    }


    suicideOut.innerHTML =
        `<h3 class="task__subtitle">Вывод программы</h3>
         <span>Ответ: ${people[0]}</span><br>`
});