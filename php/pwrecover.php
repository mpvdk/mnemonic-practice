<?php
// Summary: create custom pw-reset key for user and send them an e-mail with link

// Load Composer's autoloader
require '../vendor/autoload.php';

// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

if (isset($_POST['recover-submit'])) {

    // grab database connection
    require "includes/db-connection.include.php";

    // get info entered by user (i.e. email or username)
    $id = $_POST["id-login"];

    // check if user exsists and create email variable
    $query = "SELECT * FROM users WHERE username = :username OR email = :mail;";
    $stmt = $pdo->prepare($query);
    $stmt->execute(["username" => $id, "mail" => $id]);
    $user = $stmt->fetch();

    if (!isset($user['username'])) {
        // user doesn't exist in database
        echo "no user";
    } else {
        // user found in database.
        // 1) Create temporary key and
        // 2) Send recovery email

        // 1) Create temporary key and insert into table
        $key = bin2hex(random_bytes(50));
        $expFormat = mktime(date("H"), date("i"), date("s"), date("m"), date("d") + 1, date("Y"));
        $expDate = date("Y-m-d H:i:s", $expFormat);
        $query = "INSERT INTO pwreset_keys VALUES(:id, :key, :exp);";
        $stmt = $pdo->prepare($query);
        $stmt->execute(["id" => $user['user_id'], "key" => $key, "exp" => $expDate]);
        if ($stmt->rowCount() < 1) {
            // user id already exists in table. Replace key
            $query = "UPDATE pwreset_keys SET user_key = :key, exp = :exp WHERE user_id = :id;";
            $stmt = $pdo->prepare($query);
            $stmt->execute(["id" => $user['user_id'], "exp" => $expDate, "key" => $key]);
        }

        // 2) Send recovery email
        // Create e-mail body
        $body = "<p>Hello " . $user['username'] . "</p><br>";
        $body .= "<p>Please click the following link to set up a new password for your account:</p>";
        $body .= "<p><a href='https://www.mnemonicpractice.com/pwreset.php?key=" . $key . "&id=" . $user['user_id'] . "' target:'_blank'>https://www.mnemonicpractice.com/pwreset.php?key=" . $key . "&id=" . $user['user_id'] . "</a></p>";
        $body .= "<p>For security reasons, this link expires after 1 hour.</p><br>";
        $body .= "<p>If you did not request a reset for your password, you don't need to do anything. Your password will remain unchanged.</p>";
        $body .= "<p>Just be aware that someone has used your e-mail address or username to request this e-mail.</p><br>";
        $body .= "<p>Kind regards and all the best,<p>";
        $body .= "<p>Martijn</p>";

        // create new PHPMailer object
        $mail = new PHPMailer(true);
        // no debug output
        $mail->SMTPDebug = 0;
        // use smtp
        $mail->isSMTP();
        // smtp server and auth settings
        $mail->Host = 'smtp.mail.com';
        $mail->Port = 587;
        $mail->SMTPAuth = true;
        $mail->Username = 'phpmailertester@mail.com';
        $mail->Password = 'ditiseenpasswordvoormail.com';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        // Sender
        $mail->setFrom('phpmailertester@mail.com', 'Mnemonic Practice');
        $mail->addReplyTo('phpmailertester@mail.com', 'Mnemonic Practice');
        // Recipient
        $mail->addAddress($user['email'], $user['username']);

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Password recovery';
        $mail->Body = $body;
        $mail->AltBody = strip_tags($body);

        if (!$mail->send()) {
            echo 'not sent';
        } else {
            echo 'sent';
        }
    }
} else {
    // user got to this script some other way than by submitting the login form. Get out of here.
    header("Location: ../index.html");
    exit();
}