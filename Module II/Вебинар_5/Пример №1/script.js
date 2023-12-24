document.body.oncopy = funcOk


function funcOk() {
    let a = navigator.clipboard.readText()
    //Подробнее про навигатор https://metanit.com/web/javascript/7.5.php
    a.then(res => navigator.clipboard.writeText(`Что-то ${res}`))
}