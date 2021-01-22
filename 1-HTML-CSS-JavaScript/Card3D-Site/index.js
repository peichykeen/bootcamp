//Movement

const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Move Selections
const title = document.querySelector('.title');
const me = document.querySelector('.me img');
const progress = document.querySelector('.continue');
const description = document.querySelector('.info h3');
const nav = document.querySelector('.nav');


//Moving Event
container.addEventListener('mousemove', (e) => {
   let xAxis = (window.innerWidth / 2 - e.pageX) /40; 
   let yAxis = (window.innerHeight / 2 - e.pageY) /40; 
   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//Reset In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    me.style.transform = "translateZ(250px)";
    description.style.transform = "translateZ(150px)";
    nav.style.transform = "translateZ(300px)";
    progress.style.transform = "translateZ(300px)";
})

//Reset Out
container.addEventListener('mouseleave', (e) => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = "all 0.5s ease";
    title.style.transform = "translateZ(0px)";
    me.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    nav.style.transform = "translateZ(0px)";
    progress.style.transform = "translateZ(0px)";
})