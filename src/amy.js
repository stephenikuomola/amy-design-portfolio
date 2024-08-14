// We want to import a feature detection from the detect-it package
import { supportsPassiveEvents } from 'detect-it';

// Dynamically add the button since the functionality will be implemented using JavaScript.
import arrowIconLeft from '../assets/images/icon-arrow-left.svg';
import arrowIconRight from '../assets/images/icon-arrow-right.svg';

const DIVIDER = 2;
const NEXT_ITEM = 'Next Item';
const PREVIOUS_ITEM = 'Previous Item';
const FIRST_NODE_INDEX = 0;
const SECOND_NODE_INDEX = 1;
const THIRD_NODE_INDEX = 2;
const FOURTH_NODE_INDEX = 3;
const EIGHT_NODE_INDEX = 7;
const NINTH_NODE_INDEX = 8;
const myWork = /**@type {Element | null} */ (document.querySelector('.myWork'));
const liveRegion = /**@type {HTMLParagraphElement} */ (
  document.createElement('p')
);
const sliderWrapper = document.querySelector('[data-slider-wrapper]');
const slider = /**@type {HTMLUListElement} */ (
  document.querySelector('[data-slider]')
);
const slides = /**@type {NodeList} */ (
  document.querySelectorAll('[data-slide]')
);
const sliderButtonsContainer = document.createElement('ul');

let counter = 0;
let delay = 300; // The delay after the event is 'complete' for the callback to run.
let debouncetimeoutID = /** @type {number | boolean} */ (false); // This holds the timeout id.
let firstNodeIndex = /** @type {number | null} */ (null);
let lastNodeIndex = /** @type {number | null} */ (null);
let firstClonedNodeIndex = /** @type {number | null} */ (null);
let lastClonedNodeIndex = /** @type {number | null} */ (null);
let direction = /**@type {string | nill} */ (null);
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
function initializeSlideIndex() {
  // The original index of the second slide that is not cloned in the cloned slides.
  firstNodeIndex = clonedSlides.length - EIGHT_NODE_INDEX;
  // The original index of the last slide that is not cloned in the cloned slides.
  lastNodeIndex = clonedSlides.length - FOURTH_NODE_INDEX;
  // The index of the first slide that is cloned in the cloned slides
  firstClonedNodeIndex = clonedSlides.length - THIRD_NODE_INDEX;
  // The index of last slide that is cloned in the cloned slides
  lastClonedNodeIndex = clonedSlides.length - NINTH_NODE_INDEX;
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
 * @param {boolean} checkClone
 * This parameter is a string value indicating the direction depending on what the user is using to move the slider. It could be button direction, keyboard arrow keys, mousedown/mouseup, and touch effect.
 */
function updateSlide(checkClone) {
  if (direction == NEXT_ITEM) {
    if (counter >= firstClonedNodeIndex && checkClone) {
      slider.style.transition = 'none';
      offsetSlider(firstNodeIndex);
    } else if (!checkClone) {
      slider.style.transition = 'transform 0.25s ease-in-out';
      counter++;
      offsetSlider(counter);
    }
  }

  if (direction == PREVIOUS_ITEM) {
    if (counter <= lastClonedNodeIndex && checkClone) {
      slider.style.transition = 'none';
      offsetSlider(lastNodeIndex);
    } else if (!checkClone) {
      slider.style.transition = 'transform 0.25s ease-in-out';
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
  // We need to know what button has been clicked so we can know the direction to move and transition the slider.
  direction = btnTarget.getAttribute('aria-label');
  updateSlide();
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
    direction = NEXT_ITEM;
    updateSlide();
  } else if (distanceCovered < -distanceTrigger) {
    // Next Slide
    direction = PREVIOUS_ITEM;
    updateSlide();
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
  }

  if (!istouched && evtObj instanceof TouchEvent) {
    istouched = true;
    startMouseTouchX = evtObj.changedTouches[0].pageX;
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
    const endMouseTouchX = evtObj.changedTouches[0].pageX;
    const distanceTouchX = endMouseTouchX - startMouseTouchX;
    istouched = false;
    trackDistances(distanceTouchX, distanceTrigger);
  }

  slider.style.cursor = 'grab';
}

/**
 * This function handles the keyboard navigation
 * @param {KeyboardEvent} evtObj
 * The keyboard event object that described the user interaction with the keyboard.
 */
function handleKeyNav(evtObj) {
  if (evtObj instanceof KeyboardEvent) {
    if (evtObj.key === 'ArrowRight') {
      direction = NEXT_ITEM;
      updateSlide();
    } else if (evtObj.key === 'ArrowLeft') {
      direction = PREVIOUS_ITEM;
      updateSlide();
    }
  }
}

/**
 * The function updates the live region that will announced to the user via a screen reader when the transition comes to an end.
 * @returns {void}
 */
function updateLiveRegion() {
  // The announce to the user should be only when it has actually updated and the no other interaction happens
  liveRegion.setAttribute('aria-live', 'polite');
  // I want the screen reader's to announce the live region's text in all of its entirety and not just what changed.
  liveRegion.setAttribute('aria-atomic', 'true');
  // Visually remove the element form the page.
  liveRegion.setAttribute('class', 'sr-only');
  // Update the text so the user knows how many slides they have gone through
  liveRegion.textContent = `Item ${counter - 1} of ${slides.length}`;
  // Append it to the work section in the Document Object Model
  myWork?.appendChild(liveRegion);
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
sliderWrapper.addEventListener('mousedown', startMouseTouchNav);
sliderWrapper.addEventListener('mouseup', endMouseTouchNav);

// Older browser try to interpret object in the third argument as a try value in the capture argument. We need to use a feature detection when using this API prevent possible unforeseen results. The aim is to create a passive listener to prevent the preventDefault() from being called on the event making it to block scrolling.
sliderWrapper.addEventListener(
  'touchstart',
  startMouseTouchNav,
  supportsPassiveEvents ? { capture: false, passive: true } : false
);
sliderWrapper.addEventListener(
  'touchend',
  endMouseTouchNav,
  supportsPassiveEvents ? { capture: false, passive: true } : false
);

// So when the transition comes to an end we want to remove the transition property applied, update the slides, and then update the live region that would be announced to the user.
slider.addEventListener('transitionend', function () {
  updateSlide(true);
  updateLiveRegion();
});

// TODO Carry out animation of the different sections when they come into the view of the user on scroll. You can use the IntersectionObserver API to perform this task.

// When the page loads we want the fifth slide to always be at the center of the view.
window.addEventListener('load', initializeSlideIndex);

// When the user resizes the window we want the any of the slide to always be at the center of the view.
window.addEventListener('resize', debounce);

// When the user keys down on the right and left arrow keys we want to navigate the slider as well making it accessible for keyboard users.
window.addEventListener('keydown', handleKeyNav);
