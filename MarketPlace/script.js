let productsGrid = document.getElementById("products-grid");
let productsArray = [];

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://my-json-server.typicode.com/RobocodeSchool/marketplace/products');
xhr.responseType = 'json';
xhr.onload = function(){
	let products = xhr.response;
	products.forEach(p =>{
		productsArray.push(p);
		let pElem = document.createElement('div');
		pElem.classList.add('product');
		pElem.innerHTML = `
			<h2 class='product-name'>${p.name}</h2>
			<img class='product-photo' src='${p.photo_url}'>
			<p class='product-price'><b>Price: </b>${p.price}</p>
			<p class='product-description'><b>Description: </b>${p.description}</p>
			<a href='userProfile.html?id=${p.author_id}'>Seller profile</a>
			<button>Buy</button>
		`;
		productsGrid.append(pElem);
	});
}
xhr.send();