
let user_id = localStorage.getItem('loggedInUser');
//console.log('logged in user is:', user_id);


class DogEvent {
	constructor(user_id, dog_id, walk, poop, pee, was_fed, ate, rx, notes) {
this.user_id = user_id;
    this.dog_id = dog_id;
		this.walk = walk;
		this.poop = poop;
		this.pee = pee;
		this.was_fed = was_fed;
		this.ate = ate;
		this.rx = rx;
		this.notes = notes;
	}
}



function sendDogEventToServer(dogEventFromForm) {
	fetch('/api/events', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(dogEventFromForm),
	}).then((response) => {
		if (response.ok) {
			return response.json();
		}
		throw new Error('ugh, the request failed');
	});
}



function addFromForm() {
    let user_id = localStorage.getItem('loggedInUser')
    let dog_id = document.getElementById('dog_id').value;
	let walk = document.querySelector('#walk input:checked').value;
	let poop = document.querySelector('#poop input:checked').value;
	let pee = document.querySelector('#pee input:checked').value;
	let was_fed = document.querySelector('#was_fed input:checked').value;
	let ate = document.querySelector('#ate input:checked').value;
	let rx = document.querySelector('#rx input:checked').value;
	let notes = document.getElementById('notes').value;

	/////// instantiates new DogEvent object and passes above variables (now storing user input) as arguments into the constructor
	const dogEventFromForm = new DogEvent(
	user_id,
    dog_id,
		walk,
		poop,
		pee,
		was_fed,
		ate,
		rx,
		notes
	);
/////// calls function to take the new object and make a post request with it
	sendDogEventToServer(dogEventFromForm);
}
///////////////////// end of function /////////////////////




let poopForm = document.getElementById('poopForm');
poopForm.addEventListener('submit', function (event) {
	event.preventDefault();
	addFromForm();
	poopForm.reset();
    showSuccessModal();
});


//TODO do i need to move this up?
// ************************************ MODAL SHIZ ************************************
//is this better in the global scope so two functions can use it? or is there another way besides repeating it?
const modal = document.getElementById('success-modal');

function showSuccessModal() {
	//since i wrote this i learned that there is a built in method to show and close a modal :(
	modal.style.display = 'block';
	seeReport();
	fileAnotherReport();
	//aso i need to add a close/dismiss option
}

function seeReport() {
	const seeReportButton = document.getElementById('see-report-btn');
	seeReportButton.addEventListener('click', () => {
		window.location.href =
			'/dashboard';
	});
}

function fileAnotherReport() {
	const fileAnotherReportButton = document.getElementById('file-another-btn');
	fileAnotherReportButton.addEventListener('click', () => {
		//is this a good way to dismiss the modal?
		modal.style.display = 'none';
	});
}

// ************************************ END OF MODAL SHIZ ************************************ 