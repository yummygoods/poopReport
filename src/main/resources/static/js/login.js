
class User {
	constructor(email, password) {
		this.email = email;
		this.password = password;
	}
}

async function login(loginData) {
	let response = await fetch(
		`/api/users/login`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(loginData),

		}
	);
	if (!response.ok) {
		throw new Error('BOOOOOOOO there was a problem');
	}
	let data = await response.json();
	localStorage.clear();
	localStorage.setItem('loggedInUser', JSON.stringify(data));
	window.location.href =
			'/make-report';
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