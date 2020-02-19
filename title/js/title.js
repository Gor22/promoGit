const elemOutFirst1 = document.querySelector('.header');


class Top_title{
    renderHead(){
        let outHead ='';
        outHead += `<div class="header__firstWrapper">
                    <div class="wrapperLogo">
                        <div class="header__logo">
                            <a href='#' class="header__logoLink">
                                Kovalёv ES.
                            </a>
                        </div>  
                    </div>
                </div>`
        elemOutFirst1.innerHTML = outHead;
    }
    
    
    
    
    
    
   
}


let top_title = new Top_title();
//top_title.renderHead();

