var num1 = 12
var num2 = 8

console.log('+:', num1 + num2)
console.log('-:', num1 - num2)
console.log('*:', num1 * num2)
console.log('/:', num1 / num2)

var str1 = 'Hello'
var str2 = 'World'

console.log('+:', str1 + ' ' + str2)

console.log('1 + 2:', 1 + '2')
console.log("str1 + num1:", str1 + num2)

console.log('Boolean + 1:', true + num1)

console.log('true + 1:', true + 1)
console.log('false + 1:', false + 1)

var result = 12 - 6 / 3
var result2 = (3 + 4) * 2
//Приоритет операторов: 
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

var isGreater = 20 - 6 * 3 >= 4
var isGreater2 = 20 - 6 * 3 >= 1

console.log('12-6/3', result)
console.log('(3+4)*2', result2)
console.log('20-6*3>=4', isGreater)
console.log('20-6*3>=1', isGreater2)

console.log('5 % 2', 5 % 2)
// Показывает отстаток после деления 5/2
console.log('8 % 3', 8 % 3)
console.log('15 % 5', 15 % 5)

var i = 1
console.log('i=', i)
// i = i + 1 = 2
i++
console.log('i++', i)
// i = i - 1 = 1
i--
console.log('i--', i)
// i = i * 3
i *= 3
console.log('i*=3', i)
// i = i / 1.5
i /= 1.5
console.log('i/=1.5', i)

// вывод результата после операции
console.log('префикс', --i)
// выдод рузультата до операции
console.log('постфикс', i++)
i++
console.log('i=', i)

console.log('5 > 3', 5 > 3)
console.log('3 > 2', 3 < 2)
console.log('8 >= 8', 8 >= 8)
console.log('8 <= 7', 8 <= 7)
console.log('8 == 8', 8 == 8)
// отличия
console.log('4 != 4', 4 != 4)
// сравнивает типы и значения
console.log('4 === 4', 4 === '4')
// сравнивает только значения 
console.log('4 === 4', 4 == '4')

/* логические операторы	
&& (и) - true если все значения true
|| (или) - true усли хоть одно       		 значение true
!(нет) - инвертирует значение
*/

console.log((true && false) || (true && true) || (!!!true))
// false || true || (!!!true => !!false => !true => folse) = true

var currentYear = 2021
var Username = 'Jony'
var BirsdYear = 2004
var old = currentYear - BirsdYear

// if (old <= 18) {
// 	console.log(Username + ' have ' + old)
// } else if (old >= 18) {
// 	console.log('Welcom ' + Username)
// } else {
// 	console.log('Что ты такое?')
// }

var message = old < 18
	? Username + ' молод'
	: Username + ' стар'
console.log(message)

switch (Username) {
	case 'Jony':
		console.log('Hi ' + Username)
		break
	default:
		console.log('Что ты такое?')
}


function calculateAge(year) {
	var result = currentYear - year
	return result
}

function checkAndLogAge(year) {
	if (calculateAge(year) < 18) {
		console.log('Возраст меньше 18 лет')
	} else {
		console.log('Возраст больше 18 лет')
	}
}

checkAndLogAge(BirsdYear)