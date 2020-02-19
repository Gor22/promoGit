class Preloader{
    
    
    
    
    renderPreloader(){
        const bodyElement = document.querySelector('body');
        const conteinerPreloader = document.createElement('div');  
        conteinerPreloader.className = 'conteinerPreloader';
        bodyElement.append(conteinerPreloader);
        
        let out = `
                 <div class="wrepperPreloader">
               
                
                
            <div class="wrepperLoader">
                <div class="block_1"></div>
                <div class="block_2"></div>   
            </div>    
                
            <div class="nameLoader">   
                <span class="wrepperLogo__text">
                    kovalev ES.
                </span>
            </div>     
                
            </div>
            
            <p class="waitPreloader">loading...</p>
            <section class="wrepperBrausers">checked in:      
                <i class="fa fa-firefox" aria-hidden="true"></i>
                <i class="fa fa-chrome" aria-hidden="true"></i>
                <i class="fa fa-opera" aria-hidden="true"></i>
                <span  class="copyrightPreloader">© kovalev  ES. 2020</span>
            </section>


        </div>
        `;
        
        conteinerPreloader.innerHTML = out;
        
    }   
}

let preloader = new Preloader();
//preloader.renderPreloader();





if(!document.querySelector('.conteinerPreloader__close_activ'))
{
    if(sessionStorage.getItem("Preloader") == "false")
    {
        
        document.querySelector('.conteinerPreloader').classList.add('conteinerPreloader__close_activ');
    }
    
} 
setTimeout(function() 
    {
//    	document.querySelector('.conteinerPreloader').style.display = "none";
        document.querySelector('.conteinerPreloader').classList.add('conteinerPreloader__close_activ');
    
        sessionStorage.setItem('Preloader', 'false');
        
    }, 10000);


/*Проверка на предмет 1-й отработки предзагрузчика*/
//  if(!document.querySelector('.conteinerPreloader').classList.contains('conteinerPreloader__close_activ'))
 

//if(!document.querySelector('.conteinerPreloader__close_activ'))
//{
//    if(sessionStorage.getItem("Preloader") == "false")
//    {
//        
//        document.querySelector('.conteinerPreloader').classList.add('conteinerPreloader__close_activ');
//    }
//    
//}    
  

/*Проверка на предмет 1-й отработки предзагрузчика AND*/




















