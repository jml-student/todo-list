import './style.css';
import { 
    displayProjects,
    displayContent,
    applyProjectsBgColor,
    displayDeleteProjects,
    formState,
} from './dom.js';

export function updateStorage(Projects, currentProject) {
    localStorage.setItem('projects', JSON.stringify(Projects));
    localStorage.setItem('currentProject', currentProject);
}

function loadStorage() {
    const projects = localStorage.getItem('projects');
    if (projects) {
        return JSON.parse(projects);
    } else {
        return {};
    }
}

function loadCurrentProject() {
    const currentProject = localStorage.getItem('currentProject');
    if (currentProject) {
        return currentProject;
    } else {
        return '';
    }
}

(function() {
    let Projects = loadStorage();
    let currentProject = loadCurrentProject();

    function createTodoItem(title, description, dueDate, priority) {
        return {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            completed: false
        }
    };

    function setCurrentProject(project) {
        currentProject = project;
    }

    function addProject(projectName) {
        Projects[projectName] = [];
        setCurrentProject(projectName);
        displayProjects(Projects, setCurrentProject);
        applyProjectsBgColor(Projects, currentProject);
        updateStorage(Projects, currentProject);
    };

    const addProjectButton = document.getElementById('addProject');
    addProjectButton.addEventListener('click', () => {
        const projectInputDiv = document.querySelector('.project-input');
        projectInputDiv.showModal();
    });

    const closeProjectInput = document.querySelector('.close-project-input');
    closeProjectInput.addEventListener('click', () => {
        const projectInputDiv = document.querySelector('.project-input');
        projectInputDiv.close();
    });

    const projectForm = document.getElementById('projectForm');
    projectForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const projectInput = document.getElementById('projectInput');
        const projectValue = projectInput.value;
        projectInput.value = '';
        const projectInputDiv = document.querySelector('.project-input');
        projectInputDiv.close();
        addProject(projectValue);
        displayContent(Projects, currentProject);
    });

    const deleteProjectsButton = document.getElementById('deleteProjectsButton');
    deleteProjectsButton.addEventListener('click', () => {
        const deleteProjectsDialog = document.querySelector('.delete-projects');
        deleteProjectsDialog.showModal();
        displayDeleteProjects(Projects);
    });

    const closeDeleteProjects = document.querySelector('.close-delete-projects');
    closeDeleteProjects.addEventListener('click', () => {
        const deleteProjectsDialog = document.querySelector('.delete-projects');
        deleteProjectsDialog.close();
    });



    const itemForm = document.getElementById('itemForm');
    itemForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const itemTitleInput = document.getElementById('itemTitle');
        const itemTitle = itemTitleInput.value;
        itemTitleInput.value = '';

        const itemDesInput = document.getElementById('itemDes');
        const itemDes = itemDesInput.value;
        itemDesInput.value = '';

        const itemDateInput = document.getElementById('itemDate');
        const itemDate = itemDateInput.value;
        itemDateInput.value = '';

        const itemPrio = document.querySelector('input[name="itemPrio"]:checked').value;
        const itemPrioInputs = document.querySelectorAll('input[name="itemPrio"]');
        itemPrioInputs.forEach(input => {
            input.checked = false;
        });

        let item = createTodoItem(itemTitle, itemDes, itemDate, itemPrio);
        
        if (formState.itemFormMode === 'add') {
            Projects[currentProject].push(item);
            displayContent(Projects, currentProject);
        } else if (formState.itemFormMode === 'edit') {
            Projects[currentProject][formState.itemEditIndex] = item;
            displayContent(Projects, currentProject);
            formState.itemFormMode = 'add';
        }

        const itemInputDiv = document.querySelector('.item-input');
        itemInputDiv.close();

        updateStorage(Projects, currentProject);
    });

    const closeItemInput = document.querySelector('.close-item-input');
    closeItemInput.addEventListener('click', () => {
        const itemInputDiv = document.querySelector('.item-input');
        
        const itemTitleInput = document.getElementById('itemTitle');
        const itemTitle = itemTitleInput.value;        
        itemTitleInput.value = '';

        const itemDesInput = document.getElementById('itemDes');
        itemDesInput.value = '';

        const itemDateInput = document.getElementById('itemDate');
        itemDateInput.value = '';

        const itemPrioInputs = document.querySelectorAll('input[name="itemPrio"]');
        itemPrioInputs.forEach(input => {
            input.checked = false;
        });
        itemInputDiv.close();
    });

    if (!Projects['Todo']) {
        addProject('Todo');
        Projects.Todo.push(createTodoItem('Read Book', 'Read three chapters', '2024-07-02', 'Low'));
        Projects.Todo.push(createTodoItem('Plan Weekend Trip', 'Research and book activities', '2024-07-06', 'Mid'));
        Projects.Todo.push(createTodoItem('Pay Bills', 'Pay the utility and credit card bills', '2024-07-10', 'High'));
        displayContent(Projects, currentProject);
        updateStorage(Projects, currentProject);
    }

    displayProjects(Projects, setCurrentProject);
    displayContent(Projects, currentProject);
    applyProjectsBgColor(Projects, currentProject);
})();
