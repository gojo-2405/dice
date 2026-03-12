// Topic switching system

function showTopic(topicId){

let topics = document.getElementsByClassName("topic");

for(let i=0;i<topics.length;i++){
topics[i].style.display="none";
}

document.getElementById(topicId).style.display="block";

highlightButton(topicId)

}


// Highlight active sidebar button

function highlightButton(topicId){

let buttons = document.querySelectorAll(".sidebar button")

buttons.forEach(btn => {
btn.classList.remove("active")
})

let activeBtn = document.querySelector(`button[onclick="showTopic('${topicId}')"]`)

if(activeBtn){
activeBtn.classList.add("active")
}

}


// Dark mode toggle

const toggleBtn = document.getElementById("darkToggle")

if(toggleBtn){

toggleBtn.addEventListener("click",function(){

document.body.classList.toggle("dark")

})

}


// Topic search system

function filterTopics(){

let input = document.getElementById("topicSearch")
let filter = input.value.toLowerCase()

let buttons = document.querySelectorAll(".sidebar button")

buttons.forEach(btn => {

let text = btn.innerText.toLowerCase()

if(text.includes(filter)){
btn.style.display="block"
}else{
btn.style.display="none"
}

})

}


// Load default topic

window.onload=function(){

showTopic("intro")

}


// Optional keyboard shortcut (press D for dark mode)

document.addEventListener("keydown",function(e){

if(e.key==="d"){
document.body.classList.toggle("dark")
}

})
