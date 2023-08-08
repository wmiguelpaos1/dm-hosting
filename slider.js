(function(){
    
    const sliders = [...document.querySelectorAll('.recomendado__body')];
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
        const currentRecomendado = document.querySelector('.recomendado__body--show').dataset.id;
        value = Number(currentRecomendado);
        value+= add;


        sliders[Number(currentRecomendado)-1].classList.remove('recomendado__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('recomendado__body--show');

    }

})();