
console.log("oh heeeyyyy");
class User {
  constructor(user_name, first_name, last_name, email) {
    {
      this.user_name = user_name;
      this.first_name = first_name;
      this.last_name = last_name;
      this.email = email;

    }
  }
}


//grab form
let createAccountForm = document.querySelector('form');
//add event listener
createAccountForm.addEventListener('submit', function (event) {
  //event handler
  event.preventDefault();

  const formData = new FormData(createAccountForm);
  let dto = new User(formData)
  debugger;
  fetch('http://localhost:8080/create-account', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: dto
  }).then(console.log(dto.user_name))
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  // .catch(error => {
  // console.error(error);
  // });
});











//let data = new FormData(createAccountForm);

// data.addEventListener('submit', function (event) {
//   event.preventDefault();
//   let data = event.formData;
//   data.addEventListener('formdata', function (event) {
//     console.log('formdata event has triggered this function' + event);
//   })
// }
// )



// const createAccountForm = document.querySelector('form');

// /*///////// event listener to capture data on submit /////////*/
// createAccountForm.addEventListener('submit', function (event) {
// event.preventDefault();

// //creates a new instance of the FormData object with the form as argument
// const data = new FormData(createAccountForm);
// //debugger;
// console.log("this should print the username that was entered: ", data.get('user_name'));
// //i feel like this might all be redundant??
// //event listener and handler to get data from formData object
// data.addEventListener('formdata', function (event){
// console.log('formdata event has triggered this function' + event);
// },


//updates the variable with data captured when the FormData event was fired
//  let data = event.formData;
//  console.log("right before fetch");
//  fetch('https://localhost:8080/users', {
//   method: 'POST',
//   body: data,
//   })
//   .then(res => res.json())
//   .then(data => console.log("hopefully this prints something :" + data))
// })



//createAccountForm.reset()

// can i turn those 3 lines into a function to reuse each time?
/*//////////////////// end of event listener ///////////////////*/


//+++++++++++++++++++++++ trying out the built in formdata object

// createAccount.onsubmit = async (e) => {
//     e.preventDefault();
//     let response = await fetch('http://localhost:8080/formdata', {
//       method: 'POST',

//       body: new FormData(createAccount)
//     });
// console.log(formData);
//     let result = await response.json();

//     alert(result.message);
//   };





// function createAccount(event){



// ////////// class to capture form input to create a new user  //////////
