<?php
// Summary: register new user and create their custom tables and image folder

if (isset($_POST['register-submit'])) {
    // grab database connection
    require "includes/db-connection.include.php";

    // get user input
    $signup_username = $_POST['username'];
    $signup_email = $_POST['email'];
    $signup_pwd = $_POST['pwd'];
    $signup_pwd_repeat = $_POST['pwd-repeat'];

    // regular expressions
    $usernameRegEx = '/^[A-Za-z0-9_-]{3,20}$/';

    // Form input validation
    // Steps:
    //   - all forms filled out,
    //   - email valid,
    //   - username valid,
    //   - pwd valid,
    //   - pwd repeat match,
    //   - username available,
    //   - email available

    // check for empty fields
    if (empty($signup_username) || empty($signup_email) || empty($signup_pwd) || empty($signup_pwd_repeat)) {
        echo "empty fields";
        exit();
    }
    // check for email validity
    else if (!filter_var($signup_email, FILTER_VALIDATE_EMAIL)) {
        echo "invalid mail";
        exit();
    }
    // check for username validity
    else if (!preg_match($usernameRegEx, $signup_username)) {
        echo "invalid username";
        exit();
    }
    // check for pwd validity

    else if (!strlen($signup_pwd) >= 8) {
        echo "invalid pwd";
        exit();
    }
    // check if pwd and pwd repeat match
    else if (!$signup_pwd == $signup_pwd_repeat) {
        echo "no pwd match";
        exit();
    }
    // if all inputs are valid, check username and email availability
    else {
        $nameAvailable = checkUsernameAvailability($signup_username);
        $mailAvailable = checkEmailAvailability($signup_email);
        // check if either or both username/mail are taken
        if (!$nameAvailable && !$mailAvailable) {
            // both are taken
            echo "both taken";
            exit();
        } else if (!$nameAvailable) {
            // only username is taken
            echo "username taken";
            exit();
        } else if (!$mailAvailable) {
            // only email address is taken
            echo "mail taken";
            exit();
        } else {
            // both are available

            // All inputs are valid and username and email are available,
            // Register new user

            $userRegistered = registerUser($signup_username, $signup_email, $signup_pwd);

            if (!$userRegistered) {
                // failed to add user to database
                echo "fail";
                exit();
            } else {
                // registration succesfull

                // Create custom user tables

                // get user ID of newly registered user
                $query = "SELECT * FROM users WHERE username = ?;";
                $stmt = $pdo->prepare($query);
                $stmt->execute([$signup_username]);
                $user = $stmt->fetch();
                $user_id = $user["user_id"];

                createTenTable($user_id);
                createHundredTable($user_id);
                createCardsTable($user_id);

                // create custom user image folder
                mkdir("../images/user_folders/{$user['user_id']}", 0777, true);

                // start a session
                session_start();

                // add user info to session
                $_SESSION['user_id'] = $user['user_id'];
                $_SESSION['username'] = $user['username'];
                $_SESSION['email'] = $user['email'];
                $_SESSION['email_verified'] = $user['email_verified'];
                $_SESSION['join_date'] = $user['join_date'];

                if (isset($_SESSION['ten'])) {
                    // User used website as Guest before.
                    // Copy all tables from SESSION to db and copy
                    // images from guest folder to user folder
                    sessionToDatabase();
                }

                // user registered, tables created. Echo succes back to JS
                echo "succes";
                exit();
            }

        }
    }

} else {
    // user got to this script some other way than by submitting the register form. Get out of here.
    header("location: ../index.html");
    exit();
}

function checkUsernameAvailability($username)
{
    // Summary: checks availability of username in database
    // Return: 1 if available, 0 if unavailable

    // grab database connection
    require "includes/db-connection.include.php";

    // create MySQL query
    $query_username = "SELECT * FROM users WHERE username = ?;";
    // prepare statements
    $stmt_username = $pdo->prepare($query_username);
    // execute statements
    $stmt_username->execute([$username]);

    // check if taken
    if ($stmt_username->fetch()) {
        // Username taken
        return 0;
    } else {
        // Username Available
        return 1;
    }

}
function checkEmailAvailability($email)
{
    // Summary: checks availability of email in database
    // Return: 1 if available, 0 if unavailable

    // grab database connection
    require "includes/db-connection.include.php";

    // create MySQL query
    $query_mail = "SELECT * FROM users WHERE email = ?;";
    // prepare statements
    $stmt_mail = $pdo->prepare($query_mail);
    // execute statements
    $stmt_mail->execute([$email]);

    // check if either or both username/mail are taken
    if ($stmt_mail->fetch()) {
        // Email taken
        return 0;
    } else {
        // Email Available
        return 1;
    }
}

