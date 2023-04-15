let list = document.getElementsByClassName("carouselItem");
this.addEventListener('scroll',()=>{
    for(i =0; i<list.length; i++){
        list[i].style.transform = `translateY(${window.scrollY/2}px)`;
    }
});