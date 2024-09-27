/* 
Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/



const text = document.getElementById('content')
const button = document.querySelector('button')

function changeContent(){
    text.textContent = 'Hello, World!';
    button.style.color = 'red'
    text.style.color = 'Blue'
    ///text.remove() : to remove text 
}

//button.addEventListener('click', changeContent);