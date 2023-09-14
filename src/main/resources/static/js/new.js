console.log('hello');


//function to login user after they create an account
/*
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
	console.log(localStorage.getItem('loggedInUser'));
	userForm.reset();
}
*/



class User {
	//constructor(user_name, first_name, last_name, email) {
	constructor(email, password) {
		this.email = email;
		this.password = password;
		/*    this.user_name = user_name;
      this.first_name = first_name;
      this.last_name = last_name;*/
	}
}

////////// function to send the new user object to the db //////////
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
		}
		throw new Error('ugh, the request failed');
	})

}
///////////////////// /////////////////////






/////////////////maybe add these back in later
/* let user_name = document.getElementById('user_name').value;
  console.log("this should print the new username : " + user_name);
let first_name = document.getElementById('first_name').value;
let last_name = document.getElementById('last_name').value;*/

function addUserData() {
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	const userFromForm = new User(email, password);
	sendUserToServer(userFromForm);
//	login(userFromForm);
}






/*
function removeSuccessMessage() {
	const successMessage = document.querySelector('.successMessage');
    successMessage.remove();
}


//make modal?
function showSuccessMessage() {
	const successMessage = document.createElement('h4');
	successMessage.textContent =
		"yay! in a couple seconds you'll be redirected to the profile page where you can add your dog!";
		successMessage.setAttribute('class', 'successMessage');
	const form = document.getElementById('createUser');
	form.insertAdjacentElement('beforebegin', successMessage);

}
*/


/*

function redirectToProfilePage() {
	setTimeout(() => {
		window.location.href =
			'/profile-page';
	}, 3000);
	removeSuccessMessage()
}
*/


function redirectToLogin() {
	setTimeout(() => {
		window.location.href =
			'/login';
	}, 3000);
	/*removeSuccessMessage()*/
}



let userForm = document.getElementById('createUser');
userForm.addEventListener('submit', (event) => {
	event.preventDefault();
	addUserData();
redirectToLogin();
//  showSuccessMessage();
//	redirectToProfilePage();

});