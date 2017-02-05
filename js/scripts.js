$(document).ready(function() {
console.log('jquery ready');

    $(document).ready(function(){
        $('.bxslider').bxSlider({
            pager: false,
            minSlides: 0,
            maxSlides: 3,
            moveSlides: 1,
            slideMargin: 5,
            slideWidth: 200
        });

$('.bxsliderContainer').hover(function(){
    $(this).find('.bxsliderContainer__description').css('color','#e44899');
    $(this).css('border','1px solid #eda3c8');
}, function() {
    $(this).find('.bxsliderContainer__description').css('color','#406ea0');
    $(this).css('border','1px solid #ffe8e8');
})

    });




});