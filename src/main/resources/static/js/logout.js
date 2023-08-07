
let user = localStorage.getItem('loggedInUser');
console.log('logged in user is:', user);

const logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', () => {
   console.log("inside logout button function");
    localStorage.clear();
   window.location.href = '/home';
});