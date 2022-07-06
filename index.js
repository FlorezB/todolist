// variables and constantes

const checkedImg = document.getElementById("checkedImg")
let checkedNumber = 0

//
const initialize = () => {



}

const swapCheckColor = () => {
    checkedNumber ++
    checkedImg.setAttribute("src", `./img/coche${checkedNumber}.png`)

}