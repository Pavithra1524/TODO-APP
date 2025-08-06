const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

// Add task on Enter key
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement('li');

  li.textContent = taskText;

  // Toggle complete on click
  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // Edit button
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit-btn');
  editBtn.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent mark as complete
    const newTaskText = prompt("Edit your task:", li.firstChild.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
      li.firstChild.textContent = newTaskText.trim();
    }
  });

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove-btn');
  removeBtn.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent mark as complete
    li.remove();
  });

  li.appendChild(editBtn);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}
/* Make the todo list box bigger */
const todoBox = document.getElementById('todoBox');
if (todoBox) {
    todoBox.style.width = '400px';
    todoBox.style.minHeight = '300px';
}