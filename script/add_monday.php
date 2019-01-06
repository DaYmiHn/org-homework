<?php 
include("link.php");
	    // Переменные с формы
	$id = $_GET['id'];
	$content = $_GET['content'];

	$content = $content;
	$link = mysqli_connect($host, $user, $password, $database);

	$query ="INSERT INTO monday (id, content) VALUES ('".$id."','".$content."')";

	$result = mysqli_query($link, $query); 
 ?>