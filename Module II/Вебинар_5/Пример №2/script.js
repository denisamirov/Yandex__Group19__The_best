let englishWords = ['pen', 'pineannple', 'apple', 'pear'];

let russianWords = ['ручка', 'ананас', 'яблоко', 'груша'];

let wordsContainer = document.getElementById('wordsContainer');

// Модальное окно
const modalForm = document.getElementById("modalForm");

 for (let i = 0; i < englishWords.length; i++) {
    let wordBlock = document.createElement('div');
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

		let modalInputEnglish = document.getElementsByName("english")[0];
		let modalInputRussian = document.getElementsByName("russian")[0];

		modalInputEnglish.value = englishWordInput.value;
		modalInputRussian.value = russianWordInput.value;
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

		let modalInputEnglish = document.getElementsByName("english")[0];
		let modalInputRussian = document.getElementsByName("russian")[0];

		modalInputEnglish.value = englishWordInput.value;
		modalInputRussian.value = russianWordInput.value;
	})
})

document.getElementById("modalClose").addEventListener("click", () => {
	modalForm.style.visibility = 'hidden';
	modalForm.style.opacity = '0';
})