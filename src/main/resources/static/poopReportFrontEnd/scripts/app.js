console.log("oh hi");
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


/*//////////////////// function to reset form after submit ///////////////////*/

//trying built in reset in
/*function reset() {
  /////// tells the dom to remove the user's text input
  document.getElementById('user_dog_id').value = '';
  document.getElementById('poop').checked = '';
  document.getElementById('pee').checked = '';
  document.getElementById('notes').value = '';
  /////// resets the values stored in the variables
  user_dog_id = '';
  poop = '';
  pee = '';
  notes = '';
};*/
/*//////////////////// end of reset function ///////////////////*/


/*///////// event listener to capture form data on submit /////////*/
let poopForm = document.getElementById('poopForm');
poopForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // calls function that takes the user input and makes an object
  addFromForm();
  poopForm.reset();
  /*debugger;*/
/* console.log(event.target.elements.user_dog_id.value);
  console.log(event.target.elements.poop.checked);
  console.log(event.target.elements.pee.checked);
  console.log(event.target.elements.notes.value);*/
});
console.log("now listening for submit button");
/*//////////////////// end of event listener ///////////////////*/




////////// class to capture user poop report in an object //////////
class DogEvent {
  constructor(user_dog_id, walk, poop, pee, was_fed, ate, rx, notes) {
            this.user_dog_id = user_dog_id;
           this.walk = walk;
           this.poop = poop;
           this.pee = pee;
           this.was_fed = was_fed;
           this.ate = ate;
           this.rx = rx;
           this.notes = notes;
  }
}
console.log("this should print the newly created class DogEvent: ", DogEvent);
///////////////////// end of class ////////////////////



////////// function to take form input and turn into object //////////
function addFromForm() {
  /////// takes form input values and assigns the data to corresponding variables
  let user_dog_id = document.getElementById('user_dog_id').value;

  let walk = document.getElementById('walk').checked;

  console.log("this should print the the boolean value from user input in walk field. The pup was walked: ", walk);
  /*debugger;*/

  let poop = document.getElementById('poop').checked;
  let pee = document.getElementById('pee').checked;
  let was_fed = document.getElementById('was_fed').checked;
 let ate = document.getElementById('ate').checked;
 let rx = document.getElementById('rx').checked;
  let notes = document.getElementById('notes').value;

  /////// instantiates new DogEvent object and passes above variables (now storing user input) as arguments into the constructor
  const dogEventFromForm = new DogEvent(user_dog_id, walk, poop, pee, was_fed, ate, rx, notes);
  console.log("this should print the new dogEvent object with values:", dogEventFromForm);

  /////// calls function to take the new object and make a post request with it
  sendDogEventToServer(dogEventFromForm);
}
///////////////////// end of function /////////////////////



////////// function to send the new dogEvent object to the db //////////
function sendDogEventToServer(dogEventFromForm) {
  fetch(
    'http://localhost:8080/events',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // takes the javascript object and turns it into a json string
      // fetch needs to be in strings, but the server will interpret the json string as json
      body: JSON.stringify(dogEventFromForm)
    }
  ).then(response => {
    if (response.ok) {
      console.log("omg did this work? if so, the response should be here: ", response);
      return response.json();
    }
    throw new Error('ugh, the request failed');
  })
};
///////////////////// end of function /////////////////////


/*
///////////////////function to populate html with json retrieved from database////////////////
function addToPoopReport(event) {

//grab the table body by id to use at the end
  const tableBody = document.getElementById("poopReport");
 //make new row
  const row = document.createElement('tr');


  //make the cell
  const user_dog_idCell = document.createElement('td');
  //🧴🪣 it puts the data in the cell
  user_dog_idCell.textContent = event.user_dog_id;
  //insert the new cell into the row
  row.appendChild(user_dog_idCell);


// parses the entry time into a Date object
const timestamp = new Date(event.entry_time);
//time pulled from timestamp and inserted into time column
  const timeCell = document.createElement('td');
  const time = timestamp.toLocaleTimeString("en-US", { hour: 'numeric', minute: 'numeric', hour12: true });
    timeCell.textContent = time;
      row.appendChild(timeCell);


    //day and date pulled from timestamp
  const dayDateCell = document.createElement('td');
  const dayDate = timestamp.toLocaleDateString("en-US", { weekday: 'short', month: 'numeric', day: 'numeric' });
    dayDateCell.textContent = dayDate;
  row.appendChild(dayDateCell);

//walk
//trying out a ternary thingie
  const walkCell = document.createElement('td');
  event.walk ? (walkCell.textContent = "✅") : (walkCell.textContent = "❌");
  row.appendChild(walkCell);

//poop
  const poopCell = document.createElement('td');
  if (event.poop == true){
   poopCell.textContent = "✅" ;
  }
else{
poopCell.textContent = "❌" ;
}
    row.appendChild(poopCell);

/*look up a way to do that for each yes/no without repeating
maybe a function within that works on all booleans?
like if (datatype === boolean) ? or just get right to the if value === true/false ?
then make cell, textContent the check or x and  appendchild*/


//pee
      const peeCell = document.createElement('td');
        if (event.pee == true){
         peeCell.textContent = "✅" ;
        }
      else{
     peeCell.textContent = "❌" ;
      }
        row.appendChild(peeCell);


const was_fedCell = document.createElement('td');
  event.was_fed ? (was_fedCell.textContent = "✅") : (was_fedCell.textContent = "❌");
  row.appendChild(was_fedCell);

const ateCell = document.createElement('td');
  event.ate ? (ateCell.textContent = "✅") : (ateCell.textContent = "❌");
  row.appendChild(ateCell);

  const rxCell = document.createElement('td');
    event.rx ? (rxCell.textContent = "✅") : (rxCell.textContent = "❌");
    row.appendChild(rxCell);

//notes
    const notesCell = document.createElement('td');
         notesCell.textContent = event.notes;
          row.appendChild(notesCell);

//insert new row with data into table body
 tableBody.appendChild(row);

 //call function to change the order
 //try to find how to do it once all data has been populated, rather than after each row?
reverseChron();
}
///////////////////////end of function/////////////////////


///////////////////////function to reverse the row order so most recent shows at the top/////////////////////
function reverseChron(){

 const tableBody = document.getElementById("poopReport");
 // make an array of the rows
 const reverseChronRows = Array.from(tableBody.rows);
 // reverse the array
 reverseChronRows.reverse();
 // reset the table body content to an empty string
 tableBody.innerHTML = '';
 // Append the reversed rows to the table body (read up on this more)
 reverseChronRows.forEach(row => tableBody.appendChild(row));
}


// call to  get all dogEvents (will make this just for the user's dogs,  once i add users)
fetch('http://localhost:8080/events/all',
{
  method: 'GET',
  headers: {
  'Content-Type': 'application/json' },
}
)
.then((response) => response.json())
.then(dogEventsArray => {
// loops through the event entries
 for (let event of dogEventsArray) {
 //console.log("TESTING ARRAY dog id = " + event.user_dog_id + " pooped? = " + event.poop +  " peed? = " + event.pee );
 //calls the function that populates the html with table/data
addToPoopReport(event);
 };
 }).catch(error => {
 alert(error);
 console.error('Error:', error);
});*/