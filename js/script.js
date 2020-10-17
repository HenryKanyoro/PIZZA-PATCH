
$(document).ready(function() {
     $(".photo").hover(function(){
          $("#kali").toggle();
     });
     $(".photo1").hover(function(){
          $("#kali1").toggle();
     });
     $(".photo2").hover(function(){
          $("#kali2").toggle();
     });
     $(".photo3").hover(function(){
          $("#kali3").toggle();
     });
     $(".photo4").hover(function(){
          $("#kali4").toggle();
     });
     $(".photo5").hover(function(){
          $("#kali5").toggle();
     });
     $(".photo6").hover(function(){
          $("#kali6").toggle();
     });
     $(".photo7").hover(function(){
          $("#kali7").toggle();
     });
});
$(document).ready(function(event){
     $("#mc-embedded-subscribe-form").submit(function(){
          var name = $("input#hank").val();
          var email = $("input#noah").val();
          var message =$ ("textarea#hulk").val();
          if ($("input#hank").val() && $("input#noah").val()){
               alert(name + "your message has been received. thank you for your feedback");
          }
          else{
               alert("please enter your info below.your name and email.")
          }
          event.preventDefault();
     });
});
