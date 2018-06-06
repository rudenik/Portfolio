// import Typed  from './typed.js';

var options = {
    strings: ["Are you classified as human?", "Negative, I am a Meat popsicle"],
    typeSpeed: 40,
    loop: true,

}
var typed = new Typed(".typed", options);

const instance = basicScroll.create({
	elem: document.querySelector('#justme'),
	from: 'top-bottom',
    to: 'bottom-top',
	props: { "--translateX": {
        from: '200px',
        to: '100px',
        timing: 'linear'
        }
    }
}).start();

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