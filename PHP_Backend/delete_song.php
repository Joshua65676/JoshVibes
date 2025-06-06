<?php
require_once './database.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: DELETE, OPTIONS");

// Get the song ID from the query string
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Parse the raw input for DELETE requests
    // parse_str(file_get_contents("php://input"), $_DELETE);
    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
     if ($id === 0) {
        parse_str(file_get_contents("php://input"), $deleteVars);
        $id = isset($deleteVars['id']) ? intval($deleteVars['id']) : 0;
    }

    if ($id > 0) {
        // Optionally: Fetch and delete the files from disk
        $result = $conn->query("SELECT profile_pics FROM songs WHERE id = $id");
        if ($result && $row = $result->fetch_assoc()) {
            $profilePicPath = $row['profile_pics'];
            if (file_exists($profilePicPath)) {
                unlink($profilePicPath);
            }
        }

        // Delete the song from the database
        $stmt = $conn->prepare("DELETE FROM songs WHERE id = ?");
        $stmt->bind_param("i", $id);
        if ($stmt->execute()) {
            echo json_encode(["success" => true, "message" => "Song deleted successfully."]);
        } else {
            echo json_encode(["success" => false, "message" => "Failed to delete song."]);
        }
        $stmt->close();
    } else {
        echo json_encode(["success" => false, "message" => "Invalid song ID."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid song ID."]);
}

$conn->close();