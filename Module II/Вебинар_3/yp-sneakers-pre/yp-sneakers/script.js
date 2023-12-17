let listItem = document.querySelectorAll('[data-sold="true"')

for (i in listItem) {
    if (listItem[i].style != undefined) {
        listItem[i].style.background = 'black';
        listItem[i].style.color = 'white';
        console.log('Этот элемент имеет атрибут data-sold со значением true', listItem[i])
    }
}