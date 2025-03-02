const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const resultText = document.getElementById("result");


const checkText = () => {
    if (inputText.value === "") {
        alert("Please input a value");
    } else {
        checkAll();
    }
};

const checkAll = () => {
    let clearText = inputText.value.replace(/[^a-zA-Z0-9]/g, "");
   let  lowerText = clearText.toLowerCase();
   let reverseText = lowerText.split("").reverse().join("");
   if (lowerText === reverseText) {
       resultText.innerText = `${inputText.value} is Palindrome`;
   } else {
       resultText.innerText = `${inputText.value} is not Palindrome`;
   }

};


checkButton.addEventListener("click", checkText);