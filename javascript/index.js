const addButton = document.getElementById('addbtn');
const taskinput = document.getElementById('taskname');
const tasklist = document.getElementById('items');

addButton.addEventListener('click', addTask);
showallbtn.addEventListener('click', showAllTasks);
showactivebtn.addEventListener('click', showActiveTasks);
const tasks = []; // Array to store tasks
const completedTasks = [];

function addTask(){
    try{
        const taskText = taskinput.value.trim();
        
        if(taskText === '') return alert('Please enter a task');
        const item = document.createElement('li');

        // Create a span for the text instead of setting textContent directly on li
        const textSpan = document.createElement('span');
        textSpan.textContent = taskText;

        // Add click listener to the text span
        textSpan.addEventListener('click', () => {
            textSpan.classList.toggle('completed');
            if(textSpan.classList.contains('completed')){
                completedTasks.push(taskText);
                console.log(`Task "${taskText}" marked as completed.`);
            } else {
                console.log(`Task "${taskText}" marked as active.`);
            }
        });
        console.log("completed: ", completed);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "❌";
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
            item.remove();
            tasks.splice(tasks.indexOf(taskText), 1);
            console.log("tasks: ",tasks);
        });

        // Append both to the li
        item.appendChild(textSpan);
        item.appendChild(deleteButton);
        tasklist.appendChild(item);
        tasks.push(taskText);
        console.log("tasks: ",taskText);
        // Clear the input field
        taskinput.value = '';
        taskinput.focus();
        


    }catch(e){
        alert('Problem entering the task');
    }
}

function showAllTasks(){
    tasklist.innerHTML = '';
    console.log("tasks: ",tasks);
    try{
        tasks.forEach(task =>{
        const item = document.createElement('li');
        const textSpan = document.createElement('span');
        textSpan.textContent = task;
        console.log("textSpan: ",textSpan);
        item.appendChild(textSpan);
        tasklist.appendChild(item); 
        });
    }catch(e){
        alert("Problem showing all the tasks");
        console.log(e);
    }
    
}

function showActiveTasks(){

}