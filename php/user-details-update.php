<?php
// Summary: This script is called by JS to update the user's details

session_start();

if (isset($_SESSION['user_id']) && isset($_POST['userInput']) && isset($_POST['field'])) {

    // grab database connection
    require "includes/db-connection.include.php";

    // Check which field was requested to be updated
    if ($_POST['field'] == "username-edit") {

        // check username availability
        $query = "SELECT * FROM users WHERE username = ?;";
        $stmt = $pdo->prepare($query);
        $stmt->execute([$_POST['userInput']]);

        // check if either or both username/mail are taken
        if ($stmt->fetch()) {
            echo "taken";
            exit();
        } else {
            // username available. Update.
            $id = $_SESSION['user_id'];
            $username = $_POST['userInput'];
            $query = "UPDATE users SET username = ? WHERE user_id = $id;";
            $stmt = $pdo->prepare($query);
            $stmt->execute([$_POST['userInput']]);

            if ($stmt->rowCount() < 1) {
                echo "error";
            } else {
                echo "succes";
            }
            $_SESSION['username'] = $username;
        }
    } else if ($_POST['field'] == "email-edit") {
        // check mail availability
        $query = "SELECT * FROM users WHERE email = ?;";
        $stmt = $pdo->prepare($query);
        $stmt->execute([$_POST['userInput']]);

        if ($stmt->fetch()) {
            echo "taken";
            exit();
        } else {
            // email is available. Update.
            $id = $_SESSION['user_id'];
            $email = $_POST['userInput'];
            $query = "UPDATE users SET email = ? WHERE user_id = $id;";
            $stmt = $pdo->prepare($query);
            $stmt->execute([$email]);
            if ($stmt->rowCount() < 1) {
                echo "error";
            } else {
                echo "succes";
            }
            $_SESSION['email'] = $email;
        }
    }
} else {
    // user got to this script some unintended way. Get out of here.
    header("Location: ../index.html");
    exit();
}