<?php
require "db-connection.include.php";

// ==================================
// Create SESSION var for table 0 - 9
// ==================================

$query = "SELECT * FROM cookies_ten;";
$stmt = $pdo->prepare($query);
$stmt->execute();
$res_ten = $stmt->fetchAll(PDO::FETCH_ASSOC);
$_SESSION["ten"] = $res_ten;