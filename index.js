// variables and constantes

let checkedNumber = 0
let taskNumber = 1
let tasks = []
let test

const taskHistory = document.getElementById("task-history")
const formTitle = document.getElementById("form-title")
const formDescription = document.getElementById("form-description")
const priorityOfTask = document.getElementById("priority-range")

//



// fonction pour reset
const initialize = () => {
    checkedNumber = 0
    taskNumber = 1
    tasks = []
    taskHistory.innerHTML = ``
}

// fonction pour changer le status des taches
const swapCheckColor = (checkedImgTaskID) => {
    tasks.forEach( (task) => {
        if (task.id === checkedImgTaskID) {
            if (task.status === 2) {
                task.status = -1
            }
            console.log(task.status)
            task.status ++ 
            checkedImg = document.getElementById(`checkedImg${checkedImgTaskID}`)
            checkedImg.setAttribute("src", `./img/coche${task.status}.png`)
        }
    }) 
}

// fonction qui récupère les données du formulaire
const onTaskSubmit = () => {
    tasks.push({id: taskNumber, title: formTitle.value, description: formDescription.value, priority: priorityOfTask.value, status: 0})
    writeTask(tasks)
}

//fonction qui écrit les taches en html
const writeTask = () => {
    taskHistory.innerHTML = ``
    tasks.forEach((task) => {
    taskHistory.innerHTML = taskHistory.innerHTML + `
    <div class="flex width_100p100 flex-column gap5 padding-top_20">
        <div class="flex justifyContent-spaceBetween alignItem-flexEnd padding-right_30">
            <button onclick="swapCheckColor(${task.id})" class="border-none background-none" id="checkedImgButton${task.id}"><img id="checkedImg${task.id}" src="./img/coche${task.status}.png" alt="image de coche dans un cercle" height="40px" width="40px"/></button>
            <h2 class="padding-left_30">Task #${task.id} : ${task.title}</h2>
                <div class="flex">
                    <button onclick="editTask(${task.id})" class="border-none background-none"><img id="editButton${task.id}" src="./img/editer.png" alt="image de crayon" height="40px" width="40px"></button>
                    <button onclick="deleteTask(${task.id})" class="border-none background-none"><img id="supprButton${task.id}" src="./img/corbeilleRouge.png" alt="image de corbeille" height="40px" width="40px"></button>
                </div>
        </div>
        <div class="border">   <!-- ligne-->   </div>
        <p>${task.description}</p>
    </div>
    `
    })
    taskNumber ++
}

// fonction qui supprime une tache
const deleteTask = (taskID) => {
    tasks.splice(taskID -1, 1)
    taskNumber = 1
    tasks.forEach((task) => {
        if (task.id > taskID){
            task.id -= 1
        }
        taskNumber ++
    })

    taskHistory.innerHTML = ``
    tasks.forEach((task) => {
        taskHistory.innerHTML = taskHistory.innerHTML + `
        <div class="flex width_100p100 flex-column gap5 padding-top_20">
            <div class="flex justifyContent-spaceBetween alignItem-flexEnd padding-right_30">
                <button onclick="swapCheckColor(${task.id})" class="border-none background-none" id="checkedImgButton${task.id}"><img id="checkedImg${task.id}" src="./img/coche${task.status}.png" alt="image de coche dans un cercle" height="40px" width="40px"/></button>
                <h2 class="padding-left_30">Task #${task.id} : ${task.title}</h2>
                <div class="flex">
                    <button onclick="editTask(${task.id})" class="border-none background-none"><img id="editButton${task.id}" src="./img/editer.png" alt="image de crayon" height="40px" width="40px"></button>
                    <button onclick="deleteTask(${task.id})" class="border-none background-none"><img id="supprButton${task.id}" src="./img/corbeilleRouge.png" alt="image de corbeille" height="40px" width="40px"></button>
                </div>
            </div>
            <div class="border">   <!-- ligne-->   </div>
            <p>${task.description}</p>
        </div>
        `
    })
}

// fonction qui edit une tache
const editTask = () => {

}

