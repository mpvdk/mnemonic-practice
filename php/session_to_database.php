<?php
// Summary: This script is called by JS to copy tables stored in SESSION to the db

session_start();

if (isset($_SESSION['ten']) && isset($_SESSION['user_id'])) {
    // grab database connection
    require "includes/db-connection.include.php";

    // Copy table 0-9
    $table_name_ten = $_SESSION['user_id'] . '_ten';
    $table_name_hundred = $_SESSION['user_id'] . '_hundred';

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

        $query = "UPDATE $table_name_hundred SET person = :person, action = :action, object= :object WHERE number = $number;";
        $stmt = $pdo->prepare($query);
        $stmt->execute(["person" => $person, "action" => $action, "object" => $object]);
    }

    // Copy card table
    $table_name_cards = $_SESSION['user_id'] . '_cards';
    for ($x = 1; $x < 54; $x++) {
        $key = "card" . $x;
        $query = "UPDATE $table_name_cards SET association = ? WHERE id = $x;";
        $stmt = $pdo->prepare($query);
        $stmt->execute([$_SESSION[$key]['association']]);
    }

    // Move and rename folder
    $base_dir = realpath($_SERVER["DOCUMENT_ROOT"]);
    $folder = $base_dir . "/images/guest_folders/" . $_COOKIE['PHPSESSID'];
    // $folder = $base_dir . "/mnemonic_practice/images/guest_folders/" . $_COOKIE['PHPSESSID'];

    $files = new FilesystemIterator($folder);
    foreach ($files as $file) {
        var_dump($file);
    }
}