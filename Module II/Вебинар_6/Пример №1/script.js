const img = document.querySelector(".container__image img")
const health__level = document.querySelector(".health__level")
const magic__level = document.querySelector(".magic__level")
const name_ = document.querySelector(".name_")


const hero = {
    name: "Hendalf",
    img: "https://klike.net/uploads/posts/2023-01/1674793841_3-29.jpg",
    health: 98.98,
    magic: 99,
    hi: function() {
        alert("hello!")
    }
}

img.src = hero.img;
name_.textContent = hero.name;
health__level.textContent = hero.health;
magic__level.textContent = hero.magic;


// hero.hi()
