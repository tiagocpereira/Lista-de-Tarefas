const inputElement = document.querySelector(".new-task-input");
const addTasKButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector('.tasks-container');

const validateInput = () => inputElement.ariaValueMax.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validateInput();

    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }

    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');

    const taskContent = document.createElement('p');
    taskContent.innerText = inputElement.value;

    const deleteItem = document.createElement('i');
    deleteItem.classList.add('fa-regular');
    deleteItem.classList.add('fa-trash-can');

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    tasksContainer.appendChild(taskItemContainer);

    inputElement.value = "";

};

const handleInputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid) {
        return inputElement.classList.remove("error");
    }
}


addTasKButton.addEventListener("click" , () => handleAddTask());

inputElement.addEventListener("change",  () => handleInputChange ());