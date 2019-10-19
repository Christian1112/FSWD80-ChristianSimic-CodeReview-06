class locations{
	public visited : string;
	public name : string;
	public image : string;
	public address : string;

	constructor(name, image, visited, address){
		this.name = name;
		this.image = image;
		this.visited = visited;
		this.address = address;
	}
	render(){
		return `
			<div class="card col-lg-3 col-md-6 col-sm-12">
				<div class="cardName">
					<h3>${this.name}</h3>
				</div>
				<div class="cardImage">
					<img src="${this.image}">
				</div>
				<div class="cardDescription">
				<div class="visit">
					<p><i class="fas fa-eye"></i>${this.visited}</p>	
				</div>
					<p><i class="fas fa-map-marker-alt"></i>${this.address}</p>	
		`
	}
}

class place extends locations{
	private price : string;

	constructor(name, image, visited, address, price){
		super(name, image, visited, address);
		this.price = price;
	}
	placeoutput(){
		return `
					${super.render()}
					<p><i class="fas fa-euro-sign"></i>${this.price}</p>
				</div>
			</div>
		</div>
		`
	}	
}

let allplaces = new Array();
	allplaces[0] = new place("St. Charles Church", "img/church.jpg","12.04.2019", "Karlsplatz 1, 1010 Vienna", "10,00€");
	allplaces[1] = new place("Zoo Schönbrunn", "img/schönbrunn.jpg", "11.20.2019", "Maxingstraße 13b, 1130 Wien", "29,00€");
	allplaces[2] = new place("Prater", "img/prater.jpg", "11.03.2019", "1020 Wien", "Free entrance");
	allplaces[3] = new place("Albertina", "img/albertina.jpg", "12.11.2019", "Albertinaplatz 1, 1010 Wien", "20,00€");

let a = document.createElement("div");
a.setAttribute("class", "row");
a.setAttribute("id", "places");
let x = document.createElement("div");
x.setAttribute("class", "col-lg-12");
x.setAttribute("id", "placeheading");
document.getElementById("mainContent").append(x);
document.getElementById("mainContent").append(a);

document.getElementById("placeheading").innerHTML += `<div class="headings"><h1>Places</h1></div><hr>`

for(var value in allplaces){
	document.getElementById("places").innerHTML += allplaces[value].placeoutput();
}

class restaurant extends locations{
	private food : string;
	private openinghours : string;
	private webaddress : string;
	private phone : string;

	constructor(name, image, visited, address, food, openinghours, phone, webaddress){
		super(name, image, visited, address);
		this.food = food;
		this.openinghours = openinghours;
		this.phone = phone;
		this.webaddress = webaddress;
	}
	restaurantoutput(){
		return `
					${super.render()}
					<p><i class="fas fa-utensils"></i>${this.food}</p>
					<p><i class="fas fa-clock"></i>${this.openinghours}</p>
					<p><i class="fas fa-phone"></i>${this.phone}</p>
					<p><i class="fas fa-globe-europe"></i><a target="_blank" href="${this.webaddress}">${this.webaddress}</a></p>
				</div>
			</div>
		`
	}
}

let allrestaurants = new Array();
	allrestaurants[0] = new restaurant("Lemon Leaf Thai", "img/lemon.png", "11.03.2019", "Kettenbrückengasse 19, 1050 Vienna", "Thai", "11:00 - 15:00 & 17:30 - 23:00", "+43(1)5812308", "http://www.lemonleaf.at");
	allrestaurants[1] = new restaurant("SIXTA", "img/sixta.png", "11.17.2019", "1050 Wien, Schönbrunner Straße 21", "Traditional", "18:00 - 24:00", "+43 1 585 28 56", "http://www.sixta-restaurant.at");
	allrestaurants[2] = new restaurant("Asia Jasmin", "img/jasmin.jpg", "12.23.2019", "Breitenleerstrasse 102, 1220 Wien", "Asian", "11:00 - 15:00 & 17:00 - 22:30", "01/734 3550", "http://www.asia-jasmin.at");
	allrestaurants[3] = new restaurant("Rinderwahn", "img/rinderwahn.jpg", "10.28.2019", "Naschmarkt 1, 1060 Wien", "Burgers", "11:30 - 23:00", "+43 1 51 20 996", "https://www.rinderwahn.at");

let b = document.createElement("div");
b.setAttribute("class", "row");
b.setAttribute("id", "restaurant");
document.getElementById("mainContent").append(b);
let y = document.createElement("div");
y.setAttribute("class", "col-lg-12");
y.setAttribute("id", "restaurantheading");
document.getElementById("mainContent").append(y);
document.getElementById("mainContent").append(b);

document.getElementById("restaurantheading").innerHTML += `<div class="headings"><h1>Restaurants</h1></div><hr>`

for(var value in allrestaurants){
	document.getElementById("restaurant").innerHTML += allrestaurants[value].restaurantoutput();
}

class events extends locations{
	private time : string;
	private ticketprice : string;
	private webaddress : string;

