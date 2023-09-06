
//  gets the dogs of the logged-in user and populates the form select
//TODO if no dogs are found for logged-in user, prompt to add them
//TODO ?if only one dog is found, change select?
//TODO now that i get the whole user at login instead of just the id - do i need to change how the logged in dogs are stored?
// check local storage for loggedInUser.dogs - if null, prompt in select to add a dog
// add function to update user stored in local storage when they add a dog



let user = JSON.parse(localStorage.getItem('loggedInUser')).id;
let dropdown = document.getElementById('dog_id');



async function getDogs(user) {
	let response = await fetch(`/api/users/{id}/dogs`);
	let dogs = await response.json();
	localStorage.setItem('loggedInDogs', JSON.stringify(dogs));

  dogs.forEach(dog => {
		let option = document.createElement('option');
		option.value = dog.id;
        option.textContent = dog.name;
		dropdown.appendChild(option);
		    });

};

document.addEventListener('load', getDogs(user));