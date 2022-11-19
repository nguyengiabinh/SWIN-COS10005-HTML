function validate() {
	var contact = document.getElementById("contact").value;
	var email = document.getElementById("email").value;
	var creditnumber = document.getElementById("creditnumber").value;
	var deli = document.getElementById("deli").checked;
	var pickup = document.getElementById("pickup").checked;
	var paypickup = document.getElementById("paypickup").checked;
	var payonline = document.getElementById("payonline").checked;
	var errMsg = "";
	var result = true;

	if ((deli == "") && (pickup == "")) {
		errMsg += "Order type must be selected.\n";
	}
	if (contact == "") {
		errMsg += "Contact number cannot be empty.\n";
	}
	if (email == "") {
		errMsg += "Email must not be empty.\n";
	}
	if ((paypickup == "") && (payonline == "")) {
		errMsg += "A payment method must be selected.\n";
	}
	if ((document.getElementById("visa").checked) && (creditnumber.length != 16)) {
		errMsg += "Visa card number has to be 16-digit.\n";
	}
	if ((document.getElementById("master").checked) && (creditnumber.length != 16)) {
		errMsg += "Mastercard number has to be 16-digit.\n";
	}
	if ((document.getElementById("americanex").checked) && (creditnumber.length != 15)) {
		errMsg += "American Express card number has to be 15-digit.\n";
	}
	if (errMsg != "") {
		alert(errMsg);
		result = false;
	}
	return result;
}

function init() {
	var regForm = document.getElementById("regform");
	regForm.onsubmit = validate;
}

window.onload = init;

// COPY AND PASTE ADDRESS//

function Address() {
	var same = document.getElementById("same");
	var billing = document.getElementById("billing");
	var delivery = document.getElementById("delivery");

	if (same.checked) {
		billing.value = delivery.value;
	} else {
		billing.value = "";
	}
}

window.onchange = Address;


function copyAddress() {
	var same = document.getElementById("same");
	var billing = document.getElementById("billing");
	var delivery = document.getElementById("delivery");

	if (same.checked) {
		if (delivery.value) {
			billing.value = delivery.value;

		} else {
			alert('Pls enter delivery address');
		}
	}
}

window.onchange = copyAddress;

function yesnoCheck() {
	var deliform = document.getElementById('deli');
	var deliaddress = document.getElementById('ifYes');

    if (deliform.checked) {
		deliaddress.style.visibility = 'visible';
	}
	else {
		deliaddress.style.visibility = 'hidden';
	}
}

window.onchange = yesnoCheck();

function yesCheck() {
	var payonl = document.getElementById('payonline');
	var carddes = document.getElementById('ifChose');

	if (payonl.checked) {
		carddes.style.visibility = 'visible';
	}
	else {
		carddes.style.visibility = 'hidden';
	}
}

window.onchange = yesCheck();