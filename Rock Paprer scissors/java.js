let userscore = 0 ;
let compscore = 0;
const span_userscore = document.getElementById('userscore');
const span_compscore = document.getElementById('compscore');
const res = document.getElementById('res');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');

function getcompchoice(){
    const choices = ['r','p','s'];
    const randomnum = Math.floor(Math.random()*3);
    return choices [randomnum];
}
function getuserchoice(){
    rock.addEventListener('click' , function(){
        game('r')
    })
    paper.addEventListener('click', function(){
        game('p')

    })
    scissors.addEventListener('click' , function(){
        game('s')

    })
}
function game(userchoice){
const compchoice = getcompchoice();
switch(userchoice+compchoice){
    case'rs':
    case'pr':
    case'sp':
    userscore++;
    res.innerHTML = 'user wins.!!!';
    span_userscore.innerHTML = userscore;

      break;
      case 'sr':
      case 'rp':
      case 'ps':
      compscore++;
      res.innerHTML = 'computer wins.!!!';
      span_compscore.innerHTML = compscore;

        break;
        case 'rr':
        case 'pp':
        case 'ss':
        compscore++;
        res.innerHTML = 'its a draw.!!!';
          break;
  }
}
getuserchoice();