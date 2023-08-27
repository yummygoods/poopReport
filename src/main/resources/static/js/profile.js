
let user = localStorage.getItem('loggedInUser');
const dogForm = document.getElementById('dogForm');



function sendDog(dog) {
	fetch(`/api/users/dogs/${user}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		// takes the javascript object and turns it into a json string
		// fetch needs to be in strings, but the server will interpret the json string as json
		body: JSON.stringify(dog),
	}).then((response) => {
		console.log(response);
		if (response.ok) {
			showSuccessModal();
			console.log(
				'omg did this work? if so, the response should be here: ',
				response
			);
			return response.json();
		}
		throw new Error('ugh, the request failed');
	});
}

class Dog {
	constructor(name) {
		this.name = name;
	}
}


function getDogData() {
	let name = document.getElementById('dog_name').value;
    const dog = new Dog(name);
	sendDog(dog);
}

const button = document.getElementById('submit-btn');
button.addEventListener('click', (e) => {
	e.preventDefault();
	getDogData();
	dogForm.reset();
});

// ************************************ MODAL SHIZ ************************************
//is this better in the global scope so two functions can use it? or is there another way besides repeating it?
const modal = document.getElementById('success-modal');

function showSuccessModal() {
	//since i wrote this i learned that there is a built in method to show and close a modal, try that?
	modal.style.display = 'block';
	noMoreDogs();
	addAnotherDog();
	//TODO add a close/dismiss option
}

function noMoreDogs() {
	const noMoreDogsButton = document.getElementById('no-other-dog-btn');
	noMoreDogsButton.addEventListener('click', () => {
		window.location.href =
			'make-report';
	});
}

function addAnotherDog() {
	const addAnotherDogButton = document.getElementById('add-another-dog-btn');
	addAnotherDogButton.addEventListener('click', () => {
		//is this a good way to dismiss the modal?
		modal.style.display = 'none';
	});
}

// ************************************ END OF MODAL SHIZ ************************************