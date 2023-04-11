

function sendData() {
    // Create and populate the FormData to send
    theForm = document.getElementById("createUser");
    data = new FormData(theForm);
    console.log(data.entries);
let jsonObject = Object.fromEntries(data.entries());
console.log(jsonObject);
let jsonData = JSON.stringify(jsonObject);
    fetch("http://localhost:8080/users", {
        method: "POST",
        body: jsonData,
         headers: {
              "Content-Type": "application/json"
            }
    }).then(response => {
        return response.json();

    }).then(response => {
    redirectToProfilePage();

    })
.catch(err => {
        console.log(err);
    });
}

    document.getElementById("createUser").addEventListener("submit", e => {

        sendData();
        e.preventDefault();
     theForm.reset();
    /* confetti();*/

       console.log("just reset the form" );
         showSuccessMessage();

    });

 /* function showSuccessMessage(){
    const successMessage = alert("yay! ok now it's time to make your profile" );
      console.log("inside the function to show the success message");
    }*/

function redirectToProfilePage() {
  // redirect to profile page after 3 seconds

  setTimeout(() => {
    window.location.href = 'http://localhost:63342/poopReport/static/poopReportFrontEnd/profile-page.html';
  }, 7000);


   }
//show success message by inserting html
  function showSuccessMessage(){
    const successMessage = document.createElement('h4');
    successMessage.textContent = "yay! in a couple seconds you'll be redirected to the profile page where you can add your dog!"
    const form = document.getElementById('createUser'); // replace with your actual form ID

      form.insertAdjacentElement('beforebegin', successMessage);
       console.log(successMessage);
  /*  document.body.appendChild(successMessage);
      console.log("inside the function to show the success message");*/
    }