<?php 
$connection = new PDO('mysql:host=localhost;dbname=org_homework', 'root', '' );

$sql = "SELECT header, content FROM tasks";
$result = $connection->query($sql);
  		 
while($row=$result->fetch()) {
	echo "<a href=''><strong>", $row[header], "</strong>  <br>", $row[content], "</a>"; 
	}
 ?>
