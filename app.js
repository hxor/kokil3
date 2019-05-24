// Definisi varibel untuk element
const form      = document.querySelector('#form-task');
const taskList  = document.querySelector('.list-group');
const clearBtn  = document.querySelector('.task-delete');
const taskInput = document.querySelector('#input-task');


// Memanggil seluruh event listener
loadEventListeners();

// Membuat event listener
function loadEventListeners() {
    // Menambahkan event submit pada form dengan fungsi addTask
    form.addEventListener('submit', addTask);
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
        // Membuat Element Button Delete
        const button = document.createElement('button');
        // Menambhakan class dalam button delete
        button.className = 'float-right btn btn-danger btn-sm delete-task';
        button.appendChild(document.createTextNode('x'));
        // Sisipkan Button ke element li
        li.appendChild(button);

        // Sisipkan element li yang sudah dibuat ke elemen ul
        taskList.appendChild(li);
        // console.log(li);

        // Clear Input
        taskInput.value = '';

    }
}