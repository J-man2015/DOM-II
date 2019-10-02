// Your code goes here
const navBar= document.querySelector('nav');
const navlinks= document.querySelectorAll('a');
navBar.addEventListener('mouseover', (event) => {
  event.currentTarget.style.backgroundColor="blue";  
  
})
const noRefresh= document.querySelector('nav');
noRefresh.addEventListener('click', (event) =>{
    event.preventDefault();
}
)
navlinks[2].addEventListener('mouseover', (event) =>{
    event.stopPropagation();
    event.currentTarget.style.backgroundColor="orchid";
})

document.addEventListener('keydown', (event) =>{
    if(event.key === 'f'){
        alert("Paying Respect");
    }
});

document.addEventListener('keydown', (event) =>{
    if(event.key === 'b'){
        alert("You pressed the b key");
    }
});

const imgScale = document.querySelector('.pic');
imgScale.addEventListener('mouseover', () => {
  // Make sure your click event is firing
  console.log(`Work button fired a click event!`);
  imgScale.style.transform = "scale(1.1)";
  imgScale.style.transition = 'all 0.5s';
});

const scaleUp = document.querySelectorAll("img").forEach(item => {
    item.addEventListener('mouseenter', event => {
     item.style.transform = "scale(1.2)";
    item.style.transition = 'all 0.5s';
    })
  })

  const backgroundColor = document.querySelector('body');
backgroundColor.addEventListener('click', (e) => {
  backgroundColor.style.background ="gray";
  event.stopPropagation();
  console.log(`event bubbled up again`);
})

const backgroundColor2 = document.querySelector('.main-navigation');
backgroundColor2.addEventListener('click', (e) => {
  backgroundColor2.style.background ="blue";
  event.stopPropagation();
  console.log(`event bubbled up again`);
})

const doubleClickme= document.querySelector('.demo');
doubleClickme.addEventListener('dblclick', (event) =>{
    alert("Double Click Detected!")
    event.stopPropagation();
} )