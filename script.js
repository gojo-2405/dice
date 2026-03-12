/* topic navigation */

function showTopic(id){

document.querySelectorAll(".topic").forEach(t=>{
t.classList.remove("active");
});

document.getElementById(id).classList.add("active");

}


/* theme toggle */

const themeBtn=document.getElementById("themeToggle");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

const icon=themeBtn.querySelector("i");

if(document.body.classList.contains("light-mode")){
icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");
}else{
icon.classList.remove("fa-sun");
icon.classList.add("fa-moon");
}

});


/* fake ip scan */

let scanCount=0;

function scanDevice(){

scanCount++;

document.getElementById("scanCounter").innerText=scanCount;

let output=document.getElementById("scanOutput");

output.innerHTML="Scanning device...";

setTimeout(()=>{

output.innerHTML=
"IP Address: 192.168.1."+Math.floor(Math.random()*255)+
"<br>Open Port: 80"+
"<br>Status: Secure";

},2000);

}


/* terminal typing */

const text="Initializing security system...";
let i=0;

function type(){

if(i<text.length){

document.getElementById("terminalText").innerHTML+=text.charAt(i);

i++;

setTimeout(type,50);

}

}

type();


/* attack map simulation */

const map=document.getElementById("attackMap");

function createAttack(){

let dot=document.createElement("div");

dot.style.position="absolute";
dot.style.width="8px";
dot.style.height="8px";
dot.style.background="red";
dot.style.borderRadius="50%";

dot.style.left=Math.random()*90+"%";
dot.style.top=Math.random()*90+"%";

map.appendChild(dot);

setTimeout(()=>{

dot.remove();

},3000);

}

setInterval(createAttack,1500);


/* matrix background */

const canvas=document.getElementById("matrix");

const ctx=canvas.getContext("2d");

canvas.height=window.innerHeight;

canvas.width=window.innerWidth;

const letters="01";

const fontSize=14;

const columns=canvas.width/fontSize;

const drops=[];

for(let x=0;x<columns;x++)drops[x]=1;

function draw(){

ctx.fillStyle="rgba(0,0,0,0.05)";

ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#0f0";

ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text=letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)drops[i]=0;

drops[i]++;

}

}

setInterval(draw,33);
