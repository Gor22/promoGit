let framrFoto = document.querySelector('.firstBlock');
let buttons = document.querySelectorAll('.sliderCollection .sliderCollection__item');

const arrImages = ['one.jpg', 'two.jpg', 'three.jpg'];

class Slider{
    
    constructor(arrImages, buttons){
        this.arr = arrImages;
        this.buttons = buttons;
    }
    
    fotos(x){
        
        let arr = this.arr;      
        for(let key in arr)
        {   
            key += 1;
            framrFoto.style.backgroundImage = `url(images/${arr[x]})`;
            console.log(x);
        }    
    }
   
    
    go(){
        let buttons = this.buttons;
        
        for(let i = 0; i < buttons.length; i++)
        {    

            slider.fotos(0); 
            buttons[0].classList.add('whiteButton')

            buttons[i].onclick = function ()
            {
                if(document.querySelector('.whiteButton')){

                   for(let y = 0; y < buttons.length; y++)
                    { 
                        buttons[y].classList.remove('whiteButton')   
                    }   
                }
                this.classList.add('whiteButton')   
                slider.fotos(i);       
            }
        }
    }
    
    
    
}


let slider = new Slider(arrImages, buttons);
slider.go();








//let buttons = document.querySelectorAll('.sliderCollection .sliderCollection__item');
    
//for(let i = 0; i < buttons.length; i++)
//{    
//    
//    slider.fotos(0); 
//    buttons[0].classList.add('whiteButton')
//    
//    buttons[i].onclick = function ()
//    {
//        if(document.querySelector('.whiteButton')){
//           
//           for(let y = 0; y < buttons.length; y++ )
//            { 
//                buttons[y].classList.remove('whiteButton')   
//            }   
//        }
//        this.classList.add('whiteButton')   
//        slider.fotos(i);       
//    }
//    
//    
//    
//}


/*footer*/
const FOOTER = document.querySelector('.footer__year');

class Drow{
    render(){
        let yearCurrent = new Date().getFullYear();
        FOOTER.innerText = yearCurrent;   
    }
}
let drow = new Drow();
drow.render();





