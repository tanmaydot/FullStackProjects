const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');
const deleteListButton = document.querySelector("[data-delete-list-button]");
const listDisplayContainer = document.querySelector('[data-list-display-container]')
const listTitleElement = document.querySelector('[data-list-title]');
const listCountElement = document.querySelector("[data-list-count]");
const taskContainer = document.querySelector("[data-tasks]");
const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);
const selectedList = lists.find((list) => list.id === selectedListId);
const taskTemplate = document.getElementById('task-template')
const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector("[data-new-task-input]");
const clearCompleteTasksButton = document.querySelector("[data-clear-complete-task-button]");

listContainer.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'li') {
        selectedListId = e.target.dataset.listId;
        saveAndrender();
    }
})

taskContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedList = lists.find((list) => list.id === selectedListId);
    if (selectedList && selectedList.tasks) {
      const selectedTask = selectedList.tasks.find(
        (task) => task.id === e.target.id
      );
      selectedTask.complete = e.target.checked;
      save();
      renderTaskCount(selectedList);
    }
  }
});

clearCompleteTasksButton.addEventListener('click', e => {
    const selectedList = lists.find(list => list.id === selectedListId);
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete);
    saveAndrender();
})

deleteListButton.addEventListener("click", (e) => {
    lists = lists.filter((list) => list.id !== selectedListId);
    selectedListId = null;
    localStorage.removeItem(LOCAL_STORAGE_LIST_KEY);
    saveAndrender();
});


newListForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === "") return;
  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);
  saveAndrender();
});

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  if (taskName == null || taskName === "") return;
  const task = createTask(taskName);
  newTaskInput.value = null;
  const selectedList = lists.find((list) => list.id === selectedListId);
  if (!selectedList) return;
  if (!selectedList.tasks) selectedList.tasks = [];
  selectedList.tasks.push(task);
  saveAndrender();
});

const createList = (name) => {
    return { id: Date.now().toString(), name: name, task: [] }
}

const createTask = (name) => {
  return { id: Date.now().toString(), name: name, complete: false };
};

const saveAndrender = () => {
    save();
    render();
}

const save = () => {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
}

const render = () => {
    if (!listContainer) return;
    clearElement(listContainer);
    renderLists();  
    if(selectedListId == null) {
        listDisplayContainer.style.display = 'none';
    } else {
        listDisplayContainer.style.display = '';
        if (selectedList) {
          listTitleElement.innerText = selectedList.name;
        }
        renderTaskCount(selectedList);
        clearElement(taskContainer);
        renderTasks(selectedList)
    }
}

const renderTasks = (selectedList) => {
    if (!selectedList || !selectedList.tasks) return;
    selectedList.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector("input");
    checkbox.id = task.id;
    checkbox.checked = task.complete;
    const label = taskElement.querySelector("label");
    label.htmlFor = task.id;
    label.append(task.name);
    taskContainer.appendChild(taskElement);
  });
};


const renderTaskCount = () => {
    if (!selectedList) return;
    const incompleteTaskCount = (selectedList.tasks || []).filter(
      (task) => !task.complete
    ).length;
    const taskString = incompleteTaskCount === 1 ? "task" : "tasks";
    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`
}

const renderLists = () => {
    lists.forEach((list) => {
      const listElement = document.createElement("li");
      listElement.dataset.listId = list.id;
      listElement.classList.add("list-name");
      listElement.innerText = list.name;
      if (list.id === selectedListId) {
        listElement.classList.add("active-list");
      }
      listContainer.appendChild(listElement);
    });
}

const clearElement = (element) => {
  if (!element) return;
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render()