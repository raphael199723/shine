<?php
header('Content-Type: application/json');

// 模擬連接到資料庫
$conn = new mysqli("localhost", "username", "password", "database");
if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

// 獲取表單數據
$name = $_POST['account_name'];
$email = $_POST['account_username'];
$contact = $_POST['account_contact'];
$password = password_hash($_POST['account_password'], PASSWORD_BCRYPT);
$designation = $_POST['account_type'];
$gender = $_POST['account_gender'];

// 新增用戶
$sql = "INSERT INTO users (name, email, contact, password, designation, gender, status) 
        VALUES ('$name', '$email', '$contact', '$password', '$designation', '$gender', 'Active')";

if ($conn->query($sql) === TRUE) {
    $last_id = $conn->insert_id;

    // 返回新增用戶的數據
    echo json_encode([
        "id" => $last_id,
        "name" => $name,
        "email" => $email,
        "contact" => $contact,
        "designation" => $designation,
        "account_type" => "Active"
    ]);
} else {
    echo json_encode(["error" => "Failed to add user"]);
}

$conn->close();
?>
