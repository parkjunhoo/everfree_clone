class HoverBox extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        // let headLink = document.createElement("link");
        // let head = document.getElementsByTagName("head")[0];
        // headLink.rel = "stylesheet";
        // headLink.type = "text/css";
        // headLink.href = "../component/hoverbox/hoverbox.css";
        // head.appendChild(headLink);

        
        
        let superBox = document.createElement("div");
        superBox.classList.add("superBox");
        superBox.appendChild(this.querySelector(".beforeBox"));
        superBox.appendChild(this.querySelector(".afterBox"));

        this.appendChild(superBox);
    }


}
customElements.define("hoverbox-component",HoverBox);