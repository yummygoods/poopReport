
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
/*    }).then(text => {
        console.log(text);*/
    }).catch(err => {
        console.log(err);
    });
}

    document.getElementById("createUser").addEventListener("submit", e => {
        sendData();
        e.preventDefault();
     theForm.reset();
    });