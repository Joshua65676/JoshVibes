<?php
require_once './database.php';

ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Use the correct directory
$uploadDir = "uploads/profile_pics/";
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['profile_pic'])) {
    $file = $_FILES['profile_pic'];
    $fileName = uniqid() . "_" . basename($file['name']);
    $targetPath = $uploadDir . $fileName;

    // Only allow png and jpeg
    $allowedTypes = ['image/png', 'image/jpeg'];
    if (!in_array($file['type'], $allowedTypes)) {
        echo json_encode(["success" => false, "message" => "Only PNG and JPEG images are allowed."]);
        exit;
    }

    if (move_uploaded_file($file['tmp_name'], $targetPath)) {
        // Update the user's profile picture in the database
        $user_id = isset($_POST['user_id']) ? intval($_POST['user_id']) : 0;
        if ($user_id > 0) {
            $stmt = $conn->prepare("UPDATE users SET profile_picture=? WHERE id=?");
            $stmt->bind_param("si", $targetPath, $user_id);
            $stmt->execute();
            $stmt->close();
        }

        echo json_encode([
            "success" => true,
            "message" => "Profile picture uploaded successfully.",
            "filePath" => $targetPath
        ]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to upload image."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "No file uploaded."]);
}