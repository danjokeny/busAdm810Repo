var willIGetNewPhone = new Promise(
	function (resolve, reject) {
		if (isMomHappy) {
			var phone = {
			brand: 'Samsung',
			color: 'black'
			};
			resolve(phone); 
		} else {
			var reason = new Error('mom is not happy');
			reject(reason); 
		}
	}
);

var isMomHappy=true;

var askMom = function () {
	willIGetNewPhone
		.then(function (fulfilled) {
			console.log(fulfilled);
			return showOff(fulfilled)
		})
		.catch(function (error) {
			console.log(error.message);
	});
}
