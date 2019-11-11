$( document ).ready(function() {
   $('.scroll-down').click(function(){
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
   })
});