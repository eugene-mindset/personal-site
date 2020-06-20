var isChanging = false; // dont want to process other changes if one is already happening

/*
  Function to handle transition content.
*/
function transition(section) {
  console.log(isChanging, "section");
  if (isChanging) {
    return;
  }

  isChanging = true;

  var selector = '#' + section;
  var select = $(selector);

  $(selector + '_link').toggleClass('highlight');


  if (select[0].style.display === 'none') {
    call = () => {
      select.animate({opacity: 1}, speed=1000);
      isChanging = false;
    };

    select.toggle(callback=call);
  } else {
    call = () => {
      select.toggle();
      isChanging = false;
    };

    select.animate({opacity: 0}, speed=1000, callback=call);
  }
}

$(document).ready(function(){
  $(".section").css({'opacity': '0', 'display': 'none'})
  $(document).on('click', '#edu_link', () => transition('edu'));
});

