<?php
require "db-connection.include.php";

//===========================================
//Create session vars for table playing cards
//===========================================

$query = "SELECT * FROM cookies_cards";
$stmt = $pdo->prepare($query);
$stmt->execute();
$res_cards = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($res_cards as &$res) {
    $card = $res['card'];
    // $card is now e.g. "2 hearts" or "10 spades"
    // to get only the value, we take the first 2 characters of the string
    $val = substr($card, 0, 2);
    // and remove whitespace if value is any other than 10
    $val = trim($val);
    $res["value"] = $val;

    // update image-related fields
    if (empty($res["image"])) {
        $res["yesornoimage"] = "no-image";
        $res["yesorno"] = "no";
        $res["src"] = "images/resources/drag-and-drop.gif";
        $res["figcaption"] = "Drag and drop image onto row to upload it and associate it with a number";
    } else {
        $res["yesornoimage"] = "yes-image";
        $res["yesorno"] = "yes";
        $res["src"] = "images/guest_folders/" . $res['card'] . ".jpg";
        $res["figcaption"] = $res['card'] . " - " . $res['association'];
    }
}

//Set suit for all cards
for ($x = 0; $x < 53; $x++) {
    if ($x <= 12) {
        // Hearts
        $res_cards[$x]["suit"] = "hearts";
        $res_cards[$x]["color"] = "red";
    } else if ($x > 12 && $x <= 25) {
        // Card suit is spades
        $res_cards[$x]["suit"] = "spades";
        $res_cards[$x]["color"] = "black";
    } else if ($x > 25 && $x <= 38) {
        // Card suit is diamonds
        $res_cards[$x]["suit"] = "diams";
        $res_cards[$x]["color"] = "red";
    } else if ($x > 38 && $x <= 51) {
        // Card suit is clubs
        $res_cards[$x]["suit"] = "clubs";
        $res_cards[$x]["color"] = "black";
    } else {
        // Card is the Joker
        $res_cards[$x]["suit"] = "";
        $res_cards[$x]["color"] = "black";
        $res_cards[$x]["value"] = "Joker";
    }
    if ($res_cards[$x]["suit"] != "") {
        $res_cards[$x]["suit"] = "&" . $res_cards[$x]["suit"] . ";";
    }

}

foreach ($res_cards as $card) {
    $_SESSION['playing_cards'][$card['card']] = $card;
}
