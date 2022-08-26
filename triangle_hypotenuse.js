const lengthA = document.querySelector(".length-1");
const lengthB = document.querySelector(".length-2");
const calculateBtn = document.querySelector(".btn");3
const lengthHypotenuse = document.querySelector(".result");

calculateBtn.addEventListener("click", calculateHypotenuse);

let hypotenuse;
function calculateHypotenuse() {
    firstLength = Number(lengthA.value);
    secondLength = Number(lengthB.value);

    if (firstLength > 0 && secondLength > 0) {
        hypotenuse = Math.sqrt(firstLength**2 + secondLength**2);
        lengthHypotenuse.innerText = "Length of Hypotenuse is: " + hypotenuse;
        lengthHypotenuse.style.color = "green";
    }
    else{
        lengthHypotenuse.innerText = "Please enter values above zero!";
        lengthHypotenuse.style.color = "red";
    }
}