<?php 
include("link.php");
	    // Переменные с формы
	$header = $_GET['header'];
	$content = $_GET['content'];

	$content = "<strong>".$header."</strong>  <br>".$content;
	$link = mysqli_connect($host, $user, $password, $database);

	$query ="INSERT INTO tasks (content) VALUES ('".$content."')";

	$result = mysqli_query($link, $query); 
 ?>