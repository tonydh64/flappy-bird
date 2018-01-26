function saut() {
  $('img').animate({marginBottom: "+=100px"},100);
   }

function bas() {
     $('img').animate({marginTop: "+=100px"},200);
   }

function a() {
       alert ('coucou');
   }

$(document).keypress(function(e){
if (e.keyCode == 122)
  { $('img').animate({marginBottom: "+=100px"},100);
   }
if (e.keyCode == 115)
  { $('img').animate({marginTop: "+=100px"},100);
   }
if (e.keyCode == 100)
  { $('img').animate({marginLeft: "+=100px"},100);
   }
if (e.keyCode == 113)
  { $('img').animate({marginRight: "+=100px"},100);
   }
});
// alert(e.keyCode);
