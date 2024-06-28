export function displayProjects(Projects, setCurrentProject) {
    const sidebarGrid = document.querySelector('.sidebar-grid');
    sidebarGrid.innerHTML = '';
    Object.keys(Projects).forEach((key) => {
        let div = document.createElement('div');
        div.classList.add('project-item');
        div.textContent = key;
        div.id = key;
        sidebarGrid.appendChild(div);

        div.addEventListener('click', () => {
            setCurrentProject(key);
            displayContent(Projects, key);
            applyProjectsBgColor(Projects, key);
        })
    });
}

export function applyProjectsBgColor(Projects, currentProject) {
    Object.keys(Projects).forEach((key) => {
        let div = document.getElementById(key);
        if (key === currentProject) {
            div.style.backgroundColor = 'rgb(212, 212, 212)';
            div.style.borderLeft = '4px solid var(--main-black)';
            div.style.paddingLeft = '16px';
        } else {
            div.style.backgroundColor = 'rgb(238, 238, 238)';
            div.style.borderLeft = 'none';
            div.style.paddingLeft = '20px';
        }
    })
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

        let itemDes = document.createElement('div');
        itemDes.classList.add('item-des');
        itemDes.textContent = item.description;

        let itemDate = document.createElement('div');
        itemDate.classList.add('item-date');
        itemDate.textContent = item.dueDate;

        let itemPrio = document.createElement('div');
        itemPrio.classList.add('item-prio');
        itemPrio.textContent = item.priority;

        let itemStatusDiv = document.createElement('div');
        let itemStatusFirst = document.createElement('div');
        let itemStatusSecond = document.createElement('div');

        let itemButtonsDiv = document.createElement('div');
        itemButtonsDiv.classList.add('item-buttons-div');

        let itemEditButton = document.createElement('button');
        itemEditButton.classList.add('item-edit-button');

        let itemDeleteButton = document.createElement('button');
        itemDeleteButton.classList.add('item-delete-button');

        let itemArrowDiv = document.createElement('div');
        itemArrowDiv.classList.add('item-arrow-div');

        let itemArrowButton = document.createElement('button');
        itemArrowButton.classList.add('item-arrow-button');

        itemStatusDiv.appendChild(itemStatusFirst);
        itemStatusDiv.appendChild(itemStatusSecond);

        itemButtonsDiv.appendChild(itemEditButton);
        itemButtonsDiv.appendChild(itemDeleteButton);

        itemArrowDiv.appendChild(itemArrowButton);

        itemContainer.appendChild(itemTitle);
        itemContainer.appendChild(itemDes);
        itemContainer.appendChild(itemDate);
        itemContainer.appendChild(itemPrio);

        itemContainer.appendChild(itemStatusDiv);
        itemContainer.appendChild(itemButtonsDiv);
        itemContainer.appendChild(itemArrowDiv);

        content.appendChild(itemContainer);
    });
    
    const addItemDiv = document.createElement('div');
    addItemDiv.classList.add('button-container');
    const addItemButton = document.createElement('button');
    addItemButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"><path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" /></svg>';
    addItemButton.id = 'addItem';
    addItemButton.addEventListener('click', () => {
        const itemInputDiv = document.querySelector('.item-input');
        itemInputDiv.showModal();
    });
    addItemDiv.appendChild(addItemButton);
    content.appendChild(addItemDiv);
}