<?php
// Summary: delete an image from the server and clear the corresponding field in the user's table

session_start();

if ($_POST['action'] == "delete") {
    if (isset($_SESSION['user_id'])) {
        // User is logged in. Get image link from db

        // grab database connection
        require "includes/db-connection.include.php";

        // check if we're editing the card table, or hundred table
        if ($_POST['type'] == "nr") {
            // we're editing the hundred table
            // set user's custom table
            $custom_table = $_SESSION['user_id'] . "_hundred";
            // grab link to image
            $query = "SELECT image FROM $custom_table WHERE number = :number;";
            $stmt = $pdo->prepare($query);
            $stmt->execute(["number" => $_POST['nrOrCard']]);
        } else if ($_POST['type'] == "card") {
            // we're editing the cards table
            // set user's custom table
            $custom_table = $_SESSION['user_id'] . "_cards";
            // $custom_table = $_SESSION['user_id'] . "_cards";
            // grab link to image
            $query = "SELECT image FROM $custom_table WHERE card = :card;";
            $stmt = $pdo->prepare($query);
            $card = $_POST['nrOrCard'];
            $card = htmlentities($card);
            $card = str_replace("&", "", $card);
            $card = str_replace(";", "", $card);
            $stmt->execute(["card" => $card]);
        }
        $res = $stmt->fetch();
        $path = $res['image'];

        // clear image field in row in user's custom table
        if ($_POST['type'] == "nr") {
            $custom_table = $_SESSION['user_id'] . "_hundred";
            $query = "UPDATE $custom_table SET image = null WHERE number = :number;";
            $stmt = $pdo->prepare($query);
            $stmt->execute(["number" => $_POST['nrOrCard']]);
        }
        if ($_POST['type'] == "card") {
            $custom_table = $_SESSION['user_id'] . "_cards";
            $query = "UPDATE $custom_table SET image = null WHERE card = :card;";
            $stmt = $pdo->prepare($query);
            $stmt->execute(["card" => $card]);
        }
    } else if (isset($_COOKIE['PHPSESSID'])) {
        // User is guest. Get info from $_SESSION

        // check if we're editing the card table, or hundred table
        if ($_POST['type'] == "nr") {
            // we're editing the 00-99 table
            $key = "nr" . $_POST['nrOrCard'];
            $path = $_SESSION[$key]['image'];
        } else if ($_POST['type'] == "card") {
            // we're editing the cards table
            $card = $_POST['nrOrCard'];
            $card = htmlentities($card);
            $card = str_replace("&", "", $card);
            $card = str_replace(";", "", $card);
            $path = $_SESSION['playing_cards'][$card]['image'];
        }

        // clear image field in row in user's custom table
        if ($_POST['type'] == "nr") {
            $key = "nr" . $_POST['nrOrCard'];
            $_SESSION[$key]['image'] = null;
        }
        if ($_POST['type'] == "card") {
            $_SESSION['playing_cards'][$card]['image'] = null;
        }
    }
    // Delete image from server
    $base_dir = realpath($_SERVER["DOCUMENT_ROOT"]);
    $file_delete = $base_dir . "/" . $path;
    // $file_delete = $base_dir . "/mnemonic_practice/" . $path;
    if (file_exists($file_delete)) {
        unlink($file_delete);
        echo "succes";
    } else {
        echo "file not found";
    }

} else {
    //redirect
    header("location:../../index.php");
}