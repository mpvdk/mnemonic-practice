<?php
// Summary: check user login info and if correct, start session.

if (isset($_POST['login-submit'])) {

    // grab database connection
    require "includes/db-connection.include.php";

    // get user input
    $id = $_POST['id-login'];
    $pwd = $_POST['pwd-login'];

    // create sql query
    $query = "SELECT * FROM users WHERE username = :username OR email = :mail;";
    // prepare statement
    $stmt = $pdo->prepare($query);
    // execute statement
    $stmt->execute(["username" => $id, "mail" => $id]);
    // check if user exists
    $user = $stmt->fetch();
    if ($user) {
        // user found in db
        if (password_verify($pwd, $user['pwd'])) {
            // pwd verified
            // start a session
            session_start();
            // add user info to session
            $_SESSION['user_id'] = $user['user_id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['email'] = $user['email'];
            $_SESSION['email_verified'] = $user['email_verified'];
            $_SESSION['join_date'] = $user['join_date'];
            // echo succes back to JS
            echo "succes";
            exit();
        } else {
            // pwd not verified
            echo "invalid";
            exit();
        }
    } else {
        // user not found in db
        echo "no user";
        exit();
    }
} else {
    // user got to this script some other way than by submitting the login form. Get out of here.
    header("Location:../index.php");
    exit();
}