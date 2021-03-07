$(document).ready(function(){
    // menu
    $('.hamburger-menu').on('click',function(){
        $('.menu').toggleClass('show')
        $('.backdrop').toggleClass('show')
        $('.hamburger-menu').toggleClass('show')
    })

    // slider
    const navigation = document.querySelector('.navigation')
    const navigate = document.querySelectorAll('.navigate')
    const slidesActive = document.querySelector('.slides img.active')
    navigation.addEventListener('click',function(e){
        if(e.target.className == 'navigate'){
            let img = document.querySelector('img'+e.target.getAttribute('data-target'));
            slidesActive.classList.add('fade')
            slidesActive.src = img.src;
            navigate.forEach(n=>n.className = 'navigate');

            e.target.classList.add('active','fade')
            setTimeout(()=>{
                slidesActive.classList.remove('fade')
                e.target.classList.remove('fade')
            },500)
        }
    })

    // sticky
   
    $(window).on('scroll',function(){
    let height=   $(window).scrollTop();
     cekScroll(height)
    })

    function cekScroll(height){
        if(height > $('nav').height() +50 ){
            $('nav').addClass('sticky')
        }
        else{
            $('nav').removeClass('sticky')
    
        }
    }

})

