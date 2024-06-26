import './style.css';
import { 
    clearSidebar,
    displayProjects,
} from './dom';

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
        clearSidebar(sidebarGrid);
        Projects[projectName] = [];
        displayProjects(Projects, sidebarGrid);
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
        addItemButton.textContent = '+';
        addItemButton.id = 'addItem';
        addItemButton.addEventListener('click', () => {
            const itemInputDiv = document.querySelector('.item-input');
            itemInputDiv.style.display = 'block';
        });
        addItemDiv.appendChild(addItemButton);
        content.appendChild(addItemDiv);
    };

    const addProjectButton = document.getElementById('addProject');
    addProjectButton.addEventListener('click', () => {
        const projectInputDiv = document.querySelector('.project-input');
        
        projectInputDiv.style.display = 'block';
    });

    const submitProjectButton = document.getElementById('submitProject');
    submitProjectButton.addEventListener('click', () => {
        const projectInput = document.getElementById('projectInput');
        const projectValue = projectInput.value;
        projectInput.value = '';
        const projectInputDiv = document.querySelector('.project-input');
        projectInputDiv.style.display = 'none';
        addProject(projectValue);
    });

    const closeProjectInput = document.querySelector('.close-project-input');
    closeProjectInput.addEventListener('click', () => {
        const projectInputDiv = document.querySelector('.project-input');
        projectInputDiv.style.display = 'none';
    });

    const closeItemInput = document.querySelector('.close-item-input');
    closeItemInput.addEventListener('click', () => {
        const itemInputDiv = document.querySelector('.item-input');
        itemInputDiv.style.display = 'none';
    });

    const submitItemButton = document.getElementById('submitItem');
    submitItemButton.addEventListener('click', () => {
        //
    })

    addProject('Todo');
    Projects.Todo.push(createTodoItem('first', 'nothing', 20, 'normal'));
    console.log({Projects});
    displayContent('Todo');
})();
