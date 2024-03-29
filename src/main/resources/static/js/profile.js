console.log('profile page is connected');

function test(){
console.log("is it working?");
}
test();

const dogForm = document.getElementById('dogForm');

console.log(dogForm);
let user = localStorage.getItem('loggedInUser');
console.log('user is:', user);

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
////////// class to capture dog info //////////
class Dog {
	constructor(name) {
		this.name = name;
	}
}
/*console.log(Dog);*/

///////////////////// end of class ////////////////////

function getDogData() {
	let name = document.getElementById('dog_name').value;
	console.log("new doggo's name is: " + name);
	const dog = new Dog(name);
	console.log('now we have a new Dog object: ' + dog.name);
	sendDog(dog);
}

const button = document.getElementById('submit-btn');
console.log(button);
button.addEventListener('click', (e) => {
	console.log('event listener is working');
	e.preventDefault();
	console.log('prevented form default, noice');
	getDogData();
	dogForm.reset();
});

/*console.log('now listening for submit button');*/



// ************************************ MODAL SHIZ ************************************
//is this better in the global scope so two functions can use it? or is there another way besides repeating it?
const modal = document.getElementById('success-modal');

function showSuccessModal() {
	//since i wrote this i learned that there is a built in method to show and close a modal :(
	modal.style.display = 'block';
	noMoreDogs();
	addAnotherDog();
	//aso i need to add a close/dismiss option
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