<?php 
include("link.php");
	    // Переменные с формы
	$content = $_GET['content'];

	$content = $content;
	$link = mysqli_connect($host, $user, $password, $database);

	$query ="INSERT INTO tasks (content) VALUES ('".$content."')";

	$result = mysqli_query($link, $query); 
 ?>