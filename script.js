var btn = document.querySelector('#show-or-hide');
var drop = document.querySelector('.drop');

btn.addEventListener('click', function(){

    if(drop.style.display === 'block'){
        drop.style.display = 'none';
    } else{
        drop.style.display = 'block';
    }
    

});