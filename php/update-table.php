<?php
// Summary: This script is called by JS to update the custom user tables.
//          It gets the data in POST, checks which table it's about, and
//          updates that table with user-edited data

session_start();

if (isset($_SESSION['user_id']) && isset($_POST['table'])) {
// grab database connection
    require "includes/db-connection.include.php";

// check whether update was requested on table for 0-9, table 00-99, or table for playing cards
    if ($_POST['table'] == "js-ten-table") {
        // update table 0-9
        $table_name_ten = $_SESSION['user_id'] . '_ten';
        $table_name_hundred = $_SESSION['user_id'] . '_hundred';

        for ($number = 0; $number < 10; $number++) {
            $letter = $_POST[$number . "-letter"];
            $query = "
      UPDATE $table_name_ten
      SET letter = '$letter'
      WHERE number = $number;
      ";
            $stmt = $pdo->prepare($query);
            $stmt->execute();
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

    } else if ($_POST['table'] == "js-hundred-table") {
        // update table 00-99
        $table_name_hundred = $_SESSION['user_id'] . '_hundred';

        for ($number = 0; $number < 100; $number++) {
            // if nr < 10, add preceding 0
            if ($number < 10) {
                $number = 0 . $number;
            }
            $person = $_POST[$number . "-person"];
            if (empty($person)) {
                $person = null;
            }
            $action = $_POST[$number . "-action"];
            if (empty($action)) {
                $action = null;
            }
            $object = $_POST[$number . "-object"];
            if (empty($object)) {
                $object = null;
            }

            $query = "
      UPDATE $table_name_hundred
      SET person = :person, action = :action, object= :object
      WHERE number = $number;
      ";
            $stmt = $pdo->prepare($query);
            $stmt->execute(["person" => $person, "action" => $action, "object" => $object]);
        }
    } else if ($_POST['table'] == "js-cards-table") {
        // update cards table
        $table_name_cards = $_SESSION['user_id'] . '_cards';
        $index = 1;
        foreach ($_POST as $ass) {
            $query = "UPDATE $table_name_cards SET association = ? WHERE id = $index;";
            $stmt = $pdo->prepare($query);
            $stmt->execute([$ass]);
            $index++;
        }
    }
} else if (isset($_SESSION['ten']) && isset($_POST['table'])) {
    // check whether update was requested on table for 0-9, table 00-99, or table for playing cards
    if ($_POST['table'] == "js-ten-table") {
        // update SESSION['ten']
        $newTen = [];
        for ($x = 0; $x < 10; $x++) {
            $newTen[$x]["number"] = $x;
            $postKey = $x . "-letter";
            $newTen[$x]["letter"] = $_POST[$postKey];
        }
        $_SESSION["ten"] = $newTen;

        // Now, also update 00 - 99 SESSION vars
        for ($x = 0; $x < 100; $x++) {
            if ($x < 10) {
                $nr = 0 . $x;
            } else {
                $nr = $x;
            }
            $key = "nr" . $nr;
            // convert number into letters
            $letters = convertTwoDigitsToLetters($nr);
            $_SESSION[$key]['letters'] = $letters;
        }

    } else if ($_POST['table'] == "js-hundred-table") {
        // update SESSION vars 00-99
        for ($x = 0; $x < 100; $x++) {
            if ($x < 10) {
                $nr = 0 . $x;
            } else {
                $nr = $x;
            }
            $key = "nr" . $nr;
            // update SESSION vars with new values from $_POST
            $post_key = $nr . "-person";
            $_SESSION[$key]['person'] = $_POST[$post_key];
            $post_key = $nr . "-action";
            $_SESSION[$key]['action'] = $_POST[$post_key];
            $post_key = $nr . "-object";
            $_SESSION[$key]['object'] = $_POST[$post_key];
        }
    } else if ($_POST['table'] == "js-cards-table") {

        // update cards SESSION vars
        foreach ($_POST as $key => $ass) {
            if ($key != "table") {
                // $key = e.g. "A_hearts"
                // we need e.g. "A hearts"
                $key = str_replace("_", " ", $key);
                $_SESSION['playing_cards'][$key]['association'] = $ass;
            }
        }
    }

} else {
    // user got to this script some unintended way. Get out of here.
    header("Location: ../index.html");
    exit();
}

function convertTwoDigitsToLetters($nr)
{
    $arr = str_split($nr);
    foreach ($arr as &$char) {
        switch ($char) {
            case 0:
                $post_key = 0 . "-letter";
                $char = $_POST[$post_key];
                break;
            case 1:
                $post_key = 1 . "-letter";
                $char = $_POST[$post_key];
                break;
            case 2:
                $post_key = 2 . "-letter";
                $char = $_POST[$post_key];
                break;
            case 3:
                $post_key = 3 . "-letter";
                $char = $_POST[$post_key];
                break;
            case 4:
                $post_key = 4 . "-letter";
                $char = $_POST[$post_key];
                break;
            case 5:
                $post_key = 5 . "-letter";
                $char = $_POST[$post_key];
                break;
            case 6:
                $post_key = 6 . "-letter";
                $char = $_POST[$post_key];
                break;
            case 7:
                $post_key = 7 . "-letter";
                $char = $_POST[$post_key];
                break;
            case 8:
                $post_key = 8 . "-letter";
                $char = $_POST[$post_key];
                break;
            case 9:
                $post_key = 9 . "-letter";
                $char = $_POST[$post_key];
                break;
        }
    }
    $letters = $arr[0] . $arr[1];
    return $letters;
}