let Dise = document.querySelector("button");
Dise.onclick = ()=>{
    fetch("https://api.adviceslip.com/advice").then(res => {
        return res.json()
    }).then(data =>{
        let text = document.querySelector("article p");
        let adNum = document.querySelector("span");
        adNum.textContent = `ADVICE #${data.slip.id}`
        text.textContent = `"${data.slip.advice}"`
    })
}
window.onload = ()=>{
    fetch("https://api.adviceslip.com/advice").then(res => {
        return res.json()
    }).then(data =>{
        let text = document.querySelector("article p");
        let adNum = document.querySelector("span");
        adNum.textContent = `ADVICE #${data.slip.id}`
        text.textContent = `"${data.slip.advice}"`
    })
}