const inputElement = document.querySelector(".new-task-input");
const addTasKButton = document.querySelector(".new-task-button");

const validateInput = () => inputElement.ariaValueMax.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validateInput();

    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }
};

const handleInputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid) {
        return inputElement.classList.remove("error");
    }
}


addTasKButton.addEventListener("click" , () => handleAddTask());

inputElement.addEventListener("change",  () => handleInputChange ());