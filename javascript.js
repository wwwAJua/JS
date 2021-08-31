let divs = document.querySelectorAll('div')
let link = document.querySelector('a')

for (var i = 0; i < divs.length; i++) {
	divs[i].addEventListener('click', function (event) {
		event.stopPropagation()
		console.log(this.getAttribute('id'))
	})
}

link.addEventListener('click', sheeft)

function sheeft(event) {
	event.preventDefault()

	let div = divs[0]

	if (div.style.display === 'none') {  //       //  div.style.display = div.style.display === 'none'
		div.style.display = 'flex'         //  ===  //    ? 'flex'
	} else {                             //       //    : 'none'
		div.style.display = 'none'         //       //
	}
}