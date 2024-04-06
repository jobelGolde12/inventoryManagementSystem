
<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');


$host = "localhost";
$dbname = "inventory_management_system_db";
$username = "root";
$password = "";

$connection = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

$selectQuery = $connection->prepare("SELECT * FROM users");
$selectQuery->execute();

$users = $selectQuery->fetchAll(PDO::FETCH_ASSOC);
forEach($users as $user){
    echo $user['id'] . $user['username'] . $user['password_hash'];
}

echo json_encode($users);