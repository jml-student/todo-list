import './style.css'

todoListItems = [];

function createTodoItem(title, description, dueDate, priority) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        checked: false
    }
}



