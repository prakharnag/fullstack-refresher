// const ul = document.querySelector('.items');

// // ul.firstElementChild.textContent = 'Hello'

// // ul.children[1].innerText = 'Prakhar';

// const btn = document.querySelector('.btn')

// btn.style.background = 'blue';

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector("#my-form").style.background = '#e97f7fff';

// });


//---------------
const myForm = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    
    if(name.value === '' || email.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields'

        setTimeout(() => msg.remove(),3000);
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `${name.value} : ${email.value}`
        ));
        userList.appendChild(li);
    }
    
    myForm.reset();
}



