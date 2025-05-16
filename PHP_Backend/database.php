<?php

$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbName = "joshvibs";

$conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

if ($conn) {
    echo "Database connected successfully!";
} else {
    die("Connection failed: " . $conn->connect_error);
}

?>