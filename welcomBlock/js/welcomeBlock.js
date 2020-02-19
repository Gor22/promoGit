class Welcome{

    render(){
        let elemInner = document.querySelector('body');
        const first = document.createElement('div');
        first.className = "welcomBlock";
        elemInner.append(first);

    }   
}

const welcome = new Welcome();
//welcome.render();
