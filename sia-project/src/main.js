import { createApp } from 'vue'
import App from './App.vue'

let btns=document.querySelectorAll('button');

//btns.forEach( b => console.log(b.innerHTML) );
//btns[0].addEventListener('click', printText);

btns.forEach( b => b.addEventListener('click', printText ) );

function printText(e){
  // console.log(e.target.childNodes[1].innerHTML)
 let numVotes = parseInt(e.target.childNodes[1].innerHTML) + 1;
 e.target.childNodes[1].innerHTML = numVotes;
  console.log(e.target.childNodes[1]);
}


//Prototype
let votes = [0,0,0,0,0,0,0,0,0];

btns.forEach( (b, i) =>  b.childNodes[1].innerHTML = votes[i] );

//let numVotes = parseInt(e.target.childNodes[1].innerHTML) + 1;
//btns.forEach( (b, i) =>  b.childNodes[1].innerHTML = votes[i] );


createApp(App).mount('#app')
