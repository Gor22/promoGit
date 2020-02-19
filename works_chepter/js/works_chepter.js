class WorksCheptere{
    
    
    
    
    
    
    
    renderWorks()
    {
        
        let elemInner = document.querySelector('body');
        const wrepper = document.createElement('div');
        wrepper.className = "wrepperPromoWorks";
        elemInner.append(wrepper);
        
        
        
        
        
        
        let outWorks = '';
        
        outWorks += `<div class='wrepperTitleWorksChepter'>
                        <p class='TitleWorksChepter__text'>last works <span class='TitleWorksChepter__person'>Kovalev's website</span></p>     

                    </div>`;
        
        
        outWorks +=`<ul class='promoWorks'>`;
        for(let key in MY_WORKS)
        {
            
            let allBrausers = MY_WORKS[key].brausers;
            let supportBrauser = '';
            for(let j in allBrausers)
            {   
                supportBrauser += allBrausers[j];
            
            
            };
          
            
            
            
            outWorks +=`<li class='promoWorks__itemDetels'>
                            
                                <span class='promoWorks__imgWraper'>
                                    <img class='promoWorks__img' src="${MY_WORKS[key].img}">
                                </span>
                                <span class="promoWorks__name">Name:                     <span>${MY_WORKS[key].name}</span>
                                </span>
                                <span class="promoWorks__resolution">Resolution: 
                                    <span>${MY_WORKS[key].resolution}</span>
                                </span>
                                <span class="promoWorks__response">Response:
                                    <span>${MY_WORKS[key].response}</span>
                                </span>
                                <span class="promoWorks__copyright">Copyright:
                                    <span>${MY_WORKS[key].copyright}</span>
                                </span>

                                   
                                <span class="promoWorks__brausers">Brausers:
                                    <span class="promoWorks__icons">${supportBrauser}</span>
                                </span>


                            <a href='${MY_WORKS[key].root}' class='promoWorks__hrefDetals'  target="_blank"><span class='promoWorks__hrefDetalsTitlt'>MORE  details</span> </a>
                        </li> `;
            
        }
        outWorks +=`</ul>`;
        wrepper.innerHTML = outWorks;
    }
    
    
}

let worksCheptere = new WorksCheptere();
//worksCheptere.renderWorks();
