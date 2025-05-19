<?php

$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbName = "joshvibes";

$conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Database connection failed: " . $conn->connect_error]));
}


?>