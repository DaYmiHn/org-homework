<?php 
$connection = new PDO('mysql:host=localhost;dbname=org_homework', 'root', '' );

$sql = "SELECT id, content FROM tasks";
$result = $connection->query($sql);
// $count = mysql_num_rows($result);
if ($result->num_rows == 0) {echo "Пуста, очень пуста";} 
	while($row=$result->fetch()) {
	echo "<a href='' id='", $row[id], "'>", $row[content], "</a> \n"; 
	}


 ?>
