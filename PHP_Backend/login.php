<?php
require_once './database.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["email"]) && isset($data["password"])) {
    $email = trim(strtolower($data["email"]));
    $password = $data["password"];

    $stmt = $conn->prepare("SELECT id, password, user_type FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 0) {
        $stmt->bind_result($id, $hashedPassword, $user_type);
        $stmt->fetch();
        if (password_verify($password, $hashedPassword)) {
            echo json_encode(["success" => true, "message" => "Login successful!", "userType" => $user_type]);
            exit();
        } else {
            echo json_encode(["success" => false, "message" => "Invalid password."]);
            exit();
        }
    } else {
        echo json_encode(["success" => false, "message" => "Email not found.", "debug_email" => $email]]);
        exit();
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request."]);
    exit();
}
?>