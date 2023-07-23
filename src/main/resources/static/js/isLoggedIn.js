console.log("isLoggedIn.js is connected");

//function to check to see if user is logged in
function isLoggedIn() {
  const userID = JSON.parse(localStorage.getItem('loggedInUser'));
  return userID !== null;
}

//calling it
isLoggedIn();

// function getUserID() {
//   return JSON.parse(localStorage.getItem('loggedInUser'));

// }

//returning visitor that is logged in gets directed to dashboard
function getLoggedInView(){
if (isLoggedIn()) {
 userID
  console.log("this user is logged in: ", userID)
  //redirect to dashboard
  window.location.href =
  'http://localhost:63342/poopReport/static/poopReportFrontEnd/dashboard.html';

// need to query db to populate with this user's stuff
} else {
	console.log("there is no logged in user");
}
}


//calling it
getLoggedInView();




async function login(loginData) {
	let response = await fetch(
		`http://localhost:8080/login?email=${loginData.email}&password=${loginData.password}`,
		{
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			params: JSON.stringify(loginData),
			mode: 'cors',
		
		}
	);

	if (!response.ok) {
		throw new Error('BOOOOOOOO there was a problem');
	}
	let data = await response.json();

}

