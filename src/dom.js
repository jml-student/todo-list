export function displayProjects(Projects, currentProject) {
    const sidebarGrid = document.querySelector('.sidebar-grid');
    sidebarGrid.innerHTML = '';
    Object.keys(Projects).forEach((key) => {
        let div = document.createElement('div');
        div.classList.add('project-item');
        div.textContent = key;
        sidebarGrid.appendChild(div);

        div.addEventListener('click', () => {
            currentProject = key;
            displayContent(Projects, currentProject);
        })
    });
}

export function displayContent(Projects, project) {
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
        itemInputDiv.showModal();
    });
    addItemDiv.appendChild(addItemButton);
    content.appendChild(addItemDiv);
}