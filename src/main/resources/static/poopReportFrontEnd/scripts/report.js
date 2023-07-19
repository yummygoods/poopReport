


///this is creating the visual table
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



//get id of logged in user to populate for just their dogs
// was using 'http://localhost:8080/events/all' ++++STILL WORKING ON THIS
fetch(`http://localhost:8080/users/dogs/${user}/events`,
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
});