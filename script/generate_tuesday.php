<?php 
$connection = new PDO('mysql:host=localhost;dbname=org_homework', 'root', '' );

$sql = "SELECT id, content FROM tuesday";
$result = $connection->query($sql);
  		 
while($row=$result->fetch()) {
	echo $row[content]; 
	}
 ?>
