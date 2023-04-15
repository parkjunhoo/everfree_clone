let list = document.getElementsByClassName("carouselItem");
this.addEventListener('scroll',()=>{
    for(i =0; i<list.length; i++){
        list[i].style.transform = `translateY(${window.scrollY/2}px)`;
    }
});

let bowData = [
    {
        name:"B 라벨 카라 T - NEW",
        price:"34,000",
        tags:["#오버핏","#인기"],
        size:"Free",
        colorCount:"3",
        image:"https://www.everfree.co.kr/shopimages/manish/0130070007972.jpg?1556696940",
        image2:"http://www.everfree.co.kr/shopimages/manish/013007000797.jpg?1556696940",
        link:"/"
    },
    {
        name:"B 라벨 카라 T - NEW",
        price:"34,000",
        tags:["#오버핏","#인기"],
        size:"Free",
        colorCount:"3",
        image:"https://www.everfree.co.kr/shopimages/manish/0130070007972.jpg?1556696940",
        image2:"http://www.everfree.co.kr/shopimages/manish/013007000797.jpg?1556696940",
        link:"/"
    },
    {
        name:"B 라벨 카라 T - NEW",
        price:"34,000",
        tags:["#오버핏","#인기"],
        size:"Free",
        colorCount:"3",
        image:"https://www.everfree.co.kr/shopimages/manish/0130070007972.jpg?1556696940",
        image2:"http://www.everfree.co.kr/shopimages/manish/013007000797.jpg?1556696940",
        link:"/"
    },
    {
        name:"B 라벨 카라 T - NEW",
        price:"34,000",
        tags:["#오버핏","#인기"],
        size:"Free",
        colorCount:"3",
        image:"https://www.everfree.co.kr/shopimages/manish/0130070007972.jpg?1556696940",
        image2:"http://www.everfree.co.kr/shopimages/manish/013007000797.jpg?1556696940",
        link:"/"
    },
    {
        name:"B 라벨 카라 T - NEW",
        price:"34,000",
        tags:["#오버핏","#인기"],
        size:"Free",
        colorCount:"3",
        image:"https://www.everfree.co.kr/shopimages/manish/0130070007972.jpg?1556696940",
        image2:"http://www.everfree.co.kr/shopimages/manish/013007000797.jpg?1556696940",
        link:"/"
    },
    {
        name:"B 라벨 카라 T - NEW",
        price:"34,000",
        tags:["#오버핏","#인기"],
        size:"Free",
        colorCount:"3",
        image:"https://www.everfree.co.kr/shopimages/manish/0130070007972.jpg?1556696940",
        image2:"http://www.everfree.co.kr/shopimages/manish/013007000797.jpg?1556696940",
        link:"/"
    },
    {
        name:"B 라벨 카라 T - NEW",
        price:"34,000",
        tags:["#오버핏","#인기"],
        size:"Free",
        colorCount:"3",
        image:"https://www.everfree.co.kr/shopimages/manish/0130070007972.jpg?1556696940",
        image2:"http://www.everfree.co.kr/shopimages/manish/013007000797.jpg?1556696940",
        link:"/"
    },
    {
        name:"B 라벨 카라 T - NEW",
        price:"34,000",
        tags:["#오버핏","#인기"],
        size:"Free",
        colorCount:"3",
        image:"https://www.everfree.co.kr/shopimages/manish/0130070007972.jpg?1556696940",
        image2:"http://www.everfree.co.kr/shopimages/manish/013007000797.jpg?1556696940",
        link:"/"
    },
    {
        name:"B 라벨 카라 T - NEW",
        price:"34,000",
        tags:["#오버핏","#인기"],
        size:"Free",
        colorCount:"3",
        image:"https://www.everfree.co.kr/shopimages/manish/0130070007972.jpg?1556696940",
        image2:"http://www.everfree.co.kr/shopimages/manish/013007000797.jpg?1556696940",
        link:"/"
    },
    {
        name:"B 라벨 카라 T - NEW",
        price:"34,000",
        tags:["#오버핏","#인기"],
        size:"Free",
        colorCount:"3",
        image:"https://www.everfree.co.kr/shopimages/manish/0130070007972.jpg?1556696940",
        image2:"http://www.everfree.co.kr/shopimages/manish/013007000797.jpg?1556696940",
        link:"/"
    },
    {
        name:"B 라벨 카라 T - NEW",
        price:"34,000",
        tags:["#오버핏","#인기"],
        size:"Free",
        colorCount:"3",
        image:"https://www.everfree.co.kr/shopimages/manish/0130070007972.jpg?1556696940",
        image2:"http://www.everfree.co.kr/shopimages/manish/013007000797.jpg?1556696940",
        link:"/"
    },
    {
        name:"B 라벨 카라 T - NEW",
        price:"34,000",
        tags:["#오버핏","#인기"],
        size:"Free",
        colorCount:"3",
        image:"https://www.everfree.co.kr/shopimages/manish/0130070007972.jpg?1556696940",
        image2:"http://www.everfree.co.kr/shopimages/manish/013007000797.jpg?1556696940",
        link:"/"
    }
];

let bowTable = document.getElementById("bowTable");

for(let i =0; i<bowData.length; i++){
    
    let hoverbox = document.createElement("hoverbox-component");
    hoverbox.classList.add("promotionProduct");
    bowTable.appendChild(hoverbox);
        let beforeBox = document.createElement("div");
        beforeBox.classList.add("beforeBox");
        beforeBox.style.backgroundImage = `url(${bowData[i].image})`;

        let afterBox = document.createElement("div");
        afterBox.classList.add("afterBox");
            let productAfterUp = document.createElement("div");
            productAfterUp.classList.add("downAnim");
            productAfterUp.classList.add("productAfterUp");
                let img = document.createElement("img");
                img.src = `${bowData[i].image2}`;
                productAfterUp.append(img);

            let productAfterDown = document.createElement("div");
            productAfterDown.classList.add("upAnim");
            productAfterDown.classList.add("productAfterDown");
                    let descDiv = document.createElement("div");
                    descDiv.classList.add("descDiv");

                    let name = document.createElement("h1");
                    name.innerHTML = `${bowData[i].name}`;

                    let price = document.createElement("h2");
                    price.innerHTML = `${bowData[i].price}`;

                    bowData[i].tags.forEach((tag)=>{
                        let tagEl = document.createElement("h3");
                        tagEl.innerHTML = tag;
                        descDiv.appendChild(tagEl);
                    })

                    let size = document.createElement("h4");
                    size.innerHTML = `${bowData[i].size} ·`;

                    let colorCount = document.createElement("h4");
                    colorCount.innerHTML = `${bowData[i].colorCount} Colors`;
                    descDiv.appendChild(size);
                    descDiv.appendChild(colorCount);

                    productAfterDown.appendChild(name);
                    productAfterDown.appendChild(price);
                    productAfterDown.appendChild(descDiv);


            afterBox.appendChild(productAfterUp);
            afterBox.appendChild(productAfterDown);


        hoverbox.appendChild(beforeBox);
        hoverbox.appendChild(afterBox);
}
