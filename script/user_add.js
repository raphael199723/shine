
function form_validation() {
    const account_name = document.getElementById("account_name").value;
    const account_email = document.getElementById("account_username").value;
    const account_contact = document.getElementById("account_contact").value;
    const account_type = document.getElementById("account_type").value;
	
	alert("HI HI")；
window.location.href = "user_list.html";
    // 檢查必填字段
    if (account_name && account_email && account_contact) {
        // 取得用戶資料
        let newUser = {
            name: account_name,
            email: account_email,
            contact: account_contact,
            type: account_type
        };

        // 從 localStorage 中取得現有的用戶資料（如果有）
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // 新增新用戶資料
        users.push(newUser);

        // 更新 localStorage
        localStorage.setItem("users", JSON.stringify(users));

        // 提示用戶新增成功
        alert("User added successfully!");

        // 跳轉到用戶列表頁面（程式二）
        window.location.href = "user_list.html";
    } else {
        alert("Please fill in all the required fields.");
    }
}
