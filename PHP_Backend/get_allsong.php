<?php
require_once './database.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$sql = "SELECT songs.*, categories.category_name, users.name AS artist_name
        FROM songs
        LEFT JOIN categories ON songs.category_id = categories.id
        LEFT JOIN users ON songs.user_id = users.id
        ORDER BY songs.id DESC";
$result = $conn->query($sql);

if (!$result) {
    echo json_encode(["error" => $conn->error]);
    $conn->close();
    exit;
}

$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
$conn->close();
?>