
//  gets the dogs of the logged-in user and populates the form select
//TODO if no dogs are found for logged-in user, prompt to add them
//TODO ?if only one dog is found, change select?

let user = localStorage.getItem('loggedInUser');
let dropdown = document.getElementById('dog_id');

async function getDogs(user) {
	let response = await fetch(`/api/users/dogs/${user}`);
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