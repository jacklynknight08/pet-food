console.log("Pet Food Exercise");

// //DOG DATA

var dogDataRequest = new XMLHttpRequest();

dogDataRequest.addEventListener("load", dogDataRequestComplete);
dogDataRequest.addEventListener("error", dogDataRequestFailed);

function dogDataRequestComplete(event){
	console.log("Dog food data");
	var dogData = JSON.parse(event.target.responseText);
	console.log("The dog food data", dogData);

	showDogData(dogData);
}


function dogDataRequestFailed(event){
	console.log("Error");
}

dogDataRequest.open("GET", "dogfood.json");
console.log("go get dog data");

dogDataRequest.send();

function showDogData(dogData){
	var dogfoodDiv = document.getElementById("dogfood");
	var foodData = "";
	var brands = dogData.dog_brands;

	for(var i = 0; i < brands.length; i++){

		foodData += `<div><h1>${brands[i].name}</h1></div>`

		var types = brands[i].types;

		for(var j = 0; j < types.length; j++){

			foodData += `<h3>Type: ${types[j].type}</h3>`

			var volumes = types[j].volumes;

			for(var k = 0; k < volumes.length; k++){

				foodData += `<p>Volume: ${volumes[k].name}</p>`
				foodData += `<p>Price: ${volumes[k].price}</p>`
			}
		}
	}
	dogfoodDiv.innerHTML += foodData;
}

//CAT DATA

var catDataRequest = new XMLHttpRequest();

catDataRequest.addEventListener("load", catDataRequestComplete);
catDataRequest.addEventListener("error", catDataRequestFailed);

function catDataRequestComplete(event){
	console.log("Cat food data");
	var catData = JSON.parse(event.target.responseText);
	console.log("The cat food data", catData);

	showCatData(catData);
}

function catDataRequestFailed(event){
	console.log("Error");
}

catDataRequest.open("GET", "catfood.json");
console.log("go get cat data");

catDataRequest.send();

function showCatData(catData){
	var catfoodDiv = document.getElementById("catfood");
	var catfoodData = "";
	var catBrands = catData.cat_brands;
	// console.log("catBrands", catBrands);
	for(var a = 0; a < catBrands.length; a++){

		catfoodData += `<div><h1>${catBrands[a].name}</h1></div>`
		catfoodData += `<h2>${catBrands[a].breeds}</h2>`
		// console.log("catfoodData", catfoodData);
		var catTypes = catBrands[a].types;

		for(var b = 0; b < catTypes.length; b++){

			catfoodData += `<h3>Type: ${catTypes[b].type}</h3>`

			var catVolumes = catTypes[b].volumes;

			for(var c = 0; c < catVolumes.length; c++){

				catfoodData += `<p>Volume: ${catVolumes[c].name}</p>`
				catfoodData += `<p>Price: ${catVolumes[c].price}</p>`
			}
		}
	}
	catfoodDiv.innerHTML += catfoodData;
}
