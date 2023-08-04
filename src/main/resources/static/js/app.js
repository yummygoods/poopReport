 console.log('oh hi');

let user_id = localStorage.getItem('loggedInUser');
console.log('logged in user is:', user_id);



/*
TO DO
now:
       get the dog names in there instead of dog id
   ✅ Make the time look less annoying (it is local time though!)
   ✅ Change true and false into 'yes or no' and maybe show it in red or green or show an x or checkmark?
   ✅ Show in reverse chron order
      hide table and make it show when ready
      fix header responsiveness
      add intro text
      move dog column in
      add back in error handling
      add info to readme


  🔒later:
   add user
   make dropdown populate with user's dogs
   Make the request just for that user's dogs
   above form, show last update time?
   add 'updated by user' info

*/

////////// class to capture user poop report in an object //////////
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
///////////////////// end of class ////////////////////

////////// function to send the new dogEvent object to the db //////////
function sendDogEventToServer(dogEventFromForm) {
console.log("inside the sendDogEventToServer function");
	fetch('/api/events', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		// takes the javascript object and turns it into a json string
		// fetch needs to be in strings, but the server will interpret the json string as json
		body: JSON.stringify(dogEventFromForm),
	}).then((response) => {
		if (response.ok) {
			return response.json();
		}
		throw new Error('ugh, the request failed');
	});
}
///////////////////// end of function /////////////////////

////////// function to take form input and turn into object //////////
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
//console.log(dogEventFromForm);

	/////// calls function to take the new object and make a post request with it
	sendDogEventToServer(dogEventFromForm);
	

}
///////////////////// end of function /////////////////////

/*///////// event listener to capture form data on submit /////////*/
let poopForm = document.getElementById('poopForm');
poopForm.addEventListener('submit', function (event) {
	event.preventDefault();
	addFromForm();
	poopForm.reset();
    showSuccessModal();


});

///////////////////// end of event listener ///////////////////

/*
//need to change this
function redirectToReportPage() {
  // redirect to profile page after 3 seconds

  setTimeout(() => {
    window.location.href = '/html/results-table.html';
  }, 6000);
   }*/

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