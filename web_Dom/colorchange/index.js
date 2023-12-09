const butons =document.querySelectorAll('.button')
const body =document.querySelector('body')


butons.forEach( function (button) {
    button.addEventListener('click', function (e) {
                if (e.target.id==='grey') {
            body.style.backgroundColor=e.target.id;   
        }
        if (e.target.id==='red') {
            body.style.backgroundColor=e.target.id;   
        }
        if (e.target.id==='yellow') {
            body.style.backgroundColor=e.target.id;   
        }
        if (e.target.id==='pink') {
            body.style.backgroundColor=e.target.id;   
        }
        
    
            
        })
    
});