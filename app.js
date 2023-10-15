const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const ul = document.querySelector('#ul');
const clear = document.querySelector('#clear');


let listItems = []


clear.style.display = 'none';

submit.addEventListener('click', (e) => {
    e.preventDefault();
    
    clear.style.display = 'inline';

    let lists = input.value;
    listItems.push(lists);
    ul.innerHTML = ''
    // console.log(listItems);
    addTask()
})


function addTask() {

    for (let i = 0; i < listItems.length; i++) {
        lists = listItems[i];
        input.value = '';
        ul.innerHTML += (`<li> ${lists} <button  id="edit-btn" onclick="edits(${i})"><i class="fa-solid fa-file-pen"></i></button> <button  id="dlt-btn" onclick="deletes(${i})"><i class="fa-solid fa-trash"></i></button> </li> <br/>`);
    }
}


function deletes(index) {
    listItems.splice(index, 1);
    ul.innerHTML = ''

    addTask()
}


function edits(index) {
    listItems.splice(index, 1, prompt("Enter edited value"));
    ul.innerHTML = ''

    addTask()
}


clear.addEventListener('click', () => {
    ul.innerHTML = ''
    clear.style.display = 'none';
})













































