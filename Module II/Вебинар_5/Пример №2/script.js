let englishWords = ['pen', 'pineannple', 'apple', 'pear'];

let russianWords = ['ручка', 'ананас', 'яблоко', 'груша'];

let wordsContainer = document.getElementById('wordsContainer');

 for (let i = 0; i < englishWords.length; i++) {
    let wordBlock = document.createElement('div');
    let wordBlockHTML = '<h3>' + englishWords[i] + '</h3>' + '<p>' + russianWords[i] + '</p>';
	wordBlock.classList.add("wordBlockHTML");
    wordBlock.innerHTML = wordBlockHTML;
    wordsContainer.appendChild(wordBlock);

	wordBlock.addEventListener('click', (e) => {
		e.currentTarget.remove();
	})
}