// variables and constantes

let checkedNumber = 0
let taskNumber = 1
let tasks = []
const checkedImg = document.getElementById(`checkedImg${taskNumber}`)
const taskHistory = document.getElementById("task-history")
const formTitle = document.getElementById("form-title")
const formDescription = document.getElementById("form-description")
const priorityOfTask = document.getElementById("priority-range")
//

const initialize = () => {
    checkedNumber = 0
    taskNumber = 1
    tasks = []

}

const swapCheckColor = () => {
    checkedNumber ++
    checkedImg.setAttribute("src", `./img/coche${checkedNumber}.png`)
    if (checkedNumber === 2) {
        checkedNumber = -1
    }
}

const onTaskSubmit= () => {
    taskHistory.innerHTML = taskHistory.innerHTML + `
    <div class="flex width_100p100 flex-column gap5 padding-top_20">
        <div class="flex justifyContent-spaceBetween alignItem-flexEnd padding-right_30">
            <button onclick="swapCheckColor()" class="border-none background-none"><img id="checkedImg${taskNumber}" src="./img/coche0.png" alt="image de coche dans un cercle" height="40px" width="40px"/></button>
            <h2 class="padding-left_30">Task #${taskNumber} : ${formTitle.value}</h2>
                <div class="flex">
                    <img src="./img/editer.png" alt="image de crayon" height="40px" width="40px">
                    <img src="./img/corbeilleRouge.png" alt="image de corbeille" height="40px" width="40px">
                </div>
        </div>
        <div class="border">   <!-- ligne-->   </div>
        <p>${formDescription.value}</p>
    </div>
    `
    taskNumber ++




    // console.log(formTitle.value)
    // console.log(formDescription.value)
    // console.log(priorityOfTask.value)
}