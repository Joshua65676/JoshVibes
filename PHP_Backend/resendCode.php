<?php
require_once './database.php';
require_once './mailer.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["email"])) {
    $email = trim(strtolower($data["email"]));
    $verificationCode = mt_rand(100000, 999999);

    $stmt = $conn->prepare("UPDATE email_verifications SET code=? WHERE email=?");
    $stmt->bind_param("ss", $verificationCode, $email);

    if ($stmt->execute()) {
        sendEmail($email, "Your New Verification Code", "Your new code is: $verificationCode");
        echo json_encode(["success" => true, "message" => "New code sent!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error resending code."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request."]);
}
?>