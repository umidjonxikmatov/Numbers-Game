let randomNumbers = [];
let left = document.getElementsByClassName("left")[0];
let win = document.getElementsByClassName("win")[0];
let fail = document.getElementsByClassName("fail")[0];
let inputs = document.querySelectorAll("input")

for(let i = 0; i < 5; i++) {
    randomNumbers[i] = Math.floor(Math.random() * 1000);
    let p = document.createElement("p");
    p.innerText = randomNumbers[i];
    left.appendChild(p);
}
console.log(randomNumbers);
function reload() {
    window.location.reload();
}
function check() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let input4 = document.getElementById("input4").value;
    let input5 = document.getElementById("input5").value;
    if (input1 == randomNumbers[0] && input2 == randomNumbers[1] && input3 == randomNumbers[2] && input4 == randomNumbers[3] && input5 == randomNumbers[4]) {
        console.log("ok");
        win.style.display = "block"
        fail.style.display = "none"
    } else {
        console.log("error");
        fail.style.display = "block"
         win.style.display = "none"
    }
    inputs.forEach ((input) => {
        input.setAttribute("disabled",true);
    } );
    
}
setTimeout(() => {
    left.style.filter = "blur(5px)";
    inputs.forEach ((input) => {
        input.removeAttribute("disabled");
    } );
    minusTime();
}, 5000);

function minusTime() {
    setInterval(() => {
        let time = document.getElementById("time");
        let number = +time.textContent;
       number > 0 && number--;
       time.innerText = number;
       if (number == 0) {
        check()
       }
    }, 1000);
}
