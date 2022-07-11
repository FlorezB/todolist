// variables and constantes

let checkedNumber = 0
let taskNumber = 1
let tasks = []

const taskHistory = document.getElementById("task-history")
const formTitle = document.getElementById("form-title")
const formDescription = document.getElementById("form-description")
const priorityOfTask = document.getElementById("priority-range")
const formStandard = document.getElementById("form-standard")
const formEdit = document.getElementById("form-edit")
const editTitle = document.getElementById("edit-title")
const editDescription = document.getElementById("edit-description")
const editPriority = document.getElementById("edit-priority-range")
const editToDoList = document.getElementById("edit-to-do-list")
//

// fonction pour reset
const initialize = () => {
    checkedNumber = 0
    taskNumber = 1
    tasks = []
    taskHistory.innerHTML = ``
    formStandard.setAttribute("class", "display-block")
    formEdit.setAttribute("class", "display-none")
    document.toDoList.reset()
    document.editToDoList.reset()
    closeConfirmationWindow()
    closeFilterByStatus()
}

// fonction qui incrémente le numéro des taches
const taskNumberIncrementation = () => {
    taskNumber ++
}

// fonction pour changer le status des taches
const swapCheckColor = (checkedImgTaskID) => {
    tasks.forEach( (task) => {
        if (task.id === checkedImgTaskID) {
            task.status ++
            if (task.status === 3) {
                task.status = 0
            }
            checkedImg = document.getElementById(`checkedImg${checkedImgTaskID}`)
            checkedImg.setAttribute("src", `./img/coche${task.status}.png`)
        }
    })
    
}

// fonction qui récupère les données du formulaire
const onTaskSubmit = () => {
    tasks.push({
        id: taskNumber, 
        title: formTitle.value, 
        description: formDescription.value, 
        priority: priorityOfTask.value, 
        status: 0
    })
    document.toDoList.reset()
    writeTask(tasks)
    taskNumberIncrementation()
}

// fonction qui ajoute une tache aléatoire
const addRandomTask = () => {
    const randomTaskList = [
        {id: taskNumber, title: "Collecter du sable provenant de 5 pays", description: "", priority: 0, status: 0},
        {id: taskNumber, title: "Voir les chutes du Niagara", description: "", priority: 0, status: 0},
        {id: taskNumber, title: "Essayer la soupe de tortue", description: "", priority: 0, status: 0},
        {id: taskNumber, title: "Grimper 5 montagnes", description: "", priority: 0, status: 0},
        {id: taskNumber, title: "Réaliser une ToDo List", description: "", priority: 0, status: 0},
        {id: taskNumber, title: "Apprendre l'astronomie", description: "", priority: 0, status: 0},
        {id: taskNumber, title: "Push and Pull sur Git !", description: "", priority: 0, status: 0}
    ]
    const min = 0
    const max = randomTaskList.length - 1
    const gap = max - min + 1
    const randomNumber = Math.floor(Math.random()*(gap)) + min
    const randomTask = randomTaskList[randomNumber]
    tasks.push(randomTask)
    writeTask(tasks)
    taskNumberIncrementation()
}

//fonction qui écrit les taches en html
const writeTask = (displayTasks) => {
    taskHistory.innerHTML = ``
    displayTasks.forEach((task) => {
    taskHistory.innerHTML = taskHistory.innerHTML + `
    <div class="flex width_100p100 flex-column gap5 padding-top_20">
        <div class="flex justifyContent-spaceBetween alignItem-flexEnd padding-right_30">
            <div>
                <button onclick="swapCheckColor(${task.id})" class="border-none background-none" id="checkedImgButton${task.id}"><img id="checkedImg${task.id}" src="./img/coche${task.status}.png" alt="icone de bloc note" height="40px" width="40px"/></button>
                <img src="./img/${task.priority}.png" alt="icone du numéro ${task.priority}" height="40px" width="40px" />
            </div>
            <h2 class="padding-left_30">Task #${task.id} : ${task.title}</h2>
                <div class="flex">
                    <button onclick="editTaskForm(${task.id})" class="border-none background-none"><img id="editButton${task.id}" src="./img/editer.png" alt="image de crayon" height="40px" width="40px"></button>
                    <button onclick="deleteTask(${task.id})" class="border-none background-none"><img id="supprButton${task.id}" src="./img/corbeilleRouge.png" alt="image de corbeille" height="40px" width="40px"></button>
                </div>
        </div>
        <div class="border">   <!-- ligne-->   </div>
        <p>Task #${task.id} : ${task.description}</p>
    </div>
    `
    })
}

// fonction qui supprime une tache
const deleteTask = (taskID) => {
    tasks.splice(taskID -1, 1)
    taskNumber = 1
    tasks.forEach((task) => {
        if (task.id > taskID){
            task.id -= 1
        }
        taskNumberIncrementation()
    })
    writeTask(tasks)
}

// fonction qui crée le formulaire pour edit une tache
const editTaskForm = (taskID) => {
    formStandard.setAttribute("class", "display-none")
    formEdit.setAttribute("class", "display-block")
    tasks.forEach( (task) => {
        if (task.id === taskID) {
            editTitle.setAttribute("value", task.title)
            editDescription.setAttribute("value", task.description)
            editPriority.setAttribute("value", task.priority)
            editToDoList.setAttribute("onsubmit", `editTask(${taskID}); return false`)
        }
    })
}

// fonction qui edit une tache
const editTask = (taskID) => {
    formStandard.setAttribute("class", "display-block")
    formEdit.setAttribute("class", "display-none")
    tasks.forEach( (task) => {
        if (task.id === taskID) {
            task.title = editTitle.value
            task.description = editDescription.value
            task.priority = editPriority.value
        }
    })
    document.editToDoList.reset()
    writeTask(tasks)
}

// fonction qui filtre par status
const filterByStatus = (statusNumber) => {
    closeFilterByStatus()
    if (statusNumber === 3) {
        writeTask(tasks)
    } else {
        filteredTasks = tasks.filter( (task) => {
            return task.status === statusNumber
        })
        writeTask(filteredTasks)
    }
}

// fonction qui filtre par priorité
const filterByPriority = () => {
    closeFilterByStatus()
    tasks.sort((a, b) => Number(b.priority) - Number(a.priority))
    writeTask(tasks)
}

// fonction qui affiche la fenêtre de suppression 
const openConfirmationWindow = () => {
    document.getElementById("deleteAllConfirmation").setAttribute("class", "display-block position-left_17v5p100 position-top_42p100 height_400 width_65p100 background-red position-absolute z-index_6")
}

// fonction qui cache la fenetre de suppression
const closeConfirmationWindow = () => {
    document.getElementById("deleteAllConfirmation").setAttribute("class", "display-none position-left_17v5p100 position-top_42p100 height_400 width_65p100 background-red position-absolute z-index_6")
}

// fonction qui affiche le filtre par status
const openFilterByStatus = () => {
    document.getElementById("statusFilterChoice").setAttribute("class", "display-block position-absolute position-top_42p100 position-left_32p100 background-white height_400 width_fc border z-index_5")
}

// fonction qui cache le filtre par status
const closeFilterByStatus = () => {
    document.getElementById("statusFilterChoice").setAttribute("class", "display-none position-absolute position-top_42p100 position-left_32p100 background-white height_400 width_fc border z-index_5")
}