	constructor(name, image, visited, address, time, ticketprice, webaddress){
		super(name, image, visited, address);
		this.time = time;
		this.ticketprice = ticketprice;
		this.webaddress = webaddress;
	}
	eventoutput(){
		return `
					${super.render()}
					<p><i class="fas fa-clock"></i>${this.time}</p>
					<p><i class="fas fa-ticket-alt"></i>${this.ticketprice}</p>
					<p><i class="fas fa-globe-europe"></i><a target="_blank" href="${this.webaddress}">${this.webaddress}</a></p>
				</div>
			</div>
		`
	}
}

let allevents = new Array();
	allevents[0] = new events("Kris Kristofferson", "img/kristofferson.jpg", "11.15.2019", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1, 1150 Wien", "Fr., 15.11.2019. 20:00", "51,30€", "http://kriskristofferson.com");
	allevents[1] = new events("Lenny Kravitz", "img/kravitz.jpg", "09.12.2019", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1, 1150 Wien", "Sat, 12.09.2019 - 19:30", "87,80€", "http://www.lennykravitz.com");
	allevents[2] = new events("Masters of Dirt", "img/mod.jpg", "10.15.2019", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1, 1150 Wien", "Fr, 15.10.19, 20:00", "70€", "https://www.mastersofdirt.com");
	allevents[3] = new events("Timmy Trumpet", "img/imager.jpg", "11.03.2019", "Wiener Stadthalle, Roland Rainer Platz 1, 1150 Wien", "Mi, 3.11.2019 ", "Free entrance", "https://www.timmytrumpet.com");

let c = document.createElement("div");
c.setAttribute("class", "row");
c.setAttribute("id", "events");
document.getElementById("mainContent").append(c);
let z = document.createElement("div");
z.setAttribute("class", "col-lg-12");
z.setAttribute("id", "eventheading");
document.getElementById("mainContent").append(z);
document.getElementById("mainContent").append(c);

document.getElementById("eventheading").innerHTML += `<div class="headings"><h1>Events</h1></div><hr>`

for(var value in allevents){
	document.getElementById("events").innerHTML += allevents[value].eventoutput();
}

//get dates to array

var placearr = new Array();
var restaurantarr = new Array();
var eventarr = new Array();

for(let value in allplaces){
	placearr.push([allplaces[value].visited, allplaces[value]]);
}

for(let value in allrestaurants){
	restaurantarr.push([allrestaurants[value].visited, allrestaurants[value]]);
}

for(let value in allevents){
	eventarr.push([allevents[value].visited, allevents[value]]);
}

for(let value in placearr){
	let date = new Date(placearr[value]);
}

for(let value in restaurantarr){
	let date = new Date(restaurantarr[value]);
}

for(let value in eventarr){
	let date = new Date(eventarr[value]);
}

document.getElementById("ascending").addEventListener("click", sortascending, false);

function sortascending(){	
	//sort ascending
	placearr.sort(function(a, b) {
	    return a<b ? -1 : a>b ? 1 : 0;
	});

	var replacep = document.getElementById("places");

	while(replacep.hasChildNodes()){
			replacep.removeChild(replacep.firstChild);
		}

	for(var value in placearr){
		document.getElementById("places").innerHTML += placearr[value][1].placeoutput();
	}

	restaurantarr.sort(function(a, b) {
	    return a<b ? -1 : a>b ? 1 : 0;
	});

	var replacer = document.getElementById("restaurant");

	while(replacer.hasChildNodes()){
			replacer.removeChild(replacer.firstChild);
		}

	for(var value in restaurantarr){
		document.getElementById("restaurant").innerHTML += restaurantarr[value][1].restaurantoutput();
	}

	eventarr.sort(function(a, b) {
	    return a<b ? -1 : a>b ? 1 : 0;
	});

	var replacee = document.getElementById("events");

	while(replacee.hasChildNodes()){
			replacee.removeChild(replacee.firstChild);
		}

	for(var value in eventarr){
		document.getElementById("events").innerHTML += eventarr[value][1].eventoutput();
	}

	console.log(placearr);
	console.log(restaurantarr);
	console.log(eventarr);
}

document.getElementById("descending").addEventListener("click", sortdescending, false);

function sortdescending(){	
	//sort ascending
	placearr.sort(function(a, b) {
	    return a>b ? -1 : a<b ? 1 : 0;
	});

	var replacep = document.getElementById("places");

	while(replacep.hasChildNodes()){
			replacep.removeChild(replacep.firstChild);
		}

	for(var value in placearr){
		document.getElementById("places").innerHTML += placearr[value][1].placeoutput();
	}

	restaurantarr.sort(function(a, b) {
	    return a>b ? -1 : a<b ? 1 : 0;
	});

	var replacer = document.getElementById("restaurant");

	while(replacer.hasChildNodes()){
			replacer.removeChild(replacer.firstChild);
		}

	for(var value in restaurantarr){
		document.getElementById("restaurant").innerHTML += restaurantarr[value][1].restaurantoutput();
	}

	eventarr.sort(function(a, b) {
	    return a>b ? -1 : a<b ? 1 : 0;
	});

	var replacee = document.getElementById("events");

	while(replacee.hasChildNodes()){
			replacee.removeChild(replacee.firstChild);
		}

	for(var value in eventarr){
		document.getElementById("events").innerHTML += eventarr[value][1].eventoutput();
	}

	console.log(placearr);
	console.log(restaurantarr);
	console.log(eventarr);
}