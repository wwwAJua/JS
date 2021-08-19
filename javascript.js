let button = document.querySelector('button')
let input = document.querySelector('input')
let h1 = document.querySelector('h1')

button.addEventListener('click', function () {
	h1.textContent = input.value
})

h1.addEventListener('mouseenter', function () {
	this.style.color = 'orange'
})
h1.addEventListener('mouseleave', function () {
	this.style.color = 'white'
})