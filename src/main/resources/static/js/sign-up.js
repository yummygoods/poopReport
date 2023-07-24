
//function to login user after they create an account
async function login(formData) {
	console.log(formData.email);
	console.log(formData.password);
	let response = await fetch(
		`/api/login`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData),
		}
	);
	if (!response.ok) {
		throw new Error('BOOOOOOOO there was a problem');
	}
	let data = await response.json();
	localStorage.setItem('loggedInUser', JSON.stringify(data));
	// window.location.href =
	// 	'/html/profile.html';
}

//sends form data to create new user
function sendData(jsonObject) {
	console.log(jsonObject);
	let jsonData = JSON.stringify(jsonObject);
	fetch('/api/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: jsonData,
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

//show success message by inserting html
function showSuccessMessage() {
	const successMessage = document.createElement('h4');
	successMessage.textContent =
		"yay! in a couple seconds you'll be redirected to the profile page where you can add your dog!";
	const form = document.getElementById('createUser');
	form.insertAdjacentElement('beforebegin', successMessage);
	console.log(successMessage);
}


let theForm = document.getElementById('createUser');
theForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let formData = new FormData(theForm);
	console.log(formData);
	sendData(formData);
	theForm.reset();
	console.log('just reset the form');
	
});

// 	// redirect to profile page after 3 seconds
function redirectToProfilePage() {
setTimeout(() => {
		window.location.href =
		'profile-page';
	}, 3000);
}