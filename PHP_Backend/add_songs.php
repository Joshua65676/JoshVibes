<?php
include './database.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = $_POST['user_id']; // User ID
    $title = $_POST['title'];
    $description = $_POST['description'];
    $evaluation = $_POST['evaluation'];
    $audience = $_POST['audience'];
    $engagement = $_POST['engagement'];

    // Handling Profile Picture Upload
    $profilePicName = $_FILES['profile_pics']['name'];
    $profilePicTmpName = $_FILES['profile_pics']['tmp_name'];
    $profilePicPath = "uploads/profile_pics/" . $profilePicName;
    move_uploaded_file($profilePicTmpName, $profilePicPath);

    // Handling Audio File Upload
    $audioName = $_FILES['audio']['name'];
    $audioTmpName = $_FILES['audio']['tmp_name'];
    $audioPath = "uploads/audio/" . $audioName;
    move_uploaded_file($audioTmpName, $audioPath);

    // Insert into database
    $sql = "INSERT INTO songs (user_id, profile_pics, audio, title, description, evaluation, audience, engagement) 
            VALUES ('$user_id', '$profilePicPath', '$audioPath', '$title', '$description', '$evaluation', '$audience', '$engagement')";

    if ($conn->query($sql) === TRUE) {
        echo "Song uploaded successfully!";
    } else {
        echo "Error: " . $conn->error;
    }
}

$conn->close();
?>