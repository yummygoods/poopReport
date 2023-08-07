
//junk



















console.log("isLoggedIn.js is connected");

//workaround for this method for now

let user = localStorage.getItem('loggedInUser');
console.log('logged in user is:', user);





//function to check to see if user is logged in
function isLoggedIn() {
  const userID = localStorage.getItem('loggedInUser');
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
  console.log("this user is logged in: ", userID)
  //redirect to dashboard
  window.location.href =
  '/dashboard';

// need to query db to populate with this user's stuff
} else {
	console.log("there is no logged in user");
}
}


//calling it
getLoggedInView();



//don't think i need this here?
//async function login(loginData) {
//	let response = await fetch(
//		`/api/login?email=${loginData.email}&password=${loginData.password}`,
//		{
//			method: 'GET',
//			headers: { 'Content-Type': 'application/json' },
//			params: JSON.stringify(loginData),
//		}
//	);
//	if (!response.ok) {
//		throw new Error('BOOOOOOOO there was a problem');
//	}
//	let data = await response.json();
//}