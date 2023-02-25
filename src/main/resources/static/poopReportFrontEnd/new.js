console.log("hello");


let userForm = document.getElementById('createAccount');

userForm.addEventListener('submit', function (event) {
  event.preventDefault();
 addUserFromForm();
  userForm.reset();
  
});
console.log("now listening for submit button");

class User {
  constructor(user_name, first_name, last_name, email) {
    
      this.user_name = user_name;
      this.first_name = first_name;
      this.last_name = last_name;
      this.email = email;
  }
}


function addUserFromForm(){
  let user_name = document.getElementById('user_name').value;
  console.log("this should print the new username : " + user_name);

  const userFromForm = new User(user_name, first_name, last_name, email);
  sendUserToServer(userFromForm);
}

////////// function to send the new user object to the db //////////
function sendUserToServer(userFromForm) {
  fetch(
    'http://localhost:8080/users',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // takes the javascript object and turns it into a json string
      // fetch needs to be in strings, but the server will interpret the json string as json
      body: JSON.stringify(userFromForm)
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