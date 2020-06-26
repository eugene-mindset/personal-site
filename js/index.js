
var isChanging = false; // dont want to process other changes if one is already happening
var currentSection = 'home';
var sections = {
  'home': null,
  'edu': null,
  'exp': null,
  'skll': null,
  'proj': null
}

/*
  Function to handle transition content.
*/


function transition(section) {

  if (isChanging) {
    return;
  }


  if (section != 'home') {
    if (currentSection != 'home') {
      hideSection(currentSection);
    }

    if (section == currentSection) {
      currentSection = 'home';
    } else {
      showSection(section);
      currentSection = section;
    }
  } else {
    if (currentSection != 'home') {
      hideSection(currentSection);
      currentSection = 'home';
    }
  }


  /*
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
      select.animate({opacity: 1}, speed=500);
      isChanging = false;
    };

    $('body').css('--background-color', '#4a4e69');
    select.toggle(speed=500, callback=call);
  } else {
    call = () => {
      select.toggle(speed=500);
      isChanging = false;
    };

    $('body').css('--background-color', '#f1fbfd');
    select.animate({opacity: 0}, speed=500, callback=call);
  }
  */
}

function hideSection(section) {
  console.log(`closing ${section}...`);
}

function showSection(section) {
  console.log(`opening ${section}...`);
}



$(document).ready(function() {
  $(".section").css({'opacity': '0', 'display': 'none'})

  Object.keys(sections).map(function(key) {
    $(document).on('click', `#${key}_link`, () => transition(key));
  });

});

