function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const setImportanceButton = document.createElement('button');
        setImportanceButton.textContent = 'Set Importance';
        setImportanceButton.onclick = function() {
            setImportance(taskItem);
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(setImportanceButton);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function setImportance(taskItem) {
    const importance = prompt('Set importance (very urgent, not important):');
    if (importance) {
        taskItem.classList.remove('veryUrgent', 'notImportant');
        switch (importance.toLowerCase()) {
            case 'very urgent':
                taskItem.classList.add('veryUrgent');
                break;
            case 'not important':
                taskItem.classList.add('notImportant');
                break;
        }
    }
}