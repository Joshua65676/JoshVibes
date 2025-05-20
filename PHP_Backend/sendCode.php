<?php
require_once './database.php';
require_once './mailer.php'; // You need PHPMailer for sending emails

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["email"])) {
    $email = trim(strtolower($data["email"]));
    $verificationCode = mt_rand(100000, 999999); // Generate 6-digit code

    // Save code in database
    $stmt = $conn->prepare("INSERT INTO email_verifications (email, code) VALUES (?, ?) 
                            ON DUPLICATE KEY UPDATE code = ?");
    $stmt->bind_param("sss", $email, $verificationCode, $verificationCode);
    if ($stmt->execute()) {
        sendEmail($email, "Your Verification Code", "Your code is: $verificationCode"); // Function from mailer.php
        echo json_encode(["success" => true, "message" => "Verification code sent!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error sending verification code."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request."]);
}
?>