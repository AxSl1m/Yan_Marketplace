const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let profile = document.getElementById('profile');
let productsGrid = document.getElementById('user-products-grid');
let userRequest = new XMLHttpRequest();
userRequest.open('GET', `https://my-json-server.typicode.com/RobocodeSchool/marketplace/users/${id}`);
userRequest.responseType = 'json';
userRequest.onload = function(){
	let user = userRequest.response;
	profile.innerHTML = `
		<h1>${user.name}</h1>
		<h2>${user.sirname}</h2>
		<img class = "profile-img" src="${user.photo_url}">
		<p>Balance: ${user.balance}$</p>
	`
}
userRequest.send();

let productsRequest = new XMLHttpRequest();
productsRequest.open('GET', `https://my-json-server.typicode.com/RobocodeSchool/marketplace/products?author_id=${id}`);
productsRequest.responseType = 'json';
productsRequest.onload = function(){
	let products = productsRequest.response;
	productsGrid.innerHTML = null;
	products.forEach(p =>{
		productsGrid.innerHTML += `
			<div class="product">
				<h2 class="product-name">${p.name}</h2>
				<img class="product-photo" src="${p.photo_url}">
				<p class="product-price"><b>Price: </b>${p.price}</p>
				<p class="product-description"><b>Description: </b>${p.description}</p>
			</div>
		`;
	});
}
productsRequest.send();