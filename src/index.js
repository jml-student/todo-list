import './style.css'

(function() {
    let Projects = {};
    let currentProject = '';

    function createTodoItem(title, description, dueDate, priority) {
        return {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            checked: false
        }
    };

    function addProject(projectName) {
        const sidebarGrid = document.querySelector('.sidebar-grid');
        sidebarGrid.innerHTML = '';
        Projects[projectName] = [];
        Object.keys(Projects).forEach((key) => {
            const div = document.createElement('div');
            div.classList.add('project-item');
            div.textContent = key;
            sidebarGrid.appendChild(div);
        });
        currentProject = projectName;
    };

    function displayContent(project) {
        const content = document.querySelector('.content');
        content.innerHTML = '';
        Projects[project].forEach((item) => {
            let itemContainer = document.createElement('div');
            itemContainer.classList.add('item-container');
            let itemTitle = document.createElement('div');
            itemTitle.classList.add('item-title');
            itemTitle.textContent = item.title;

            itemContainer.appendChild(itemTitle);
            content.appendChild(itemContainer);
        });
        const addItemDiv = document.createElement('div');
        const addItemButton = document.createElement('button');
        addItemButton.addEventListener('click', () => {
            const itemInputDiv = document.querySelector('.item-input');
            itemInputDiv.style.display = 'block';
        });
        addItemButton.textContent = '+';
        addItemButton.id = 'addItem';
        addItemDiv.appendChild(addItemButton);
        content.appendChild(addItemDiv);
    };

    const addButton = document.getElementById('addProject');
    addButton.addEventListener('click', () => {
        let projectInputDiv = document.querySelector('.project-input');
        projectInputDiv.style.display = 'block';
    });

    const submitButton = document.getElementById('submitProject');
    submitButton.addEventListener('click', () => {
        const projectInput = document.getElementById('projectInput');
        const projectValue = projectInput.value;
        projectInput.value = '';
        const projectInputDiv = document.querySelector('.project-input');
        projectInputDiv.style.display = 'none';
        addProject(projectValue);
    });

    const closeInput = document.querySelector('.close-project-input');
    closeInput.addEventListener('click', () => {
        const projectInputDiv = document.querySelector('.project-input');
        projectInputDiv.style.display = 'none';
    });

    addProject('Todo');
    Projects.Todo.push(createTodoItem('first', 'nothing', 20, 'normal'));
    console.log({Projects});
    displayContent('Todo');
})();
