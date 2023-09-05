
//function to login user right after they create an account ---
//  sometimes once redirected, the user isn't logged in - maybe because of the async?
 // - would it be better to redirect to have the user login themselves?
//or save the register info as the login info and just save it right to local storage?

async function login(userFromForm) {
console.log("this is the user from form: " + userFromForm);
	let response = await fetch(
		`/api/users/login`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userFromForm),
		}
	);
	if (!response.ok) {
		throw new Error('BOOOOOOOO there was a problem');
	}
	let data = await response.json();
	localStorage.setItem('loggedInUser', JSON.stringify(data));
//	console.log(localStorage.getItem('loggedInUser'));
	userForm.reset();
}



class User {
	constructor(email, password) {
		this.email = email;
		this.password = password;
	}
}


function sendUserToServer(userFromForm) {
	fetch('/api/users', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(userFromForm),
	}).then((response) => {
		if (response.ok) {
			console.log(
				'omg did this work? if so, the response should be here: ',
				response
			);
			return response.json();
			console.log()
		}
		throw new Error('ugh, the request failed');
	})

}

function addUserData() {
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	const userFromForm = new User(email, password);
	sendUserToServer(userFromForm);
}


//
//function removeSuccessMessage() {
//	const successMessage = document.querySelector('.successMessage');
//    successMessage.remove();
//}




const modal = document.getElementById('success-modal');

function showSuccessModal() {
	//since i wrote this i learned that there is a built in method to show and close a modal :(
	modal.style.display = 'block';
login(userFromForm);
	//aso i need to add a close/dismiss option
}


//hoping this would give login enough time ?
function redirectToProfilePage() {
	setTimeout(() => {
		window.location.href =
			'/profile-page';
	}, 3000);
//	removeSuccessMessage();
}



let userForm = document.getElementById('createUser');
userForm.addEventListener('submit', (event) => {
	event.preventDefault();
	addUserData();
    showSuccessModal();
redirectToProfilePage();
});