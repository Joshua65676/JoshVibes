<?php
require_once '../database.php'; // Adjust path if needed

header('Content-Type: application/json');

$targetDir = __DIR__ . '/'; // This is the current directory: uploads/profile_pics/
$targetFile = $targetDir . basename($_FILES['profile_pics']['name']);

if (isset($_FILES['profile_pics']) && is_uploaded_file($_FILES['profile_pics']['tmp_name'])) {
    if (move_uploaded_file($_FILES['profile_pics']['tmp_name'], $targetFile)) {
        echo json_encode([
            "success" => true,
            "message" => "Profile picture uploaded successfully.",
            "fileName" => $_FILES['profile_pics']['name']
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Failed to move uploaded file."
        ]);
    }
} else {
    echo json_encode([
        "success" => false,
        "message" => "No file uploaded or upload error."
    ]);
}
?>