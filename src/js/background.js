const copyToClipboard = (tab) =>
  chrome.scripting.executeScript(
    { target: { tabId: tab.id }, files: ["src/js/jquery.min.js"] },
    () =>
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["src/js/markdown.js"],
      })
  );

chrome.action.onClicked.addListener(copyToClipboard);
