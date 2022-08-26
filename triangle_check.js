const firstAngle = document.querySelector(".first-angle");
const secondAngle = document.querySelector(".second-angle");
const thirdAngle = document.querySelector(".third-angle");
const checkBtn = document.querySelector(".btn-check");
const result = document.querySelector(".result");

checkBtn.addEventListener("click", isTriangle);

function isTriangle(){

    if (Number(firstAngle.value) <= 0 && Number(secondAngle.value) <= 0 && Number(thirdAngle.value) <= 0) {
        displayMessage("Enter values above zero");
        result.style.color = "red";
    }
    else {
        const sum = Number(firstAngle.value) + Number(secondAngle.value) + Number(thirdAngle.value);
        if (sum === 180){
            displayMessage("It is indeed a triangle 👍");
            result.style.color = "green";
        }

        else{
            displayMessage("Not a triangle");
            result.style.color = "blue";
        }
    }
}

function displayMessage(message){
    result.innerText = message;
}