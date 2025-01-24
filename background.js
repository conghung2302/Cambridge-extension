// Tạo context menu
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "getSelectedText",
      title: "Get Selected Text", // Tên action hiển thị
      contexts: ["selection"] // Chỉ hiển thị khi có văn bản được bôi đen
    });
  });
  
  // Xử lý khi người dùng nhấp vào context menu
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "getSelectedText") {
      const selectedText = info.selectionText; // Lấy văn bản bôi đen
      if (selectedText) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: (text) => alert(`Selected Text: "${text}"`),
          args: [selectedText]
        });
      }
    }
  });
      