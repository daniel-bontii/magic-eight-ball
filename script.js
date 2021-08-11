let userName = 'Danny';

//If the user enters a name, display hello plus the name otherwise display hello
userName ? console.log(`Hello ${userName}`) : console.log('Hello');

const userQuestion = 'Will I be a good full-stack developer?';
//display the name of the user and what they asked
console.log(`${userName} asked: ${userQuestion}`);
//Initial randomNumber to a whole random number between 0 and 7
let randomNumber = Math.floor(Math.random()*8);

let eightBall = '';

switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 0:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'I am afraid I don\'t know your fortune';
    break;
}

console.log(eightBall);