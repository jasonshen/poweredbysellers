$(document).ready(function() {


  $(".navigation li").click(function() {
    $(this).siblings().removeClass();
    $( this ).addClass("current");
    var title = $(this).attr('id');
    console.log(title);
    switchPanel(title);

  });

  $('.mui-btn--primary').click(function() {
    var destination = $(this).attr('data-id')
    console.log(destination);
    switchPanel(destination);
    switchNav(destination);
  })

  function switchPanel(panel) {
    console.log("got into switchPanel");
    className = '".' + panel + '"'
    console.log(className);
    $('.active').removeClass('active').addClass('inactive');
    $("."+panel).removeClass('inactive fadeInUp').addClass('active');
//    $("#"+title+2).removeClass('inactive').addClass('active');

  }

  function switchNav(navId) {
    console.log("got into switchNav");
    console.log(navId);
    var navItem = $("li[id='" + navId +"']");
    console.log(navItem);
    $(".navigation .current").removeClass("current");
    navItem.addClass("current");
//    $("#"+title+2).removeClass('inactive').addClass('active');

  }


});
