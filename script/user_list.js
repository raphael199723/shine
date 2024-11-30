<script>
window.onload = function() {
    // 從 localStorage 讀取用戶資料
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // 找到用戶列表的表格
    let tableBody = document.querySelector("#user_listing_datatable tbody");

    // 清空現有的用戶列表
    tableBody.innerHTML = '';

    // 將每個用戶資料新增到表格中
    users.forEach(user => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>
                <button type="button" class="btn btn-success" onclick="user_edit()">Edit</button>
                <button type="button" class="btn btn-danger" onclick="user_delete()">Delete</button>
            </td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.contact}</td>
            <td>${user.type}</td>
            <td><span class="label label-success">Active</span></td>
        `;

        // 將新建的行添加到表格中
        tableBody.appendChild(row);
    });
};
</script>
