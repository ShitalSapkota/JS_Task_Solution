const myClass = document.getElementsByClassName('myclass')
const myParagraph = document.getElementsByName('p')
const myId = document.getElementById('list')

const mySecondId = document.querySelector('#list')
const myClassOnly = document.querySelector('.myclass')
const mySecondClass = document.querySelectorAll('.myclass')

const button = document.querySelector('#button')


const headline = document.querySelector('h1')
console.log(headline);

console.log(myClass);
console.log(myParagraph);
console.log(myId);
console.log(mySecondId);
console.log(mySecondClass);

function myFunction(){
    console.log('Something');
}

function somethingToEat(){
    headline.textContent = 'Add Event Listener'
    console.log('hey something happened ..');
}

function changeHeadline(){
   headline.textContent = 'Change Headline Here...'
   console.log('wow, what just happened here...');
}

button.addEventListener('click', changeHeadline)


// can also done in only using one function..