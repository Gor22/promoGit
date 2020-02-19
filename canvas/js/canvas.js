
function start(){

(function(){
    
    
    
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let w = canvas.width = innerWidth - 20;
    let h = canvas.height = 400;
    
    let particles = [];
    let properties = {
        bgColor:        'rgba(3, 28, 25, 0.7)',
        particleColor:  'rgba(255, 255, 255, 1)',
        particleRadius:  3,
        particleCount:   60,
        particleMaxVelocity: 0.4,
        lineLegth: 100,
        particleLife: 10
    }
    
    
    const promo = document.querySelector('body');
    promo.appendChild(canvas);
    
    
    
    
//    const CANVAS = document.createElement('canvas');
//    CANVAS.className = "canvas";
//    promo.append(CANVAS);
    
    
    
    //canvas.className = 'canvas';
    let heightPromo = promo.offsetHeight;
    console.log(heightPromo);
    
    
    
//    areas();
//    function areas(){
//        canvas.display= 'grid';
//       canvas.style.gridTemplateColumns = `repeat(${w/10}, 1fr)`;
//        
//    }
    
    
    
    window.onresize = function(){
        
        let w = canvas.width = innerWidth;
        let h = canvas.height = 400;
        
        
    }
    
    class Particle{
        constructor(){
            this.x = Math.random() * w,
            this.y = Math.random() * h,
            this.VelocityX = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;   
            this.VelocityY = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
            this.life = Math.random()*properties.particleLife *60;
            
        }
        position(){
            this.x + this.VelocityX > w && this.VelocityX > 0 || this.x + this.VelocityX < 0 && this.VelocityX < 0?  this.VelocityX*=-1 : this.VelocityX;
            
            this.y + this.VelocityY > h && this.VelocityY > 0 || this.y + this.VelocityY < 0 && this.VelocityY < 0?  this.VelocityY*=-1 : this.VelocityY;
            
            this.x += this.VelocityX;
            this.y += this.VelocityY; 
            
            
            
        }
        reDrow(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI*2);
            ctx.closePath();
            ctx.fillStyle = properties.particleColor;
            ctx.fill();
        }
        recalculateLife(){
            
            if(this.life < 1 ){
                
                this.x = Math.random() * w,
                this.y = Math.random() * h,
                this.VelocityX = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;   
                this.VelocityY = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
                this.life = Math.random()*properties.particleLife *60;
               
               
            }
            this.life--
            
        }
        
    }
    
    
    
    function reDroweBackground(){
        
        ctx.fillStyle = properties.bgColor;
        ctx.fillRect(0,0, w, h)
        
        
    };
    
    
    function drawLines(){
        var x1, y1, x2, y2, length, opacity;
        for(let i in particles)
        {
            for(let j in particles)
            {
                x1 = particles[i].x;
                y1 = particles[i].y;
                x2 = particles[j].x;
                y2 = particles[j].y;
                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                if(length < properties.lineLegth)
                {
                    opacity = 1 - length/properties.lineLegth;
                    ctx.lineWidth = '0,5';
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2 ,y2);
                    ctx.closePath();
                    ctx.stroke();
                }
            }    
                
                
                
        }
        
        
    };
    
    
    
    
        
    function reDroweParticles(){
        
        for(let i in particles){
            particles[i].recalculateLife();
            particles[i].reDrow();
            particles[i].position();
            
        }
        
        
        
    };    
        
        
        
        
        
    function loop(){
        
        reDroweBackground();
        reDroweParticles();
        drawLines();
        requestAnimationFrame(loop)
        
        
    };
    
    
    function init(){
        for(let i = 0; i < properties.particleCount; i++){
            
            particles.push( new Particle);
            
            
        }
        loop();
        
        
    }
    init();
    
    
}())}