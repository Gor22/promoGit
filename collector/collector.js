
 function sound(){
            let audio = new Audio(); // Создаём новый элемент Audio
            audio.src = 'sounds/f9827a3622dc94e.mp3'; // Указываем путь к звуку "клика"
            audio.autoplay = true; // Автоматически запускаем
           audio.volume = 0.5;
            
        };  

function soundSkills(){
            let audio = new Audio(); // Создаём новый элемент Audio
            audio.src = 'sounds/44dfe97eed6c252.mp3'; // Указываем путь к звуку "клика"
            audio.autoplay = true; // Автоматически запускаем
           audio.volume = 0.5;
            
        };  








//    preloader.renderPreloader();
 let name_chepter = 'main';
    top_menu.renderMenu(sound());
    skills.renderSkills();
    start();
    promoWorks.renderWorks();
    gaget.render_gaget();
    footer.render();
   




       
        
        
        
        
        
        
        
        
        
        
        
        
        
        
 
        
        
history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
    
    
    document.querySelector('body').innerHTML = ' '; 
    top_menu.renderMenu();
    skills.renderSkills();
    start();
    promoWorks.renderWorks();
    gaget.render_gaget();
    footer.render();
    
});
        
  
    
      
       
    function go1()
    {
        document.querySelector('body').innerHTML = ' ';     
        name_chepter = 'main';   
        top_menu.renderMenu();
        skills.renderSkills();
        start();
        promoWorks.renderWorks();
        gaget.render_gaget();
        footer.render();
        
        const body =  document.querySelector('body');
        body.classList.remove('hideScroll');
        
        
    }
    function go2()
    { 
        document.querySelector('body').innerHTML = ' ';     
        name_chepter = 'works';  
        top_menu.renderMenu();
        worksCheptere.renderWorks();
        footer.render(); 
        
        const body =  document.querySelector('body');
        body.classList.remove('hideScroll');
     }  
        
        
        
        
    function go3()
    { 
      // alert("We apologize. Section in development."); 
        
        
        if(document.querySelector('.frameApologize')) 
        { 
        
            document.querySelector('.frameApologize').remove();
            
        }
       
       if(!document.querySelector('.frameApologize')) 
        {  
        
            const button = document.querySelector('.menu__itemLink_3'); 
            const frameApologize = document.createElement('span'); 
            frameApologize.className = 'frameApologize';
            
            const messege = `<span class='textApologize'>We apologize. Section in development.</span>`
            frameApologize.innerHTML = messege;
            button.append(frameApologize);
        
       
            
        
            setTimeout(()=>{
                frameApologize.classList.add('messegOpasity');

                setTimeout(()=>{
                    frameApologize.remove();
                },1);    

            },3000); 
     
        }
      
    }   
        
    function go4()
    { //alert("We apologize. Section in development.");
        
        
        
        
        
        if(document.querySelector('.frameApologize')) 
        { 
        
            document.querySelector('.frameApologize').remove();
            
        }
        
        else (!document.querySelector('.frameApologize')) 
        {  
            
            
            const button = document.querySelector('.menu__itemLink_4'); 
            const frameApologize = document.createElement('span'); 
            
            
            frameApologize.className = 'frameApologize';
            
            const messege = `<span class='textApologize'>We apologize. Section in development.</span>`
            frameApologize.innerHTML = messege;
            button.append(frameApologize);
        
       

            setTimeout(()=>{
                frameApologize.classList.add('messegOpasity');

                setTimeout(()=>{
                    frameApologize.remove();
                },1);    

            },3000); 
        }   
    }    

        
        
    
        
        
        