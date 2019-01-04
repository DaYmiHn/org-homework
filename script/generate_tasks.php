<?php 
$connection = new PDO('mysql:host=localhost;dbname=org_homework', 'root', '' );

$sql = "SELECT id, header, content FROM tasks";
$result = $connection->query($sql);
  		 
while($row=$result->fetch()) {
	echo "<a href='' id='", $row[id], "' value ='", $row[content], "'><strong>", $row[header], "</strong>  <br>", $row[content], "</a> \n"; 
	}
 ?>
