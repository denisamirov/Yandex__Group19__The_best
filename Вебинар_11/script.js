let buttonSearch = document.getElementById("button_search");
let textField = document.getElementById("text_field");
let containerCards = document.getElementById("container__cards");

buttonSearch.addEventListener('click', search)
buttonSearch.addEventListener('click', changeField)

function search() {
    let title = textField.value;
    fetch(`http://www.omdbapi.com?apikey=64405bd2&s=${title}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (i in data.Search) {
            containerCards.insertAdjacentHTML("afterbegin", `<div class="card">
                                        <img src="${data.Search[i].Poster}">
                                        <h3>${data.Search[i].Title}</h3>
										<h4>Год: ${data.Search[i].Year}</h4>
                                </div>`)
        }
        
    });
}

function changeField() {
    containerCards.innerHTML = ''
}