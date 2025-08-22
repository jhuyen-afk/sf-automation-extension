chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "automateInput") {
        chrome.tabs.sendMessage(sender.tab.id, request);
    }
});
