// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS *******
// submit form
form.addEventListener('submit', addItem);

// ****** FUNCTIONS *************
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString(); //using milliseconds as unique id for item

    //value !== '' && editFlag === false
    if (value && !editFlag){
        const element = document.createElement('article'); // article because we have article in index.html

        // add class
        element.classList.add('grocery-item');
        //add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(atrr);
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <!- - edit btn - ->
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <!- - delete btn - ->
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>`;

        //append child
        list.appendChild(element);
        // display alert
        displayAlert('item added to the list', 'success');
        //show conatiner
        container.classList.add('show-container');
    }
    else if (value && editFlag) {
        console.log("editing");
    }
    else {
        displayAlert("Please enter value", 'danger');
    }
}

// display alert
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1000)
}

// ****** LOCAL STORAGE *********

// ****** SETUP ITEMS ***********
