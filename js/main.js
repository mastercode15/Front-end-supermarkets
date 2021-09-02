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

	request.open('GET', 'http://3.89.143.66:9002/clientes/login/' + id + '/' + passwd, true)
	request.onload = function () {
		// Begin accessing JSON data here
		var user = this.response;
		localStorage.setItem('user', user);

		console.log(user);
		console.log(request.status);


		if (user != '') {
			alert('Inició de sesión exitoso');
			var x = document.getElementById("icon-login");
			if (x.style.display === "none") {
				x.style.display = "block";
			} else {
				x.style.display = "none";
			}
		} else {
			alert('Los datos ingresados no coinciden');
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

	var xhr = new XMLHttpRequest();
	var url = "http://3.89.143.66:4003/clientes/";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var json = JSON.parse(xhr.responseText);
		};

	}
	if (name != '' && ci != '' && direction != '' && passwd != '') {
		var data = JSON.stringify({
			"nombreCliente": name,
			"cedula": ci,
			"passwordCliente": passwd,
			"direccionCliente": direction
		});
		xhr.send(data);
		alert("Cuenta creada exitosamente");
		///window.location.replace("index.html");
	} else {
		alert("Hubo un error al crear su cuenta");
	}

}