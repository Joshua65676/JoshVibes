<?php
require_once './database.php';
// Move uploaded profile picture to folder
move_uploaded_file($_FILES['profile_pics']['tmp_name'], "uploads/profile_pics/" . $_FILES['profile_pics']['name']);