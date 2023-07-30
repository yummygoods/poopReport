console.log("connected");

let user = localStorage.getItem('loggedInUser');
console.log('logged in user is:', user);

document.addEventListener('load', populateDogs(user));

let dropdown = document.getElementById('dog_id');
console.log("dropdown is: " + dropdown);

async function getDogs(user) {
  console.log("inside getDogs function)");
	let response = await fetch(`/api/users/dogs/${user}`);
	let dogs = await response.json();
  dogs.forEach(dog => {
		let option = document.createElement('option');
		option.value = dog.id;
    option.textContent = dog.name;
		dropdown.appendChild(option);

	});
};





function populateDogs(){
  console.log("running function on page load");
	getDogs(user);


}