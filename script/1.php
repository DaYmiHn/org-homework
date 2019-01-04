<?php 
include("link.php");
	    // Переменные с формы
	$header = $_GET['header'];
	$content = $_GET['content'];

	 
	$link = mysqli_connect($host, $user, $password, $database);

	$query ="INSERT INTO tasks (header,content) VALUES ('".$header."','".$content."')";

	$result = mysqli_query($link, $query); 
 ?>