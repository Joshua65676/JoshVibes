<?php
require_once '../database.php'; // Adjust path if needed

header('Content-Type: application/json');

$targetDir = __DIR__ . '/'; // This is uploads/audio/
$targetFile = $targetDir . basename($_FILES['audio']['name']);

if (isset($_FILES['audio']) && is_uploaded_file($_FILES['audio']['tmp_name'])) {
    if (move_uploaded_file($_FILES['audio']['tmp_name'], $targetFile)) {
        echo json_encode([
            "success" => true,
            "message" => "Audio file uploaded successfully.",
            "fileName" => $_FILES['audio']['name']
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