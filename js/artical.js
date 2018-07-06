+(function($){
  $(window).resize(function(){
    $(".toc-article").off('click');
    showArtical();
  })
  showArtical();

  function showArtical() {
    if($(window).width() < 1366) {
      $(".toc-article").on("click", function(){
        var content = $(".toc-article .toc-content");

        console.log(content.css('right'))
        if(content.css('right') === '0px'){
          content.animate({right:'-280px'},"slow");}
        else{
          content.animate({right:'0'},"slow");
        }

        $(this)
        .find('i')
        .toggleClass('fa-angle-double-left')
        .toggleClass('fa-angle-double-right');
      })
    } else {
      $(".toc-article i").hide();
      $(".toc-article .toc-content").show();
      $(".toc-article").off('click');
    }
  }
})(jQuery)