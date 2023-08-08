

(function(){
    const titleInfo = [...document.querySelectorAll('.info__title')];
    console.log(titleInfo)

    titleInfo.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('info__padding--add');
            question.children[0].classList.toggle('info__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();