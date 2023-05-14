const input = document.querySelector("input"),
    guess = document.querySelector(".guess"),
    checkbutton = document.querySelector("button"),
    remainChances = document.querySelector(".chances");

input.focus();

let randomNum = Math.floor(Math.random() * 100);
chance = 10;

checkbutton.addEventListener("click",() => {
    chance--;
    let inputValue = input.value;

    if (inputValue == randomNum) {
        [guess.textContent, input.disabled] = ["Поздравляю!", true];
                                 [checkbutton.textContent, guess.style.color] = ["Переиграть", "#41ac38"];
    } else if (inputValue > randomNum && inputValue < 100) {
    [guess.textContent, remainChances.textContent] = ["Ваша догадка высока", chance];
        guess.style.color = "#333";
    } else if (inputValue < randomNum && inputValue > 0) {
    [guess.textContent, remainChances.textContent] = ["Ваша догадка низка", chance];
        guess.style.color = "#333";
    } else {
    [guess.textContent, remainChances.textContent] = ["Ваше число недействительно", chance];
        guess.style.color = "#ff0000"
    }

    if (chance == 0) {
        [checkbutton.textContent, input.disabled, inputValue] = ["Переиграть", true, ""];
        [guess.textContent,guess.style.color ] = ["Вы проиграли", "#ff0000"];
    }if(chance <0)
        window.location.reload();
});
