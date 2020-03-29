$('.search-input').focus(function(){
    $(this).parent().addClass('focus');
  }).blur(function(){
    $(this).parent().removeClass('focus');
  })
// send data for one page to other
  function passvalues()
  {
   var firstname=document.getElementById("txt").value;
   localStorage.setItem("textvalue",firstname);
   return false;
  }