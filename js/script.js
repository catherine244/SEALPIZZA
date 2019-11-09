function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
$(document).ready(function(){
  $(".img1").mousemove(function(){
      $(".description1").show();
  });
  $(".img1").mouseleave(function(){
      $(".description1").hide();
  });
  $(".img2").mousemove(function(){
      $(".description2").show();
  });
  $(".img2").mouseleave(function(){
      $(".description2").hide();
  });
  $(".img3").mousemove(function(){
      $(".description3").show();
  });
  $(".img3").mouseleave(function(){
      $(".description3").hide();
  });
  $(".img4").mousemove(function(){
      $(".description4").show();
  });
  $(".img4").mouseleave(function(){
      $(".description4").hide();
  });
  $(".img5").mousemove(function(){
      $(".description5").show();
  });
  $(".img5").mouseleave(function(){
      $(".description5").hide();
  });
  $(".img6").mousemove(function(){
      $(".description6").show();
  });
  $(".img6").mouseleave(function(){
      $(".description6").hide();
  });

});
