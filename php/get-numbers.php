<?php
// Summary: grab someone's entire 00 - 99 table and pass it on to JS as JSON.

session_start();

if (isset($_SESSION['user_id'])) {

    // grab database connection
    require "includes/db-connection.include.php";

    // Create array with 100 objects (00-99), each filled with custom associations for that number
    $table = $_SESSION['user_id'] . "_hundred";
    $customArray = array();

    for ($x = 0; $x < 100; $x++) {
        $query = "SELECT * FROM $table WHERE number = ?;";
        $stmt = $pdo->prepare($query);
        $stmt->execute([$x]);
        $res = $stmt->fetch();
        $current = "nr" . $x;
        $$current = array(
            "number" => $res['number'],
            "letters" => $res['letters'],
            "person" => $res['person'],
            "action" => $res['action'],
            "object" => $res['object'],
            "image" => $res['image'],
        );
        array_push($customArray, $$current);
    }

    $json = json_encode($customArray);

    echo $json;
} else if (isset($_SESSION['nr00'])) {
    $customArray = array();
    for ($x = 0; $x < 100; $x++) {
        if ($x < 10) {$nr = 0 . $x;} else { $nr = $x;}
        $key = "nr" . $nr;
        $$key = array(
            "number" => $_SESSION[$key]['number'],
            "letters" => $_SESSION[$key]['letters'],
            "person" => $_SESSION[$key]['person'],
            "action" => $_SESSION[$key]['action'],
            "object" => $_SESSION[$key]['object'],
            "image" => $_SESSION[$key]['image'],
        );
        array_push($customArray, $$key);
    }
    $json = json_encode($customArray);
    echo $json;
} else {
    // leave
    header("location: ../../index.php");
}