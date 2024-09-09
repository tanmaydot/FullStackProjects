let container = document.querySelector(".container");
let timeNow = new Date().getHours();
console.log(timeNow);
let greeting = 
    timeNow >= 5 && timeNow < 12 
    ? "Good Morning" 
    : timeNow >= 12 && timeNow < 18 
    ? "Good Afternoon" 
    : "Good Evening";
console.log(greeting);
container.innerHTML = `<h1>${greeting}</h1>`;
