//получение элементов html
const title = document.getElementById("title");
const description = document.getElementById("description");
const str = document.getElementById("str");
const agi = document.getElementById("agi");
const hp = document.getElementById("hp");
const int = document.getElementById("int");


const getUserButton = document.getElementById("getUserButton");

//добавление слушателя событий к кнопке
getUserButton.addEventListener("click", ()=>{
  
  //получение данных с сервера
  fetch('https://api-code.practicum-team.ru/heroes?studentEmail=')
  .then(response => response.json())
  .then(data => processData(data))
  .catch(error => console.error('Fetch error:', error));
  
  
})


//обработка полученных данных

function processData(data) {
    let id = Math.floor(Math.random()*data.length)
    let hero = data[id]

    str.textContent = hero.str;
    hp.textContent = hero.hp;
    agi.textContent = hero.agi;
    int.textContent = hero.int;
    title.textContent = hero.title;
    description.textContent = hero.description;

    console.log(id, data)
  }


  //Открыте API
  //https://api.sampleapis.com/futurama/info
  //https://jsonplaceholder.typicode.com/
  //https://openweathermap.org/api
  //https://dev.vk.com/ru/guide