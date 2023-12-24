let englishWords = ['pen', 'pineannple', 'apple', 'pear'];

let russianWords = ['ручка', 'ананас', 'яблоко', 'груша'];

let wordsContainer = document.getElementById('wordsContainer');

 for (let i = 0; i < englishWords.length; i++) {
    let wordBlock = document.createElement('div');
    let wordBlockHTML = '<h3>' + englishWords[i] + '</h3>' + '<p>' + russianWords[i] + '</p>';
	wordBlock.classList.add("wordBlockHTML");
    wordBlock.innerHTML = wordBlockHTML;
    wordsContainer.appendChild(wordBlock);

	wordBlock.addEventListener('dblclick', (e) => {
		e.currentTarget.remove();
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
})