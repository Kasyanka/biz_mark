// левый блик избранное
let favorites = document.querySelector('.left_bl-2')
let favoritesOpen = document.querySelector('.left_open-bl-2')
let favoritesClouse = document.querySelector('.left_clouse-bl-2')

let liFavorites = favorites.querySelectorAll('li').length
console.log(liFavorites)

favoritesOpen.addEventListener('click', function() {
  favorites.style.height = (liFavorites * 40) + 'px'
  favoritesOpen.style.display = 'none'
  favoritesClouse.style.display = 'block'
})

favoritesClouse.addEventListener('click', function() {
  favoritesClouse.style.display = 'none'
  favoritesOpen.style.display = 'block'
  favorites.style.height = 160 + 'px'
})

// левый блок команды

let team = document.querySelectorAll('.left_team')

team.forEach((elem)=>{
  let blLine = elem.querySelector('.left_bl-line')
  let naims = elem.querySelector('.left_naims')

  blLine.addEventListener('click', function() {
    naims.classList.toggle('left_naims-block')
  })
})


//кнопка старт


let ss = document.querySelectorAll('.item-dr_ss')

ss.forEach((el)=>{
el.addEventListener('click', function() {
  el.classList.toggle('item-dr_start')
  el.classList.toggle('item-dr_stop')
})
})


//кнопки старт с таймером
let timerss = document.querySelector('.item-dr_timer')
let vperedss = timerss.querySelector('.vperedss')
let sanovkass = timerss.querySelector('.sanovkass')

vperedss.addEventListener('click', function() {
  vperedss.classList.toggle('timer-none')
  sanovkass.classList.toggle('timer-none')
})

  sanovkass.addEventListener('click', function() {
    vperedss.classList.toggle('timer-none')
    sanovkass.classList.toggle('timer-none')

})

// кнопка задача сделана


let tops = document.querySelectorAll('.item-dr_top')
console.log(tops)

var values = JSON.parse(localStorage.getItem('values'));
if (!values) {
    localStorage.setItem('values',JSON.stringify(Array(tops.length).fill(false)));
    values = JSON.parse(localStorage.getItem('values'));
}

tops.forEach((el, index)=>{
  console.log(el)
  console.log(index);

  let icoTitle = el.querySelector('.item-dr_ico-title')

  if (values[index]) {
      icoTitle.classList.add('item-dr_ico-end')
      icoTitle.classList.remove('item-dr_ico-start')
  }
  else {
    icoTitle.classList.add('item-dr_ico-start')
    icoTitle.classList.remove('item-dr_ico-end')
  }

  console.log(icoTitle)
  if (icoTitle.classList.contains('item-dr_ico-end')){
    el.style.opacity = 0.5
  }

  icoTitle.addEventListener('click', function() {

    values[index] = !values[index]
    localStorage.setItem('values',JSON.stringify(values));
    icoTitle.classList.toggle('item-dr_ico-start')
    icoTitle.classList.toggle('item-dr_ico-end')

    if(icoTitle.classList.contains('item-dr_ico-end')){
      el.style.opacity = 0.5
      } else {el.style.opacity = 1}
})
})

// кода для второго меню с бургером
const navIconHdr2 = document.querySelector('.hdr-2 .nav2-icon');
const navHdr2 = document.querySelector('.hdr-2 .nav2');
const navIconHdr1 = document.querySelector('.hdr-1 .nav1-icon');
const navHdr1 = document.querySelector('.hdr-1 .nav1');
const nav2 = document.querySelector('.nav2');
const navIco2 = document.querySelector('.nav2-icon');
const nav1 = document.querySelector('.nav1');
const navIco1 = document.querySelector('.nav1-icon');


navIconHdr2.addEventListener('click', function () {
	this.classList.toggle('nav2-icon--active');
	navHdr2.classList.toggle('nav2--active');
  nav1.classList.remove('nav1--active')
  navIco1.classList.remove('nav1-icon--active')
});

navIconHdr1.addEventListener('click', function () {
	this.classList.toggle('nav1-icon--active');
	navHdr1.classList.toggle('nav1--active');
  nav2.classList.remove('nav2--active')
  navIco2.classList.remove('nav2-icon--active')
});


// завенршить работу

const navTop = document.querySelectorAll('.nav_top');

navTop.forEach((el)=>{

  let nav3 = el.querySelector('.nav_3')
  let nav4 = el.querySelector('.nav_4')

  nav3.addEventListener('click', function () {
    nav3.classList.toggle('nav_none');
	  nav4.classList.toggle('nav_none');
  })
    nav4.addEventListener('click', function () {
      nav3.classList.toggle('nav_none');
      nav4.classList.toggle('nav_none');
  })

})

//секундомер

var timer = 0;
var timerInterval;
var ms = document.getElementById('ms');
var second = document.getElementById('second');
var minute = document.getElementById('minute');

function vpered() {
  sanovka();
  timerInterval = setInterval(function() {
  timer += 1/60;
  msVal = Math.floor((timer - Math.floor(timer))*100);
  secondVal = Math.floor(timer) - Math.floor(timer/60) * 60;
  minuteVal = Math.floor(timer/60);
  ms.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
  second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
  minute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
  }, 1000/60);
}

function sanovka() {
  clearInterval(timerInterval);
}


