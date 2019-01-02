function Phone(brand, price, color, memory){
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.memory = memory;
}
	var phonesField = document.getElementById('phones');

Phone.prototype.printInfo = function(){
	phones.insertAdjacentHTML("afterbegin", "<div>" + "Phone: " + this.brand + "<br>" + "Color: " + this.color +  "<br>" +"Memory: " + this.memory + "<br>" + "Price: " + this.price + " zł" + "<br>" + "<br>" + "</div>");
};

Phone.prototype.sale = function(){
	phonesField.insertAdjacentHTML("afterbegin", "SALE" + "<br>");
};

const SamsungGalaxyS6 = new Phone ('Apple', 2250, 'silver', "2 GB");
SamsungGalaxyS6.printInfo();
SamsungGalaxyS6.sale();
const GalaxyS7 = new Phone ('Samsung', 1999, 'silver', "4 GB");
GalaxyS7.printInfo();
const HTC = new Phone ('HTC', 1200, 'black', "4 GB");
HTC.printInfo();
HTC.sale();