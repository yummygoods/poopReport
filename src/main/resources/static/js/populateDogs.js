
let user = localStorage.getItem('loggedInUser');

//TODO if no dogs are found for logged-in user, prompt to add them
//TODO ?if only one dog is found, change select?


let user = localStorage.getItem('loggedInUser');
let dropdown = document.getElementById('dog_id');

async function getDogs(user) {
	let response = await fetch(`/api/users/dogs/${user}`);
	let dogs = await response.json();
	if (dogs.length === 0) {
    window.location.href = '/profile-page';
    };
	localStorage.setItem('loggedInDogs', JSON.stringify(dogs));
  dogs.forEach(dog => {
		let option = document.createElement('option');
		option.value = dog.id;
        option.textContent = dog.name;
		dropdown.appendChild(option);
		    });


};

document.addEventListener('load', getDogs(user));