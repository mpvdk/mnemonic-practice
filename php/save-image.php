<?php
// Summary: save image to database and associate with correct table row/nr

session_start();

if (isset($_SESSION['user_id'])) {
    // User uploading image as registered user

    // grab database connection
    require "includes/db-connection.include.php";

    $target_dir = "../images/user_folders/{$_SESSION['user_id']}/";
    $folderRef = "user_folders/" . $_SESSION['user_id'];
    saveImage($target_dir, $folderRef);

} else if (isset($_SESSION['ten'])) {
    // User uploading img as Guest'

    // First,  check if folder exists
    if (!file_exists("../images/guest_folders/{$_COOKIE['PHPSESSID']}")) {
        // Folder doesn't exist. Create it
        $dir = "../images/guest_folders/{$_COOKIE['PHPSESSID']}";
        mkdir($dir);
    }
    // Folder exists
    $target_dir = "../images/guest_folders/{$_COOKIE['PHPSESSID']}/";
    $folderRef = "guest_folders/" . $_COOKIE['PHPSESSID'];
    saveImage($target_dir, $folderRef);

} else {
    // redirect
    header("location: ../index.php");
    exit();
}

function saveImage($target_dir, $folderRef)
{
    $image_tmp = $_FILES["file"]["tmp_name"];
    $image_name = $_POST['nrOrCard'] . "." . $_POST['extension'];
    $target_file = $target_dir . $image_name;
    $check = getimagesize($image_tmp);
    if ($check == false) {
        echo "no image";
        exit();
    } else if ($_FILES["file"]["size"] > 10000000) { // > 10MB
        echo "too large";
        exit();
    } else if ($_FILES["file"]["size"] > 5000000) { // > 5MB
        // compress and save file
        if (compressImage($image_tmp, $target_file, 30)) {
            updateTable($folderRef);
            exit();
        } else {
            echo "failed";
            exit();
        }
    } else if ($_FILES["file"]["size"] > 2000000) { // > 2MB
        // compress and save file
        if (compressImage($image_tmp, $target_file, 40)) {
            updateTable($folderRef);
            exit();
        } else {
            echo "failed";
            exit();
        }
    } else if ($_FILES["file"]["size"] > 1000000) { // > 1MB
        // compress and save file
        if (compressImage($image_tmp, $target_file, 50)) {
            updateTable($folderRef);
            exit();
        } else {
            echo "failed";
            exit();
        }
    } else {
        // compress and save file
        if (compressImage($image_tmp, $target_file, 60)) {
            updateTable($folderRef);
            exit();
        } else {
            echo "failed";
            exit();
        }
    }
    // move_uploaded_file($image_tmp, $target_file) {
}

function compressImage($source, $destination, $quality)
{
    // Get image info
    $imgInfo = getimagesize($source);
    $mime = $imgInfo['mime'];

    // Create a new image from file
    switch ($mime) {
        case 'image/jpeg':
            $image = imagecreatefromjpeg($source);
            imagejpeg($image, $destination, $quality);
            break;
        case 'image/png':
            $image = imagecreatefrompng($source);
            imagejpeg($image, $destination, $quality);
            break;
        case 'image/gif':
            $image = imagecreatefromgif($source);
            imagejpeg($image, $destination, $quality);
            break;
        default:
            $image = imagecreatefromjpeg($source);
            imagejpeg($image, $destination, $quality);
    }

    // Return compressed image
    return $destination;
}

function updateTable($folderRef)
{
    $path = "images/" . $folderRef . "/" . $_POST['nrOrCard'] . "." . $_POST['extension'];
    if (isset($_SESSION['user_id'])) {
        require "includes/db-connection.include.php";
        // Update path in database table
        if ($_POST["type"] == "card") {
            $custom_table = $_SESSION['user_id'] . "_cards";
            $query = "UPDATE $custom_table SET image = :path WHERE card = :card;";
            $stmt = $pdo->prepare($query);
            $stmt->execute(["path" => $path, "card" => $_POST['nrOrCard']]);
        } else if ($_POST["type"] == "nr") {
            $custom_table = $_SESSION['user_id'] . "_hundred";
            $query = "UPDATE $custom_table SET image = :path WHERE number = :number;";
            $stmt = $pdo->prepare($query);
            $stmt->execute(["path" => $path, "number" => $_POST['nrOrCard']]);
        }
    } else if (isset($_COOKIE['PHPSESSID'])) {
        // Update path in SESSION var
        if ($_POST["type"] == "card") {
            $_SESSION['playing_cards'][$_POST['nrOrCard']]['image'] = $path;
        } else if ($_POST["type"] == "nr") {
            $key = "nr" . $_POST['nrOrCard'];
            $_SESSION[$key]['image'] = $path;
        }
    }
    echo "succes";
}