//accesing table of html with js
//const t=document.body.firstElementChild.firstElementChild 
//console.log(t);
//console.log(t.tHead.firstElementChild);


// changing tittle color
// const title=document.getElementsByClassName("card-title") 
// title[0].style.color="red";

//Q.n1
// const navchange=document.getElementsByClassName("nav-item")[0]
// navchange.firstElementChild.style.color="red";
 
//Q.n3
// const lnavchange=document.getElementsByClassName("nav-item")[1].lastElementChild.style.color="green";
//Q.n4
Array.from(document.getElementsByClassName("nav-item")).forEach((element) => {
    element.style.backgroundColor="cyan";
});



// live alert code
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}