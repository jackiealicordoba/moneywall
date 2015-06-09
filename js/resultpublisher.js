

// JSONRates Exchange rate API
JR.apikey('jr-c945036558279aed9ad4046e90a75457');
// Firebase for storage
var rootRef = new Firebase("blinding-heat-4617.firebaseIO.com");
var galaMoneyWallRef = rootRef.child('bill_list');

// Current GalaWall:
/* 
Honduras: 2 and 10
Fiji: 5
GBP: 5 and 10
China: 50 and 10
- Euro 5 and 10
hong kong 20
turkey 20 and 10
GBP: 20
Israel: 20
India: 500 100 50
Singapore: 2 and 5
- Canada 20
- USD: 2 and 2
- Canada: 5 and 5
*/

// Map countries/names to their symbols here!
/* var currencyNames = {

} */
/*
galaMoneyWallRef.push({
	currency : "EUR",
	value: 5
});

galaMoneyWallRef.push({
	currency : "EUR",
	value: 10
});

galaMoneyWallRef.push({
	currency : "USD",
	value: 2
});

galaMoneyWallRef.push({
	currency : "USD",
	value: 2
});

galaMoneyWallRef.push({
	currency : "CAD",
	value: 5
});

galaMoneyWallRef.push({
	currency : "CAD",
	value: 5
});

galaMoneyWallRef.push({
	currency : "CAD",
	value: 20
});*/

var main = function () {
	/*bill_collection.set({
		five_euro: {
			currency: "EUR",
			value: 5;		
		}
	});*/
	/*JR.from('CAD').to('USD').get(function(result){
		$('.moneywall-value').text(result.rate);
	});*/
	
}

$(document).ready(main);
