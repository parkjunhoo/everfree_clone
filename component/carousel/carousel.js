class Carousel extends HTMLElement{
    instance;

    index;
    itemList;
    items;
    maxCount;

    
    dots = "";

    constructor(){
        super();
        this.instance = this;
        this.index = 0;
        this.itemList = null;
        this.items = [];
        this.maxCount = 0;
    }


    connectedCallback(){
        // HTML 구조
        //     <div class="carouselList">
        //
        //     </div>

        //     <div class="carouselDotsDiv">
        //     </div>

        //     <div class="carouselArrowsDiv">
        //         <button onclick="this.parentNode.instance.arrowMove(-1)">
        //              <div class="carouselPreBtn carouselArrowBtn"></div>
        //         </button>

        //         <button onclick="this.parentNode.instance.arrowMove(1)">
        //              <div class="carouselNextBtn carouselArrowBtn"></div>
        //         </button>
        //     </div>
        
        let items = this.querySelectorAll(".carouselItem");
        this.maxCount = items.length;
        this.itemList = document.createElement("div");
        this.itemList.classList.add("carouselList")

        let dotsDiv = document.createElement('div');
        dotsDiv.classList.add("carouselDotsDiv")

        let arrowsDiv = document.createElement('div');
        arrowsDiv.classList.add("carouselArrowsDiv");

        let preArrowBtn = document.createElement("button");
        let nextArrowBtn = document.createElement("button");

        let preArrow = document.createElement("div");
        preArrow.classList.add("carouselArrowBtn");
        preArrow.classList.add("carouselPreBtn");
        preArrow.addEventListener('click' , ()=>{
            this.arrowMove(-1);
        });

        let nextArrow = document.createElement("div");
        nextArrow.classList.add("carouselArrowBtn");
        nextArrow.classList.add("carouselNextBtn");
        nextArrow.addEventListener('click' , ()=>{
            this.arrowMove(1);
        });

        this.appendChild(this.itemList);
            items.forEach((i)=>{
                this.itemList.appendChild(i);
            })
        this.appendChild(dotsDiv);

        this.appendChild(arrowsDiv);
            arrowsDiv.appendChild(preArrowBtn);
                preArrowBtn.appendChild(preArrow);
            arrowsDiv.appendChild(nextArrowBtn);
                nextArrowBtn.appendChild(nextArrow);
        
        
        for(let i=0; i<items.length; i++){

            let dotBtnDiv = document.createElement("div");
            let dot = document.createElement("div");

            dotBtnDiv.classList.add("carouselDotBtn");
            dot.classList.add("carouselDot");
            dotBtnDiv.addEventListener('click', () => {
                this.dotMove(i);
            });

            dotsDiv.appendChild(dotBtnDiv);
            dotBtnDiv.appendChild(dot);
        }
    }



    arrowMove(direction){
        let check = this.index + direction;
        if(check < this.maxCount && check >= 0){
            this.index += direction;
        }else return;
        this.move();
    }
    dotMove(idx){
        this.index = idx;
        this.move();
    }
    move(){
        this.itemList.style.left = `-${this.index*100}%`;
    }
}
customElements.define("carousel-component", Carousel);

