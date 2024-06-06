/*function searchQuery(query) {
  console.log("Searching for:", query);
}

function debounce(func, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Debounce search function with a delay of 300ms
const debouncedSearch = debounce(searchQuery, 300);

debouncedSearch("apple");
debouncedSearch("banana");
debouncedSearch("orange");

// Output: orange
*/

//scroll event
// Example 2: Debouncing scroll events

// Function to execute after debouncing
/*function handleScroll() {
  console.log("Scrolling...");
}

function debounce(func, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Debounce the scroll event handler with a delay of 200ms
const debouncedScroll = debounce(handleScroll, 200);

window.addEventListener("scroll", debouncedScroll);

// Output: "Scrolling..." will be logged after 200ms
*/

//THROTTLING
// Throttling scroll events

// Function to execute during throttling
function handleScroll() {
  console.log("inside handlescroll function");
}

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// limit of 200ms
const throttledScroll = throttle(handleScroll, 200);

window.addEventListener("scroll", throttledScroll);

// Output: "Scrolling..." logged at most 200ms
