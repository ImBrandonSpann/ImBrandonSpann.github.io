$(document).ready(function(){


    $(window).scroll(function(){
        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");
        }else{
            $('navbar').removeClass("sticky");
        }
    });

    var typed = new Typed(".typing-1", {
        strings:[
            "Engineering Student", "Programmer", "Photographer",
            "Graphic Designer", "Developer"
        ],
        typeSpeed: 75,
        backSpeed: 50,
        loop: true

    })
    var typed = new Typed(".typing-2", {
        strings:[
            "Programmer","Graphic Designer" , "Photographer",
            "Student", "Engineer", "Developer"
        ],
        typeSpeed: 65,
        backSpeed: 48,
        loop: true

    })
});