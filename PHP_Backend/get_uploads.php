<?php
require_once './database.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Fetch uploads, newest first
$sql = "SELECT profile_pics, title, created_at FROM songs ORDER BY created_at DESC";
$result = $conn->query($sql);

$uploads = [];
while ($row = $result->fetch_assoc()) {
    $uploads[] = $row;
}

echo json_encode($uploads);
?>