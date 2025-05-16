<?php
require_once 'db.php';

header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: Content-Type"); 

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["name"]) && isset($data["email"]) && isset($data["password"]) && isset($data["userType"])) {
    $name = $data["name"];
    $email = $data["email"];
    $password = password_hash($data["password"], PASSWORD_DEFAULT);
    $user_type = $data["userType"];

    $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo "Email already registered!";
    } else {
        $stmt = $conn->prepare("INSERT INTO users (name, email, password, user_type) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $name, $email, $password, $user_type);
        if ($stmt->execute()) {
            echo "Signup successful!";
        } else {
            echo "Error: " . $stmt->error;
        }
    }
} else {
    echo "Invalid request!";
}
?>