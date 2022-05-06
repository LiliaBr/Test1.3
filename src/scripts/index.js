
// function readMore() {
//   var dots = document.getElementById("dots");
//   var more = document.getElementById("more");
//   var btn = document.getElementById("btn");

//   if (dots.style.display === "none") {
//     dots.style.display="inline";
//     btn.innerHTML="Читать далее";
//     more.style.display="none";
//   } else {
//     dots.style.display="none"
//     btn.innerHTML="Скрыть";
//     more.style.display="inline";
//   }
// }

// readMore();

window.onload = function() {
  
  //записываем DOM элемент в переменную*
  btn = document.querySelector('.section__read-more');

  //записываем DOM элемент в переменную*
  text = document.querySelector('.more');

  //событие клик по нашему DOM элементу*
  btn.onclick = function () {
    
  //элементу добавляем/удаляем класс (toggle)
  //есть ещё add/remove, но toggle делает проверку
  //если класса нет - добавляет, если есть - удаляет
  text.classList.toggle('open');
}
  
}