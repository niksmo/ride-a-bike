const filter = document.querySelector('.filter');
const accordion = filter.querySelector('.filter__current');
const popup = filter.querySelector('.filter__popup');

const filterHighway = filter.querySelector('.filter__popup-item_bike_highway');
const filterGravel = filter.querySelector('.filter__popup-item_bike_gravel');
const filterTt = filter.querySelector('.filter__popup-item_bike_tt');

const bikeSliders = document.querySelectorAll('.bikes-slider');
const sliderHighway = document.querySelector('.bikes-slider_type_highway');
const sliderGravel = document.querySelector('.bikes-slider_type_gravel');
const sliderTt = document.querySelector('.bikes-slider_type_tt');


function toggleAccordion () {
  filter.classList.toggle('filter_open')
  popup.classList.toggle('filter__popup_hidden');
}

accordion.addEventListener('click', toggleAccordion, false);

function hiddeSliders (array) {
  array.forEach(function (item) {
    if (!item.classList.contains('bikes-slider_hidden')) {
      item.classList.toggle('bikes-slider_hidden')
    }
  })
}

function showSlider (filterItem) {
  if (filterItem === filterHighway && sliderHighway.classList.contains('bikes-slider_hidden')) {
    hiddeSliders (bikeSliders);
    sliderHighway.classList.toggle('bikes-slider_hidden');
  } else if (filterItem === filterGravel && sliderGravel.classList.contains('bikes-slider_hidden')) {
    hiddeSliders (bikeSliders);
    sliderGravel.classList.toggle('bikes-slider_hidden');
  } else if (filterItem === filterTt && sliderTt.classList.contains('bikes-slider_hidden')) {
    hiddeSliders (bikeSliders);
    sliderTt.classList.toggle('bikes-slider_hidden');
  }
}

function applyFilter () {
  accordion.textContent = this.firstChild.textContent;
  toggleAccordion ();
  showSlider(this);
}

filterHighway.addEventListener('click', applyFilter);
filterGravel.addEventListener('click', applyFilter);
filterTt.addEventListener('click', applyFilter);