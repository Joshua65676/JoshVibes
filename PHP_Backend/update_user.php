<?php
require_once './database.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);
$id = isset($data['id']) ? intval($data['id']) : 0;

if ($id > 0) {
    $fields = [];
    if (isset($data['name'])) {
        $name = $conn->real_escape_string($data['name']);
        $fields[] = "name='$name'";
    }
    if (isset($data['email'])) {
        $email = $conn->real_escape_string($data['email']);
        $fields[] = "email='$email'";
    }
    if ($fields) {
        $sql = "UPDATE users SET " . implode(",", $fields) . " WHERE id=$id";
        if ($conn->query($sql)) {
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["success" => false, "message" => "Update failed"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "No fields to update"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid user ID"]);
}
$conn->close();
?>