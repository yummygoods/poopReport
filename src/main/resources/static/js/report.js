
let user_id = localStorage.getItem('loggedInUser');
let dogs = localStorage.getItem('loggedInDogs');
let loggedInDogs = localStorage.getItem('loggedInDogs', JSON.parse(dogs));
document.addEventListener('load', getDogs(user_id));


///////////////////////function to reverse the row order so most recent shows at the top, regardless of dog/////////////////////
function reverseChron(event){
let date = event.timestamp;
 const tableBody = document.getElementById("poopReport");
 // make an array of the rows
 const rows = Array.from(tableBody.rows);
 // reverse the array
 rows.sort((a, b) => b.cells[1].textContent.localeCompare(a.cells[1].textContent));
 // reset the table body content to an empty string
 tableBody.innerHTML = '';
 // Append the reversed rows to the table body (read up on this more)
rows.forEach(row => tableBody.appendChild(row));
}






//TODO ? should i make a function that creates the row and cell, populates it with text content and appends it?

function addToPoopReport(event) {
    // Find dog name in local storage that corresponds to dog from event passed in
let dog = JSON.parse(localStorage.getItem('loggedInDogs')).find(dog => dog.id == event.dog_id);
    // Add dog name to event object
 event.dog_name = dog.name;
 const row = document.createElement('tr');
 const dog_idCell = document.createElement('td');
 dog_idCell.textContent = event.dog_name;
 row.appendChild(dog_idCell);

// parses the entry time into a Date object
const timestamp = new Date(event.entry_time);
const timeCell = document.createElement('td');
const time = timestamp.toLocaleTimeString("en-US", { hour: 'numeric', minute: 'numeric', hour12: true });
      timeCell.textContent = time;
      row.appendChild(timeCell);

//day and date pulled from timestamp
const dayDateCell = document.createElement('td');
const dayDate = timestamp.toLocaleDateString("en-US", { weekday: 'short', month: 'numeric', day: 'numeric' });
      dayDateCell.textContent = dayDate;
      row.appendChild(dayDateCell);


/* TODO make a function to handle booleans to avoid all the repeating code below?
? if data type is boolean, loop through: "make cell. if  value is true then add the check, otherwise if data type is
boolean and value is false, add x ,  append child to row" */


  const walkCell = document.createElement('td');
  event.walk ? (walkCell.textContent = "✅") : (walkCell.textContent = "❌");
  row.appendChild(walkCell);


  const poopCell = document.createElement('td');
      event.poop ? (poopCell.textContent = "✅") : (poopCell.textContent = "❌" );
      row.appendChild(poopCell);

const peeCell = document.createElement('td');
        event.pee ? (peeCell.textContent = "✅") : (peeCell.textContent = "❌");
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

const notesCell = document.createElement('td');
          notesCell.textContent = event.notes;
          row.appendChild(notesCell);

//insert new row with data into table body
const tableBody = document.getElementById("poopReport");
tableBody.appendChild(row);
return event;


}



//gets dogs AND gets each dog's events
async function getDogs(user_id) {
  //TODO fix this path to make more sense
  let response = await fetch(`/api/users/dogs/${user_id}`);
  let dogs = await response.json();
         dogs.forEach(dog => {
               fetch(`api/events/${dog.id}`, {
               method: 'GET',
               headers: {
  'Content-Type': 'application/json' },
}
)
.then((response) => response.json())
.then(dogEventsArray => {
 for (let event of dogEventsArray) {
addToPoopReport(event);
reverseChron(event);
 };
 }).catch(error => {
 alert(error);
 console.error('Error:', error);
});
});
}