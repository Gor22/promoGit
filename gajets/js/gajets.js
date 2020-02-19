



class Gagets{
    render_gaget(){
        const bodyFOgaget = document.querySelector('body');
        const CONTEINER_GAGET = document.createElement('div');
        CONTEINER_GAGET.className = "displaysGagets";
        bodyFOgaget.append(CONTEINER_GAGET);
        
        
        let add_gagets =`
        <div class="gajetsLine"></div>
        <div class="gajetsWrapper">
        
            <div class="gajets">
                <div class="innerWrepperGajets">
                    <div class="nout"></div>
                    <div class="tablet"></div>   
                    <div class="phone"></div>        
                </div>  
            </div>
    


                    <ul class="gajets__textConteiner">
                        <li class="gajets__item">
                            <span class="gajets__itemIcon">
                                <i class="fa fa-mobile" aria-hidden="true"></i>
                            </span>
                            <span class="gajets__itemText">
                                <span class="gajets__itemHead">request</span>
                                <span class="gajets__itemMainText">More than 50% of Internet searches come from a mobile device.</span>
                            </span>
                        </li>
                        <li class="gajets__item">
                            <span class="gajets__itemIcon">
                                <i class="fa fa-bar-chart" aria-hidden="true"></i>
                            </span>
                            <span class="gajets__itemText">
                                <span class="gajets__itemHead">rating</span>
                                <span class="gajets__itemMainText">Responsive sites rank higher in search engines.</span>
                            </span>
                        </li>
                        <li class="gajets__item">
                            <span class="gajets__itemIcon">
                                <i class="fa fa-arrows" aria-hidden="true"></i>
                            </span>
                            <span class="gajets__itemText">
                                <span class="gajets__itemHead">Importantly</span>
                                <span class="gajets__itemMainText">We pay attention to adaptive layout.</span>
                            </span>
                        </li>    



                    </ul>
                    
                   

                </div>
            
            </div> 
            
                    
        </div>
            `
        CONTEINER_GAGET.innerHTML = add_gagets; 
        

    }
}


let gaget = new Gagets();
//gaget.render_gaget();




window.addEventListener('scroll', function() {
     console.log(pageYOffset);
     
        
    if(document.querySelector('.displaysGagets')){   
        
        var nout = document.querySelector('.nout');   
        var tablet = document.querySelector('.tablet');
        var phone = document.querySelector('.phone');  

         if(pageYOffset > 1200){

            phone.classList.add('phone_show');
            tablet.classList.add('tablet__moove_show'); 
            nout.classList.add('nout__moove_show'); 

        }
 
    }
});
    

