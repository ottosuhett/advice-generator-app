const diceButton = document.querySelector(".dice-button");
const adviceTextElement = document.querySelector(".advice-message");
const adviceIdElement = document.querySelector(".advice-title");

diceButton.addEventListener("click",()=>{
    getAdvice();
})

async function getAdvice(){
    const response = await fetch("https://api.adviceslip.com/advice");
    let json = await response.json();
    let advice = json.slip.advice;
    let adviceId = json.slip.id;
    console.log(adviceId);
    adviceTextElement.innerHTML = advice;
    adviceIdElement.innerHTML = `Advice ${adviceId}`;
}
getAdvice()






