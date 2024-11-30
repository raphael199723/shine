// script.js
document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("addButton");
    const popup = document.getElementById("popup");
    const confirmButton = document.getElementById("confirmButton");
    const cancelButton = document.getElementById("cancelButton");
    const userInput = document.getElementById("userInput");
    const itemList = document.getElementById("itemList");

    // 從 LocalStorage 載入項目
    const loadItems = () => {
        const savedItems = JSON.parse(localStorage.getItem("items")) || [];
        savedItems.forEach(item => {
            addItemToDOM(item);
        });
    };

    // 將項目新增到 DOM
    const addItemToDOM = (text) => {
        const listItem = document.createElement("li");
        listItem.textContent = text;
        itemList.appendChild(listItem);
    };

    // 儲存項目到 LocalStorage
    const saveItem = (text) => {
        const savedItems = JSON.parse(localStorage.getItem("items")) || [];
        savedItems.push(text);
        localStorage.setItem("items", JSON.stringify(savedItems));
    };

    // 初始化時載入項目
    loadItems();

    // 顯示彈出視窗
    addButton.addEventListener("click", () => {
        popup.classList.remove("hidden");
        userInput.value = ""; // 清空輸入框
    });

    // 確認按鈕邏輯
    confirmButton.addEventListener("click", () => {
        const text = userInput.value.trim();
        if (text !== "") {
            addItemToDOM(text);  // 新增到列表
            saveItem(text);      // 儲存到 LocalStorage
        }
        popup.classList.add("hidden"); // 關閉視窗
    });

    // 取消按鈕邏輯
    cancelButton.addEventListener("click", () => {
        popup.classList.add("hidden"); // 關閉視窗
    });
});
