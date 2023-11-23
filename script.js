function zmienTlo() {
    document.body.style.backgroundColor='rgb(' + Math.round(Math.random() * 255) + 
    ',' + Math.round(Math.random() * 255) + 
    ',' + Math.round(Math.random() * 255) + ')';
}

var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

function play() {
    var user_guess = document.getElementById("guess").
    value;
    if(user_guess < 1 || user_guess > 100) {
        alert("Proszę podać liczbę od 1 do 100!");
    }
    else {
        guessed_nums.push(user_guess);
        no_of_guesses += 1;

        if(user_guess < answer) {
            msg1.textContent = "Zbyt mała liczba!";
            msg2.textContent = "Liczba prób: " + no_of_guesses;
            msg3.textContent = "Sprawdzone liczby: " + guessed_nums;
        }
        else if(user_guess > answer) {
            msg1.textContent = "Zbyt wysoka liczba!";
            msg2.textContent = "Liczba prób: " + no_of_guesses;
            msg3.textContent = "Sprawdzone liczby: " + guessed_nums;
        }
        else if(user_guess == answer) {
            msg1.textContent = "Hurra Wygrałeś!";
            msg2.textContent = "Wylosowaną liczbą była liczba: " + answer;
            msg3.textContent = "Ilość prób: " + no_of_guesses;
        }
    }
}