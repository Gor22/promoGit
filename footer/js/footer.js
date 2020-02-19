class Footer{

    render(){
        
        
        let elemInner = document.querySelector('body');
        const FOOTER = document.createElement('div');
        FOOTER.className = "footer";
        elemInner.append(FOOTER);
        
        
        const currentYear = new Date().getFullYear();

        
        
        FOOTER.innerHTML = `<div class='footer__innerWrepper'>
                                <div class='wrepperFooterGroop'>     
                                    <p class='footer__mail'><i class="fa fa-envelope-o" aria-hidden="true"></i> Mail: egor007882012@mail.ru </p>
                                    <p class='footer__test'>Test in:
                                        <i class="fa fa-firefox" aria-hidden="true"></i>  
                                        <i class="fa fa-chrome" aria-hidden="true"></i>
                                        <i class="fa fa-opera" aria-hidden="true"></i>

                                    </p>
                                    <p class='footer__version'>V1.0.0</p>
                                </div>

                                <p class='footer__copuright'>© Kovalev ES 2019-<span class='footer__currentYear'>${currentYear}</span></p>

                            </div>`;
        
        
    }   
}

const footer = new Footer();
//footer.render();


