<?php
require_once './database.php';
// Move uploaded audio file to folder
move_uploaded_file($_FILES['audio']['tmp_name'], "uploads/audio/" . $_FILES['audio']['name']);