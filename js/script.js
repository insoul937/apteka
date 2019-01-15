var $ = jQuery;

$(window).load(function() {
    // The slider being synced must be initialized first
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 90,
        itemMargin: 19,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
    });
});
$(document).ready(function(){
    $(".minus").click(function() {
        var cur = jQuery(this).parent().parent().find(".quantity").val();
        if (cur <= 1) {
            return false;
        }
        jQuery(this).parent().parent().find(".quantity").val(parseInt(cur) - 1);
        return false;
    });
    $(".plus").click(function() {
        var cur = jQuery(this).parent().parent().find(".quantity").val();
        jQuery(this).parent().parent().find(".quantity").val(parseInt(cur) + 1);
        return false;
    });
    $('.select2').select2({
        minimumResultsForSearch: Infinity
    });
    if($(".checkbox").length > 0 || $(".radio").length > 0){
        checks();
        $(".checkbox input[type='checkbox'], .radio input[type='radio']").change(function(){
            checks();
        });
    }
    $('.sf-all').click(function(){
       $(this).parent('.sf-container').find('.hide-block').slideDown();
        $(this).fadeOut();
    });
    $('.sf-title').click(function(){
        $(this).toggleClass('active');
       $(this).parent('.single-filter').find('.sf-container').slideToggle();
    });
});
function checks(){
    $(".checkbox input[type='checkbox'], .radio input[type='radio']").each(function(){
        if($(this).is(':checked')){
            $(this).closest('label').addClass('checked');
        }
        else {
            $(this).closest('label').removeClass('checked');
        }
    });
}




