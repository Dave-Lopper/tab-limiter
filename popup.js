
let limitVal;


document.addEventListener('DOMContentLoaded', function () {  
  const limitMkp = document.querySelector('input#maxTabs');
  chrome.storage.local.get(["limit"]).then((result) => {
    const value = result.limit ? result.limit : 20;
    limitMkp.value = value;
    limitVal = value;
    if (!result.limit) {
      chrome.storage.local.set({ 'limit': 20 });
    }
  });
  limitMkp.addEventListener('change', function (event) {
    chrome.storage.local.set({ 'limit': parseInt(event.target.value) }).then(() => {
      limitVal = parseInt(event.target.value);
    });
  });

  const decrementMkp = document.querySelector('span#decrement');
  const incrementMkp = document.querySelector('span#increment');

  decrementMkp.addEventListener('click', (event) => {
    limitVal = limitVal - 1;
    chrome.storage.local.set({ 'limit': limitVal }).then(() => {
      limitMkp.value = limitVal;
    });
  });
  incrementMkp.addEventListener('click', function(event) {
    limitVal = limitVal + 1;
    chrome.storage.local.set({ 'limit': limitVal }).then(() => {
      limitMkp.value = limitVal;
    });
  });
});