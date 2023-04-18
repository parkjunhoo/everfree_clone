
basketSubTotalValue = null;
shippingValue = null;
totalValue = null;

totalInfo = {
    subTotal:0,
    shipping:2500,
    total:0,
};


function calcTotal(){
    
    for(let i =0; i<basketList.length; i++){
        totalInfo.subTotal += basketList[i].price * basketList[i].amount;
    }
    if(totalInfo.subTotal >= 50000) totalInfo.shipping = 0;
    totalInfo.total = totalInfo.subTotal + totalInfo.shipping;
}
function syncSummary(){
    calcTotal();
    basketSubTotalValue.textContent = totalInfo.subTotal;
}

let basketList = [
    {
        name:"지퍼조거 팬츠 9077",
        img:"http://www.everfree.co.kr/shopimages/manish/014003000506.jpg?1609143478",
        option:"컬러: 블랙, 사이즈:L",
        amount:1,
        price:70000
    },
    {
        name:"조지아 나염 무드 맨투맨",
        img:"http://www.everfree.co.kr/shopimages/manish/007001000519.jpg?1647490141",
        option:"컬러: 버건디, 사이즈:Free",
        amount:1,
        price:37000
    }
];

















// <div class="basketOuter">

// <div class="basketTitleDiv">
//     <h1>Shopping Bag</h1>
// </div>

// <form class="basketForm" name="basketForm">
//     <div class="basketDeleteDiv">
//         <span>✖</span>
//     </div>
//     <div class="basketItemImgDiv">
//         <img src="http://www.everfree.co.kr/shopimages/manish/014003000506.jpg?1609143478"/>
//     </div>

//     <div class="basketItemDescDiv">
//         <h1>지퍼조거 팬츠 9077</h1>
//         <h3>컬러: 블랙, 사이즈: L</h3>
//     </div>

//     <div class="basketItemAmount">
//         <div class="amountMinusBtn amountBtn">-</div>
//         <input type="number" name="amount" value="0"></input>
//         <div class="amountPlusBtn amountBtn">+</div>
//     </div>
    

//     <div class="basketItemPriceDiv">
//         <h1>70,000원</h1>
//     </div>
// </form>

// <div id="basketSummaryDiv">
//     <p class="infoP">5만원 이상 구매시 무료배송</p>

//     <div id="basketSummaryListDiv">
//         <div id="basketSubTotalDiv" class="summaryList">
//             <p class="label">주문 금액</p>
//             <p class="value">107100원</p>
//         </div>

//         <div id="basketShippingDiv" class="summaryList">
//             <p class="label">배송비</p>
//             <p class="value">무료</p>
//         </div>

//         <hr noshade="true">

//         <div id="basketTotalDiv" class="summaryList">
//             <h1 id="totalLabel" class="label">합계</h1>
//             <h1 id="totalValue" class="value">107000원</h1>
//         </div>

//         <div id="basketCheckOutBtn">
//             <span>CHECK OUT</span>
//         </div>
//     </div>
// </div>

// </div>


