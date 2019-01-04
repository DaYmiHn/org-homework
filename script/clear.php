<?php 
$connection = new PDO('mysql:host=localhost;dbname=mysite', 'root', '' );

$sql = "DELETE FROM pp";
$result = $connection->query($sql);
?>
