const main = document.querySelector('#mainDiv');

const parrets = document.getElementsByClassName('cP');



parrets[0].onclick = function(){
   
    main.style.background = 'aqua'
   

}
parrets[1].onclick = function(){
  
    main.style.background = '#ffee00'
}
parrets[2].onclick = function(){
    main.style.background = '#ff00b3'
}
parrets[3].onclick = function(){
    main.style.background = '#09ff00'
}
