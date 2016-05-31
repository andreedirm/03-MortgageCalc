var payment = function calculateMortgage (options) {
	var N = options.term * options.period;
	var I = (options.rate / 100) / options.period;
	var v = Math.pow((1 + I), N);
	var t = (I * v) / (v - 1);
	var result = options.balance * t;


	return result;
	console.log('hello');
}

$(function(){
	$('#calcForm').on('submit', function(e){
		e.preventDefault();
		var $params = {
			balance: $('#balance').val(),
			rate: $('#rate').val(),
			term: $('#term').val(),
			period: $('option:selected', '#period').val()
		};

		var payment = calculateMortgage($params);
		$('#output').text('Your monthly payment is $' + Math.round(payment * 100 / 100);

	});
});