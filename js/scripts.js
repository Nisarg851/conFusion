$(document).ready(function(){
            // $(document).ready(function(){
            //     $('[data-toggle="tooltip"]').tooltip();
            // })
    $('#loginlink').click(()=>{
            $('#loginlink').attr('data-toggle','modal');
            $('#loginlink').attr('data-target','#loginModal');
    });
    
    $('#reserveTable').click(()=>{
            $('#reserveTable').attr('data-toggle','modal');
            $('#reserveTable').attr('data-target','#reservation');
    });
    
    $('#mycarousel').carousel({interval:1500});
    
    $('#carousel-btn').click(function(){
        if($('#carousel-btn').children('span').hasClass('fa-pause')){
            console.log($("#carousel-btn").children('span').hasClass('fa-pause'));
            $('#mycarousel').carousel('pause');
            $('#carousel-btn').children('span').removeClass('fa-pause');
            $('#carousel-btn').children('span').addClass('fa-play');
        }else{
            $('#mycarousel').carousel('cycle');
            $('#carousel-btn').children('span').removeClass('fa-play');
            $('#carousel-btn').children('span').addClass('fa-pause');
        }
    }
    );
/*    $('#carouselPause').click(function(){
        $('#mycarousel').carousel('pause');
    });
    $('#carouselPlay').click(function(){
        $('#mycarousel').carousel('cycle');
    });*/
});