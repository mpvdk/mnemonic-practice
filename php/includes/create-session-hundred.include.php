<?php
require "db-connection.include.php";

// =====================================
// Create session vars for table 00 - 99
// =====================================

$query = "SELECT * FROM cookies_hundred;";
$stmt = $pdo->prepare($query);
$stmt->execute();
$res_hundred = $stmt->fetchAll(PDO::FETCH_ASSOC);

// set image-related fields and create SESSION vars
foreach ($res_hundred as &$res) {
    $nr = $res['number'];
    if (strlen($nr) < 2) {
        // add preceding 0
        $nr = 0 . $nr;
    }
    if (empty($res["image"])) {
        $res["yesornoimage"] = "no-image";
        $res["yesorno"] = "no";
        $res["src"] = "images/resources/drag-and-drop.gif";
        $res["figcaption"] = "Drag and drop image onto row to upload it and associate it with a number";
    } else {
        $res["yesornoimage"] = "yes-image";
        $res["yesorno"] = "yes";
        $res["src"] = "images/user_folders/guests/" . $nr . ".jpg";
        $res["figcaption"] = $nr . " - " . $res['person'];
    }
    // create seperate session var for number
    $key = "nr" . $nr;
    $_SESSION[$key] = $res;
}
