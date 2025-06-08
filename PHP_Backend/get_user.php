<?php
require_once './database.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$id = isset($_GET['id']) ? intval($_GET['id']) : 0;
if ($id > 0) {
    $result = $conn->query("SELECT name, email, profile_picture FROM users WHERE id = $id");
    if ($result && $row = $result->fetch_assoc()) {
        echo json_encode($row);
    } else {
        echo json_encode(["error" => "User not found"]);
    }
} else {
    echo json_encode(["error" => "Invalid user ID"]);
}
$conn->close();
?>