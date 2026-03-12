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

});


/* terminal typing */

const text="Initializing cyber defense system...";
let i=0;

function type(){

if(i<text.length){

document.getElementById("terminalText").innerHTML+=text.charAt(i);
i++;

setTimeout(type,50);

}

}

type();


/* ip scan */

function scanDevice(){

let output=document.getElementById("scanOutput");

output.innerHTML="Scanning device...";

setTimeout(()=>{

output.innerHTML=
"IP Address: 192.168.1."+Math.floor(Math.random()*255)+
"<br>Open Ports: 80, 443"+
"<br>Status: Secure";

},2000);

}


/* hacker console */

const input=document.getElementById("terminalInput");
const output=document.getElementById("terminalOutput");

input.addEventListener("keydown",function(e){

if(e.key==="Enter"){

let cmd=input.value.toLowerCase();
let result="";

if(cmd==="help") result="Commands: help, scan, whoami";

else if(cmd==="scan") result="Running vulnerability scan... No threats found.";

else if(cmd==="whoami") result="User: Ethical Hacker";

else result="Command not recognized.";

output.innerHTML+="<p>> "+cmd+"</p><p>"+result+"</p>";

input.value="";

}

});


/* attack map */

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

setTimeout(()=>dot.remove(),3000);

}

setInterval(createAttack,1500);


/* chart */

const ctx=document.getElementById("attackChart");

new Chart(ctx,{
type:"bar",
data:{
labels:["Phishing","Malware","DDoS","Ransomware"],
datasets:[{
label:"Detected Threats",
data:[120,90,70,50]
}]
}
});


/* matrix background */

const canvas=document.getElementById("matrix");

const ctx2=canvas.getContext("2d");

canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

const letters="01";

const fontSize=14;

const columns=canvas.width/fontSize;

const drops=[];

for(let x=0;x<columns;x++)drops[x]=1;

function draw(){

ctx2.fillStyle="rgba(0,0,0,0.05)";
ctx2.fillRect(0,0,canvas.width,canvas.height);

ctx2.fillStyle="#0f0";
ctx2.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text=letters[Math.floor(Math.random()*letters.length)];

ctx2.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)drops[i]=0;

drops[i]++;

}

}

setInterval(draw,33);
