var $ = jQuery;
$(document).ready(function(){
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




