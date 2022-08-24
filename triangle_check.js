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
        result.style.fontWeight = "bold";
        return 0;
    }
    else {
        const sum = Number(firstAngle.value) + Number(secondAngle.value) + Number(thirdAngle.value);
        result.style.color = "unset";
        result.style.fontWeight = "unset";
        if (sum === 180){
            displayMessage("It is indeed a triangle👍");
        }

        else{
            displayMessage("Not a triangle");
        }
    }
}

function displayMessage(message){
    result.innerText = message;
}