document.getElementById('translatePage').addEventListener('click', () => {
    const language = document.getElementById('languageSelect').value;
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {action: "translatePage", language: language});
    });
});
