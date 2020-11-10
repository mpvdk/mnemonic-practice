<?php
// Summary: set DSN variables and createn ew PDO

// set dsn variables
$host = "martijnvdkerkhof87538.domaincommysql.com";
// $port = 3308;
$dbname = "mnemonics";

// set login variables
$user = "martijn";
$pwd = "Bufnukkel1988!";

// create dsn
$dsn = 'mysql:host=' . $host . ';dbname=' . $dbname;
// $dsn = 'mysql:host=' . $host . ';port=' . $port . ';dbname=' . $dbname;
// create new pdo instance
$pdo = new PDO($dsn, $user, $pwd);
