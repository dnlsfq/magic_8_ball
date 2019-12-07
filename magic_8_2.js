let userName = '';

userName ? console.log(`Hello, ${userName}!`):console.log('Hello!');

const userQuestion = 'What\'s the lucky no. ?';

console.log(`The Magic ball's ask: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eigthball ;

if(randomNumber === 0){
    eigthball = 'It is certain';
} else if (randomNumber === 1){
    eigthball = 'Reply hazy try again';
} else if (randomNumber === 2){
    eigthball = 'Cannot predict now';
} else if (randomNumber === 3){
    eigthball = 'Do not count on it';
} else if (randomNumber === 4){
    eigthball = 'My sources say no';
} else if (randomNumber === 5){
    eigthball = 'Outlook not so good';
} else if (randomNumber === 6){
    eigthball = 'Signs point to yes';
}

console.log(`The magic ball answer ${eigthball}`);