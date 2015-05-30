

JR.apikey('jr-c945036558279aed9ad4046e90a75457');

var main = function () {
	JR.from('CAD').to('USD').get(function(result){
		$('.moneywall-value').text(result.rate);
	});
	
}

$(document).ready(main);