function registerUser($signup_username, $signup_email, $signup_pwd)
{
    // Summary: register user
    // Return: 1 if registered, 0 if failed

    // grab database connection
    require "includes/db-connection.include.php";

    // hash pwd for storing in database
    $hashed_pwd = password_hash($signup_pwd, PASSWORD_DEFAULT);
    // create MySQL query
    $query = 'INSERT INTO users VALUES(NULL, :username, :email, FALSE, :pwd, CURRENT_TIMESTAMP);';
    // prepare statement
    $stmt = $pdo->prepare($query);
    // execute statement
    $stmt->execute(["username" => $signup_username, "email" => $signup_email, "pwd" => $hashed_pwd]);

    // Check if succes or fail
    if ($stmt->rowCount() < 1) {
        // failed to add user to database
        return 0;
    } else {
        return 1;
    }
}

function createTenTable($user_id)
{
    // Summary: Create table for 0-9 and add rows
    // Return: 1 on succes, 0 on fail

    // grab database connection
    require "includes/db-connection.include.php";

    $table_ten_name = $user_id . "_ten";
    $query = "CREATE TABLE $table_ten_name(
                    number INT PRIMARY KEY UNIQUE NOT NULL,
                    letter VARCHAR(1)
                    );";
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    // Create rows for table 0-9
    $query = "";
    for ($rownr = 0; $rownr < 10; $rownr++) {
        $query .= "INSERT INTO $table_ten_name VALUES($rownr, NULL);";
    }
    $stmt = $pdo->prepare($query);

    if ($stmt->execute()) {
        // Succes
        return 1;
    } else {
        // fail
        return 0;
    }

}

function createHundredTable($user_id)
{
    // Summary: Create table for 00-99 and add rows
    // Return: 1 on succes, 0 on fail

    // grab database connection
    require "includes/db-connection.include.php";

    $table_hundred_name = $user_id . "_hundred";
    $query = "CREATE TABLE $table_hundred_name(
                    number INT PRIMARY KEY UNIQUE NOT NULL,
                    letters VARCHAR(2),
                    person VARCHAR(255),
                    action VARCHAR(255),
                    object VARCHAR(255),
                    image VARCHAR(255)
                    );";
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    // Create rows for table 00-99
    $query = "";
    for ($rownr = 0; $rownr < 100; $rownr++) {
        // if nr < 10, add preceding 0
        if ($rownr < 10) {
            $rownr = 0 . $rownr;
        }
        $query .= "INSERT INTO $table_hundred_name VALUES($rownr, NULL, NULL, NULL, NULL, NULL);";
    }
    $stmt = $pdo->prepare($query);

    if ($stmt->execute()) {
        // Succes
        return 1;
    } else {
        // fail
        return 0;
    }

}

function createCardsTable($user_id)
{
    // Summary: Create table for playing cards and add rows
    // Return: 1 on succes, 0 on fail

    // grab database connection
    require "includes/db-connection.include.php";

    $table_cards_name = $user_id . "_cards";
    $query = "CREATE TABLE $table_cards_name(
                    id INT PRIMARY KEY UNIQUE NOT NULL AUTO_INCREMENT,
                    card VARCHAR(15) UNIQUE NOT NULL,
                    association VARCHAR(255),
                    image VARCHAR(255)
                );";
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    // Create rows for playing cards table
    $json_cards = file_get_contents("resources/playing_cards.json");
    $cards = json_decode($json_cards, true);
    $query = "";
    for ($row = 0; $row < 53; $row++) {
        $card_display_name = '"' . $cards[$row] . '"';
        $query .= "INSERT INTO $table_cards_name VALUES(NULL, $card_display_name, NULL, NULL);";
    }
    $stmt = $pdo->prepare($query);

    if ($stmt->execute()) {
        // Succes
        return 1;
    } else {
        // fail
        return 0;
    }
}

