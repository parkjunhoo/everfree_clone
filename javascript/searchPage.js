let searchRes = [
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

document.getElementById("searchResCountText").textContent = `검색어와 관련된 ${searchRes.length}개의 상품을 찾았습니다.`;

let searchResultTable = document.getElementById("searchResultTable");

for(let i =0; i<searchRes.length; i++){
    let searchResItemDiv = document.createElement("div");
    searchResItemDiv.classList.add("searchResItemDiv");
    searchResultTable.appendChild(searchResItemDiv);

        let hoverbox = document.createElement("hoverbox-component");
        hoverbox.classList.add("searchResProduct");
        searchResItemDiv.appendChild(hoverbox);
            let beforeBox = document.createElement("div");
            beforeBox.classList.add("beforeBox");
            beforeBox.style.backgroundImage = `url(${searchRes[i].image})`;

            let afterBox = document.createElement("div");
            afterBox.classList.add("afterBox");
            let img = document.createElement("img");
            img.src = `${searchRes[i].image2}`;
            img.style.width = "100%";
            img.style.height = "100%";
            afterBox.append(img);
            hoverbox.appendChild(beforeBox);
            hoverbox.appendChild(afterBox);

        let searchResDesc = document.createElement("div");
        searchResDesc.classList.add("searchResDesc");
        searchResItemDiv.appendChild(searchResDesc);
            let searchResH1 = document.createElement("h1");
            searchResH1.textContent = searchRes[i].name;
            searchResDesc.appendChild(searchResH1);

            let searchResH2 = document.createElement("h2");
            searchResH2.textContent = searchRes[i].price;
            searchResDesc.appendChild(searchResH2);

            let searchResH3 = document.createElement("h3");
            searchResH3.textContent = `${searchRes[i].size} / ${searchRes[i].colorCount} Colors`;
            searchResDesc.appendChild(searchResH3);

}


function focusToSearchBar(){
    document.getElementById("searchPageInput").focus();
    
}