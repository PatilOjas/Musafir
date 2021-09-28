let userDetailsButton = document.getElementById('traveller-details')

userDetailsButton.addEventListener('submit', () => {
	let userDetails = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		location: document.getElementById('location').value,
		adultCoTravellers: document.getElementById('adults').value,
		childrenCoTravellers: document.getElementById('children').value,
		travelPlan: document.getElementById('travelplan').value, 
	}
	console.log(userDetails)
}
)

