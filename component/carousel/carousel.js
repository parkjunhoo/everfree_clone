class Carousel extends HTMLElement{
    
    
    #_index;
    get index(){
        return this._index;
    }
    set index(idx){
        this.index = idx;
        this.move();
    }

    #_count;
    get count(){
        return this._count;
    }

    #_itemContainer;



    
    dots = "";

    constructor(){
        super();
        this._index = 0;
        this._itemContainer = null;
        this._count = 0;
    }


    connectedCallback(){
        // HTML 구조
        //     <div class="carouselList">
        //      innerHTML
        //     </div>

        //     <div class="carouselDotsDiv">
        //      dots
        //     </div>

        //     <div class="carouselArrowsDiv">
        //         <button onclick="this.parentNode.instance.arrowMove(-1)">
        //              <div class="carouselPreBtn carouselArrowBtn"></div>
        //         </button>

        //         <button onclick="this.parentNode.instance.arrowMove(1)">
        //              <div class="carouselNextBtn carouselArrowBtn"></div>
        //         </button>
        //     </div>
        
        let _itemList = this.querySelectorAll(".carouselItem");
        this._count = _itemList.length;
        this._itemContainer = document.createElement("div");
        this._itemContainer.classList.add("carouselList")

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

        this.appendChild(this._itemContainer);
            _itemList.forEach((i)=>{
                this._itemContainer.appendChild(i);
            })
        this.appendChild(dotsDiv);

        this.appendChild(arrowsDiv);
            arrowsDiv.appendChild(preArrowBtn);
                preArrowBtn.appendChild(preArrow);
            arrowsDiv.appendChild(nextArrowBtn);
                nextArrowBtn.appendChild(nextArrow);
        
        
        for(let i=0; i<_itemList.length; i++){

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


    /**
     * arrow버튼에 바인딩된 이벤트 인덱스를 변경하고 move를 호출해 해당 이동시킵니다.
     * @param {number} direction 1을 넣을시 앞으로, -1을 넣을시 뒤로 이동
     */
    arrowMove(direction){
        let check = this._index + direction;
        if(check < this._count && check >= 0){
            this._index += direction;
        }else return;
        this.move();
    }

    /**
     * dot버튼에 바인딩된 이벤트 인덱스를 변경하고 move를 호출해 해당 이동시킵니다.
     * @param {number} idx idx의 값을 인덱스로 지정하고 move를 호출해서 이동
     */
    dotMove(idx){
        if(idx>this.count || idx<0) return;
        if(this._index == idx) return;
        this._index = idx;
        this.move();
    }

    /**
     * 현재 index로 itemContainer의 left값을 조정해 화면에 보이게 이동시킵니다.
     */
    move(){
        this._itemContainer.style.left = `-${this._index*100}%`;
    }
}
customElements.define("carousel-component", Carousel);

