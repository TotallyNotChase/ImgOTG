document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.rotate_clock').addEventListener('click', onrotateclick, false)
  function onrotateclick () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, "rotate_clock");
    });
  }
  document.querySelector('.rotate_anticlock').addEventListener('click', onantirotateclick, false)
  function onantirotateclick () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, "rotate_anticlock");
    });
  }
})
