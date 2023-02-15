console.log("oh hi this should show up");
/*++++++++++++++++++++++++++++++++++++++++++++++++
 function to reset after submit
++++++++++++++++++++++++++++++++++++++++++++++++*/

function reset() {
  //.................................tells the dom to remove the user's text input
  document.getElementById('dog_id').value = '';
  document.getElementById('poop').checked = '';
   document.getElementById('pee').checked = '';
  document.getElementById('notes').value = '';
  //.................................resets the values stored in the variables
  dog_id = '';
  poop ='';
  pee = '';
  notes = '';
};


///////////////////// end of function ////////////////////


//event listener to capture form data on submit

let poopForm = document.getElementById('poopForm');
poopForm.addEventListener('submit', function (event) {
  event.preventDefault();
  addFromForm();
  reset();
/*debugger;*/
console.log(event.target.elements.dog_id.value);
console.log(event.target.elements.poop.checked);
console.log(event.target.elements.pee.checked);
console.log(event.target.elements.notes.value);
});

console.log("now listening for submit button");


/*++++++++++++++++++++++++++++++++++++++++++++++++
class to capture form input in an object
++++++++++++++++++++++++++++++++++++++++++++++++*/
class DogEvent {
  constructor(dog_id, poop, pee, notes) {
    this.dog_id = dog_id;
    this.poop = poop;
    this.pee = pee;
    this.notes = notes;
  }
}

console.log("this should print the newly created class DogEvent: ", DogEvent);




/*++++++++++++++++++++++++++++++++++++++++++++++++
function to take form input and turn into object
++++++++++++++++++++++++++++++++++++++++++++++++*/
function addFromForm() {
  // .................................takes input values and saves as variables name + notes
  let dog_id = document.getElementById('dog_id').value;
  console.log("this should print the value from user input in dog name (dog_id)  field:", dog_id);
/*debugger;*/

 let poop = document.getElementById('poop').checked;
  console.log("this should print the the boolean value from user input in poop field: ", poop);

  let pee = document.getElementById('pee').checked;
  console.log("this should print the the boolean value from user input in pee field: ", pee);

  let notes = document.getElementById('notes').value;
  console.log("this should print the value from user input in Notes field: ", notes);

  // .................................instantiates new Track object and passes variables defined above as arguments into the constructor
  const dogEventFromForm = new DogEvent(dog_id, poop, pee, notes);
  console.log("this should print the new dogEvent object with values:", dogEventFromForm);

  // .................................calls function to take the new track object and make a post request with it
  sendDogEventToServer(dogEventFromForm);



}
///////////////////// end of function /////////////////////




/*++++++++++++++++++++++++++++++++++++++++++++++++
function to send the new dogEvent object to the db
++++++++++++++++++++++++++++++++++++++++++++++++*/

/*function sendDogEventToServer(DogEvent) {*/
function sendDogEventToServer(dogEventFromForm) {
  fetch(

    'http://localhost:8080/events',
    {
     /* method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(DogEvent)*/
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(dogEventFromForm)
    }
  ).then(response => {


    if (response.ok) {
      console.log("omg did this work? if so, the response should be here: ", response);
      return response.json();
    }
    throw new Error('Request failed!');
  })
}; 

 //.................................turns the new dogEvent object into json and sends as request body
///////////////////// end of function /////////////////////