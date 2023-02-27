    (function(){

        const sliders = [...document.querySelectorAll('.valores__body')];
        const buttonNext = document.querySelector('#next2');
        const buttonBefore = document.querySelector('#before2');
        let value;
        
        buttonNext.addEventListener('click', ()=>{
            changePosition(1);
        });

        buttonBefore.addEventListener('click', ()=>{
            changePosition(-1);
        });

        const changePosition = (add)=>{
            const currentValores = document.querySelector('.valores__body--show').dataset.id;
            value = Number(currentValores);
            value+= add;

            
            sliders[Number(currentValores)-1].classList.remove('valores__body--show');
            if(value === sliders.length+1 || value === 0){
                value = value === 0 ? sliders.length  : 1;
            }

                sliders[value-1].classList.add('valores__body--show');

            }

    })();