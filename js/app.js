$(document).ready(function() {


  $(".navigation li").click(function() {
    $(this).siblings().removeClass();
    $( this ).addClass("current");
    var title = $(this).attr('id');
    console.log(title);
    switchPanel(title);

  });

  function switchPanel(panel) {
    console.log("got into switchPanel");
    className = '".' + panel + '"'
    console.log(className);
    $('.active').removeClass('active').addClass('inactive');
    $("."+panel).removeClass('inactive fadeInUp').addClass('active');
//    $("#"+title+2).removeClass('inactive').addClass('active');

  }

});
