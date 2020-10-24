
// ************* Portfolio item Filter **************

const filterContainer = document.querySelector(".portfolio-filter"),
      filterBtns = filterContainer.children,
      totalfilterBtn = filterBtns.length;
      
      portfolioItems = document.querySelectorAll(".portfolio-item"),
      totalPortfolioitem = portfolioItems.length;

      for(let i=0;i< totalfilterBtn;i++){
          filterBtns[i].addEventListener("click" , function(){
            filterContainer.querySelector(".active").classList.remove("active");  
            this.classList.add("active");


            const filterValue = this.getAttribute("data-filter");
            for(let k=0; k<totalPortfolioitem; k++){
                if(filterValue===portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
                else{
                    portfolioItems[k].classList.remove("show");
                    portfolioItems[k].classList.add("hide");
                }
                if(filterValue === "all"){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
            }
          })
      }
        // **************  Portfolio Lightbox *****************

      const lightbox =document.querySelector(".lightbox"),
            lightboxImg= lightbox.querySelector(".lightbox-img"),
            lightboxClose=lightbox.querySelector(".lightbox-close"),
            lightboxText=lightbox.querySelector(".caption-text"),
            lightboxCounter=lightbox.querySelector(".caption-count");
        
       let = itemIndex= 0;
       
       for(let i=0;i<totalPortfolioitem; i++){
           portfolioItems[i].addEventListener("click", function () {
               itemIndex=i;
               changeItem();
               toggleLightbox();  
           })
       }
       function nextItem() {
           if (itemIndex===totalPortfolioitem-1) {
               itemIndex=0;
           }
           else{
               itemIndex++;
           }
           changeItem();
       }
       function prevItem() {
        if (itemIndex===0) {
            itemIndex=totalPortfolioitem-1;
        }
        else{
            itemIndex--;
        }
        changeItem();
    }

       function toggleLightbox(){
        lightbox.classList.toggle("open")
       }

       function changeItem(){
           imgSrc= portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
           lightboxImg.src=imgSrc;
           lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
           lightboxCounter.innerHTML=(itemIndex+1) + " of " + totalPortfolioitem;
        }

        // ***************** Close Lightbox **********
        lightbox.addEventListener("click", function(event){
            if (event.target===lightboxClose || event.target===lightbox) {
                toggleLightbox();
            }
           
        })