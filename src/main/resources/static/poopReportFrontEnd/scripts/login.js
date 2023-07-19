

//styling https://www.w3schools.com/howto/howto_css_login_form.asp
// https://www.bezkoder.com/jpa-repository-query/

class User {
	constructor(email, password) {
		this.email = email;
		this.password = password;
	}
}

async function login(loginData) {
	let response = await fetch(
		`http://localhost:8080/login?email=${loginData.email}&password=${loginData.password}`,
		{
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			params: JSON.stringify(loginData),
			mode: 'cors',
		
		}
	);

	if (!response.ok) {
		throw new Error('BOOOOOOOO there was a problem');
	}
	let data = await response.json();

	localStorage.setItem('loggedInUser', JSON.stringify(data));
	window.location.href =
			'http://localhost:63342/poopReport/static/poopReportFrontEnd/make-report.html';
}

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
event.preventDefault();
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const loginData = new User(email, password);
	login(loginData);
	loginForm.reset();
});
