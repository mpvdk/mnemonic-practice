<?php
if (isset($_SESSION['user_id'])) {
    require "db-connection.include.php";

    $table_cards = $_SESSION['user_id'] . "_cards";
    $query = "SELECT * FROM $table_cards";
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    $res_cards = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($res_cards as &$res) {
        $card = $res['card'];
        $val = substr($card, 0, 2);
        if (strpos($val, " ")) {
            $val = substr($val, 0, 1);
        }
        $res["value"] = $val;
    }

    // Determine suit of all cards
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

} else if (isset($_SESSION["ten"])) {
    foreach ($_SESSION['playing_cards'] as $card => $info) {
        $res_cards[$card] = $info;
    }
} else {
    header("location:index.php");
}

// now update all the necessary image-related fields
foreach ($res_cards as &$res) {
    if (empty($res["image"])) {
        $res["yesornoimage"] = "no-image";
        $res["yesorno"] = "no";
        $res["src"] = "images/resources/drag-and-drop.gif";
        $res["figcaption"] = "Drag and drop image onto row to upload it and associate it with a number";
    } else {
        $res["yesornoimage"] = "yes-image";
        $res["yesorno"] = "yes";
        if (isset($_SESSION['user_id'])) {
            $res["src"] = "images/user_folders/" . $_SESSION['user_id'] . "/" . $res['card'] . ".jpg";
        } else if (isset($_COOKIE['PHPSESSID'])) {
            $res["src"] = "images/guest_folders/" . $_COOKIE['PHPSESSID'] . "/" . $res['card'] . ".jpg";

        }
        $res["figcaption"] = $res['card'] . " - " . $res['association'];
    }
}
