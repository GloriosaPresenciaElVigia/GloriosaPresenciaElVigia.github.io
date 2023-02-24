    (function(){

        const sliders = [...document.querySelectorAll('.pastores__body')];
        const buttonNext = document.querySelector('#next');
        const buttonBefore = document.querySelector('#before');
        let value; 
        
        buttonNext.addEventListener('click', ()=>{
            changePosition(1);
        });

        buttonBefore.addEventListener('click', ()=>{
            changePosition(-1);
        });

        const changePosition = (add)=>{
            const currentPastores = document.querySelector('.pastores__body--show').dataset.id;
            value = Number(currentPastores);
            value+= add;

            
            sliders[Number(currentPastores)-1].classList.remove('pastores__body--show');
            if(value === sliders.length+1 || value === 0){
                value = value === 0 ? sliders.length  : 1;
            }

                sliders[value-1].classList.add('pastores__body--show');

            
            }

    })();