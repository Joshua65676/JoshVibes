<?php
require_once './database.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$sql = "SELECT id, category_name FROM categories ORDER BY category_name";
$result = $conn->query($sql);

$data = [];
while ($row = $result->fetch_assoc()) {
  $data[] = $row;
}

header('Content-Type: application/json');
echo json_encode($data);
$conn->close();