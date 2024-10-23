const cardcontainer = document.querySelector('.container');

function createCard(robot){
  const card = document.createElement("div");
  card.classList.add("card");
  const image = document.createElement("img");
  image.src = `https://robohash.org/${robot.id}?set=set4`;
  card.appendChild(image);
  const cardText = document.createElement("div");
  cardText.innerHTML = `<p><b>Name:</b> ${robot.name}</p>
              <p><b>Email:</b> ${robot.email}</p>
              <p><b>UserName:</b> ${robot.username}</p>`;
  card.appendChild(cardText);
  
  cardcontainer.appendChild(card);    
} 

async function fetchPerson() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json()
  data.forEach(robot => createCard(robot))
}
fetchPerson();

// persons project is for displaying individual data of the user
// In this case User is 🤖 Robot