function sessionToDatabase()
{
    // Summary: copy all session tables to database tables

    // grab database connection
    require "includes/db-connection.include.php";

    // Copy table 0-9
    $table_name_ten = $_SESSION['user_id'] . '_ten';
    $table_name_hundred = $_SESSION['user_id'] . '_hundred';
    $table_name_cards = $_SESSION['user_id'] . '_cards';
    $image_path = "images/user_folders/" . $_SESSION['user_id'] . "/";

    for ($number = 0; $number < 10; $number++) {
        $letter = $_SESSION['ten'][$number]['letter'];
        $query = "
      UPDATE $table_name_ten
      SET letter = ?
      WHERE number = $number;
      ";
        $stmt = $pdo->prepare($query);
        $stmt->execute([$letter]);
    }

    // update letters in 00-99 table
    for ($nr = 0; $nr < 100; $nr++) {
        // construct 100 letter combinations
        // if nr < 10, add preceding 0
        if ($nr < 10) {
            $nr = 0 . $nr;
        }
        $nr_string = strval($nr);
        $first_nr = $nr_string[0];
        $second_nr = $nr_string[1];
        $query1 = "SELECT letter FROM $table_name_ten WHERE number = $first_nr;";
        $query2 = "SELECT letter FROM $table_name_ten WHERE number = $second_nr;";
        $stmt1 = $pdo->prepare($query1);
        $stmt2 = $pdo->prepare($query2);
        $stmt1->execute();
        $stmt2->execute();
        $res1 = $stmt1->fetch();
        $res2 = $stmt2->fetch();
        $first_letter = $res1["letter"];
        $second_letter = $res2["letter"];
        // finally:
        $letters = $first_letter . $second_letter;

        // now insert letters into 00-99 table
        $query = "
        UPDATE $table_name_hundred
        SET letters = '$letters'
        WHERE number = $nr;
        ";
        $stmt = $pdo->prepare($query);
        $stmt->execute();
    }

    // Copy 00 - 99 table
    for ($number = 0; $number < 100; $number++) {

        // if nr < 10, add preceding 0
        if ($number < 10) {
            $key = "nr" . 0 . $number;
            $number = 0 . $number;
        } else {
            $key = "nr" . $number;
        }

        $person = $_SESSION[$key]["person"];
        if (empty($person)) {
            $person = null;
        }
        $action = $_SESSION[$key]["action"];
        if (empty($action)) {
            $action = null;
        }
        $object = $_SESSION[$key]["object"];
        if (empty($object)) {
            $object = null;
        }
        // image needs some special care; we need to change the path. Currently it is in this format:
        // "images/guest_folders/"phpsessid"/x.jpg" - What we need is this format:
        // "image/user_folders/"user_id"/x.jpg"
        $image = $_SESSION[$key]["image"];
        $image_name = $number . ".jpg";
        if (empty($image)) {
            $image = null;
        } else {
            $image = $image_path . $image_name;
        }

        $query = "UPDATE $table_name_hundred SET person = :person, action = :action, object = :object, image = :image WHERE number = $number;";
        $stmt = $pdo->prepare($query);
        $stmt->execute(["person" => $person, "action" => $action, "object" => $object, "image" => $image]);
    }

    // Copy card table
    $cardIndex = 1;
    foreach ($_SESSION['playing_cards'] as $card) {
        $image_name = $cardName = $card['card'] . ".jpg";
        $cardName = $card['card'];
        $association = $card['association'];
        if (empty($card['image'])) {
            $image = null;
        } else {
            $image = $image_path . $image_name;
        }
        $query = "UPDATE $table_name_cards SET association = :association, image = :image WHERE id = $cardIndex;";
        $stmt = $pdo->prepare($query);
        $stmt->execute(["association" => $association, "image" => $image]);
        $cardIndex++;
    }

    // Move and rename folder
    $base_dir = realpath($_SERVER["DOCUMENT_ROOT"]);
    $guest_folder = $base_dir . "/images/guest_folders/" . $_COOKIE['PHPSESSID'];
    $user_folder = $base_dir . "/images/user_folders/" . $_SESSION['user_id'];
    // $guest_folder = $base_dir . "/mnemonic_practice/images/guest_folders/" . $_COOKIE['PHPSESSID'];
    // $user_folder = $base_dir . "/mnemonic_practice/images/user_folders/" . $_SESSION['user_id'];

    if (file_exists($guest_folder)) {
        $files = new FilesystemIterator($guest_folder);
        foreach ($files as $file) {
            $filename = $file->getFilename();
            $old = $file->getPathname();
            $new = $user_folder . "/" . $filename;
            rename($old, $new);
        }
        rmdir("../images/guest_folders/" . $_COOKIE['PHPSESSID']);
    }
}