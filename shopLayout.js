let mainDiv = document.querySelectorAll("[data-webPage]")[3];
//includes constructor values as well as button
//goal: create web page using only javascript
class Product {
    constructor(name, description, price, image) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
    getInfo() {
        return [this.name, this.description, this.price, this.image];
    }
    createElement() {
        let items = document.querySelector(".items");
        let item = document.createElement("div");
        item.classList.add("item");
        let img = document.createElement("img");
        img.src = this.image;
        let imgdiv = document.createElement("div");
        imgdiv.classList.add("imgDiv");
        imgdiv.append(img);
        item.append(imgdiv);
        let itemSB = document.createElement("div");
        itemSB.classList.add("itemSplitBox");
 
        let title = document.createElement("h2");
        title.innerHTML = this.name;
        itemSB.append(title);
        let priceTag = document.createElement("p");
        priceTag.innerHTML = "$" + this.price;
        priceTag.style.color = "white";
        itemSB.append(priceTag);
        let description = document.createElement("p");
        description.innerHTML = this.description;
        itemSB.append(description);
        item.append(itemSB);
        items.append(item);
    }
}
//expand to categories like vitamin
let b12 = new Product("B12", "very healthy", "17.99", "b12-min-removebg-preview.png");
let d3 = new Product("D3", "Essential for calcium absorbtion & strong bones", "11.99", "item1.png");
let fishOil = new Product("Fish Oil", "an excellent source of omega-3 fatty acids. ", "17.99", "fishOil-removebg-preview.png");
let b1 = new Product("B1", "Essential for glucose metabolism", "7.99", "b1-removebg-preview.png");
let calcium = new Product("Calcium", "Essential for strong and healthy bones", "12.99", "calcium2-removebg-preview.png");
let itemList = [b12, d3, fishOil, b1, calcium];
itemList.forEach(function(item) {
    item.createElement();
})

function locatioPage(index, webPages) {
    for(let i = 0; i < webPages.length; i++) {
        webPages[i].classList.add("invisible");
    }
    webPages[index].classList.remove("invisible");
}
let imgDivs = document.querySelectorAll(".imgDiv");
let purchaseDiv =  document.querySelectorAll("[data-webPage]")[4];
for(let i = 0; i < imgDivs.length; i++) {
    imgDivs[i].children[0].addEventListener('click', function() {
        locatioPage(4, document.querySelectorAll("[data-webPage]"));
        console.log("this link worked " + itemList[i].getInfo()[0]);
    })
}
let x = document.querySelector("#x");
x.addEventListener('click', function() {
    locatioPage(3, document.querySelectorAll("[data-webPage]"));
})
 