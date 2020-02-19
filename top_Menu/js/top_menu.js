
//const elemOutFirst = document.querySelector('.welcomBlock');
 
    
        
class Top_menu{
    
    renderMenu(){
        
        
        
        
        let elemInner = document.querySelector('body');
        const first = document.createElement('div');
        first.className = "welcomBlock";
        elemInner.append(first);
        
        
        
        
        
        
        
        
        
        let coun = 0; 
        let outMenu = '';
     
        outMenu += `<div class="header__firstWrapper">
                    <div class="wrapperLogo">
                        <div class="header__logo">
                            <a href='#' class="header__logoLink" >
                                Kovalev ES.
                            </a>
                        </div>
                        <div class="openLittleMenu" onclick='openMenu()'>
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>`
        
   
        outMenu += `<div class="header__secondWrapper">                   
                    <nav class="nav">
                    <ul class="menu">

                    <li class="menu__item menu__itemClose" onclick='openClose()'>
                            <span href="" class="menu__itemLink menu__itemLink_close" onclick='sound()'>
                                <span class="menu__itemWrapperImg">
                                    <i class="fa fa-times" aria-hidden="true"></i>   
                                </span>  
                                <span class="menu__itemWrapperTitle">
                                    <span class="menu__itemTitle"></span>
                                </span>      
                            </span>
                    </li>






`;
        
        
        
        
        
        
        
        for(let key in CHEPTERS)
        {
            coun++; 
            outMenu +=  `<li class="menu__item" onclick='go${coun}(this)'>
                            <span href="" class="menu__itemLink menu__itemLink_${coun}" onclick='sound()' >
                                <span class="menu__itemWrapperImg">
                                    ${CHEPTERS[key]}
                                </span>  
                                <span class="menu__itemWrapperTitle">
                                    <span class="menu__itemTitle">${key}</span>
                                </span>      
                            </span>
                        </li>`   
        }
        
        outMenu += `                  
                    </ul>
                    </nav>
                    </div> `
        
        
        outMenu += `
                    <div class="incomeIn">
                        <p class="incomeIn__name">
                            <span class="incomeIn__name1">Ko</span><span class="incomeIn__name2">va</span><span class="incomeIn__name3">lev</span>
                           
                        </p>
                        <span class="incomeIn__chepterHead">${name_chepter}</span>
                    </div>


            `
   
        first.innerHTML = outMenu; 
        
          
        
      
        
    }
   
}


let top_menu = new Top_menu();
//top_menu.renderMenu();



function openMenu(){
    const menuOpen =  document.querySelector('.header__secondWrapper');
    const body =  document.querySelector('body');
    menuOpen.classList.add('header__secondWrapper_open');
    body.classList.add('hideScroll');
    
    
};
function openClose(){
    const menuOpen =  document.querySelector('.header__secondWrapper');
    menuOpen.classList.remove('header__secondWrapper_open');
    const body =  document.querySelector('body');
    body.classList.remove('hideScroll');
}



