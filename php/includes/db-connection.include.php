<?php
// Summary: set DSN variables and createn ew PDO

// set dsn variables
$host = "localhost";
$port = 3306;
$dbname = "users";

// set login variables
$user = "root";
$pwd = "";

// create dsn
$dsn = 'mysql:host=' . $host . ';port=' . $port . ';dbname=' . $dbname;
// create new pdo instance
$pdo = new PDO($dsn, $user, $pwd);