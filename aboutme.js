'use strict';

console.log('Hi Console log!');

alert('Hi! I\'m Autumn. Strange as I may be, let\'s get to know me');

var i;

function promptUser() {
    var user = prompt('Who am I talking to?');

    alert('Hi ' + user + '! I am so glad you are wanting to get to know me, head\'s up, you may regret this.');

};
promptUser();


function answerOne() {
    var answer = prompt('Have I ever got my tongue stuck on a frozen pole in the winter?', 'type yes or no').toLowerCase();

    console.log(answer);

    if (answer === 'yes' || answer === 'y') {
        alert('Heck no! I have watched A Christmas Story too many times to fall for that!');
    } else {
        alert('Good guess! Do we already know each other?');
    }
}
answerOne();


function answerTwo() {
    var answer2 = prompt('Am I a morning person?', 'type yes or no').toLowerCase();

    console.log(answer2);

    if (answer2 === 'no' || answer2 === 'n') {
        alert('You are correct! Mornings are THE WORST');
    } else {
        alert('I\'m beginning to question this friendship.');
    }
}
answerTwo();


function answerThree() {
    var answer3 = prompt('Am I a great dancer?', 'type yes or no').toLowerCase();

    console.log(answer3);

    if (answer3 === 'yes' || answer3 === 'y') {
        alert('Haha no! I mean, unless you consider Elaine from Seinfeld a good dancer');
    } else {
        alert('You are right! Just because I LIKE to dance does not mean I\'m good at it!');
    }
}
answerThree();


function answerFour() {
    var answer4 = prompt('Is rap music one of my top 3 favorite genres?', 'type yes or no').toLowerCase();

    if (answer4 === 'yes' || answer4 === 'y') {
        alert('Hell yes! Kendrick is more likley to be on repeat than anything else when I workout');
    } else {
        alert('It\'s like you don\'t even know me...');
    }
}
answerFour();


function answerFive() {
    var answer5 = prompt('Am I great at Algebra, but kind of embarrased of being a math nerd so I don\'t tell people?').toLowerCase();

    if (answer5 === 'no' || answer5 === 'n') {
        alert('Yaaassss!!! I am terrible at math! Like seriously, what is a coefficient again? Makes my brain hurt');
    } else {
        alert('If you don\'t know me by now...you will never, ever know me...(in my best Simply Red voice)');
    }
    console.log(answer5);
}
answerFive();


function answerSix() {
    var favDogBreeds = ['Golden Retriever', 'Labrador Retriever', 'Dachsund'];
    var guesscorrect = false;

    var questionAttempts = 0;

    while (questionAttempts < 6 && guesscorrect == false) {
        var answer6 = prompt('What is my fav dog breed?').toLowerCase();
        questionAttempts++;


        for (i = 0; i < favDogBreeds.length; i++) {
            console.log(favDogBreeds[i]);


            if (favDogBreeds[i].toLowerCase() == answer6) {
                guesscorrect = true;
                alert('Yes, that is one of my favs, along with ' + favDogBreeds)
            }


        }


        if (guesscorrect == false) {
            alert("Nope, try again!");

        }
    }
}
answerSix();



function answerSeven() {

    alert('I have a number in mind,somewhere between 1-10. You have 4 guesses.');

    var answer = 3;
    var guess = prompt('What\'s your guess?');

    for (i = 0; i < 3; i++) {
        if (answer == guess) {
            alert("You guessed right!")

        } else if (parseInt(guess) < answer) {
            guess = prompt("Try again, guess was too low, you now have " + (i + 1) + " guesses used");
        } else if (parseInt(guess) > answer) {
            guess = prompt("Try again, guess too high, you now have " + (i + 1) + " guesses used");
        }

    }
}
answerSeven();

