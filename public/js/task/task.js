document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");
    const message = document.getElementById("message");
    let messageTimeout = null;

    function showMessage(text, isError = false) {
        message.textContent = text;
        message.classList.remove('text-green-600', 'text-red-600');
        message.classList.add(isError ? 'text-red-600' : 'text-green-600');
        if (messageTimeout) clearTimeout(messageTimeout);
        messageTimeout = setTimeout(() => {
            message.textContent = '';
            message.classList.remove('text-green-600', 'text-red-600');
        }, 5000);
    }

    function fetchTasks() {
        fetch('/tasks/fetch-tasks')
            .then(res => res.json())
            .then(tasks => {
                taskList.innerHTML = '';
                tasks.forEach(task => {
                    const li = document.createElement("li");
                    li.className = "mb-2 p-2 bg-gray-100 rounded";
                    li.innerText = `${task.title}: ${task.description}`;
                    taskList.appendChild(li);
                });
            })
            .catch(error => {
                showMessage('Error: ' + error.message, true);
            });
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = {
            title: form.title.value,
            description: form.description.value
        };

        fetch('/tasks/create-task', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    showMessage('Error: ' + data.error, true);
                } else {
                    showMessage('Task created successfully!');
                    form.reset();
                    fetchTasks();
                }
            })
            .catch(error => {
                showMessage('Error: ' + error.message, true);
            });
    });

    fetchTasks();
});
