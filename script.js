$(document).ready(function(){
    $('.slider').slick({
         arrows:true,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        autoplay:true,
        autoplaySpeed:1500,
        waitForAnimate:false,
        responsive:
        [
            {
                breakpoint: 700,
                settings:
                {
                    slidesToShow:1,
                }
            }
        ]
    });
    });
    $(document).ready(function(){
        //Скрыть PopUp при загрузке страницы    
        PopUpHide();
    });
    //Функция отображения PopUp
    function PopUpShow(){
        $("#popup1").show();
        window.history.pushState("8",null,' ')
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $("#popup1").hide();
    }
    $(window).on('popstate', function () {
        PopUpHide();
    });
