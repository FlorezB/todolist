// variables and constantes

const checkedImg = document.getElementById("checkedImg")
let checkedNumber

const taskHistory = document.getElementById("task-history")
const formTitle = document.getElementById("form-title")
const formDescription = document.getElementById("form-description")
const priorityOfTask = document.getElementById("priority-range")
//
const initialize = () => {
    checkedNumber = 0


}

const swapCheckColor = () => {
    checkedNumber ++
    checkedImg.setAttribute("src", `./img/coche${checkedNumber}.png`)

}

const onTaskSubmit= () => {
    // taskHistory.innerHTML = taskHistory.innerHTML + `
    // `
    console.log(formTitle.value)
    console.log(formDescription.value)
    console.log(priorityOfTask.value)
}