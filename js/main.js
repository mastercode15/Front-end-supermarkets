/*  Show/Hidden popup login */
function show_popup_login() {
	let popup = document.querySelector(".popup-login");
	if (popup.classList.contains('active')) {
		popup.classList.remove('active');
	} else {
		popup.classList.add('active');
	}
}

document.addEventListener("DOMContentLoaded", function (e) {

	var miForm = document.getElementById('miForm');
	miForm.onsubmit = function (e) {
		e.preventDefault();
		var formData = new FormData(this);
		var jsonData = {};
		for (var [k, v] of formData) {
			jsonData[k] = v;
		}
		console.log(jsonData);
	}

});

document.addEventListener("DOMContentLoaded", function (e) {

	var miForm = document.getElementById('miFormR');
	miForm.onsubmit = function (e) {
		e.preventDefault();
		var formData = new FormData(this);
		var jsonData = {};
		for (var [k, v] of formData) {
			jsonData[k] = v;
		}
		console.log(jsonData);
	}

});

function isLogedIn() {
	console.log("aquiiiii -->" + localStorage['user']);
	if (localStorage['user'] == "") {
		document.getElementById("logout").style.display = "none";
		document.getElementById("login").style.display = "block";
	} else {
		document.getElementById("logout").style.display = "block";
		document.getElementById("login").style.display = "none";
	}
}


function login() {

	var id = document.getElementById('login_email').value;
	var passwd = document.getElementById('login_password').value;

	console.log(id, passwd)
	var request = new XMLHttpRequest()

	request.open('GET', 'http://a0aeb907a57b74b498e855d83f38e6c2-819148902.us-east-1.elb.amazonaws.com:4005/clientes/login/' + id + '/' + passwd, true)
	request.onload = function () {
		// Begin accessing JSON data here
		var user = this.response;
		localStorage.setItem('user', user);

		console.log(user);
		console.log(request.status);

		if (request.status == 200) {
			if (user != '') {
				alert('Inició de sesión exitoso');
			} else {
				alert('Los datos ingresados no coinciden');
			}
		} else {
			alert('Ha ocurrido un error al iniciar sesión');
		}



	}

	request.send()


}

function logout() {
	localStorage.setItem('user', "");
	document.getElementById("logout").style.display = "none";
	document.getElementById("login").style.display = "block";

}

function signUp() {


	var name = document.getElementById('name').value;
	var ci = document.getElementById('cedula').value;
	var direction = document.getElementById('direction').value;
	var passwd = document.getElementById('password').value;

	var finish = false;

	var xhr = new XMLHttpRequest();
	var url = "http://a892aa7c71e81440f84676ba7147ef71-2005598993.us-east-1.elb.amazonaws.com:4003/clientes/";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		console.log(xhr.status);
		if (finish == false && xhr.status == 500) {
			alert("Ya existe un usuario con esa identifiación");
			finish = true;
		}
		else if (finish == false && xhr.status == 200) {
			alert("Cuenta creada exitosamente");
			finish = true;
			window.location.replace("index.html");
		}
		// else if (finish == true) {
		// 	alert("Hubo un error al crear su cuenta");
		// }

	}
	console.log(xhr.status);
	if (name != '' && ci != '' && direction != '' && passwd != '') {
		var data = JSON.stringify({
			"nombreCliente": name,
			"cedula": ci,
			"passwordCliente": passwd,
			"direccionCliente": direction
		});
		xhr.send(data);


	}

}