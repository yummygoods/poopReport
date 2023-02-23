/*///////// event listener to capture createAccountForm /////////*/
console.log("oh heeeyyyy");
/*function createAccount(event){
event.preventDefault();*/
//let createAccountForm = document.getElementById('createAccount');
/*//createAccountForm.addEventListener('submit', function (event) {
const formData = new FormData(event);
console.log(createAccountForm.values);
debugger;
console.log("this should print info captured from creating an account: " + formData)
createAccountForm.reset();
}*/
//});
// can i turn those 3 lines into a function to reuse each time?
/*//////////////////// end of event listener ///////////////////*/



createAccount.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('http://localhost:8080/formdata/user', {
      method: 'POST',
  mode: 'cors';
      body: new FormData(createAccount)
    });
console.log(formData);
    let result = await response.json();

    alert(result.message);
  };









////////// class to capture form input to create a new user  //////////
class User {
  constructor(user_name, first_name, last_name, email)  {
        {
                this.user_name = user_name;
                   this.first_name = first_name;
                   this.last_name = last_name;
                   this.email = email;

               }
  }
}