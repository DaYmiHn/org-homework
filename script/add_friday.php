<?php 
include("link.php");
	    // Переменные с формы
	$content = $_GET['content'];
	$id = $_GET['id'];
	$content = $content;
	$link = mysqli_connect($host, $user, $password, $database);

	$query ="INSERT INTO friday (id, content) VALUES ('".$id."','".$content."')";

	$result = mysqli_query($link, $query); 
 ?>