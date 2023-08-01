//get id of logged in user to populate for just their dogs
let user_id = localStorage.getItem('loggedInUser');
console.log('logged in user is:', user_id);

let dogs = localStorage.getItem('loggedInDogs');
	let loggedInDogs = localStorage.getItem('loggedInDogs', JSON.parse(dogs));
console.log('logged in dogs are:', loggedInDogs);
document.addEventListener('load', getDogs(user_id));






///this is creating the visual table
///////////////////function to populate html with json retrieved from database////////////////
function addToPoopReport(event) {

    // Find dog name
let dog = JSON.parse(localStorage.getItem('loggedInDogs')).find(dog => dog.id == event.dog_id);
    // Add dog name to event object

   event.dog_name = dog.name;

//grab the table body by id to use at the end
  const tableBody = document.getElementById("poopReport");
 //make new row
  const row = document.createElement('tr');

  //make the cell
  const dog_idCell = document.createElement('td');
  //🧴🪣 it puts the data in the cell
 /*dog_idCell.textContent = event.dog_id;*/
 dog_idCell.textContent = event.dog_name;
  //insert the new cell into the row
  row.appendChild(dog_idCell);

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

}
///////////////////////end of function/////////////////////


///////////////////////function to reverse the row order so most recent shows at the top/////////////////////
function reverseChron(event){
let date = event.timestamp;
 const tableBody = document.getElementById("poopReport");
 // make an array of the rows
 const rows = Array.from(tableBody.rows);
 // reverse the array
 rows.sort((a, b) => b.cells[1].textContent.localeCompare(a.cells[1].textContent));
 console.log(rows);
reverseChron(event.timestamp);
 // reset the table body content to an empty string
 tableBody.innerHTML = '';
 // Append the reversed rows to the table body (read up on this more)
rows.forEach(row => tableBody.appendChild(row));
}

/*
document.addEventListener('load', getEvents());
async function getEvents(dogs){
dogs.forEach(dog =>  {
fetch(`api/events/${dog.id}`,
{ method: 'GET',
  headers: {
  'Content-Type': 'application/json' },
}
)
.then((response) => response.json())
.then(dogEventsArray => {
 for (let event of dogEventsArray) {
addToPoopReport(event);
 };
 }).catch(error => {
 alert(error);
 console.error('Error:', error);
});
});

}

*/







async function getDogs(user_id) {
  console.log("inside getDogs function)");
  //fix this path
	let response = await fetch(`/api/users/dogs/${user_id}`);
	let dogs = await response.json();
dogs.forEach(dog => {
fetch(`api/events/${dog.id}`,
{ method: 'GET',
  headers: {
  'Content-Type': 'application/json' },
}
)
.then((response) => response.json())
.then(dogEventsArray => {
 for (let event of dogEventsArray) {
addToPoopReport(event);
 };
 }).catch(error => {
 alert(error);
 console.error('Error:', error);
});
});
}