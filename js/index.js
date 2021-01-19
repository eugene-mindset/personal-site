
var isChanging = false; // dont want to process other changes if one is already happening
var currentSection = 'home';
var sections = {
  'home': {
    backgroundColor: '#25253D',
    textColor: '#F1FBFD',
    accentColor: '#F53E8A'
  },
  'edu': {
    backgroundColor: '#25253D',
    textColor: '#F1FBFD',
    accentColor: '#2EF7E6'
  },
  'exp': {
    backgroundColor: '#25253D',
    textColor: '#F1FBFD',
    accentColor: '#008DA3'
  },
  'skll': {
    backgroundColor: '#25253D',
    textColor: '#F1FBFD',
    accentColor: '#FFD9DA'
  },
  'proj': {
    backgroundColor: '#25253D',
    textColor: '#F1FBFD',
    accentColor: '#694F5D'
  },
}

/*
  Function to handle transition content.
*/
function transition(section) {
  // window.scrollTo(0, 0);

  // ...
  if (currentSection != 'home' && section != 'home') {
    if (currentSection == section) {
      transitionSections(currentSection, 'home');
    } else {
      transitionSections(currentSection, section);
    }
  } else {
    transitionSections(currentSection, section);
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

async function animateColorTransition(selector, property, color, speed) {
  return new Promise((resolve) => {
    let startColor = $(selector).css(property).trim();

    // start color values for RGB channels
    let startR = parseInt("0x" + startColor.slice(1,3));
    let startG = parseInt("0x" + startColor.slice(3,5));
    let startB = parseInt("0x" + startColor.slice(5,7));

    // end color values for RGB channels
    let endR = parseInt("0x" + color.slice(1,3));
    let endG = parseInt("0x" + color.slice(3,5));
    let endB = parseInt("0x" + color.slice(5,7));

    $({count:0}).animate({count:speed}, {
      duration: speed,
      step: function() {
        let currR = Math.round(startR + ((this.count/speed) * (endR - startR)));
        let currG = Math.round(startG + ((this.count/speed) * (endG - startG)));
        let currB = Math.round(startB + ((this.count/speed) * (endB - startB)));

        // console.log(currR, currG, currB);
        currR = ('00' + currR.toString(16).toUpperCase()).slice(-2);
        currG = ('00' + currG.toString(16).toUpperCase()).slice(-2);
        currB = ('00' + currB.toString(16).toUpperCase()).slice(-2);

        $(selector).css(property, '#' + currR + currG + currB);
      }
    }).promise().then(resolve);
  });
}

async function animateMenu(selector, speed, section='home') {
  return new Promise((resolve) => {
    let startMatrix = $(selector).css('transform').replace(/[^0-9\-.,]/g, '').split(',');

    let startX = parseFloat(startMatrix[4]);
    let startY = parseFloat(startMatrix[5]);

    $({count:0}).animate({count:speed}, {
      duration: speed,
      step: function() {

        let menuHeight = parseFloat($('.menu')[0].getBoundingClientRect().height);
        let bodyHeight = parseFloat($('html')[0].getBoundingClientRect().height);

        let endX = 0;
        let endY = section == 'home' ? (bodyHeight - menuHeight) / 2 : 0;

        let currX = Math.round(startX + ((this.count/speed) * (endX - startX)));
        let currY = Math.round(startY + ((this.count/speed) * (endY - startY)));

        $(selector).css('transform', `translate(${currX}px, ${currY}px)`);
      }
    }).promise().then(resolve);
  });
}


async function transitionSections(startSection, endSection) {
  // ignore other transitions while one is occuring
  if (isChanging) {
    return;
  }

  isChanging = true;

  let startSelector = '#' + startSection;
  let endSelector = '#' + endSection;

  if (startSection == 'home' && endSection != 'home') {
    await animateMenu('.menu', 500, endSection);
  }

  // we wait on things to visible disappear
  // no waiting on first toggle to not have the page resize twice
  await $(startSelector).animate({opacity: 0}, speed=500).promise();

  $(startSelector).toggle(speed=500);
  $(endSelector).toggle(speed=500)
  $(endSelector).animate({opacity: 1}, speed=500)

  // need to make a custom function to handle color animations
  let colorSpeed = 750;
  animateColorTransition(
    'body',
    '--background-color',
    sections[endSection]['backgroundColor'],
    colorSpeed
  );

  animateColorTransition(
    'body',
    '--text-color',
    sections[endSection]['textColor'],
    colorSpeed
  );

  animateColorTransition(
    'body',
    '--accent-color',
    sections[endSection]['accentColor'],
    colorSpeed
  );

  
  if (endSection == 'home') {
    await animateMenu('.menu', 500);
  }

  currentSection = endSection;
  // location.hash = endSection;
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
}
*/

//parseInt(menuRect.height) + bodyHeight/2


$(document).ready(function() {

  $(".section").css({'opacity': '0', 'display': 'none'})

  Object.keys(sections).map(function(key) {
    $(document).on('click', `#${key}_link`, () => transition(key));
  });

  $('.menu').ready(function() {
    let menuHeight = parseFloat($('.menu')[0].getBoundingClientRect().height);
    let bodyHeight = parseFloat($('html')[0].getBoundingClientRect().height);

    $('body').css({'--content-offset': `${menuHeight + 50}px`});
    $('.menu').css({'transform': 'matrix(1, 0, 0, 1, 0, 0)'});
    $('.menu').css({'transform': `translateY(${(bodyHeight - menuHeight)/2}px)`});
  });

  if (location.hash != "") {
    transition(location.hash.substring(1));
  }


  $(window).on('resize', function() {
    if (currentSection != 'home') return;

    while(isChanging) {}

    let menuHeight = parseFloat($('.menu')[0].getBoundingClientRect().height);
    let bodyHeight = parseFloat($('html')[0].getBoundingClientRect().height);

    animateMenu('.menu', 500);
  })

});

