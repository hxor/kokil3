// Definisi varibel untuk element
const form      = document.querySelector('#form-task');
const taskList  = document.querySelector('.list-group');
const clearBtn  = document.querySelector('#clear-task');
const taskInput = document.querySelector('#input-task');


// Memanggil seluruh event listener
loadEventListeners();

// Membuat event listener
function loadEventListeners() {
    // Menambahkan event submit pada form dengan fungsi addTask
    form.addEventListener('submit', addTask);

    // Menambahkan event delete task
    taskList.addEventListener('click', deleteTask);

    // Menambahkan event clear task
    clearBtn.addEventListener('click', clearTask);
}

// Fungsi addTask
function addTask(e) {
    e.preventDefault();

    if (taskInput.value === '') {
        alert('Input task tidak boleh kosong!');
    } else {
        // Membuat Element li
        const li = document.createElement('li');
        // Menambahkan class dalam element li
        li.className = 'list-group-item';
        // Membuat Text Node dan Menyisipkannya dalam element li
        li.appendChild(document.createTextNode(taskInput.value));
        // Membuat Element link untuk fungsi Delete
        const link = document.createElement('a');
        // Memberikan nilai href dengan #
        link.href = "#";
        // Menambhakan class dalam button delete
        link.className = 'float-right delete-task';
        // Menambahkan icon minus untuk button link
        link.innerHTML = '<i class="fas fa-minus-square"></i>';
        // Sisipkan link button ke element li
        li.appendChild(link);

        // Sisipkan element li yang sudah dibuat ke elemen ul
        taskList.appendChild(li);
        // console.log(li);

        // Clear Input
        taskInput.value = '';

    }
}

// Fungsi deleteTask
function deleteTask(e) {
    if (e.target.parentElement.classList.contains('delete-task')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Fungsi Clear Task
function clearTask() {
    taskList.innerHTML = '';
}