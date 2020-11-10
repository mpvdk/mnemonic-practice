<?php
if (isset($_SESSION['user_id'])) {
    // user is logged in. Get data from server.
    require "db-connection.include.php";

    $table_ten = $_SESSION['user_id'] . "_ten";

    $query = "SELECT letter FROM $table_ten;";
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    $res_ten = $stmt->fetchAll(PDO::FETCH_ASSOC);
} else if (isset($_SESSION["ten"])) {
    // client not logged in but session vars found.
    // create table from session.
    $res_ten = $_SESSION["ten"];
} else {
    // client nog logged in, nor session vars found. Go to main.
    header("location:index.php");
    exit();
}