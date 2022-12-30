let toggle = document.getElementById('toggle_menu');
console.log(toggle);
toggle.onclick = () =>{
  toggle.classList.toggle('active');
}

$(document).ready(function(){

  $(window).scroll(function(){
    $scroll = $(window).scrollTop();
    if($scroll > 1 ){
      $('#nav_scroll').addClass('fixed');
    }else{
      $('#nav_scroll').removeClass('fixed');
    }

  })

})