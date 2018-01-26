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
  { $('#bird').animate({marginBottom: "+=100px"},100);
   }
if (e.keyCode == 115)
  { $('#bird').animate({marginTop: "+=100px"},100);
   }
if (e.keyCode == 100)
  { $('#bird').animate({marginLeft: "+=100px"},100);
   }
if (e.keyCode == 113)
  { $('#bird').animate({marginRight: "+=100px"},100);
   }
});
// alert(e.keyCode);
