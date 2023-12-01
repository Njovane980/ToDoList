let newTaskInput = document.getElementById('new-task');
let taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
  let taskText = newTaskInput.value.trim();

  if (taskText !== '') {
    let li = document.createElement('li');
    li.textContent = taskText;

    // Add a button to remove the task
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      li.remove();
    });

    li.append(removeButton);
    taskList.append(li);

    // Clearing the input field
    newTaskInput.value = '';
  }
}

newTaskInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
