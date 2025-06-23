<?php
require_once './database.php';

$categoryId = $_GET['id'] ?? 0;

$sql = "SELECT * FROM songs WHERE category_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $categoryId);
$stmt->execute();
$result = $stmt->get_result();

$data = [];
while ($row = $result->fetch_assoc()) {
  $data[] = $row;
}

header('Content-Type: application/json');
echo json_encode($data);
$conn->close();