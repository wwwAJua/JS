// let div = document.getElementById('back')
// let p = document.getElementsByClassName('text')
// let h1 = document.getElementsByTagName('h1')
// console.log(div);
// console.log(p);
// console.log(h1);

// class -> .CLASS_NAME
// id -> #ID

// let div = document.querySelector('#back')
// let p = document.querySelectorAll('.text')
// let h1 = document.querySelector('h1')
// let ul1 = document.querySelector('#back ul')
// let ul2 = document.querySelector('#back > div ul')
// console.log(div);
// console.log(p);
// console.log(h1);
// console.log(ul1);
// console.log(ul2);

let div = document.querySelector('#back')
let h1 = document.querySelector('h1')
let input = document.querySelector('input')
div.innerHTML = '<h2 style = "color: red;">From JavaScript with love</h2>'//меняем целый DIV
h1.textContent = 'Changet from JS'//меняем контент в тэге
input.value = 'This is JS'

let a = document.querySelector('a')
a.setAttribute('href', 'https://google.com/maps')
a.setAttribute('title', 'go to maps')
a.textContent = 'Google Maps'

let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')

box1.classList.add('red')
box2.classList.remove('green')

let checkclass = box2.classList.contains('green')

if (checkclass) {

} else {
	box2.classList.add('green')
}