<?php
require_once './database.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["email"]) && isset($data["code"])) {
    $email = trim(strtolower($data["email"]));
    $code = $data["code"];

    $stmt = $conn->prepare("SELECT id FROM email_verifications WHERE email = ? AND code = ?");
    $stmt->bind_param("ss", $email, $code);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo json_encode(["success" => true, "message" => "Verification successful!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid verification code."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request."]);
}
?>