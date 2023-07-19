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

function sendData() {
	// Create and populate the FormData to send
	theForm = document.getElementById('createUser');
	data = new FormData(theForm);
	console.log(data.entries);
	let jsonObject = Object.fromEntries(data.entries());
	console.log(jsonObject);
	let jsonData = JSON.stringify(jsonObject);
	fetch('http://localhost:8080/users', {
		method: 'POST',
		body: jsonData,
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => {
			return response.json();
		})
		.then(() => {
			redirectToProfilePage();
		})
		.catch((err) => {
			console.log(err);
		});
}



document.getElementById('createUser').addEventListener('submit', (e) => {
	e.preventDefault();
	sendData();
	theForm.reset();
	console.log('just reset the form');
	showSuccessMessage();
});



	// redirect to profile page after 3 seconds
function redirectToProfilePage() {
	setTimeout(() => {
		window.location.href =
			'http://localhost:63342/poopReport/static/poopReportFrontEnd/profile-page.html';
	}, 3000);
}


//show success message by inserting html
function showSuccessMessage() {
	const successMessage = document.createElement('h4');
	successMessage.textContent =
		"yay! in a couple seconds you'll be redirected to the profile page where you can add your dog!";
	const form = document.getElementById('createUser');
	form.insertAdjacentElement('beforebegin', successMessage);
	console.log(successMessage);
}
