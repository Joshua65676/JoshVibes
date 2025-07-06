<?php
include './database.php'; // Include database connection

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

// Auto-create upload folders if they don't exist
if (!is_dir('uploads/profile_pics')) {
    mkdir('uploads/profile_pics', 0777, true);
}
if (!is_dir('uploads/audio')) {
    mkdir('uploads/audio', 0777, true);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = $_POST['user_id'];
    $title = $_POST['title'];
    $description = $_POST['description'];
    $audience = $_POST['audience'];
    $engagement = $_POST['engagement'];
    $category_id = $_POST['category_id'];

    // Handling Profile Picture Upload
    $profilePicName = $_FILES['profile_pics']['name'] ?? null;
    $profilePicTmpName = $_FILES['profile_pics']['tmp_name'] ?? null;
    $profilePicPath = "uploads/profile_pics/" . $profilePicName;
    $profilePicUploaded = false;
    if ($profilePicTmpName && is_uploaded_file($profilePicTmpName)) {
        $profilePicUploaded = move_uploaded_file($profilePicTmpName, $profilePicPath);
    }

    // Handling Audio File Upload
    $audioName = $_FILES['audio']['name'] ?? null;
    $audioTmpName = $_FILES['audio']['tmp_name'] ?? null;
    $audioPath = "uploads/audio/" . $audioName;
    $audioUploaded = false;
    if ($audioTmpName && is_uploaded_file($audioTmpName)) {
        $audioUploaded = move_uploaded_file($audioTmpName, $audioPath);
    }

    if (!$profilePicUploaded || !$audioUploaded) {
        echo json_encode(["success" => false, "message" => "File upload failed."]);
        exit;
    }

    // Insert into database
    $sql = "INSERT INTO songs (user_id, profile_pics, audio, title, description, audience, engagement, category_id)
            VALUES ('$user_id', '$profilePicPath', '$audioPath', '$title', '$description', '$audience', '$engagement', '$category_id')";

    if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Song uploaded successfully!"]);
    } else {
       echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
    }
}

$conn->close();
?>