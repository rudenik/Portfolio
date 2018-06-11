
/********************************************************
THIS IS THE APP FILE
 ********************************************************/
var options = {
    strings: ["Are you classified as human?", "Negative, I am a Meat popsicle"],
    typeSpeed: 40,
    loop: true,

}
var typed = new Typed(".typed", options);

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top-50}, 500);
});

const nextIns = basicScroll.create({
    elem: document.querySelector("#aboutimage"),
    from: 'top-bottom',
    to: 'bottom-top',
    props: { "--translateX": {
        from: '100px',
        to: '0',
        timing: 'linear'
    }

    }
}).start()
document.querySelectorAll('.scene').forEach((elem) => {
    const modifier = elem.getAttribute('data-modifier');
    var actMod= modifier*10;
    const startPos = elem.getAttribute('data-start');
    basicScroll.create({
        elem: elem,
        from: 'top-bottom',
        to: 'bottom-top',
        direct: true,
        props: {
            '--translateY':{
                from: startPos+'px',
                to: actMod+'px'
            }
        }
    }).start();
})
// instance.start();

//this ain't working either. Wanna go back to trying to basicScroll on this.
// $(window).scroll(function(){
//     console.log($(this).scrollTop());
//     if($(this).scrollTop()>=200){
//         $(".hero-image").addClass("animate");
//     }else{
//         $(".hero-image").removeClass("animate");
//     }
    
// })