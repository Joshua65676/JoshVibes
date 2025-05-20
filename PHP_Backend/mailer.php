<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// require 'PHPMailer/src/PHPMailer.php';
// require 'PHPMailer/src/Exception.php';
// require 'PHPMailer/src/SMTP.php';
require_once __DIR__ . '/vendor/autoload.php';

function sendEmail($to, $subject, $body) {
    $mail = new PHPMailer(true);
    
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'focus65676@gmail.com'; // Replace with sender email
        $mail->Password = 'oesn nwvm rhpl waxz'; // Replace with sender email password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('focus65676@gmail.com', 'JoshVibes');
        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->Body = $body;


        $mail->send();
        return true;
    } catch (Exception $e) {
        return false;
    }
}
?>