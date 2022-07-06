// variables and constantes

const checkedImg = document.getElementById("checkedImg")
let checkedNumber = 0

const taskHistory = document.getElementById("task-history")
const formTitle = document.getElementById("form-title")
//
const initialize = () => {



}

const swapCheckColor = () => {
    checkedNumber ++
    checkedImg.setAttribute("src", `./img/coche${checkedNumber}.png`)

}

const onTaskSubmit= () => {
    // taskHistory.innerHTML = taskHistory.innerHTML + `
    // `
    console.log(formTitle.value)
}