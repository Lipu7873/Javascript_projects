// const getColor =() =>{
//     const randomNumber = Math.floor( Math.random()* 16777215);
//     const randomeCode = "#"+randomNumber.toString(16);
//     document.getElementById("main").style.backgroundColor = randomeCode;
//     // document.r.style.backgroundColor = randomeCode;
// }

// document.getElementById("btn").addEventListener("click", getColor);


const getColor =() =>{
    const randomNumber = Math.floor( Math.random()* 16777215);
    const randomeCode = "#"+randomNumber.toString(16);
    document.getElementById("main").style.backgroundColor = randomeCode;
    // document.r.style.backgroundColor = randomeCode;
}

const boxs = document.querySelector('#main');
boxs.addEventListener("mouseover", getColor);