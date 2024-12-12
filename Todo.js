let inp = document.querySelector('#input_List');
let btn = document.querySelector('button');
let ul = document.querySelector('.Ul_List');

function AddTask() {
    let value = inp.value.trim(); 
    if (value === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement('li');
    li.innerHTML = value;

    let span = document.createElement("span");
    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash");  
    span.appendChild(icon);  
    li.appendChild(span);

    ul.appendChild(li);

    inp.value = "";

    
    li.addEventListener('click', () => {
        li.classList.toggle('list_style'); 
    });


    li.addEventListener('dblclick', () => {
        ul.removeChild(li); 
    });
}
