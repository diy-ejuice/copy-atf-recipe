const copyToClipboard = () =>
  chrome.tabs.executeScript({ file: "src/js/jquery.min.js" }, () => {
    chrome.tabs.executeScript({ file: "src/js/markdown.js" });
  });

chrome.browserAction.onClicked.addListener(copyToClipboard);
