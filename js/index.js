
var isChanging = false; // dont want to process other changes if one is already happening
var currentSection = 'home';
var sections = {
  'home': {
    backgroundColor: '#000000',
    textColor: '#FFFFFF'
  },
  'edu': {
    backgroundColor: '#00000F',
    textColor: '#FFFFF0'
  },
  'exp': {
    backgroundColor: '#0000F0',
    textColor: '#FFFF0F'
  },
  'skll': {
    backgroundColor: '#000F00',
    textColor: '#FFF0FF'
  },
  'proj': {
    backgroundColor: '#00F000',
    textColor: '#FF0FFF'
  },
}

/*
  Function to handle transition content.
*/


function transition(section) {

  // ...
  if (currentSection != 'home' && section != 'home') {
    if (currentSection == section) {
      transitionSections(currentSection, 'home');
    } else {
      transitionSections(currentSection, section);
    }
  } else if (currentSection == 'home' && section != 'home') {
    transitionSections('home', section);
  } else if (currentSection != 'home' && section == 'home') {
    transitionSections(currentSection, 'home')
  } else {
  }
}

  /*
  console.log(isChanging, "section");
  if (isChanging) {
    return;
  }

  isChanging = true;2

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


async function transitionSections(startSection, endSection) {
  

  // ignore other transitions while one is occuring
  if (isChanging) {
    return;
  }

  isChanging = true;

  let startSelector = '#' + startSection;
  let endSelector = '#' + endSection;

  // need to make a custom function to handle color animations
  if (endSection == "home") {
    $('body').css('--background-color', '#F1FBFD');
    $('body').css('--text-color', '#25253D');
  } else {
    $('body').css('--background-color', '#25253D');
    $('body').css('--text-color', '#F1FBFD');
  }

  // we wait on things to visible disappear
  // no waiting on first toggle to not have the page resize twice
  await $(startSelector).animate({opacity: 0}, speed=500).promise();
  $(startSelector).toggle(speed=500).promise();
  await $(endSelector).toggle(speed=500).promise();
  await $(endSelector).animate({opacity: 1}, speed=500).promise();


  currentSection = endSection;
  isChanging = false;
}

/*
function hideSection(section) {
  console.log(`closing ${section}...`);
  $('body').css('--background-color', '#FFFFFF');
}

function showSection(section) {
  console.log(`opening ${section}...`);
  $('body').css('--background-color', '#000000');
}*/



$(document).ready(function() {
  $(".section").css({'opacity': '0', 'display': 'none'})

  Object.keys(sections).map(function(key) {
    $(document).on('click', `#${key}_link`, () => transition(key));
  });

});

