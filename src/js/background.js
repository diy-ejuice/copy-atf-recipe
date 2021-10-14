const isFirefox = () =>
  navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;

const copyToClipboard = (tab) => {
  if (isFirefox()) {
    browser.tabs.executeScript({ file: "src/js/jquery.min.js" }, () =>
      browser.tabs.executeScript({
        file: "src/js/markdown.js",
      })
    );
  } else {
    chrome.scripting.executeScript(
      { target: { tabId: tab.id }, files: ["src/js/jquery.min.js"] },
      () =>
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["src/js/markdown.js"],
        })
    );
  }
};

if (isFirefox()) {
  chrome.browserAction.onClicked.addListener(copyToClipboard);
} else {
  chrome.action.onClicked.addListener(copyToClipboard);
}
