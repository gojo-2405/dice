// TOPIC SWITCH

function showTopic(id){

let topics=document.querySelectorAll(".topic")

topics.forEach(t=>t.style.display="none")

document.getElementById(id).style.display="block"

}

window.onload=function(){

showTopic("intro")

typeTerminal()

animateStats()

}



// MATRIX BACKGROUND

const canvas=document.getElementById("matrix")
const ctx=canvas.getContext("2d")

canvas.height=window.innerHeight
canvas.width=window.innerWidth

const letters="01ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const fontSize=16
const columns=canvas.width/fontSize

const drops=[]

for(let x=0;x<columns;x++)
drops[x]=1

function draw(){

ctx.fillStyle="rgba(0,0,0,0.05)"
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="#0f0"
ctx.font=fontSize+"px monospace"

for(let i=0;i<drops.length;i++){

const text=letters.charAt(Math.floor(Math.random()*letters.length))

ctx.fillText(text,i*fontSize,drops[i]*fontSize)

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
drops[i]=0

drops[i]++

}

}

setInterval(draw,33)



// TERMINAL TEXT

const message="Initializing security scan... Accessing network nodes... Vulnerability detection started..."

let i=0

function typeTerminal(){

if(i<message.length){

document.getElementById("terminalText").innerHTML+=message.charAt(i)

i++

setTimeout(typeTerminal,50)

}

}



// HACK SIMULATION

function startScan(){

let output=document.getElementById("scanOutput")

let messages=[

"Starting scan...",

"Scanning ports...",

"Device found: 192.168.1.1",

"Checking vulnerabilities...",

"Scan complete"

]

let i=0

output.innerHTML=""

let interval=setInterval(()=>{

if(i>=messages.length){
clearInterval(interval)
return
}

output.innerHTML+=messages[i]+"<br>"

i++

},800)

}



// DASHBOARD COUNTERS

function animateStats(){

let attacks=0
let scans=0
let threats=0

setInterval(()=>{

attacks+=100
scans+=20
threats+=5

document.getElementById("attackCounter").innerText=attacks
document.getElementById("scanCounter").innerText=scans
document.getElementById("threatCounter").innerText=threats

},1000)

}
