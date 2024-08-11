// Dynamically add the button since the functionality will be implemented using JavaScript.
import arrowIconLeft from '../assets/images/icon-arrow-left.svg';
import arrowIconRight from '../assets/images/icon-arrow-right.svg';

const DIVIDER = 2;
const NEXT_ITEM = 'Next Item';
const PREVIOUS_ITEM = 'Previous Item';
const FIRST_NODE_INDEX = 0;
const SECOND_NODE_INDEX = 1;
const THIRD_NODE_INDEX = 2;
const FIFTH_NODE_INDEX = 4;
const SEVENTH_NODE_INDEX = 6;
const NINTH_NODE_INDEX = 8;
const myWork = /**@type {Element | null} */ (document.querySelector('.myWork'));
const liveRegion = /**@type {HTMLParagraphElement} */ (
  document.createElement('p')
);
const sliderWrapper = document.querySelector('[data-slider-wrapper]');
console.log(sliderWrapper);
const slider = /**@type {HTMLUListElement} */ (
  document.querySelector('[data-slider]')
);
const sliderButtonsContainer = document.createElement('ul');

let counter = 0;
let delay = 300; // The delay after the event is 'complete' for the callback to run.
let debouncetimeoutID = /** @type {number | boolean} */ (false); // This holds the timeout id.
let secondNodeIndex = /** @type {number | null} */ (null);
let fourthNodeIndex = /** @type {number | null} */ (null);
let firstCloneNodeIndex = /** @type {number | null} */ (null);
let fourthCloneNodeIndex = /** @type {number | null} */ (null);
let ispressed = false;
let istouched = false;
let startMouseTouchX = /** @type {number | null} */ (null);

sliderButtonsContainer.className = 'myWork__BtnControls';
sliderButtonsContainer.insertAdjacentHTML(
  'afterbegin',
  `<li>      
    <button type='button' class='btn__previous btn__slider' aria-label='Previous Item'>   
      <img src='${arrowIconLeft}' aria-hidden='true' alt=''>
    </button>
  </li>
  <li>
    <button type='button' class='btn__next btn__slider' aria-label='Next Item'>
      <img src='${arrowIconRight}' aria-hidden='true' alt=''>
    </button>
  </li>`
);
myWork?.appendChild(sliderButtonsContainer);

/**
 * This function create and clone of the slides and returns it as a NodeList.
 * @returns {NodeList}
 * This function create a cloned of the slides.
 */
function createCloneSlides() {
  const slides = /**@type {NodeList} */ (
    document.querySelectorAll('[data-slide]')
  );
  const firstCloneNode = slides[FIRST_NODE_INDEX].cloneNode(true);
  const secondCloneNode = slides[SECOND_NODE_INDEX].cloneNode(true);
  const fourthCloneNode =
    slides[slides.length - THIRD_NODE_INDEX].cloneNode(true);
  const lastCloneNode =
    slides[slides.length - SECOND_NODE_INDEX].cloneNode(true);

  slider?.append(firstCloneNode, secondCloneNode);
  slider?.prepend(fourthCloneNode, lastCloneNode);

  const cloneNodeSlides = document.querySelectorAll('[data-slide]');
  return cloneNodeSlides;
}
const clonedSlides = createCloneSlides();

/**
 * We create a function that will enable us know the width of the slider and one width of the slide.
 * @returns {Array<number>}
 * This function returns an array of numbers
 */
function getElementSizes() {
  const sliderWidth = slider.getBoundingClientRect().width;
  const sliderGap = parseFloat(getComputedStyle(slider).gap);
  const slideWidth = clonedSlides[0].getBoundingClientRect().width + sliderGap;
  return [sliderWidth, sliderGap, slideWidth];
}

/**
 * This function offsets the entire slider the fifth slide in the middle
 * @param {number} slideIndex
 * The takes in a number.
 */
function offsetSlider(slideIndex) {
  counter = slideIndex;
  const [sliderWidth, gap, slideWidth] = getElementSizes();
  const offset =
    -gap / DIVIDER +
    slideWidth * slideIndex -
    (sliderWidth - slideWidth) / DIVIDER;
  slider.style.transform = `translateX(${offset > 0 ? '-' : ''}${Math.abs(offset)}px)`;
}

/**
 * This function initializes the slide index so that the it offsets to the middle of the slider.
 * @returns {void}
 */
function initialSlideIndex() {
  // The original index of the second slide that is not cloned in the cloned slides.
  secondNodeIndex = clonedSlides.length - SEVENTH_NODE_INDEX;
  // The original index of the fourth slide that is not cloned in the cloned slides.
  fourthNodeIndex = clonedSlides.length - FIFTH_NODE_INDEX;
  // The index of the first slide that is cloned in the cloned slides.
  firstCloneNodeIndex = clonedSlides.length - THIRD_NODE_INDEX;
  // The index of fourth slide that was cloned
  fourthCloneNodeIndex = clonedSlides.length - NINTH_NODE_INDEX;
  // Initialize the counter that we would use to track the movement of each slide.
  // The initial counter will ensure the fifth slide is always at the center.
  counter = Math.floor((clonedSlides.length - SECOND_NODE_INDEX) / DIVIDER);

  // Ensure that for every transition, the slide is at the center of the viewport.
  offsetSlider(counter);

  // Show the active slide to assistive technology.
  showCurrentSlide();
}

/**
 * The function shows the slide in the middle of viewport to assistive technologies and hides the transitioning slide form assistive technologies.
 * @returns {void}
 */
