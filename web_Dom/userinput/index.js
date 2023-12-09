let form = document.querySelector("form");
form.addEventListener('submit' ,function (e) {

    e.preventDefault();
    const height = parseInt(document.getElementById("height").value)
    const weight = parseInt(document.getElementById("weight").value)
        const res=height*weight;
    let result = document.getElementById("result");
    result.innerHTML=`<span>${res}</span>`

})


 


