// 监听来自内容脚本的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "translateSelection") {
        // 选中文本翻译的逻辑
        console.log("翻译选中的文本: ", message.text);
        // 在这里调用翻译 API 或执行翻译逻辑
    } else if (message.action === "translatePage") {
        // 全页翻译的逻辑
        console.log("翻译整个页面");
        // 在这里调用翻译 API 或执行翻译逻辑
    }
  });
  
  // 创建上下文菜单
  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "translateText",
        title: "翻译选中的文本",
        contexts: ["selection"]
    });
  });
  
  // 当上下文菜单项被点击时
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "translateText") {
        // 获取选中的文本
        const selectedText = info.selectionText;
        // 发送消息到内容脚本进行翻译
        chrome.tabs.sendMessage(tab.id, { action: "translateSelection", text: selectedText });
    }
  });
  