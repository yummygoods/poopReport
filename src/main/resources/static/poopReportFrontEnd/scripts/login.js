console.log('user login page  is connected');

//styling https://www.w3schools.com/howto/howto_css_login_form.asp
// https://www.bezkoder.com/jpa-repository-query/

class User {

  constructor(email, password) {
      this.email = email;
      this.password = password;


  }
}


async function checkData(loginData) {
	let response = await fetch('http://localhost:8080/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(loginData),
		mode: 'cors',
		credentials: 'include',
	});

	if (!response.ok) {
		throw new Error('BOOOOOOOO there was a problem');
	}

	let data = await response.json();
  console.log(data);
  // need to write java logic to check for user
}



let loginForm = document.getElementById('loginForm')
.addEventListener('submit', (event) => {
	event.preventDefault();
console.log("default prevented");
  const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
	 const loginData = new User(email, password);
	//  loginForm.reset();
   console.log(loginData);
	checkData(loginData);

	
});

/*
console.log("user login page  is connected");
//styling https://www.w3schools.com/howto/howto_css_login_form.asp
// https://www.bezkoder.com/jpa-repository-query/

async function checkData(loginData){
let response = await fetch('http://localhost:8080/login',
{
method: 'POST',
headers: {'Content-Type': 'application/json'},
body: JSON.stringify()


 },
)

}

function getLoginData() {
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const loginData = { email: }
checkData(loginData);
}

let loginForm = document.getElementById("login");
loginForm.addEventListener('submit', (event)=> {
event.preventDefault();
getLoginData();
loginForm.reset();

});*/
