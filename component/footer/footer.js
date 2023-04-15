class Footer extends HTMLElement{
    #_newsList;
    #_deskLinks;
    #_deskInfoMessage;
    #_companyDesc;

    constructor(){
        super();
        this._newsList = [
            {
                name:"유선 문의 불가 안내",
                date:"08.16",
                link:"/"
            },
            {
                name:"2022년 8월 휴무 일정 안내",
                date:"07.27",
                link:"/"
            },
            {
                name:"2022년 6월 휴무 일정 안내",
                date:"05.31",
                link:"/"
            }
        ];

        this._deskLinks = [
            {
                name:"개인정보취급방침",
                link:"/"
            },
            {
                name:"약관",
                link:"/"
            },
            {
                name:"자주묻는질문",
                link:"/"
            },
            {
                name:"문의게시판",
                link:"/"
            },
        ];

        this._deskInfoMessage = `
        문자 메세지 수신불가 / 카톡 상담, Q & A 게시판 이용
        <br>
        10:00 AM ~ 6:30 PM (Lunch time 12:00 AM ~ 1:00 PM)
        <br>
        토,일요일 및 공휴일 휴무
        `;

        this._companyDesc = {
            name:"상호 에버프리",
            ceo:"대표 유호진",
            addr:"광주 남구 광복마을8길 8-4 401호",
            companyRegNum:`사업자등록번호 <a href="/">349-16-01564</a>`,
            lawRegNum:"통신판매업신고번호 제2021-광주남구-0256 호",
            chargeName:`개인정보담당자 유호진 <a href="/">howtomakeclothes@naver.com</a>`,
            returnAddr:"반품주소: 61730 광주광역시 남구 회서로 22번길16,5층 에버프리",
            account:"입금계좌: 농협은행 301-5637-7006-41 유호진(에버프리)",
            copyright:"© 2018 Everfree, Inc. All rights reserved."
        };

    }

    connectedCallback(){
        let headLink = document.createElement("link");
        let head = document.getElementsByTagName("head")[0];
        headLink.rel = "stylesheet";
        headLink.type = "text/css";
        headLink.href = "../component/footer/footer.css";
        head.appendChild(headLink);
        // <footer>
        //     <div class="footerOuter">
        //         <hr>
        //         <div class="footerContentDiv">

        //             <div class="footerContentLeftDiv">
        //                 <div class="deskInfo">
        //                     <p>
        //                         문자 메세지 수신불가 / 카톡 상담, Q & A 게시판 이용
        //                         <br>
        //                         10:00 AM ~ 6:30 PM (Lunch time 12:00 AM ~ 1:00 PM)
        //                         <br>
        //                         토,일요일 및 공휴일 휴무
        //                     </p>
        //                 </div>

        //                 <div class="deskLinkDiv">
        //                     <a href="">개인정보취급방침
        //                         <div class="footerTextUnderline"></div>
        //                     </a>
        //                     <a href="">약관
        //                         <div class="footerTextUnderline"></div>
        //                     </a>
        //                     <a href="">자주묻는질문
        //                         <div class="footerTextUnderline"></div>
        //                     </a>
        //                     <a href="">문의게시판
        //                         <div class="footerTextUnderline"></div>
        //                     </a>
        //                 </div>
        //             </div>

        //             <div class="footerContentRightDiv">
        //                 <div class="footerMenuDiv">
        //                     <h5>Everfree News</h5>
        //                     <a href="">
        //                         유선 문의 불가 안내 <span class="date">08. 16</span>
        //                     </a>
        //                     <a href="">
        //                         2022년 8월 휴무 일정 안내 <span class="date">07. 27</span>
        //                     </a>
        //                     <a href="">
        //                         2022년 6월 휴무 일정 안내 <span class="date">05. 31</span>
        //                     </a>
        //                 </div>

        //                 <div class="footerMenuDiv">
        //                     <h5>My Account</h5>
        //                     <a href="">
        //                         마이페이지
        //                     </a>
        //                     <a href="">
        //                         주문내역
        //                     </a>
        //                     <a href="">
        //                         회원등급 및 혜택
        //                     </a>
        //                 </div>

        //                 <div class="footerMenuDiv">
        //                     <h5>Shipping & Returns</h5>
        //                     <a href="">
        //                         문의게시판
        //                     </a>
        //                     <a href="">
        //                         교환반품안내
        //                     </a>
        //                     <a href="">
        //                         CJ대한통운 택배 반품접수
        //                     </a>
        //                 </div>

        //                 <div class="footerMenuDiv" style="display: flex; width:15%; justify-content: space-around;">
        //                     <a href="">facebook</a>
        //                     <a href="">instagram</a>
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="companyDescDiv">
        //               <ul>
        //         </div>
        //     </div>
        // </footer>

        let footer = document.createElement("footer");
        this.appendChild(footer);
            let footerOuter = document.createElement("div");
            footerOuter.classList.add("footerOuter");
            footer.appendChild(footerOuter);
                let hr = document.createElement("hr");
                footerOuter.appendChild(hr);
                
                let footerContentDiv = document.createElement("div");
                footerContentDiv.classList.add("footerContentDiv");
                footerOuter.appendChild(footerContentDiv);
                    let footerContentLeftDiv = document.createElement("div");
                    footerContentLeftDiv.classList.add("footerContentLeftDiv");
                    footerContentDiv.appendChild(footerContentLeftDiv);
                        let deskInfo = document.createElement("div");
                        deskInfo.classList.add("deskInfo");
                        footerContentLeftDiv.appendChild(deskInfo);
                            let deskInfoP = document.createElement("p");
                            deskInfoP.innerHTML = this._deskInfoMessage;
                            deskInfo.appendChild(deskInfoP);

                        let deskLinkDiv = document.createElement("div");
                        deskLinkDiv.classList.add("deskLinkDiv");
                        footerContentLeftDiv.appendChild(deskLinkDiv);
                            let deskLinksCount = this._deskLinks.length;
                            for(let i=0; i<deskLinksCount; i++){
                                let a = document.createElement("a");
                                a.innerHTML = `${this._deskLinks[i].name}`;
                                a.href = `${this._deskLinks[i].link}`;
                                    let div = document.createElement("div");
                                    div.classList.add("footerTextUnderline");
                                    a.appendChild(div);
                                deskLinkDiv.appendChild(a);
                            }

                    let footerContentRightDiv = document.createElement("div");
                    footerContentRightDiv.classList.add("footerContentRightDiv");
                    footerContentDiv.appendChild(footerContentRightDiv);
                            let footerMenuDiv1 = document.createElement("div");
                            footerMenuDiv1.classList.add("footerMenuDiv");
                            footerContentRightDiv.appendChild(footerMenuDiv1);
                                let H5title1 = document.createElement("h5");
                                H5title1.innerText = "Everfree News";
                                footerMenuDiv1.appendChild(H5title1);
                                for(let i =0; i<3; i++){
                                    let a = document.createElement("a");
                                    let span = document.createElement("span");
                                    span.classList.add("date");
                                    span.innerHTML = `${this._newsList[i].date}`;
                                    a.innerHTML = `${this._newsList[i].name}`;
                                    a.href = `${this._newsList[i].link}`
                                    a.appendChild(span);
                                    footerMenuDiv1.appendChild(a);
                                }

                            let footerMenuDiv2 = document.createElement("div");
                            footerMenuDiv2.classList.add("footerMenuDiv");
                            footerContentRightDiv.appendChild(footerMenuDiv2);
                                let H5title2 = document.createElement("h5");
                                H5title2.innerText = "My Account";
                                footerMenuDiv2.appendChild(H5title2);
                                let link1 = document.createElement("a");
                                link1.innerHTML = "마이페이지";
                                link1.href = "/";
                                footerMenuDiv2.appendChild(link1);
                                let link2 = document.createElement("a");
                                link2.innerHTML = "주문내역";
                                link2.href = "/";
                                footerMenuDiv2.appendChild(link2);
                                let link3 = document.createElement("a");
                                link3.innerHTML = "회원등급 및 혜택";
                                link3.href = "/";
                                footerMenuDiv2.appendChild(link3);

                            

                            let footerMenuDiv3 = document.createElement("div");
                            footerMenuDiv3.classList.add("footerMenuDiv");
                            footerContentRightDiv.appendChild(footerMenuDiv3);
                                let H5title3 = document.createElement("h5");
                                H5title3.innerText = "Shipping & Returns";
                                footerMenuDiv3.appendChild(H5title3);
                                let link4 = document.createElement("a");
                                link4.innerHTML = "문의게시판";
                                link4.href = "/";
                                footerMenuDiv3.appendChild(link4);
                                let link5 = document.createElement("a");
                                link5.innerHTML = "교환반품안내";
                                link5.href = "/";
                                footerMenuDiv3.appendChild(link5);
                                let link6 = document.createElement("a");
                                link6.innerHTML = "CJ대한통운 택배 반품접수";
                                link6.href = "/";
                                footerMenuDiv3.appendChild(link6);

                            let footerMenuDiv4 = document.createElement("div");
                            footerMenuDiv4.classList.add("footerIconMenu");
                            footerContentRightDiv.appendChild(footerMenuDiv4);
                                let link7 = document.createElement("a");
                                link7.innerHTML = "facebook";
                                link7.href = "/";
                                footerMenuDiv4.appendChild(link7);
                                let link8 = document.createElement("a");
                                link8.innerHTML = "instagram";
                                link8.href = "/";
                                footerMenuDiv4.appendChild(link8);
                    
                    let companyDescDiv = document.createElement("div");
                    companyDescDiv.classList.add("companyDescDiv");
                    footerOuter.appendChild(companyDescDiv);
                                let companyDescUl = document.createElement("ul");
                                companyDescDiv.appendChild(companyDescUl);
                                    let nameLi = document.createElement("li");
                                    nameLi.innerHTML = `${this._companyDesc.name}`;
                                    companyDescUl.appendChild(nameLi);

                                    let ceoLi = document.createElement("li");
                                    ceoLi.innerHTML = `${this._companyDesc.ceo}`;
                                    companyDescUl.appendChild(ceoLi);

                                    let addrLi = document.createElement("li");
                                    addrLi.innerHTML = `${this._companyDesc.addr}`;
                                    companyDescUl.appendChild(addrLi);

                                    let companyRegNumLi = document.createElement("li");
                                    companyRegNumLi.innerHTML = `${this._companyDesc.companyRegNum}`;
                                    companyDescUl.appendChild(companyRegNumLi);

                                    let lawRegNumLi = document.createElement("li");
                                    lawRegNumLi.innerHTML = `${this._companyDesc.lawRegNum}`;
                                    companyDescUl.appendChild(lawRegNumLi);

                                    let chargeNameLi = document.createElement("li");
                                    chargeNameLi.innerHTML = `${this._companyDesc.chargeName}`;
                                    companyDescUl.appendChild(chargeNameLi);

                                    let returnAddrLi = document.createElement("li");
                                    returnAddrLi.innerHTML = `${this._companyDesc.returnAddr}`;
                                    companyDescUl.appendChild(returnAddrLi);

                                    let accountLi = document.createElement("li");
                                    accountLi.innerHTML = `${this._companyDesc.account}`;
                                    companyDescUl.appendChild(accountLi);

                                let copyright = document.createElement("p");
                                copyright.classList.add("copyright");
                                copyright.innerHTML = `${this._companyDesc.copyright}`;
                                companyDescDiv.appendChild(copyright);
    }
}

customElements.define("footer-component", Footer);