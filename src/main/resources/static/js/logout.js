
let user = localStorage.getItem('loggedInUser');

const logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', () => {
   console.log("inside logout button function");
    localStorage.clear();
   window.location.href = '/home';
});