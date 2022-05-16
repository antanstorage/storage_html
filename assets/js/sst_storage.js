$(function(){
    $('.open-filter').on('click', function(){
        $('#filter-mobile').show();
    });

    $('.sst_close_f').on('click', function(){
        $('#filter-mobile').hide();
    });



    $('.add-basket').on('click', function(){
        $('#product_basket').fadeIn();
    });
    $('.close-basket').on('click', function(){
        $('#product_basket').fadeOut();
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
});