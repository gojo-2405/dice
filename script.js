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



// DEVICE IP SCAN

async function scanDevice(){

let output=document.getElementById("scanOutput")

output.innerHTML="Detecting device IP...<br><br>"

let res=await fetch("https://ipapi.co/json/")

let data=await res.json()

output.innerHTML+=`IP Address : ${data.ip}<br>`
output.innerHTML+=`City : ${data.city}<br>`
output.innerHTML+=`Region : ${data.region}<br>`
output.innerHTML+=`Country : ${data.country_name}<br>`
output.innerHTML+=`ISP : ${data.org}<br>`
output.innerHTML+=`Timezone : ${data.timezone}<br><br>`

output.innerHTML+="Security Check Complete<br>"
output.innerHTML+="No Threats Detected<br>"

}



// DASHBOARD COUNTER

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
