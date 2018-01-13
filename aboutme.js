'use strict';

console.log ('Hi Console log!');

alert('Hi! I\'m Autumn. Strange as I may be, let\'s get to know me');
 
var user = prompt('Who am I talking to?');

alert('Hi ' + user + '! I am so glad you are wanting to get to know me, head\'s up, you may regret this.');

var answer = prompt('Have I ever got my tongue stuck on a frozen pole in the winter?' , 'type yes or no').toLowerCase();

console.log(answer);

if (answer === 'yes' || answer === 'y') {
    alert('Heck no! I have watched A Christmas Story too many times to fall for that!');
} else {
 alert('Good guess! Do we already know each other?');
}

var answer2 = prompt('Am I a morning person?' , 'type yes or no').toLowerCase();

console.log(answer);

if (answer === 'no' || answer === 'n') {
    alert('You are correct! Mornings are THE WORST');
} else {
    alert('I\'m beginning to question this friendship.');
}

var answer3 = prompt('Am I a great dancer?' , 'type yes or no').toLowerCase();

console.log(answer);

if (answer === 'yes' || answer === 'y') {
    alert('Haha no! I mean, unless you consider Elaine from Seinfeld a good dancer');
} else {
    alert('You are right! Just because I LIKE to dance does not mean I\'m good at it!');
}

var answer4 = prompt('Is rap music one of my top 3 favorite genres?', 'type yes or no').toLowerCase();

if (answer === 'yes' || answer === 'y') {
    alert('Hell yes! Kendrick is more likley to be on repeat than anything else when I workout');
} else {
    alert('It\'s like you don\'t even know me...');
}

var answer5 = prompt('Am I great at Algebra, but kind of embarrased of being a math nerd so I don\'t tell people?').toLowerCase();

if (answer === 'no' || answer === 'n') {
    alert('Yaaassss!!! I am terrible at math! Like seriously, what is a coefficient again? Makes my brain hurt');
} else {
    alert('If you don\'t know me by now...you will never, ever know me...(in my best Simply Red voice)');
}








