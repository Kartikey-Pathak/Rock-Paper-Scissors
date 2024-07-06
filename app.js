console.log("HELLO WORLD");

let userscore=0;

let compscore=0;

const choices=document.querySelectorAll(".choice");

let userval=document.querySelector("#user-score");

let compval=document.querySelector("#comp-score");

let msg=document.querySelector("#msg-text");

let msgcontain=document.querySelector(".msg");

let resetbtn=document.querySelector("#reset-btn");

msgcontain.style.backgroundColor="#FFF078";

//reset button functionality

resetbtn.addEventListener("click",()=>{
   userscore=0;
   compscore=0;
   userval.innerText=userscore;
   compval.innerText=compscore;
   msg.innerText="Play The Game!";
     msgcontain.style.backgroundColor="#FFF078";

})



const comp=()=>{
      const options=["rock","paper","scissor"];

    const idx=Math.floor(Math.random()*3);
    return options[idx];
}

let playgame=(userchoice)=>{
//console.log(userchoice);
const compchoice=comp();
//console.log(compchoice);

//logic for game
let userwin=true;
if(userchoice==="rock"&&compchoice==="scissor"){
    userscore=userscore+1;
    let userwin=true;
     msg.innerText="You Won, Rock Beats Scissor!";
     msgcontain.style.backgroundColor="lightgreen";
}
    else if(userchoice===compchoice){
    draw();
    msgcontain.style.backgroundColor="#FFF078";
    }
    else if(userchoice==="rock"&&compchoice==="paper"){
        compscore++;
        userwin=false;
        msg.innerText="You Lose, Paper Beats Rock!";
        msgcontain.style.backgroundColor="red";
    }
    else if(userchoice==="paper"&&compchoice==="rock"){
        userscore++;
        userwin=true;
        msg.innerText="You Won, Paper Beats Rock!";
        msgcontain.style.backgroundColor="lightgreen";
    }
    else if(userchoice==="paper"&&compchoice==="scissor"){
        compscore++;
        userwin=false;
        msg.innerText="You Lose, Scissor Beats Paper!";
        msgcontain.style.backgroundColor="red";
    }
    else if(userchoice==="scissor"&&compchoice==="rock"){
        compscore++;
        userwin=false;
        msg.innerText="You Lose, Rock Beats Scissor!";
        msgcontain.style.backgroundColor="red";
    }
    else if(userchoice==="scissor"&&compchoice==="paper"){
        userscore++;
        userwin=true;
        msg.innerText="You Won, Scissor Beats Paper!";
        msgcontain.style.backgroundColor="lightgreen";
    }
    showwin(userwin);
}
//draw function

let draw=()=>{
    msg.innerText="Draw!";
}


//shows winner

let showwin=(userwin)=>{
    if(userwin===true){
        //console.log("You Won");
userval.innerText=userscore;
    }
    else if(userwin===false){
        //console.log("You Lose!!");
        compval.innerText=compscore;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        //console.log(userchoice);
        playgame(userchoice);
    })
});



//footer part
let mail=document.querySelector(".email");
let mtap=false;

mail.addEventListener("click",()=>{
    if(mtap===false){
    mail.innerText="kartikeypathak08@gmail.com";
    mtap=true;
    }
    else if(mtap===true){
        mail.innerText="Email";
        mtap=false;
    }
})