let basketSection = document.getElementById("basketSection");
    let basketOuter = document.createElement("div");
    basketOuter.classList.add("basketOuter");
    basketSection.appendChild(basketOuter);

        let basketTitleDiv = document.createElement("div");
        basketTitleDiv.classList.add("basketTitleDiv");
        basketOuter.appendChild(basketTitleDiv);
            let h1Title = document.createElement("h1");
            h1Title.textContent = "Shopping Bag";
            basketTitleDiv.appendChild(h1Title);

        for(let i=0; i<basketList.length; i++){
            

            let basketForm = document.createElement("div");
            basketForm.classList.add("basketForm");
            basketForm.name = "basketForm";
            basketOuter.appendChild(basketForm);
                let basketDeleteDiv = document.createElement("div");
                basketDeleteDiv.classList.add("basketDeleteDiv");
                basketForm.appendChild(basketDeleteDiv);
                    let deleteBtn = document.createElement("span");
                    deleteBtn.textContent = "✖";
                    deleteBtn.addEventListener("onclick", ()=>{
                        //total 계산 다시하는 펑션?
                        basketList.splice(i,1);//db에서 지우는작업?
                        basketForm.remove;
                    });
                    basketDeleteDiv.appendChild(deleteBtn);
                
                let basketItemImgDiv = document.createElement("div");
                basketItemImgDiv.classList.add("basketItemImgDiv");
                basketForm.appendChild(basketItemImgDiv);
                    let img = document.createElement("img");
                    img.src = basketList[i].img;
                    basketItemImgDiv.appendChild(img);
                
                let basketItemDescDiv = document.createElement("div");
                basketItemDescDiv.classList.add("basketItemDescDiv");
                basketForm.appendChild(basketItemDescDiv);
                    let productNameH1 = document.createElement("h1");
                    productNameH1.textContent = basketList[i].name;
                    basketItemDescDiv.appendChild(productNameH1);

                    let productOptionH3 = document.createElement("h3");
                    productOptionH3.textContent = basketList[i].option;
                    basketItemDescDiv.appendChild(productOptionH3);

                
                let basketItemAmount = document.createElement("div");
                basketItemAmount.classList.add("basketItemAmount");
                basketForm.appendChild(basketItemAmount);
                    let amountMinusBtn = document.createElement("div");
                    amountMinusBtn.classList.add("amountMinusBtn");
                    amountMinusBtn.classList.add("amountBtn");
                    amountMinusBtn.textContent = "-";
                    basketItemAmount.appendChild(amountMinusBtn);
                    
                    let amountInput = document.createElement("input");
                    amountInput.type= "number";
                    amountInput.name = "amount";
                    amountInput.value = basketList[i].amount;
                    basketItemAmount.appendChild(amountInput);


                    let amountPlusBtn = document.createElement("div");
                    amountPlusBtn.classList.add("amountPlusBtn");
                    amountPlusBtn.classList.add("amountBtn");
                    amountPlusBtn.textContent = "+";
                    basketItemAmount.appendChild(amountPlusBtn);

                //     <div class="basketItemPriceDiv">
                //         <h1>70,000원</h1>
                //     </div>
                let basketItemPriceDiv = document.createElement("div");
                basketItemPriceDiv.classList.add("basketItemPriceDiv");
                basketForm.appendChild(basketItemPriceDiv);
                    basketItemPriceValue = document.createElement("h1");
                    basketItemPriceValue.textContent = basketList[i].price * basketList[i].amount +"원";
                    basketItemPriceDiv.appendChild(basketItemPriceValue);
        }

        calcTotal();

        let basketSummaryDiv = document.createElement("div");
        basketSummaryDiv.id = "basketSummaryDiv";
        basketOuter.appendChild(basketSummaryDiv);
        
            let summaryInfoP = document.createElement("p");
            summaryInfoP.classList.add("infoP");
            summaryInfoP.textContent = "5만원 이상 구매시 무료배송";
            basketSummaryDiv.appendChild(summaryInfoP);

            let basketSummaryListDiv = document.createElement("div");
            basketSummaryListDiv.id = "basketSummaryListDiv";
            basketSummaryDiv.appendChild(basketSummaryListDiv);
                let basketSubTotalDiv = document.createElement("div");
                basketSubTotalDiv.id = "basketSubTotalDiv";
                basketSubTotalDiv.classList.add("summaryList");
                basketSummaryListDiv.appendChild(basketSubTotalDiv);
                    let subTotalLabel = document.createElement("p");
                    subTotalLabel.classList.add("label");
                    subTotalLabel.textContent = "주문 금액";
                    basketSubTotalDiv.appendChild(subTotalLabel);

                    basketSubTotalValue = document.createElement("p");
                    basketSubTotalValue.classList.add("value");
                    basketSubTotalValue.textContent = totalInfo.subTotal+"원";
                    basketSubTotalDiv.appendChild(basketSubTotalValue);

                
                    let basketShippingDiv = document.createElement("div");
                    basketShippingDiv.id = "basketShippingDiv";
                    basketShippingDiv.classList.add("summaryList");
                    basketSummaryListDiv.appendChild(basketShippingDiv);
                        let shippingLabel = document.createElement("p");
                        shippingLabel.classList.add("label");
                        shippingLabel.textContent = "배송비";
                        basketShippingDiv.appendChild(shippingLabel);
    
                        shippingValue = document.createElement("p");
                        shippingValue.classList.add("value");
                        if(totalInfo.subTotal >= 50000){
                            shippingValue.textContent = "무료";
                        }else{
                            shippingValue.textContent = totalInfo.shipping+"원";
                        }
                        basketShippingDiv.appendChild(shippingValue);
                    
                    let hr = document.createElement("hr");
                    hr.setAttribute("noshade",true);
                    basketSummaryListDiv.appendChild(hr);

                    let basketTotalDiv = document.createElement("div");
                    basketTotalDiv.id = ("basketTotalDiv");
                    basketTotalDiv.classList.add("summaryList")
                    basketSummaryListDiv.appendChild(basketTotalDiv);
                        let totalLabel = document.createElement("h1");
                        totalLabel.id = "totalLabel";
                        totalLabel.classList.add("label");
                        totalLabel.textContent = "합계";
                        basketTotalDiv.appendChild(totalLabel);

                        totalValue = document.createElement("h1");
                        totalValue.id = "totalValue";
                        totalValue.classList.add("value");
                        totalValue.textContent = totalInfo.total+"원";
                        basketTotalDiv.appendChild(totalValue);

                    let basketCheckOutBtn = document.createElement("div");
                    basketCheckOutBtn.id = "basketCheckOutBtn";
                    basketSummaryListDiv.appendChild(basketCheckOutBtn);
                        let btnText = document.createElement("span");
                        btnText.textContent = "CHECK OUT";
                        basketCheckOutBtn.appendChild(btnText);


                    





