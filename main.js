const mage = document.querySelector('.mage');
const speed = 6;
 let posx = 600;
//  let x = 'vw';
 let posy = 70;
 let px = 'px';
mage.style.left = posx+px;
mage.style.bottom = posy+px;
document.addEventListener('keyup', function(e){
    mage.style.animation = '';
})
document.addEventListener('keydown', function(e){
    // console.log(e);
    // setTimeout(function(){ mage.style.animation ='';}, 500)
    if (e.keyCode === 37){
        // Move left
        setTimeout
        posx -= speed;
        // console.log('position ', temp);

        mage.style.left = (posx)+px;
        mage.style.backgroundPosition = '0 0';
        
        mage.style.animation = "walk-left 500ms steps(9) infinite forwards";
        e.preventDefault();

    }
    if (e.keyCode === 40){
        // Walk down
        mage.style.backgroundPosition = '0 0';
        
        mage.style.animation = "walk-down 500ms steps(9) infinite forwards";
        mage.style.bottom = (posy-speed)+px;
        
        // mage.style.transform = "translateY(100px)";
    }
    if (e.keyCode === 38){
        // Walk up
        mage.style.backgroundPosition = '0 0';
        
        mage.style.animation = "walk-up 500ms steps(9) infinite forwards";
        mage.style.bottom = (posy+speed)+px;
    }
    if (e.keyCode === 39){
        mage.style.backgroundPosition = '0 0';
        

        posx += speed;
        // console.log('position ', temp);

        mage.style.animation = "walk-right 500ms steps(9) infinite forwards";
        mage.style.left = (posx)+px;
    }
})