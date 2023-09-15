
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


// @ts-ignore
document.addEventListener('load', getDogs(user));

/*  		const loggedInDogs = {};
return 	loggedInDogs[`${dog.id}`] = `${dog.name}`;
	});
	localStorage.setItem('loggedInDogs', loggedInDogs.toString());

	console.log("logged in dogs are:", localStorage.getItem('loggedInDogs'));*/





/*

function populateDogs(){
  console.log("running function on page load");
	getDogs(user);


}*/