<?php
// Summary: This script sets a new user password after they received the appropriate e-mail
session_start();

if (!empty($_POST['new-pwd']) && !empty($_POST['new-pwd-repeat']) && isset($_POST['submit'])) {
    // grab database connection
    require "includes/db-connection.include.php";

    if ($_POST['new-pwd'] != $_POST['new-pwd-repeat']) {
        // passwords don't match
        echo "no match";
        exit();
    } else {
        // passwords match. Set new pwd in users table
        $hashed_pwd = password_hash($_POST['new-pwd'], PASSWORD_DEFAULT);
        $query = "UPDATE users SET pwd = :newpwd WHERE user_id = :id;";
        $stmt = $pdo->prepare($query);
        $stmt->execute(["newpwd" => $hashed_pwd, "id" => $_SESSION['user_id']]);

        if ($stmt->rowCount() == 1) {
            // new pw set
            // remove row from temporary reset key table if it exists
            $query = "DELETE FROM pwreset_keys WHERE user_id = ?;";
            $stmt = $pdo->prepare($query);
            $stmt->execute([$_SESSION['user_id']]);

            // echo back to javascript
            echo "new pwd set";
            exit();
        } else {
            // something went wrong with database update
            echo "error";
        }
    }
} else {
    // leave
    header("Location:../index.html");
    exit();
}