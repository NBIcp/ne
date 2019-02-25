$(function(){
    // if($('#dowebok').length>0){
    //     $('#dowebok').fullpage({
    //         scrollingSpeed:700,
    //         scrollBar: true,
    //         easing:'easeOutBack',
    //         navigation:true,
    //         verticalCentered:false, 
    //         afterLoad: function(anchorLink, index){
    //             if(index==4){
    //                 $.fn.fullpage.setAutoScrolling(false);
    //             }
    //         },
    //         onLeave: function(index,nextIndex, direction){
    //             if(index == '4'&&direction=='up'){
    //                 $.fn.fullpage.setAutoScrolling(true);
    //             }
    //         }
    //     })
    //     $offheight= $('.head-top').height()+$('.head-nav').height();
    //     $offheight2 = $('.tm-section').eq(0).offset().top;
    //     console.log($offheight2)
    //     $(window).scroll( function() { 
    //         if($(document).scrollTop()>$offheight){
                
    //             $('.tops').css({'display':'none'})
                
    //         }else{
    //             $('.tops').css({'display':'block'})
    //         }
    
    //         if($(document).scrollTop()>$offheight2){
    //             $('#fp-nav').hide();
    //         }else{
    //             $('#fp-nav').show();
    //         }
    //     } );
    // }

    if($('.newslist').length>0){
        $('.newslist .even').each(function(){
           var pic= $(this).find($('.pic'));
           var txt= $(this).find($('.txt'));
           pic.insertAfter(txt);
        })
    }
});