// Находим ссылки внутри мобильной навигации
// const navLinksHdr2 = document.querySelectorAll('.hdr-2 .nav a');

// // Обходим ссылки методом forEach
// navLinksHdr2.forEach(function (item) {
// 	// Для каждой ссылки добавляем прослушку по событию "Клик"
// 	item.addEventListener('click', function () {
// 		navIconHdr2.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
// 		navHdr2.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
// 	})
// })

// кода для второго меню с бургером




// // Находим ссылки внутри мобильной навигации
// const navLinksHdr1 = document.querySelectorAll('.hdr-1 .nav a');

// // Обходим ссылки методом forEach
// navLinksHdr1.forEach(function (item) {
// 	// Для каждой ссылки добавляем прослушку по событию "Клик"
// 	item.addEventListener('click', function () {
// 		navIconHdr1.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
// 		navHdr1.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
// 	})
// })
//перетаскивание задач в столбики
//
// const itemDr1 = document.querySelector('.item-dr-1')
// let placeholders = document.querySelectorAll('.whitebl_col')
// console.log(itemDr1)
//
//
//
// itemDr1.addEventListener ('dragstart', dragStartLuboe)
// itemDr1.addEventListener ('dragend', dragEndLuboe)
//
//
// for (const placeholder of placeholders){
// 	placeholder.addEventListener('dragover', dragOverLuboe)
// 	placeholder.addEventListener('dragenter', dragEnterLuboe)
// 	placeholder.addEventListener('dragleave', dragLeaveLuboe)
// 	placeholder.addEventListener('drop', dropLuboe)
// }
//
// function dragStartLuboe(elem){
// 	// console.log('drag start', event.target)
// 	setTimeout(() => elem.target.classList.add('hide'), 0)
// }
//
// function dragEndLuboe(elem){
// 	// console.log('drag end')
// 	elem.target.classList.remove('hide')
//
// }
//
// function dragOverLuboe(elem){
// 	elem.preventDefault()
// 	console.log('drag over')
// }
// function dragEnterLuboe(elem){
// 	console.log('drag enter')
// 	elem.target.classList.add('hovered')
//
// }
// function dragLeaveLuboe(elem){
// 	console.log('drag leave')
// 	elem.target.classList.remove('hovered')
// }
//
// function dropLuboe(elem){
// 	elem.target.append(itemDr1)
// 	console.log('drag drop')
// }


//


// const itemDr1 = document.querySelector('.item-dr-1')
// let placeholders = document.querySelectorAll('.whitebl_col')

// itemDr1.addEventListener ('dragstart', dragStartLuboe)
// itemDr1.addEventListener ('dragend', dragEndLuboe)


// for (const placeholder of placeholders){
// 	placeholder.addEventListener('dragover', dragOverLuboe)
// 	placeholder.addEventListener('dragenter', dragEnterLuboe)
// 	placeholder.addEventListener('dragleave', dragLeaveLuboe)
// 	placeholder.addEventListener('drop', dropLuboe)
// }

// function dragStartLuboe(elem){
// 	// console.log('drag start', event.target)
// 	setTimeout(() => elem.target.classList.add('hide'), 0)
// }

// function dragEndLuboe(elem){
// 	// console.log('drag end')
// 	elem.target.classList.remove('hide')

// }

// function dragOverLuboe(elem){
// 	elem.preventDefault()
// 	console.log('drag over')
// }
// function dragEnterLuboe(elem){
// 	console.log('drag enter')
// 	elem.target.classList.add('hovered')
//
// }
// function dragLeaveLuboe(elem){
// 	console.log('drag leave')
// 	elem.target.classList.remove('hovered')
// }
//
// function dropLuboe(elem){
// 	elem.target.append(itemDr1)
// 	console.log('drag drop')
// }

const itemDrs = document.querySelectorAll('.item-dr')
let placeholders = document.querySelectorAll('.whitebl_col')


itemDrs.forEach((dr)=>{
  if(dr.draggable){
console.log(dr)
dr.addEventListener ('dragstart', dragStartLuboe)
dr.addEventListener ('dragend', dragEndLuboe)


for (const placeholder of placeholders){
	placeholder.addEventListener('dragover', dragOverLuboe)
	placeholder.addEventListener('dragenter', dragEnterLuboe)
	placeholder.addEventListener('dragleave', dragLeaveLuboe)
	placeholder.addEventListener('drop', dropLuboe)
}

function dragStartLuboe(elem){
	console.log('drag start', event.target)
	// setTimeout(() => elem.target.classList.add('hide'), 0)
	setTimeout(() => elem.target.classList.add('selected'), 0)
}

function dragEndLuboe(elem){
	// console.log('drag end')
	// elem.target.classList.remove('hide')
	elem.target.classList.remove('selected')

}

function dragOverLuboe(elem){
	elem.preventDefault()
	console.log('drag over')
}
function dragEnterLuboe(elem){
	console.log('drag enter')
	elem.target.classList.add('hovered')

}
function dragLeaveLuboe(elem){
	console.log('drag leave')
	elem.target.classList.remove('hovered')
}

function dropLuboe(elem){
  if (dr.classList.contains('selected')) {
      elem.target.append(dr)
  }
	console.log('drag drop')
}

}
})
