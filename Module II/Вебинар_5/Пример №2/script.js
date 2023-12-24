let englishWords = ['pen', 'pineannple', 'apple', 'pear'];

let russianWords = ['ручка', 'ананас', 'яблоко', 'груша'];

let wordsContainer = document.getElementById('wordsContainer');


// Выбранная карточка
let selectedWord = null;

// Модальное окно
const modalForm = document.getElementById("modalForm");

 for (let i = 0; i < englishWords.length; i++) {
    let wordBlock = document.createElement('div');
	wordBlock.title = "Дважды кликните, чтобы удалить";
    let wordBlockHTML = '<h3>' + englishWords[i] + '</h3>' + '<p>' + russianWords[i] + '</p>';
	wordBlock.classList.add("wordBlockHTML");
    wordBlock.innerHTML = wordBlockHTML;
    wordsContainer.appendChild(wordBlock);

	wordBlock.addEventListener('dblclick', (e) => {
		e.currentTarget.remove();
	})

	wordBlock.addEventListener('contextmenu', (e) => {
		modalForm.style.visibility = 'visible';
		modalForm.style.opacity = '1';

		let modalInputEnglish = document.getElementById("modalInputEnglish");
		let modalInputRussian = document.getElementById("modalInputRussian");

		modalInputEnglish.value = wordBlock.querySelector("h3").textContent;
		modalInputRussian.value = wordBlock.querySelector("p").textContent;

		selectedWord = wordBlock;
	})
}

const form = document.getElementById("wordForm");
form.addEventListener("submit", (e) => {
	e.preventDefault();

	let englishWordInput = document.getElementById("englishWordInput");
	let russianWordInput = document.getElementById("russianWordInput");

	englishWords.push(englishWordInput.value);
	russianWords.push(russianWordInput.value);

	let wordBlock = document.createElement('div');
	wordBlock.title = "Дважды кликните, чтобы удалить";
	let wordBlockHTML = '<h3>' + englishWordInput.value + '</h3>' + '<p>' + russianWordInput.value + '</p>';

	wordBlock.classList.add("wordBlockHTML");
	wordBlock.innerHTML = wordBlockHTML;
	wordsContainer.appendChild(wordBlock);

	wordBlock.addEventListener('dblclick', (e) => {
		e.currentTarget.remove();
	})

	wordBlock.addEventListener('contextmenu', (e) => {
		modalForm.style.visibility = 'visible';
		modalForm.style.opacity = '1';

		let modalInputEnglish = document.getElementById("modalInputEnglish");
		let modalInputRussian = document.getElementById("modalInputRussian");

		modalInputEnglish.value = wordBlock.querySelector("h3").textContent;
		modalInputRussian.value = wordBlock.querySelector("p").textContent;

		selectedWord = wordBlock;
	})
})

document.getElementById("modalClose").addEventListener("click", () => {
	modalForm.style.visibility = 'hidden';
	modalForm.style.opacity = '0';
})

document.getElementById("modalForm").addEventListener("submit", (e) => {
	e.preventDefault();

	selectedWord.querySelector("h3").textContent = modalInputEnglish.value;
	selectedWord.querySelector("p").textContent = modalInputRussian.value;

	modalForm.style.visibility = 'hidden';
	modalForm.style.opacity = '0';
})