function showCurrentSlide() {
  // First we need to know what the current slide is.
  const currentSlide = clonedSlides[counter];
  // Then we need to loop over all the slides and then know which slide match the current slide each time the function is executed
  clonedSlides.forEach(function (clonedSlide) {
    clonedSlide.setAttribute('aria-hidden', `${currentSlide !== clonedSlide}`);
  });
}

/**
 * This function will be called and the slider will be offset to ensure the active slide is always at the center.
 * @returns {void}
 */
function handleResize() {
  offsetSlider(counter);
}

/**
 * The debounce can will help us control how often the 'resize' event is called. The debounce function will only be called when the event stops firing after a certain amount of time.
 * @returns {void}
 * This is the function argument that will handle the called when event stops firing.
 */
function debounce() {
  clearTimeout(debouncetimeoutID);

  debouncetimeoutID = setTimeout(handleResize, delay);
}

/**
 * The function updates the slider.
 * @param {string} direction
 * This parameter is a string value indicating the direction depending on what the user is using to move the slider. It could be button direction, keyboard arrow keys, mousedown/mouseup, and touch effect.
 */
function updateSlide(direction) {
  if (direction == NEXT_ITEM) {
    if (counter >= firstCloneNodeIndex) {
      offsetSlider(secondNodeIndex);
    } else {
      counter++;
      offsetSlider(counter);
    }
  }

  if (direction == PREVIOUS_ITEM) {
    if (counter <= fourthCloneNodeIndex) {
      offsetSlider(fourthNodeIndex);
    } else {
      counter--;
      offsetSlider(counter);
    }
  }

  showCurrentSlide();
}

/**
 * The functions handles the action that follows the user clicking the button.
 * @param {HTMLButtonElement} btnTarget
 * The function accepts a button element
 */
function handleClick(btnTarget) {
  // We need to know what has been clicked so we can know how to move and transition the slider.
  const direction = btnTarget.getAttribute('aria-label');
  updateSlide(direction);
}

/**
 * This function tracks the distance covered by the events at both states mousedown/mouseup or touchstart/touchend and determines what direction the slide occurs.
 * @param {number} distanceCovered
 * This is the distance covered by the events along the target element.
 * @param {number} distanceTrigger
 * This helps us know how long the user should apply the pointer across slide before we change slide.
 */
function trackDistances(distanceCovered, distanceTrigger) {
  if (distanceCovered > distanceTrigger) {
    // Previous Slide
    updateSlide(NEXT_ITEM);
  } else if (distanceCovered < -distanceTrigger) {
    // Next Slide
    updateSlide(PREVIOUS_ITEM);
  }
}

/**
 * This function will set the reset press/touch state
 * @param {MouseEvent | TouchEvent } evtObj
 * This touch event and the mouse event represented by the UIEvent
 * @returns {void}
 */
function startMouseTouchNav(evtObj) {
  if (!ispressed && evtObj instanceof MouseEvent) {
    ispressed = true;
    startMouseTouchX = evtObj.clientX;
    console.log(startMouseTouchX);
  }

  if (!istouched && evtObj instanceof TouchEvent) {
    istouched = true;
    startMouseTouchX = evtObj.changedTouches[0].pageX;
    console.log(startMouseTouchX);
  }

  slider.style.cursor = 'grabbing';
}

/**
 * This function handles the mouse down and touch start events.
 * @param {TouchEvent | MouseEvent} evtObj
 * The event to be fired.
 * @returns {void}
 */
function endMouseTouchNav(evtObj) {
  const slideWidth = getElementSizes()[THIRD_NODE_INDEX];
  const distanceTrigger = slideWidth / DIVIDER;

  // We monitor the distance by the mouse pointer and track the direction by using a tracker to move to the next/prev slide.
  if (ispressed && evtObj instanceof MouseEvent) {
    const endMouseTouchX = evtObj.clientX;
    const distanceClientX = endMouseTouchX - startMouseTouchX;
    ispressed = false;
    trackDistances(distanceClientX, distanceTrigger);
  }

  // We monitor the distance covered by the touch pointer and track the direction by using a tracker to move to the next/prev slide.
  if (istouched && evtObj instanceof TouchEvent) {
    //TODO We prevent the mouse from being sent. However, I noticed this does not work on chrome and it seems that the non-passive event listener has been place by the browser. I need to make the listener passive so that it prevents the listener from blocking the page rendering while the user is scrolling.
    evtObj.preventDefault();
    const endMouseTouchX = evtObj.changedTouches[0].pageX;
    const distanceTouchX = endMouseTouchX - startMouseTouchX;
    istouched = false;
    trackDistances(distanceTouchX, distanceTrigger);
  }

  slider.style.cursor = 'grab';
}

// Handling the Button events
const sliderButtons = document.querySelectorAll('.btn__slider');
sliderButtons.forEach(function (sliderButton) {
  sliderButton.addEventListener('click', function (evtObj) {
    const btnTarget = evtObj.target.closest('.btn__slider');
    if (!btnTarget) return;
    handleClick(btnTarget);
  });
});

// Navigation using mouse/track pads and fingers
sliderWrapper.addEventListener('touchstart', startMouseTouchNav);
sliderWrapper.addEventListener('mousedown', startMouseTouchNav);
sliderWrapper.addEventListener('mouseup', endMouseTouchNav);
sliderWrapper.addEventListener('touchend', endMouseTouchNav);

// TODO Keyboard navigation

// When the page loads we want the fifth slide to always be at the center of the view.
window.addEventListener('load', initialSlideIndex);

// When the user resizes the window we want the any of the slide to always be at the center of the view.
window.addEventListener('resize', debounce);
