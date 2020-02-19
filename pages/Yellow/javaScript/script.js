const buttonMenu = document.querySelector('.littltMenu');
const menu = document.querySelector('.menu');

const buttonClose = document.querySelector('.buttonClose');
const htmlElevent = document.querySelector('html');



buttonMenu.onclick = function(){
    menu.classList.add('menu__open_activ');
    htmlElevent.classList.add('html__hiddevScrol_activ');
    
}
buttonClose.onclick = function(){
    menu.classList.remove('menu__open_activ'); 
    htmlElevent.classList.remove('html__hiddevScrol_activ');
}


//class WorkMenu{
//    
//   
//    
//    
//    
//    
//}