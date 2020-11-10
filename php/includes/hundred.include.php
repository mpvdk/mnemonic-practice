<?php
if (isset($_SESSION['user_id'])) {
    // User logged in. Get data from server.

    require "db-connection.include.php";

    $table_hundred = $_SESSION['user_id'] . "_hundred";

    $query = "SELECT * FROM $table_hundred;";
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    $res_hundred = $stmt->fetchAll(PDO::FETCH_ASSOC);

} else if (isset($_SESSION['nr00'])) {
    // User nog logged in but session vars found. 1 for every number.
    // Let's add them all together to form $res_hundred
    $res_hundred = [];
    for ($x = 0; $x < 100; $x++) {
        if ($x < 10) {
            $nr = 0 . $x;
        } else {
            $nr = $x;
        }
        $key = "nr" . $nr;
        $res_hundred[$x] = $_SESSION[$key];
    }
} else {
    // client not logged in, nor session vars found. Redirect to
    // header("location:index.php");
    exit();
}

// now update all the necessary image-relatedfields
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
        if (isset($_SESSION['user_id'])) {
            $res["src"] = "images/user_folders/" . $_SESSION['user_id'] . "/" . $nr . ".jpg";
        } else if (isset($_COOKIE['PHPSESSID'])) {
            $res["src"] = "images/guest_folders/" . $_COOKIE['PHPSESSID'] . "/" . $nr . ".jpg";
        }
        $res["figcaption"] = $nr . " - " . $res['person'];
    }
}
