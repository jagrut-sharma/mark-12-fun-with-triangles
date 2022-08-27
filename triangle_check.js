const firstAngle = document.querySelector(".first-angle");
const secondAngle = document.querySelector(".second-angle");
const thirdAngle = document.querySelector(".third-angle");
const checkBtn = document.querySelector(".btn-check");
const result = document.querySelector(".result");

checkBtn.addEventListener("click", isTriangle);

function isTriangle(){
    
    if (Number(firstAngle.value) < 1 && Number(secondAngle.value) < 1 && Number(thirdAngle.value) < 1) {
        displayMessage("Enter values above zero");
        result.style.color = "red";
    }
    else {
        console.log(secondAngle.value);
        console.log(thirdAngle.value);
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