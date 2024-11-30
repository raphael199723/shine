// 初始化密碼（從 LocalStorage 加載）
let storedPassword = localStorage.getItem("storedPassword") || "12345"; // 若 LocalStorage 無密碼，預設為 "12345"

// 處理登入表單提交
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // 防止表單提交導致頁面重新加載

    // 取得輸入的值
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 驗證邏輯
    if (username === "shine@notimonkey" && password === storedPassword) {
        alert("Login successful!");
        // 導向新的頁面
        window.location.href = "dashboard.html";
    } else {
        const errorMessage = document.getElementById("error-message");
        errorMessage.classList.remove("hidden");
    }
});

// 驗證並更新密碼
function validateAndUpdatePassword() {
    // 取得表單中的輸入值
    const currentPassword = document.getElementById("password_current").value;
    const newPassword = document.getElementById("password").value;
    const confirmPassword = document.getElementById("password2").value;
    const statusMessage = document.getElementById("status-message");

    // 清空狀態訊息
    statusMessage.textContent = "";

    // 確認所有必填欄位是否填寫
    if (!currentPassword || !newPassword || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    // 驗證 current password 是否正確
    if (currentPassword !== storedPassword) {
        statusMessage.textContent = "Current password is incorrect.";
        return;
    }

    // 驗證新密碼與確認密碼是否一致
    if (newPassword !== confirmPassword) {
        statusMessage.textContent = "New password and confirm password do not match.";
        return;
    }

    // 更新密碼
    storedPassword = newPassword;
    localStorage.setItem("storedPassword", storedPassword); // 儲存新密碼到 LocalStorage
    alert("Password updated successfully!");
    window.location.href = "dashboard.html";
}
