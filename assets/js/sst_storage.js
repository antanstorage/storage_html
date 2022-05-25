$(function(){
    $('.open-filter').on('click', function(){
        $('#filter-mobile').show();
    });

    $('.sst_close_f').on('click', function(){
        $('#filter-mobile').hide();
    });

    $('.open-sort').on('click', function(){
        $('#mobile-sort').show();
    })
    $('.close-mobile-sort').on('click', function(){
        $('#mobile-sort').hide();
    })


    $('.add-basket').on('click', function(){
        $('#product_basket').fadeIn();        
        $('body').addClass('overflow');
    });
    $('.close-basket').on('click', function(){
        $('#product_basket').fadeOut();        
        $('body').removeClass('overflow');
    });


    $('.cart-product .cart-block .edit').on('click', function(){        
        $(this).parents('.cart-product').find('.cart-form').slideToggle(0);
    });
    $('.cart-product .cart-form .product-cycle .block .form-block .btn .cancel-btn').on('click', function(){        
        $(this).parents('.cart-form').slideUp(0);
    });

    $('.payment-form .section-slot .head').on('click', function(){
        $('.payment-access .payment-form .section-slot .slot').not('#'+$(this).attr('data-payment')).slideUp();
        $('#'+$(this).attr('data-payment')).slideDown();
    });

    $(".insurance-list input[type='radio']").on('click', function(){
        console.log($(this).val() );
        if($(this).val() == 4){
            $('.insurance-form').show();
        }else{
            $('.insurance-form').hide();
        }
    });

    $(".insurance-plans input[type='radio']").on('click', function(){
        console.log($(this).val() );
        if($(this).val() == 4){
            $('.insurance-form').show();
        }else{
            $('.insurance-form').hide();
        }
    });

    $('.open-signup').on('click', function(){
        $('#signup').css('display', 'flex');
        $('#login').hide();
    });

    $('.open-login').on('click', function(){
        $('#login').css('display', 'flex');
        $('#signup').hide();
    });
    

    $('#open-login').on('click', function(){
        $('.user-access-portal').show();
        $('#login').css('display', 'flex');
        $('#signup').hide();
    });

    $('.filter-plot .filter-slot .head').on('click', function(){
        $(this).parents('.filter-slot').find('.slot-block').slideToggle();
        $(this).toggleClass('active');
    });



    $('.document-preview .preview-slot .slot .tag .right-tag .arrow').on('click', function(){
        $('.slot').removeClass('active');
        $(this).parents('.slot').addClass('active');
    });
    
});
