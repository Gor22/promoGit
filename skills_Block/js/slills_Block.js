class Skills{
    
    
    
    renderSkills(){
        
        let elemInner = document.querySelector('body');
        const SKILLS = document.createElement('div');
        SKILLS.className = "wrepperSkills";
        elemInner.append(SKILLS);
        
        
        
        let outSkills = '';
        
        
        outSkills +=`<div class="skillsTitle">
                        <p class="skillsTitle__text">current  features<span class="Iam"> Kovalev</span></p>
                    </div>`;
        
        outSkills +=`
            <ul class="skills">`;
        
        for(let key in SKILLS_CHEPTERS)
        {   
            outSkills +=`<li class="skills__item" onmouseenter='soundSkills()'>
                    <span class="skills__img">${SKILLS_CHEPTERS[key].img}</span>
                    <span class="skills__textWrepper">
                        <span class="skills__head">${[key]}</span>
                        <span class="skills__text">${SKILLS_CHEPTERS[key].text}</span>
                    </span>
                </li>`;   
        }
        outSkills +=`</ul>`; 
        SKILLS.innerHTML = outSkills;    
    }   
}
let skills = new Skills();
//skills.renderSkills();