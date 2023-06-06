console.log("hello");


let userForm = document.getElementById('createUser');

userForm.addEventListener('submit', function (event) {
  event.preventDefault();
 addUserData();
 console.log("called function to add user data");
  userForm.reset();
  
});
console.log("now listening for submit button");

class User {
  //constructor(user_name, first_name, last_name, email) {
  constructor(email, password) {
      this.email = email;
      this.password = password;
  /*    this.user_name = user_name;
      this.first_name = first_name;
      this.last_name = last_name;*/

  }
}


function addUserData(){
 /* let user_name = document.getElementById('user_name').value;
  console.log("this should print the new username : " + user_name);
let first_name = document.getElementById('first_name').value;

let last_name = document.getElementById('last_name').value;*/

let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
  const userFromForm = new User(email, password);
  console.log("this should print the new user object : " + userFromForm);
  //debugger;
  sendUserToServer(userFromForm);
  console.log("called function to send new user  to server")
}

////////// function to send the new user object to the db //////////
function sendUserToServer(userFromForm) {
  console.log("inside function to send to server")
  fetch(
    'http://localhost:8080/users',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userFromForm),
 mode: 'cors',
      credentials: 'include'
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