const input = document.querySelector('#input');
const alert = document.querySelector('#alert');
const submit = document.querySelector('#submit');
const ul = document.querySelector('#ul');
const clear = document.querySelector('#clear');


let listItems = []

clear.style.display = 'none';


// ==>> SUBMIT BUTTON FUNCTION

submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value === '' || input.value === ' ') {
        alert.innerHTML = 'Enter a value';
    }
    else {
        alert.innerHTML = '';
        clear.style.display = 'inline';

        let lists = input.value;
        listItems.push(lists);
        ul.innerHTML = ''
        // console.log(listItems);
        addTask()
    }
})


// ==>> LIST ITEMS ADD

function addTask() {

    for (let i = 0; i < listItems.length; i++) {
        lists = listItems[i];
        input.value = '';
        ul.innerHTML += (`<li  class="d-flex  justify-between"> <div> <i id="list-icon" class="fa-solid fa-circle-check"></i> &nbsp; ${lists} </div>   <div> <button  id="edit-btn" onclick="edits(${i})"><i class="fa-solid fa-file-pen"></i></button> <button  id="dlt-btn" onclick="deletes(${i})"><i class="fa-solid fa-trash"></i></button> </li> </div> <br>`);
    }
}


// ==>> LIST ITEM DELETE

function deletes(index) {
    listItems.splice(index, 1);
    ul.innerHTML = ''

    addTask()
}


// ==>> LIST ITEM EDIT

function edits(index) {
    listItems.splice(index, 1, prompt("Enter edited value"));
    ul.innerHTML = ''

    addTask()
}


// ==>> ALL LIST CLEAR

clear.addEventListener('click', () => {
    ul.innerHTML = ''
    clear.style.display = 'none';
})













































