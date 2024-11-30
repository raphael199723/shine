document.addEventListener("DOMContentLoaded", function () {
    const dropdownUser = document.getElementById("dropdownUser");
    const dropdownMenu = document.getElementById("dropdownMenu");

    // 當鼠標進入目標區域時，顯示選單
    dropdownUser.addEventListener("mouseenter", function () {
        dropdownMenu.style.display = "block";
    });

    // 當鼠標離開目標區域時，隱藏選單
    dropdownUser.addEventListener("mouseleave", function () {
        dropdownMenu.style.display = "none";
    });
});
