const filter = document.querySelector('.filter');
const accordion = filter.querySelector('.filter__current');
const accordionIcon = filter.querySelector('.filter__accordion')
const popup = filter.querySelector('.filter__popup');

const filterItems = filter.querySelectorAll('.filter__popup-item');
const filterHighway = filter.querySelector('.filter__popup-item_bike_highway');
const filterGravel = filter.querySelector('.filter__popup-item_bike_gravel');
const filterTt = filter.querySelector('.filter__popup-item_bike_tt');

const buttons = document.querySelectorAll('.button');
const buttonHighway = document.querySelector('.button_bike_highway');
const buttonGravel = document.querySelector('.button_bike_gravel');
const buttonTt = document.querySelector('.button_bike_tt');

const bikeSliders = document.querySelectorAll('.bikes-slider');
const bikesHighway = document.querySelector('.bikes-slider_type_highway');
const bikesrGravel = document.querySelector('.bikes-slider_type_gravel');
const bikesTt = document.querySelector('.bikes-slider_type_tt');


function toggleAccordion () {
  accordionIcon.classList.toggle('filter__accordion_opened');
  popup.classList.toggle('filter__popup_hidden');
}



function hiddeSliders (array) {
  array.forEach(function (item) {
    if (!item.classList.contains('bikes-slider_hidden')) {
      item.classList.toggle('bikes-slider_hidden')
    }
  })
}

function showSlider (selectedItem) {
  if (selectedItem === filterHighway && bikesHighway.classList.contains('bikes-slider_hidden')) {
    hiddeSliders (bikeSliders);
    toggleBikes(bikesHighway);
  } else if (selectedItem === filterGravel && bikesrGravel.classList.contains('bikes-slider_hidden')) {
    hiddeSliders (bikeSliders);
    toggleBikes(bikesrGravel);
  } else if (selectedItem === filterTt && bikesTt.classList.contains('bikes-slider_hidden')) {
    hiddeSliders (bikeSliders);
    toggleBikes(bikesTt);
  }
}

function applyFilter () {
  const selectedItem = this;

  accordion.textContent = selectedItem.firstChild.textContent;
  toggleAccordion ();
  showSlider(selectedItem);
}

accordion.addEventListener('click', toggleAccordion, false);

filterItems.forEach((item) => item.addEventListener('click', applyFilter));


function toggleTab(el) {
  if (!el.classList.contains('button_active')) {
    buttons.forEach(function (item) {
      if (item.classList.contains('button_active')) {
        item.classList.remove('button_active');
      }
    })
    el.classList.toggle('button_active');
  } else {
    return;
  }
}

function toggleBikes(bikeType) {
  bikeType.classList.toggle('bikes-slider_hidden');
};


function chooseBikes(evt) {
  const selectedButton = evt.target;

  if (selectedButton === buttonHighway && bikesHighway.classList.contains('bikes-slider_hidden')) {
    toggleTab(selectedButton);
    hiddeSliders(bikeSliders);
    toggleBikes(bikesHighway);
  } else if (selectedButton === buttonGravel && bikesrGravel.classList.contains('bikes-slider_hidden')) {
    toggleTab(selectedButton);
    hiddeSliders(bikeSliders);
    toggleBikes(bikesrGravel);
  } else if (selectedButton === buttonTt && bikesTt.classList.contains('bikes-slider_hidden')) {
    toggleTab(selectedButton);
    hiddeSliders(bikeSliders);
    toggleBikes(bikesTt);
  }
}

buttons.forEach((item) => item.addEventListener('click', chooseBikes));