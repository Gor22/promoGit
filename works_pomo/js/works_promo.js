class PromoWorks{
    
    
    
    
    
    
    
    renderWorks()
    {
        
        let elemInner = document.querySelector('body');
        const wrepper = document.createElement('div');
        wrepper.className = "wrepperPromoWorks";
        elemInner.append(wrepper);
        
        
        
        
        
        
        let outWorks = '';
        
        outWorks += `<div class='wrepperTitleWorks'>
                        <p class='TitleWorks__text'>last works <span class='TitleWorks__person'>Kovalev's website</span></p>     

                    </div>`;
        
        
        outWorks +=`<ul class='promoWorks'>`;
        for(let key in MY_WORKS)
        {
            outWorks +=`<li class='promoWorks__item'>
                            <a href='${MY_WORKS[key].root}' class='promoWorks__href' style="background-image: url(${MY_WORKS[key].img})" target="_blank"> 
                            <span class='promoWorks__hrefFloatTitlt'>${MY_WORKS[key].name}
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>    
                            </span>    
                            </a>
                        </li> `;
        }
            outWorks +=`<li class='promoWorks__item'>
                            <a href='#' class='promoWorks__href promoWorks__and' onclick='false'>  
                                <span class='promoWorks__andText'>new works are expected</span>
                            </a>


                        </li> `;
        
        
        outWorks +=`</ul>`;
        wrepper.innerHTML = outWorks;
    }
    
    
}

let promoWorks = new PromoWorks();
//promoWorks.renderWorks();
