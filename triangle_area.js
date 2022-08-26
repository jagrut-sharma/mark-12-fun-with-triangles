baseOfTriangle = document.querySelector(".base");
heightOfTriangle = document.querySelector(".height");
calculateBtn = document.querySelector(".btn");
resultArea = document.querySelector(".result");

calculateBtn.addEventListener("click", calculateArea);

function calculateArea() {
    base = Number(baseOfTriangle.value);
    height = Number(heightOfTriangle.value);

    if (base > 0 && height > 0){
        const area = 0.5 * base * height;
        resultArea.innerText = "Area of triangle: " + area;
        resultArea.style.color = "green";
    }
    else{
        resultArea.innerText = "Please enter values above 0";
        resultArea.style.color = "red";
    }
}