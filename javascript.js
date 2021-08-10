var carYear = 2014
var driverAge = 1986

function calculateAge(year) {
	var currentYear = 2021
	var result = currentYear - year
	return result
}

function checkAndLogAge(year, userName, compairTo) {
	if (calculateAge(year) > compairTo) {
		console.log('Возраст ' + userName + ' старше ' + compairTo + ' лет')
	} else {
		console.log('Возраст ' + userName + ' младше ' + compairTo + ' лет')
	}
}

checkAndLogAge(carYear, 'машины', 10)
checkAndLogAge(driverAge, 'человека', 18)