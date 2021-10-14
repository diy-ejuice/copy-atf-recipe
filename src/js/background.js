chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript({ file: "src/js/jquery.min.js" }, () => {
    chrome.tabs.executeScript({ file: "src/js/markdown.js" });
  });
});
