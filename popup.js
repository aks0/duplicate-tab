chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.duplicate(tabs[0].id);
});
// close the window so that the popup does not bother the user
window.close();