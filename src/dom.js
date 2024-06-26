export function clearSidebar(sidebarGrid) {
    sidebarGrid.innerHTML = '';
}

export function displayProjects(Projects, sidebarGrid) {
    Object.keys(Projects).forEach((key) => {
        const div = document.createElement('div');
        div.classList.add('project-item');
        div.textContent = key;
        sidebarGrid.appendChild(div);
    });
}