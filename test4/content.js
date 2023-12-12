// 监听来自背景脚本的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "translateSelection") {
        // 处理选中文本的翻译请求
        translateText(request.text);
    } else if (request.action === "translatePage") {
        // 处理全页翻译的请求
        translatePage();
    }
});

// 实现一个简单的文本翻译函数（示例）
function translateText(text) {
    // 在这里调用翻译 API 或执行翻译逻辑
    // 以下代码为示例，需要替换为实际的翻译逻辑
    console.log("翻译的文本：", text);
    // 假设翻译结果
    const translatedText = "Translated: " + text;
    // 显示翻译结果
    alert(translatedText);
}

// 实现全页翻译的函数
function translatePage() {
    // 在这里实现全页翻译的逻辑
    console.log("翻译整个页面");
    // 遍历并翻译页面中的文本
    // ...
}
