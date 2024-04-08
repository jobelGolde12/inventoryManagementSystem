<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

$host = "localhost";
$dbname = "inventory_management_system_db";
$username = "root";
$password = "";

try {
    $connection = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $selectQuery = $connection->prepare("SELECT * FROM users");
    $selectQuery->execute();

    $users = $selectQuery->fetchAll(PDO::FETCH_ASSOC);

    foreach($users as $user){
        echo $user['username'];
    }
    echo json_encode($users);
} catch (PDOException $e) {
    echo json_encode(array("error" => $e->getMessage()));
}

