<?php
// Summary: grab someone's entire cards table and pass it on to JS as JSON.

session_start();

if (isset($_SESSION['user_id'])) {
    // user logged in. Get data from database

    // grab database connection
    require "includes/db-connection.include.php";

    // Create array with 53 objects, each filled with custom associations for that card
    $table = $_SESSION['user_id'] . "_cards";
    $customArray = array();

    for ($x = 1; $x < 54; $x++) {
        $query = "SELECT * FROM $table WHERE id = ?;";
        $stmt = $pdo->prepare($query);
        $stmt->execute([$x]);
        $res = $stmt->fetch();
        $current = "nr" . $x;
        $$current = array(
            "card" => $res['card'],
            "association" => $res['association'],
            "image" => $res['image'],
        );
        array_push($customArray, $$current);
    }
    $json = json_encode($customArray);
    echo $json;
} else if (isset($_SESSION['ten'])) {
    // get data from SESSION
    $customArray = array();
    // Create array with 53 objects, each filled with custom associations for that card
    foreach ($_SESSION['playing_cards'] as $card => $info) {
        $$card = array(
            "card" => $info['card'],
            "association" => $info['association'],
            "image" => $info['image'],
        );
        array_push($customArray, $$card);
    }
    $json = json_encode($customArray);
    echo $json;
} else {
    // leave
    header("location: ../../index.php");
}