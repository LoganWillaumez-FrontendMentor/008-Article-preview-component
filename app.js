let btn = document.querySelector('.share-container');
let card = document.querySelector('.card');
let isClick = false;
btn.addEventListener('click',clicker=>{
    if(isClick==false){
        card.classList.add('active');
        isClick=true;
    }
    else{
        card.classList.remove('active');
        isClick=false;
    }
})