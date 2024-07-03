let isActive = false;
$('.switchWrap').on('click', function(){
  switchToggle();
});

function switchToggle(elem){
  if(isActive){
    $('.text').html('OFF');
    $('body').removeClass('darkMode')
    isActive = false;
  } else {
    $('.text').html('ON');
    $('body').addClass('darkMode');
    isActive = true;
  }
 
}